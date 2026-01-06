import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Path to your partner markdown files
const partnersDir = './src/content/partners';

const files = fs.readdirSync(partnersDir).filter(file => file.endsWith('.md'));

files.forEach(file => {
  const filePath = path.join(partnersDir, file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  // Parse Frontmatter
  const { data, content } = matter(fileContent);

  // Only update if it's a featured partner
  if (data.featured === true) {
    // Get filename from logo (e.g., "/images/logos/auburn.png" -> "auburn")
    const logoName = data.logo.split('/').pop().split('.')[0];
    
    // Construct the campus image path matching your folder structure
    data.campusImage = `@/assets/images/campus/${logoName}.jpg`;

    // Reconstruct the file with updated frontmatter
    const updatedContent = matter.stringify(content, data);
    fs.writeFileSync(filePath, updatedContent);
    console.log(`✅ Updated: ${file}`);
  }
});

console.log('Done!');