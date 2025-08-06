import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL

  // Static pages
  const staticPages = [
    '',
    '/features',
    '/download',
    '/community',
    '/about',
    '/help',
    '/contact',
    '/faq',
    '/account-deletion',
    '/privacy',
    '/terms',
    '/cookies',
    '/accessibility',
  ]

  return staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.includes('legal') ? 0.3 : 0.7,
  }))
}