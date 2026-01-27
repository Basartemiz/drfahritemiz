import type { Metadata } from 'next';
import GalleryPageClient from './GalleryPageClient';

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
      ? 'Galeri | Op. Dr. Fahri Temiz - İzmir Buca Kadın Doğum Uzmanı'
      : 'Gallery | Op. Dr. Fahri Temiz - Gynecologist Izmir Buca',
    description: isTr
      ? 'Op. Dr. Fahri Temiz muayenehanesi galerisi. İzmir Buca\'da kadın doğum kliniği fotoğrafları. 4D ultrason, ameliyathane, muayenehane görselleri.'
      : 'Op. Dr. Fahri Temiz clinic gallery. Photos of obstetrics and gynecology clinic in Izmir Buca. 4D ultrasound, operating room, clinic images.',
    keywords: isTr
      ? [
          'Op. Dr. Fahri Temiz galeri',
          'buca jinekolog fotoğrafları',
          'izmir kadın doğum kliniği resimleri',
          'buca muayenehane fotoğrafları',
          'izmir 4d ultrason görüntüleri',
          'jinekolog klinik galerisi',
          'kadın doğum doktoru klinik fotoğrafları',
        ]
      : [
          'Op. Dr. Fahri Temiz gallery',
          'buca gynecologist photos',
          'izmir obstetrics clinic images',
          'gynecology clinic photos',
          '4d ultrasound images',
        ],
    openGraph: {
      title: isTr
        ? 'Galeri | Op. Dr. Fahri Temiz - İzmir Buca'
        : 'Gallery | Op. Dr. Fahri Temiz - Izmir Buca',
      description: isTr
        ? 'İzmir Buca\'da kadın doğum kliniği fotoğrafları'
        : 'Photos of obstetrics and gynecology clinic in Izmir Buca',
      url: `${baseUrl}/${locale}/galeri`,
      siteName: 'Op. Dr. Fahri Temiz',
      locale: isTr ? 'tr_TR' : 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/galeri`,
      languages: {
        'tr-TR': `${baseUrl}/tr/galeri`,
        'en-US': `${baseUrl}/en/galeri`,
      },
    },
  };
}

export default function GalleryPage() {
  return <GalleryPageClient />;
}
