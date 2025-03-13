// scripts/generateSitemap.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Update this URL to match your site
const baseUrl = 'https://www.codewithedison.com';

// Get current date in YYYY-MM-DD format for lastmod
const today = new Date().toISOString().split('T')[0];

// Generate sitemap XML content
const generateSitemapXml = () => {
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add URL for landing page
  sitemap += '  <url>\n';
  sitemap += `    <loc>${baseUrl}</loc>\n`;
  sitemap += `    <lastmod>${today}</lastmod>\n`;
  sitemap += '    <changefreq>monthly</changefreq>\n';
  sitemap += '    <priority>1.0</priority>\n';
  sitemap += '  </url>\n';
  
  sitemap += '</urlset>';
  return sitemap;
};

// Generate robots.txt content
const generateRobotsTxt = () => {
  let robotsTxt = 'User-agent: *\n';
  robotsTxt += 'Allow: /\n\n';
  robotsTxt += `Sitemap: ${baseUrl}/sitemap.xml`;
  return robotsTxt;
};

// Save sitemap to public directory
const saveSitemap = () => {
  const sitemapContent = generateSitemapXml();
  const publicDir = path.join(__dirname, '../public');
  
  // Create public directory if it doesn't exist
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
  console.log('Sitemap generated successfully!');
};

// Save robots.txt to public directory
const saveRobotsTxt = () => {
  const robotsTxtContent = generateRobotsTxt();
  const publicDir = path.join(__dirname, '../public');
  
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxtContent);
  console.log('robots.txt generated successfully!');
};

// Run the generators
saveSitemap();
saveRobotsTxt();