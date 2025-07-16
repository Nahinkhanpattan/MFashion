const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generatePDF() {
  try {
    console.log('Starting PDF generation...');
    
    // Launch puppeteer
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Read the HTML file
    const htmlPath = path.join(__dirname, 'mfashion-documentation.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    // Set the HTML content
    await page.setContent(htmlContent, {
      waitUntil: 'networkidle0'
    });
    
    // Generate PDF
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20mm',
        right: '15mm',
        bottom: '20mm',
        left: '15mm'
      },
      displayHeaderFooter: true,
      headerTemplate: `
        <div style="font-size: 10px; width: 100%; text-align: center; color: #666;">
          MFashion E-commerce Platform Documentation
        </div>
      `,
      footerTemplate: `
        <div style="font-size: 10px; width: 100%; text-align: center; color: #666;">
          Page <span class="pageNumber"></span> of <span class="totalPages"></span>
        </div>
      `
    });
    
    // Save PDF
    fs.writeFileSync('mfashion-documentation.pdf', pdfBuffer);
    
    await browser.close();
    
    console.log('✅ PDF generated successfully: mfashion-documentation.pdf');
    
  } catch (error) {
    console.error('❌ Error generating PDF:', error);
  }
}

// Run the function
generatePDF();