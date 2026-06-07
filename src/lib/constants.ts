export const CONTACT_INFO = {
  phone: '0532 237 04 78',
  phoneClean: '+905322370478',
  email: 'f.temiz@hotmail.com',
  address: 'Yiğitler Mahallesi Fevzi Çakmak Caddesi No 2 Buca İzmir',
  googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.7752082426847!2d27.1632!3d38.3808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDIyJzUwLjkiTiAyN8KwMDknNDcuNSJF!5e0!3m2!1str!2str!4v1234567890',
  workingHours: {
    weekdays: '09:00 - 18:00',
    saturday: '09:00 - 14:00',
    sunday: 'Kapalı',
  },
};

export const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/${CONTACT_INFO.phoneClean}?text=Merhaba,%20bilgi%20almak%20istiyorum.`,
  instagram: 'https://instagram.com/drfahritemiz',
  facebook: 'https://facebook.com/drfahritemiz',
};

export const SERVICES = [
  {
    id: 'gebelik-takibi',
    icon: 'Baby',
    titleKey: 'services.pregnancy.title',
    descKey: 'services.pregnancy.desc',
  },
  {
    id: 'detayli-ultrason',
    icon: 'MonitorCheck',
    titleKey: 'services.ultrasound.title',
    descKey: 'services.ultrasound.desc',
  },
  {
    id: 'dogum',
    icon: 'Heart',
    titleKey: 'services.birth.title',
    descKey: 'services.birth.desc',
  },
  {
    id: 'jinekoloji',
    icon: 'Stethoscope',
    titleKey: 'services.gynecology.title',
    descKey: 'services.gynecology.desc',
  },
  {
    id: 'urojinekoloji',
    icon: 'Activity',
    titleKey: 'services.urogynecology.title',
    descKey: 'services.urogynecology.desc',
  },
  {
    id: 'kurtaj',
    icon: 'AlertCircle',
    titleKey: 'services.kurtaj.title',
    descKey: 'services.kurtaj.desc',
  },
  {
    id: 'kisirlik-tedavisi',
    icon: 'HeartHandshake',
    titleKey: 'services.infertility.title',
    descKey: 'services.infertility.desc',
  },
  {
    id: 'menopoz',
    icon: 'Flower2',
    titleKey: 'services.menopause.title',
    descKey: 'services.menopause.desc',
  },
  {
    id: 'kurtaj',
    icon: 'AlertCircle',
    titleKey: 'services.kurtaj.title',
    descKey: 'services.kurtaj.desc',
  },
  {
    id: 'rahim-hastaliklari',
    icon: 'Shield',
    titleKey: 'services.uterine.title',
    descKey: 'services.uterine.desc',
  },
  {
    id: 'over-hastaliklari',
    icon: 'CircleDot',
    titleKey: 'services.ovarian.title',
    descKey: 'services.ovarian.desc',
  },
  {
    id: 'pelvik-taban',
    icon: 'Layers',
    titleKey: 'services.pelvic.title',
    descKey: 'services.pelvic.desc',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    rating: 5,
    textKey: 'testimonials.1.text',
    author: 'A. Y.',
    date: '2024',
  },
  {
    id: 2,
    rating: 5,
    textKey: 'testimonials.2.text',
    author: 'M. K.',
    date: '2024',
  },
  {
    id: 3,
    rating: 5,
    textKey: 'testimonials.3.text',
    author: 'S. T.',
    date: '2024',
  },
  {
    id: 4,
    rating: 5,
    textKey: 'testimonials.4.text',
    author: 'E. B.',
    date: '2024',
  },
  {
    id: 5,
    rating: 5,
    textKey: 'testimonials.5.text',
    author: 'F. Ö.',
    date: '2023',
  },
];
