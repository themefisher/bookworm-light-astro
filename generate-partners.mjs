import fs from 'fs';
import path from 'path';

const CSV_FILE = 'Story Partners - Sheet1.csv';
const OUTPUT_DIR = './src/content/partners';

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function parseFullCSV(content) {
  const rows = [];
  let currentRow = [];
  let currentField = '';
  let inQuotes = false;
  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    const nextChar = content[i + 1];
    if (char === '"') {
      if (inQuotes && nextChar === '"') { currentField += '"'; i++; } 
      else { inQuotes = !inQuotes; }
    } else if (char === ',' && !inQuotes) {
      currentRow.push(currentField.trim());
      currentField = '';
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') i++;
      currentRow.push(currentField.trim());
      if (currentRow.join('').length > 0) rows.push(currentRow);
      currentRow = [];
      currentField = '';
    } else { currentField += char; }
  }
  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField.trim());
    rows.push(currentRow);
  }
  return rows;
}

const fileContent = fs.readFileSync(CSV_FILE, 'utf8');
const allRows = parseFullCSV(fileContent);
const headers = allRows[0];

allRows.slice(1).forEach((rowValues, index) => {
  const row = Object.fromEntries(headers.map((h, i) => [h, rowValues[i] || '']));
  if (!row.Institution) return;

  const slug = row.Institution.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '');
  const isFeatured = String(row['Story Partner'] || '').toUpperCase() === 'TRUE';

  // We keep the frontmatter light and put the description in the BODY
  const content = `---
title: "${row.Institution}"
featured: ${isFeatured}
website: "${row.Website}"
logo: "/images/logos/${row.Image}"
video: "${row.YouTube || ''}"
instagram: "${row.Instagram || ''}"
facebook: "${row.Facebook || ''}"
twitter: "${row.Twitter || ''}"
tiktok: "${row.Tiktok || ''}"
---

${row.Description || ''}`;

  fs.writeFileSync(path.join(OUTPUT_DIR, `${slug}.md`), content);
  console.log(`[${index + 1}] Generated: ${slug}.md`);
});

console.log("\n✅ Generation Complete. Descriptions moved to Markdown body.");