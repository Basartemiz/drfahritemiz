import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import SmoothScroll from '@/components/layout/SmoothScroll';
import JsonLd from '@/components/seo/JsonLd';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://drfahritemiz.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Op. Dr. Fahri Temiz | İzmir Buca Kadın Hastalıkları ve Doğum Uzmanı',
    template: '%s | Op. Dr. Fahri Temiz - İzmir Buca',
  },
  description:
    'İzmir Buca kadın doğum uzmanı Op. Dr. Fahri Temiz. Gebelik takibi, normal doğum, sezaryen, jinekoloji, ürojinekoloji, genital estetik, labioplasti. Buca\'da jinekolog arıyorsanız hemen randevu alın. ☎ 0532 237 04 78',
  keywords: [
    // Location-based keywords
    'izmir kadın doğum uzmanı',
    'buca kadın doğum',
    'buca jinekolog',
    'izmir jinekolog',
    'buca doğum doktoru',
    'izmir doğum',
    'buca sezaryen',
    'izmir jinekoloji',
    'buca jinekoloji',
    'izmir ürojinekoloji',
    'buca ürojinekoloji',
    'izmir genital estetik',
    'buca genital estetik',
    'izmir vajinal estetik',
    'buca vajinal estetik',
    'izmir kadın hastalıkları',
    'buca kadın hastalıkları',
    'izmir labioplasti',
    'buca labioplasti',
    // Service-based keywords
    'izmir buca gebelik takibi',
    'buca hamilelik takibi',
    'izmir gebelik takibi',
    'izmir buca ultrason',
    'buca 4d ultrason',
    'izmir 4d ultrason',
    'izmir detaylı ultrason',
    'buca detaylı ultrason',
    'izmir smear testi',
    'buca hpv testi',
    'izmir hpv testi',
    'izmir kısırlık tedavisi',
    'buca kısırlık tedavisi',
    'izmir infertilite tedavisi',
    'izmir menopoz tedavisi',
    'buca menopoz tedavisi',
    'izmir idrar kaçırma tedavisi',
    'buca idrar kaçırma tedavisi',
    'izmir pelvik taban tedavisi',
    'buca pelvik taban tedavisi',
    'izmir normal doğum',
    'buca normal doğum',
    'izmir sezaryen',
    'izmir doğum uzmanı',
    // Doctor and specialty keywords
    'kadın doğum uzmanı izmir',
    'jinekolog buca',
    'en iyi jinekolog izmir',
    'en iyi kadın doğum uzmanı izmir',
    'buca kadın doğum doktoru',
    'izmir kadın hastalıkları doktoru',
    'buca kadın hastalıkları uzmanı',
    // Area served keywords
    'konak kadın doğum uzmanı',
    'karabağlar jinekolog',
    'gaziemir kadın doğum',
    'bornova jinekoloji',
    'izmir çevre ilçeler kadın doğum',
    // Brand keywords
    'Op. Dr. Fahri Temiz',
    'dr fahri temiz izmir',
    'fahri temiz jinekolog',
  ],
  authors: [{ name: 'Op. Dr. Fahri Temiz' }],
  creator: 'Op. Dr. Fahri Temiz',
  publisher: 'Op. Dr. Fahri Temiz',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      'tr-TR': `${baseUrl}/tr`,
      'en-US': `${baseUrl}/en`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: 'en_US',
    siteName: 'Op. Dr. Fahri Temiz',
    title: 'Op. Dr. Fahri Temiz | İzmir Buca Kadın Hastalıkları ve Doğum Uzmanı',
    description: 'İzmir Buca\'da kadın doğum uzmanı. Gebelik takibi, doğum, jinekoloji, ürojinekoloji, genital estetik. Yiğitler Mah. Fevzi Çakmak Cad. No:2 Buca/İzmir',
    url: baseUrl,
    images: [
      {
        url: `${baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Op. Dr. Fahri Temiz - İzmir Buca Kadın Doğum Uzmanı',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Op. Dr. Fahri Temiz | İzmir Buca Kadın Doğum Uzmanı',
    description: 'İzmir Buca\'da kadın doğum uzmanı. Gebelik takibi, doğum, jinekoloji, ürojinekoloji. ☎ 0532 237 04 78',
    images: [`${baseUrl}/images/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'geo.region': 'TR-35',
    'geo.placename': 'Buca, İzmir',
    'geo.position': '38.3878;27.1753',
    'ICBM': '38.3878, 27.1753',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'tr' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <head>
        <JsonLd locale={locale} />
      </head>
      <body className="min-h-screen bg-background antialiased">
        <NextIntlClientProvider messages={messages}>
          <SmoothScroll>
            <Header />
            <main>{children}</main>
            <Footer />
            <WhatsAppButton />
          </SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
