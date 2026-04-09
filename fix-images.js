const fs = require('fs');
const path = require('path');

const folders = ['src/components', 'src/components/ui'];

folders.forEach(folder => {
  const fullFolderPath = path.join(process.cwd(), folder);
  if (fs.existsSync(fullFolderPath)) {
    fs.readdirSync(fullFolderPath).forEach(file => {
      if (!file.endsWith('.tsx')) return;
      const filePath = path.join(fullFolderPath, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      if (content.includes('<img')) {
        // Add import if missing
        if (!content.includes('import Image from "next/image"') && !content.includes("import Image from 'next/image'")) {
          // Add after "use client" or at top
          if (content.includes('"use client";')) {
            content = content.replace('"use client";', '"use client";\nimport Image from "next/image";');
          } else if (content.includes("'use client';")) {
            content = content.replace("'use client';", "'use client';\nimport Image from 'next/image';");
          } else {
            content = 'import Image from "next/image";\n' + content;
          }
        }
        
        // Simple replacement of <img> with <Image />
        // Note: This is a bit naive but should work for most cases in this project
        content = content.replace(/<img([^>]+)>/g, (match, p1) => {
          // Check if it already uses Image
          if (match.startsWith('<Image')) return match;
          
          // Next.js Image requires width/height or layout/fill/etc if not using static imports
          // But here most are static imports. For static imports, Image works fine without width/height.
          // However, for some it might complain. I'll add a generic handling.
          let replaced = match.replace('<img', '<Image');
          if (!replaced.endsWith('/>')) {
             replaced = replaced.replace('>', ' />');
          }
          return replaced;
        });
        
        fs.writeFileSync(filePath, content);
        console.log(`Converted <img> to <Image> in ${file}`);
      }
    });
  }
});
