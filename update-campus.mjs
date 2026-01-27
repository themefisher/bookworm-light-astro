import fs from 'fs';
import path from 'path';

// This function handles the "Pasadena, California" quotes correctly
function parseCSVLine(line) {
  const result = [];
  let cell = '';
  let inQuotes = false;
  for (let char of line) {
    if (char === '"' && inQuotes && char === line[line.indexOf(char) + 1]) { cell += '"'; i++; } // handle escaped quotes
    else if (char === '"') inQuotes = !inQuotes;
    else if (char === ',' && !inQuotes) { result.push(cell); cell = ''; }
    else cell += char;
  }
  result.push(cell);
  return result;
}

const partnerDir = './src/content/partners/';
const csvData = fs.readFileSync('Story Partners.csv', 'utf-8');
const lines = csvData.split(/\r?\n/);
const headers = parseCSVLine(lines[0]);

lines.slice(1).forEach(line => {
  if (!line.trim()) return;
  const values = parseCSVLine(line);
  const p = Object.fromEntries(headers.map((h, i) => [h, values[i]]));

  // --- FORCE MATCHING FOR TROUBLESHOOTING ---
  let targetFile = '';
  const inst = p['Institution']?.trim();

  if (inst === "California Institute of Technology") {
    targetFile = "california-institute-of-technology.md";
  } else if (inst === "Wellesley College") {
    targetFile = "wellesley-college.md";
  } else {
    const slug = inst.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    targetFile = `${slug}.md`;
  }

  const filePath = path.join(partnerDir, targetFile);

  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Check if it already has the location to avoid duplicates
    if (content.includes('location:')) {
      console.log(`⏭️  Skipping (Already Updated): ${targetFile}`);
      return;
    }

    // Clean up values from CSV (removing any leftover quotes)
    const loc = p['Location']?.replace(/"/g, '');
    const reg = p['Region']?.replace(/"/g, '');
    const stu = p['Undergraduate Students']?.replace(/"/g, '');
    const typ = p['Institution Type']?.replace(/"/g, '');

    const newData = `location: "${loc}"
region: "${reg}"
students: "${stu}"
type: "${typ}"`;

    // Regex to find 'title:' line even if it has no quotes
    const titleRegex = /^(title:.*)$/m;

    if (titleRegex.test(content)) {
      const updatedContent = content.replace(titleRegex, `$1\n${newData}`);
      fs.writeFileSync(filePath, updatedContent, 'utf-8');
      console.log(`✅ FIXED & UPDATED: ${targetFile}`);
    }
  } else {
    // If the script still can't find it, it will tell us the exact path it's trying to hit
    if (inst.includes("Wellesley") || inst.includes("California")) {
      console.log(`❌ STILL NOT FOUND: The script looked for ${filePath} but nothing is there.`);
    }
  }
});