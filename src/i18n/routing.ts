import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['tr', 'en'],
  defaultLocale: 'tr',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/hakkimizda': {
      tr: '/hakkimizda',
      en: '/about',
    },
    '/hizmetler': {
      tr: '/hizmetler',
      en: '/services',
    },
    '/galeri': {
      tr: '/galeri',
      en: '/gallery',
    },
    '/galeri/videolar': {
      tr: '/galeri/videolar',
      en: '/gallery/videos',
    },
    '/hasta-yorumlari': {
      tr: '/hasta-yorumlari',
      en: '/testimonials',
    },
    '/iletisim': {
      tr: '/iletisim',
      en: '/contact',
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export type Pathnames = keyof typeof routing.pathnames;
