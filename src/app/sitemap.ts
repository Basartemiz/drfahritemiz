import type { MetadataRoute } from 'next';
import { getAllServiceSlugs } from '@/lib/services-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://drfahritemiz.com';
  const currentDate = new Date();

  const locales = ['tr', 'en'];

  // Main pages with their priorities
  const mainPages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/hakkimizda', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/hizmetler', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/galeri', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/galeri/videolar', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/hasta-yorumlari', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/iletisim', priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  // Get all service slugs
  const serviceSlugs = getAllServiceSlugs();

  const sitemap: MetadataRoute.Sitemap = [];

  // Add main pages for each locale
  for (const locale of locales) {
    for (const page of mainPages) {
      sitemap.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: currentDate,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      });
    }

    // Add service detail pages
    for (const slug of serviceSlugs) {
      sitemap.push({
        url: `${baseUrl}/${locale}/hizmetler/${slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
  }

  return sitemap;
}
