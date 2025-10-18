import puppeteer from 'puppeteer';
import { globby } from 'globby';
import fs from 'fs';
import path from 'path';

async function generatePDFs() {
  console.log('Starting PDF generation...');
  
  // Find all guide MDX files
  const guideFiles = await globby('./src/pages/chattanooga/guides/*.mdx');
  
  // Filter out index.astro
  const mdxFiles = guideFiles.filter(file => !file.includes('index.astro'));
  
  console.log(`Found ${mdxFiles.length} guide files to convert to PDF`);
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set viewport for consistent rendering
  await page.setViewport({ width: 1920, height: 1080 });
  
  // Create PDFs directory structure if it doesn't exist
  const pdfDir = './dist/pdfs/chattanooga';
  if (!fs.existsSync(pdfDir)) {
    fs.mkdirSync(pdfDir, { recursive: true });
  }
  
  for (const file of mdxFiles) {
    try {
      // Extract filename without extension
      const filename = path.basename(file, '.mdx');
      
      // Convert to URL path (assuming your site structure)
      const url = `http://localhost:4321/chattanooga/guides/${filename}`;
      
      console.log(`Generating PDF for ${filename}...`);
      
      // Navigate to the page
      await page.goto(url, { 
        waitUntil: 'networkidle0',
        timeout: 30000 
      });
      
      // Inject CSS to fix PDF layout issues and hide images
      await page.addStyleTag({
        content: `
          * {
            box-sizing: border-box !important;
          }
          body {
            overflow-x: hidden !important;
            max-width: 100% !important;
          }
          .container, .max-w-6xl, .max-w-4xl, .max-w-3xl {
            max-width: 100% !important;
            overflow-x: hidden !important;
          }
          table {
            max-width: 100% !important;
            table-layout: fixed !important;
          }
          /* Hide all images and navigation elements in PDFs */
          img, .OptimizedImage, picture, figure {
            display: none !important;
          }
          /* Hide image captions in PDFs */
          .mb-12.mt-12.flex.flex-col.justify-center.items-center {
            display: none !important;
          }
          /* Hide only the search icon and navigation UI elements, keep page content */
          nav svg, .search-icon, .magnifying-glass, [class*="search"], [class*="magnify"] {
            display: none !important;
          }
          /* Hide navigation bar but keep main content headers */
          nav {
            display: none !important;
          }
          iframe {
            max-width: 100% !important;
          }
        `
      });
      
      // Generate PDF
      const pdfPath = `${pdfDir}/${filename}.pdf`;
      await page.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: true,
        preferCSSPageSize: true,
        margin: {
          top: '0.5in',
          right: '0.5in',
          bottom: '0.5in',
          left: '0.5in'
        }
      });
      
      console.log(`✅ Generated: ${pdfPath}`);
      
    } catch (error) {
      console.error(`❌ Error generating PDF for ${file}:`, error.message);
    }
  }
  
  await browser.close();
  console.log('PDF generation complete!');
}

// Run the function
generatePDFs().catch(console.error);
