import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

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
      ? 'İletişim | Op. Dr. Fahri Temiz - İzmir Buca'
      : 'Contact | Op. Dr. Fahri Temiz - Izmir Buca',
    description: isTr
      ? 'İzmir Buca\'da kadın doğum uzmanı randevusu. Op. Dr. Fahri Temiz iletişim bilgileri. Yiğitler Mah. Fevzi Çakmak Cad. No:2 Buca/İzmir. Tel: 0532 237 04 78'
      : 'Gynecologist appointment in Izmir Buca. Op. Dr. Fahri Temiz contact information. Yigitler Mah. Fevzi Cakmak Cad. No:2 Buca/Izmir. Tel: +90 532 237 04 78',
    keywords: isTr
      ? [
          'jinekolog randevu izmir',
          'kadın doğum randevu buca',
          'Op. Dr. Fahri Temiz iletişim',
          'izmir buca kadın doktoru adres',
          'buca jinekolog telefon',
        ]
      : [
          'gynecologist appointment izmir',
          'obstetrician appointment buca',
          'Op. Dr. Fahri Temiz contact',
          'izmir buca women doctor address',
          'buca gynecologist phone',
        ],
    openGraph: {
      title: isTr
        ? 'İletişim | Op. Dr. Fahri Temiz - İzmir Buca'
        : 'Contact | Op. Dr. Fahri Temiz - Izmir Buca',
      description: isTr
        ? 'İzmir Buca\'da kadın doğum randevusu almak için bize ulaşın'
        : 'Contact us to book an appointment in Izmir Buca',
      url: `${baseUrl}/${locale}/iletisim`,
      siteName: 'Op. Dr. Fahri Temiz',
      locale: isTr ? 'tr_TR' : 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/iletisim`,
      languages: {
        'tr-TR': `${baseUrl}/tr/iletisim`,
        'en-US': `${baseUrl}/en/iletisim`,
      },
    },
  };
}

export default function ContactPage() {
  return <ContactPageClient />;
}
