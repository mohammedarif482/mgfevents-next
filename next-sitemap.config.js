/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.mgfevent.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  
  transform: async (config, path) => {
    const customConfigs = {
      '/': { priority: 1.0, changefreq: 'daily' },
      '/services': { priority: 0.9, changefreq: 'weekly' },
      '/portfolio': { priority: 0.8, changefreq: 'weekly' },
      '/about': { priority: 0.7, changefreq: 'monthly' },
      '/contact': { priority: 0.9, changefreq: 'monthly' },
    }

    const customConfig = customConfigs[path] || {
      priority: 0.6,
      changefreq: 'monthly',
    }

    return {
      loc: path,
      lastmod: new Date().toISOString(),
      ...customConfig,
    }
  },

  exclude: ['/api/*', '/admin/*', '/_next/*', '/404', '/500'],

  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/admin/', '/_next/'] },
    ],
    additionalSitemaps: [
      'https://www.mgfevent.com/sitemap.xml',
    ],
  },
}