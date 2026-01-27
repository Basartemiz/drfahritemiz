import { CONTACT_INFO } from '@/lib/constants';

interface JsonLdProps {
  locale: string;
}

export default function JsonLd({ locale }: JsonLdProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://drfahritemiz.com';
  const isTr = locale === 'tr';

  // Physician Schema
  const physicianSchema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${baseUrl}/#physician`,
    name: 'Op. Dr. Fahri Temiz',
    alternateName: 'Dr. Fahri Temiz',
    description: isTr
      ? 'İzmir Buca\'da Kadın Hastalıkları ve Doğum Uzmanı. Gebelik takibi, doğum, jinekoloji, ürojinekoloji ve genital estetik alanlarında uzman hekim.'
      : 'Obstetrics & Gynecology Specialist in Izmir Buca. Expert physician in pregnancy follow-up, delivery, gynecology, urogynecology, and genital aesthetics.',
    url: baseUrl,
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    image: `${baseUrl}/images/dr-fahri-temiz.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Yiğitler Mahallesi Fevzi Çakmak Caddesi No 2',
      addressLocality: 'Buca',
      addressRegion: 'İzmir',
      postalCode: '35390',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.3878,
      longitude: 27.1753,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'İzmir',
        '@id': 'https://www.wikidata.org/wiki/Q35997',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Buca',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Konak',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Karabağlar',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Bornova',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Gaziemir',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Karşıyaka',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Alsancak',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Bayraklı',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Balçova',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Narlıdere',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Çiğli',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    medicalSpecialty: [
      'http://schema.org/Gynecologic',
      'Obstetrics',
      'Gynecology',
      'Urogynecology',
    ],
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: isTr ? 'Gebelik Takibi' : 'Pregnancy Follow-up',
        description: isTr
          ? 'Hamilelik süresince anne ve bebek sağlığının düzenli kontrolü'
          : 'Regular monitoring of mother and baby health during pregnancy',
      },
      {
        '@type': 'MedicalProcedure',
        name: isTr ? 'Normal Doğum ve Sezaryen' : 'Normal Birth and Cesarean',
        description: isTr
          ? 'Güvenli doğum hizmetleri'
          : 'Safe delivery services',
      },
      {
        '@type': 'MedicalProcedure',
        name: isTr ? 'Jinekolojik Muayene' : 'Gynecological Examination',
        description: isTr
          ? 'Kadın hastalıklarının tanı ve tedavisi'
          : 'Diagnosis and treatment of womens diseases',
      },
      {
        '@type': 'MedicalProcedure',
        name: isTr ? 'Ürojinekoloji' : 'Urogynecology',
        description: isTr
          ? 'İdrar kaçırma ve pelvik taban bozuklukları tedavisi'
          : 'Treatment of urinary incontinence and pelvic floor disorders',
      },
      {
        '@type': 'MedicalProcedure',
        name: isTr ? 'Genital Estetik' : 'Genital Aesthetics',
        description: isTr
          ? 'Labioplasti ve vajinal estetik işlemler'
          : 'Labiaplasty and vaginal aesthetic procedures',
      },
      {
        '@type': 'MedicalProcedure',
        name: isTr ? 'Detaylı Ultrason' : 'Detailed Ultrasound',
        description: isTr
          ? '3D/4D ultrason ile bebek görüntüleme'
          : '3D/4D ultrasound baby imaging',
      },
      {
        '@type': 'MedicalProcedure',
        name: isTr ? 'Kısırlık Tedavisi' : 'Infertility Treatment',
        description: isTr
          ? 'İnfertilite değerlendirmesi ve tedavi planlaması'
          : 'Infertility evaluation and treatment planning',
      },
      {
        '@type': 'MedicalProcedure',
        name: isTr ? 'Menopoz Tedavisi' : 'Menopause Treatment',
        description: isTr
          ? 'Menopoz dönemi şikayetlerinin yönetimi'
          : 'Management of menopause symptoms',
      },
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: isTr ? 'Tıp Fakültesi Mezuniyeti' : 'Medical School Graduation',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certificate',
        name: isTr ? 'Kadın Hastalıkları ve Doğum Uzmanlığı' : 'Obstetrics and Gynecology Specialty',
      },
    ],
    sameAs: [
      'https://instagram.com/drfahritemiz',
      'https://facebook.com/drfahritemiz',
    ],
  };

  // Medical Clinic Schema
  const medicalClinicSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    '@id': `${baseUrl}/#clinic`,
    name: 'Op. Dr. Fahri Temiz Muayenehanesi',
    alternateName: 'Dr. Fahri Temiz Kadın Hastalıkları Kliniği',
    description: isTr
      ? 'İzmir Buca\'da modern kadın hastalıkları ve doğum kliniği. Gebelik takibi, doğum, jinekoloji, ürojinekoloji hizmetleri.'
      : 'Modern obstetrics and gynecology clinic in Izmir Buca. Pregnancy follow-up, delivery, gynecology, urogynecology services.',
    url: baseUrl,
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    image: `${baseUrl}/images/clinic.jpg`,
    logo: `${baseUrl}/images/logo.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Yiğitler Mahallesi Fevzi Çakmak Caddesi No 2',
      addressLocality: 'Buca',
      addressRegion: 'İzmir',
      postalCode: '35390',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.3878,
      longitude: 27.1753,
    },
    hasMap: 'https://goo.gl/maps/izmir-buca',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card',
    currenciesAccepted: 'TRY',
    medicalSpecialty: ['Gynecologic', 'Obstetric'],
    availableService: {
      '@type': 'MedicalTherapy',
      name: isTr ? 'Kadın Hastalıkları ve Doğum Hizmetleri' : 'Obstetrics and Gynecology Services',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '150',
      reviewCount: '120',
    },
  };

  // Local Business Schema for Google Maps
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#localbusiness`,
    name: 'Op. Dr. Fahri Temiz - Kadın Hastalıkları ve Doğum Uzmanı',
    image: [
      `${baseUrl}/images/clinic-1.jpg`,
      `${baseUrl}/images/clinic-2.jpg`,
      `${baseUrl}/images/dr-fahri-temiz.jpg`,
    ],
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    url: baseUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Yiğitler Mahallesi Fevzi Çakmak Caddesi No 2',
      addressLocality: 'Buca',
      addressRegion: 'İzmir',
      postalCode: '35390',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.3878,
      longitude: 27.1753,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '150',
    },
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isTr ? 'Ana Sayfa' : 'Home',
        item: baseUrl,
      },
    ],
  };

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    '@id': `${baseUrl}/#organization`,
    name: 'Op. Dr. Fahri Temiz',
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT_INFO.phone,
      contactType: 'customer service',
      availableLanguage: ['Turkish', 'English'],
      areaServed: 'TR',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Yiğitler Mahallesi Fevzi Çakmak Caddesi No 2',
      addressLocality: 'Buca',
      addressRegion: 'İzmir',
      postalCode: '35390',
      addressCountry: 'TR',
    },
    sameAs: [
      'https://instagram.com/drfahritemiz',
      'https://facebook.com/drfahritemiz',
    ],
  };

  // FAQ Schema for common questions
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: isTr ? 'Buca\'da kadın doğum uzmanı var mı?' : 'Is there an obstetrician in Buca?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isTr
            ? 'Evet, Op. Dr. Fahri Temiz Buca\'da kadın hastalıkları ve doğum uzmanı olarak hizmet vermektedir. Yiğitler Mahallesi Fevzi Çakmak Caddesi No 2 adresinde muayenehanesi bulunmaktadır.'
            : 'Yes, Op. Dr. Fahri Temiz serves as an obstetrician and gynecologist in Buca. His clinic is located at Yiğitler Mahallesi Fevzi Çakmak Caddesi No 2.',
        },
      },
      {
        '@type': 'Question',
        name: isTr ? 'İzmir Buca\'da gebelik takibi nerede yapılır?' : 'Where is pregnancy follow-up done in Izmir Buca?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isTr
            ? 'İzmir Buca\'da gebelik takibi Op. Dr. Fahri Temiz muayenehanesinde yapılmaktadır. Modern ultrason cihazları ve deneyimli ekip ile güvenli gebelik takibi hizmeti sunulmaktadır.'
            : 'Pregnancy follow-up in Izmir Buca is done at Op. Dr. Fahri Temiz clinic. Safe pregnancy follow-up service is provided with modern ultrasound devices and experienced team.',
        },
      },
      {
        '@type': 'Question',
        name: isTr ? 'Buca\'da jinekolog randevusu nasıl alınır?' : 'How to get a gynecologist appointment in Buca?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isTr
            ? 'Buca\'da jinekolog randevusu almak için 0532 237 04 78 numaralı telefondan veya WhatsApp üzerinden iletişime geçebilirsiniz.'
            : 'To get a gynecologist appointment in Buca, you can contact via phone number 0532 237 04 78 or WhatsApp.',
        },
      },
      {
        '@type': 'Question',
        name: isTr ? 'İzmir\'de en iyi jinekolog kimdir?' : 'Who is the best gynecologist in Izmir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isTr
            ? 'Op. Dr. Fahri Temiz, İzmir\'de 25 yılı aşkın deneyime sahip, kadın hastalıkları ve doğum alanında uzmanlaşmış bir hekimdir. Buca, Konak, Karabağlar, Gaziemir ve Bornova\'dan hastalar tarafından tercih edilmektedir.'
            : 'Op. Dr. Fahri Temiz is a specialist with over 25 years of experience in obstetrics and gynecology in Izmir. He is preferred by patients from Buca, Konak, Karabaglar, Gaziemir, and Bornova.',
        },
      },
      {
        '@type': 'Question',
        name: isTr ? 'İzmir Buca\'da normal doğum yapan doktor var mı?' : 'Is there a doctor for normal delivery in Izmir Buca?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isTr
            ? 'Evet, Op. Dr. Fahri Temiz İzmir Buca\'da hem normal doğum hem de sezaryen operasyonları gerçekleştirmektedir. Deneyimli ekibiyle güvenli doğum hizmeti sunulmaktadır.'
            : 'Yes, Op. Dr. Fahri Temiz performs both normal delivery and cesarean section operations in Izmir Buca. Safe delivery service is provided with an experienced team.',
        },
      },
      {
        '@type': 'Question',
        name: isTr ? 'Buca\'da 4D ultrason nerede çekilir?' : 'Where can I get 4D ultrasound in Buca?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isTr
            ? 'İzmir Buca\'da Op. Dr. Fahri Temiz muayenehanesinde modern 4D ultrason cihazları ile detaylı ultrason hizmeti sunulmaktadır. Detaylı anomali taraması ve fetal görüntüleme yapılmaktadır.'
            : 'Detailed ultrasound service is provided with modern 4D ultrasound devices at Op. Dr. Fahri Temiz clinic in Izmir Buca. Detailed anomaly screening and fetal imaging are performed.',
        },
      },
      {
        '@type': 'Question',
        name: isTr ? 'İzmir Buca\'da genital estetik yapan yer var mı?' : 'Is there genital aesthetics in Izmir Buca?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isTr
            ? 'Evet, Op. Dr. Fahri Temiz İzmir Buca\'da labioplasti, vajinal estetik ve genital bölge estetik işlemleri uygulamaktadır. Modern tekniklerle güvenli ve estetik sonuçlar elde edilmektedir.'
            : 'Yes, Op. Dr. Fahri Temiz performs labiaplasty, vaginal aesthetics and genital area aesthetic procedures in Izmir Buca. Safe and aesthetic results are obtained with modern techniques.',
        },
      },
      {
        '@type': 'Question',
        name: isTr ? 'Buca\'da idrar kaçırma tedavisi yapılıyor mu?' : 'Is urinary incontinence treatment available in Buca?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isTr
            ? 'Evet, Op. Dr. Fahri Temiz İzmir Buca\'da ürojinekoloji alanında idrar kaçırma tedavisi, pelvik taban rehabilitasyonu ve mesane sarkması tedavisi sunmaktadır.'
            : 'Yes, Op. Dr. Fahri Temiz offers urinary incontinence treatment, pelvic floor rehabilitation, and bladder prolapse treatment in the field of urogynecology in Izmir Buca.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
