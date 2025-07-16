# 📄 How to Generate PDF from MFashion Documentation

This guide shows you multiple ways to convert the generated HTML documentation to PDF format.

## 🚀 Method 1: Using Puppeteer (Recommended)

### Step 1: Install Puppeteer
```bash
npm install puppeteer --save-dev
```

### Step 2: Generate the PDF
```bash
# First generate the HTML documentation
npm run generate-docs

# Then convert to PDF
npm run generate-pdf
```

This will create `mfashion-documentation.pdf` in your project root.

---

## 🌐 Method 2: Browser Print (Easiest)

### Step 1: Generate HTML
```bash
npm run generate-docs
```

### Step 2: Open in Browser
1. Open `mfashion-documentation.html` in your web browser
2. Press `Ctrl+P` (Windows/Linux) or `Cmd+P` (Mac)
3. Select "Save as PDF" as destination
4. Choose these settings:
   - **Layout**: Portrait
   - **Paper size**: A4
   - **Margins**: Default
   - **Options**: ✅ Background graphics
5. Click "Save"

---

## ⚡ Method 3: Using wkhtmltopdf

### Step 1: Install wkhtmltopdf
```bash
# Ubuntu/Debian
sudo apt-get install wkhtmltopdf

# macOS
brew install wkhtmltopdf

# Windows - Download from: https://wkhtmltopdf.org/downloads.html
```

### Step 2: Generate PDF
```bash
# Generate HTML first
npm run generate-docs

# Convert to PDF
wkhtmltopdf --page-size A4 --margin-top 20mm --margin-bottom 20mm --margin-left 15mm --margin-right 15mm --enable-local-file-access mfashion-documentation.html mfashion-documentation.pdf
```

---

## 🔧 Method 4: Using Playwright

### Step 1: Install Playwright
```bash
npm install playwright --save-dev
```

### Step 2: Create conversion script
```javascript
// playwright-pdf.js
const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const html = fs.readFileSync('mfashion-documentation.html', 'utf8');
  await page.setContent(html);
  
  await page.pdf({
    path: 'mfashion-documentation.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '20mm', right: '15mm', bottom: '20mm', left: '15mm' }
  });
  
  await browser.close();
  console.log('PDF generated successfully!');
})();
```

### Step 3: Run the script
```bash
node playwright-pdf.js
```

---

## 🌍 Method 5: Online Converters

### Step 1: Generate HTML
```bash
npm run generate-docs
```

### Step 2: Use Online Tools
Upload `mfashion-documentation.html` to any of these services:
- **HTML to PDF API**: https://htmlpdfapi.com/
- **PDF24**: https://tools.pdf24.org/en/html-to-pdf
- **ILovePDF**: https://www.ilovepdf.com/html-to-pdf
- **SmallPDF**: https://smallpdf.com/html-to-pdf

---

## 📋 Comparison of Methods

| Method | Pros | Cons | Best For |
|--------|------|------|----------|
| **Puppeteer** | High quality, automated, customizable | Requires Node.js setup | Development workflow |
| **Browser Print** | No setup required, universal | Manual process | Quick one-time conversion |
| **wkhtmltopdf** | Command-line friendly, good quality | Requires separate installation | CI/CD pipelines |
| **Playwright** | Modern, fast, good quality | Larger dependency | Modern development setups |
| **Online Tools** | No setup, accessible anywhere | Privacy concerns, file size limits | Occasional use |

---

## 🎨 PDF Customization Options

When using Puppeteer or Playwright, you can customize:

```javascript
await page.pdf({
  format: 'A4',                    // Paper size
  printBackground: true,           // Include background colors/images
  landscape: false,                // Orientation
  margin: {                        // Margins
    top: '20mm',
    right: '15mm', 
    bottom: '20mm',
    left: '15mm'
  },
  displayHeaderFooter: true,       // Show header/footer
  headerTemplate: '<div>Header</div>',
  footerTemplate: '<div>Footer</div>'
});
```

---

## 🔍 Troubleshooting

### Common Issues:

1. **"Module not found" error**
   ```bash
   npm install puppeteer --save-dev
   ```

2. **PDF looks different from HTML**
   - Ensure `printBackground: true`
   - Check CSS media queries for print

3. **Large file size**
   - Optimize images in the HTML
   - Use compression tools

4. **Missing fonts**
   - Use web-safe fonts
   - Include font files in the project

---

## ✅ Recommended Workflow

1. **Development**: Use Browser Print method for quick previews
2. **Production**: Use Puppeteer for automated, high-quality PDFs
3. **CI/CD**: Use wkhtmltopdf for server environments
4. **Sharing**: Use online converters for occasional use

Choose the method that best fits your needs and technical setup!