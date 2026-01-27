import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

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
      ? 'Hakkımızda | Op. Dr. Fahri Temiz - İzmir Buca Kadın Doğum Uzmanı'
      : 'About Us | Op. Dr. Fahri Temiz - Gynecologist in Izmir Buca',
    description: isTr
      ? 'Op. Dr. Fahri Temiz hakkında. İzmir Buca\'da 25 yılı aşkın deneyime sahip kadın hastalıkları ve doğum uzmanı. Buca, Konak, Karabağlar, Gaziemir ve Bornova\'da hizmet.'
      : 'About Op. Dr. Fahri Temiz. Obstetrician and gynecologist with over 25 years of experience in Izmir Buca. Serving patients from Buca, Konak, Karabaglar, Gaziemir, and Bornova.',
    keywords: isTr
      ? [
          'Op. Dr. Fahri Temiz',
          'kadın doğum uzmanı izmir',
          'jinekolog buca',
          'izmir buca kadın doktoru',
          'en iyi jinekolog izmir',
          'kadın hastalıkları uzmanı buca',
        ]
      : [
          'Op. Dr. Fahri Temiz',
          'gynecologist izmir',
          'obstetrician buca',
          'izmir buca women doctor',
          'best gynecologist izmir',
          'women health specialist buca',
        ],
    openGraph: {
      title: isTr
        ? 'Op. Dr. Fahri Temiz - İzmir Buca Kadın Doğum Uzmanı'
        : 'Op. Dr. Fahri Temiz - Gynecologist in Izmir Buca',
      description: isTr
        ? 'İzmir Buca\'da kadın hastalıkları ve doğum uzmanı'
        : 'Obstetrician and gynecologist in Izmir Buca',
      url: `${baseUrl}/${locale}/hakkimizda`,
      siteName: 'Op. Dr. Fahri Temiz',
      locale: isTr ? 'tr_TR' : 'en_US',
      type: 'profile',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/hakkimizda`,
      languages: {
        'tr-TR': `${baseUrl}/tr/hakkimizda`,
        'en-US': `${baseUrl}/en/hakkimizda`,
      },
    },
  };
}

export default function AboutPage() {
  return <AboutPageClient />;
}
