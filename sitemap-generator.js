const { SitemapStream, streamToPromise } = require('sitemap')
const { Readable } = require('stream')
const fs = require('fs')

async function generateSitemap() {
  // Create a new sitemap stream
  const sitemapStream = new SitemapStream({
    hostname: 'https://spoutgram.com', 
  })

  // Add your website pages to the sitemap
  sitemapStream.write({ url: '/signup', changefreq: 'daily', priority: 0.8 })
  sitemapStream.write({ url: '/login', changefreq: 'daily', priority: 0.8 })
  sitemapStream.write({ url: '/', changefreq: 'daily', priority: 0.8 })
  sitemapStream.write({ url: '/terms-of-service', changefreq: 'daily', priority: 0.8 })

  // End the sitemap stream
  sitemapStream.end()

  // Turn the sitemap stream into a readable stream
  const sitemap = await streamToPromise(Readable.from(sitemapStream))

  // Save the sitemap to a file
  fs.writeFileSync('./public/sitemap.xml', sitemap.toString())
}

generateSitemap()