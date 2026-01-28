import type { Metadata } from 'next';
import ServicesPageClient from './ServicesPageClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://drfahritemiz.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isTr = locale === 'tr';

  return {
    title: isTr
      ? 'Kadın Sağlığı Hizmetleri | İzmir Buca'
      : 'Women\'s Health Services | Izmir Buca',
    description: isTr
      ? 'İzmir Buca\'da kapsamlı kadın sağlığı hizmetleri. Gebelik takibi, doğum, jinekoloji, ürojinekoloji, kürtaj, kısırlık tedavisi. Op. Dr. Fahri Temiz.'
      : 'Comprehensive women\'s health services in Izmir Buca. Pregnancy care, delivery, gynecology, urogynecology, pregnancy termination, infertility treatment. Op. Dr. Fahri Temiz.',
    keywords: isTr
      ? [
          'izmir kadın sağlığı',
          'buca jinekoloji hizmetleri',
          'gebelik takibi izmir',
          'doğum buca',
          'ürojinekoloji izmir',
          'kürtaj izmir',
          'kadın doğum uzmanı izmir buca',
          'jinekolog buca',
        ]
      : [
          'women health izmir',
          'gynecology services buca',
          'pregnancy care izmir',
          'delivery buca',
          'urogynecology izmir',
          'pregnancy termination buca',
          'obstetrician izmir buca',
          'gynecologist buca',
        ],
    openGraph: {
      title: isTr
        ? 'Kadın Sağlığı Hizmetleri | Op. Dr. Fahri Temiz - İzmir Buca'
        : 'Women\'s Health Services | Op. Dr. Fahri Temiz - Izmir Buca',
      description: isTr
        ? 'İzmir Buca\'da kapsamlı kadın sağlığı hizmetleri'
        : 'Comprehensive women\'s health services in Izmir Buca',
      url: `${baseUrl}/${locale}/hizmetler`,
      siteName: 'Op. Dr. Fahri Temiz',
      locale: isTr ? 'tr_TR' : 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/hizmetler`,
      languages: {
        'tr-TR': `${baseUrl}/tr/hizmetler`,
        'en-US': `${baseUrl}/en/hizmetler`,
      },
    },
  };
}

export default function ServicesPage() {
  return <ServicesPageClient />;
}
