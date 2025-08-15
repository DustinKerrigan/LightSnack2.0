//linux can't handle simple case sensitivity in deployment so we gotta do all this crap 
const fg = require('fast-glob');
const fs = require('fs');
const path = require('path');

(async () => {
  const files = await fg(['src/**/*.{js,jsx,ts,tsx}']);

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const dir = path.dirname(file);

    const importRegex = /import\s+.*?['"](\.\/.*?|\.{2}\/.*?)['"]/g;
    let match;

    while ((match = importRegex.exec(content))) {
      const importPath = match[1];
      const fullPath = path.resolve(dir, importPath);
      const extCandidates = ['', '.js', '.jsx', '.ts', '.tsx'];

      let found = false;
      for (const ext of extCandidates) {
        if (fs.existsSync(fullPath + ext)) {
          const actualName = path.basename(fullPath + ext);
          const importedName = path.basename(importPath + ext);
          if (actualName !== importedName) {
            console.warn(`Case mismatch in ${file}: imports "${importPath}" but actual file is "${actualName}"`);
          }
          found = true;
          break;
        }
      }

      if (!found) {
        console.warn(`Broken import in ${file}: "${importPath}" not found`);
      }
    }
  });
})();
