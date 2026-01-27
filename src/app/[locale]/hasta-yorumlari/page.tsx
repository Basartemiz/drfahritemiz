import type { Metadata } from 'next';
import TestimonialsPageClient from './TestimonialsPageClient';

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
      ? 'Hasta Yorumları | Op. Dr. Fahri Temiz - İzmir Buca Jinekolog'
      : 'Patient Reviews | Op. Dr. Fahri Temiz - Gynecologist Izmir Buca',
    description: isTr
      ? 'Op. Dr. Fahri Temiz hasta yorumları ve deneyimleri. İzmir Buca\'da kadın doğum uzmanı değerlendirmeleri. 500+ mutlu hasta, 5.0 puan, 25 yıl deneyim.'
      : 'Op. Dr. Fahri Temiz patient reviews and experiences. Obstetrician reviews in Izmir Buca. 500+ happy patients, 5.0 rating, 25 years of experience.',
    keywords: isTr
      ? [
          'Op. Dr. Fahri Temiz yorumları',
          'buca jinekolog yorumları',
          'izmir kadın doğum uzmanı değerlendirme',
          'buca kadın doktoru deneyimleri',
          'izmir en iyi jinekolog yorumları',
          'buca doğum doktoru hasta yorumları',
          'izmir jinekolog tavsiye',
        ]
      : [
          'Op. Dr. Fahri Temiz reviews',
          'buca gynecologist reviews',
          'izmir obstetrician reviews',
          'buca women doctor experiences',
          'best gynecologist izmir reviews',
        ],
    openGraph: {
      title: isTr
        ? 'Hasta Yorumları | Op. Dr. Fahri Temiz - İzmir Buca'
        : 'Patient Reviews | Op. Dr. Fahri Temiz - Izmir Buca',
      description: isTr
        ? 'İzmir Buca\'da kadın doğum uzmanı hasta deneyimleri ve yorumları'
        : 'Patient experiences and reviews of obstetrician in Izmir Buca',
      url: `${baseUrl}/${locale}/hasta-yorumlari`,
      siteName: 'Op. Dr. Fahri Temiz',
      locale: isTr ? 'tr_TR' : 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/hasta-yorumlari`,
      languages: {
        'tr-TR': `${baseUrl}/tr/hasta-yorumlari`,
        'en-US': `${baseUrl}/en/hasta-yorumlari`,
      },
    },
  };
}

export default function TestimonialsPage() {
  return <TestimonialsPageClient />;
}
