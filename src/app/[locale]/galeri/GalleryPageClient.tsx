'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const galleryItems = [
  {
    id: 1,
    type: 'clinic',
    src: '/images/dr-fahri-temiz-office.jpg',
    titleTr: 'Muayenehane',
    titleEn: 'Office'
  },
  {
    id: 2,
    type: 'equipment',
    src: '/images/dr-fahri-temiz-ultrasound.jpg',
    titleTr: '4D Ultrason Cihazı',
    titleEn: '4D Ultrasound Equipment'
  },
  {
    id: 3,
    type: 'clinic',
    src: '/images/clinic-exterior-1.jpg',
    titleTr: 'Klinik Dış Görünüm',
    titleEn: 'Clinic Exterior'
  },
  {
    id: 4,
    type: 'clinic',
    src: '/images/clinic-exterior-2.jpg',
    titleTr: 'Klinik Tabelası',
    titleEn: 'Clinic Sign'
  },
  {
    id: 5,
    type: 'clinic',
    src: '/images/clinic-exterior-3.jpg',
    titleTr: 'Muayenehane Girişi',
    titleEn: 'Clinic Entrance'
  },
  {
    id: 6,
    type: 'equipment',
    src: '/images/dr-fahri-temiz-hospital.jpg',
    titleTr: 'Hastane Ameliyathane',
    titleEn: 'Hospital Operating Room'
  },
  {
    id: 7,
    type: 'equipment',
    src: '/images/surgery-team.jpg',
    titleTr: 'Ameliyat Ekibi',
    titleEn: 'Surgery Team'
  },
  {
    id: 8,
    type: 'equipment',
    src: '/images/surgery-laparoscopy.jpg',
    titleTr: 'Laparoskopik Cerrahi',
    titleEn: 'Laparoscopic Surgery'
  },
  {
    id: 9,
    type: 'equipment',
    src: '/images/delivery-newborn.jpg',
    titleTr: 'Doğum Anı',
    titleEn: 'Delivery Moment'
  },
  {
    id: 10,
    type: 'equipment',
    src: '/images/dr-fahri-temiz-surgery-prep.jpg',
    titleTr: 'Ameliyat Hazırlığı',
    titleEn: 'Surgery Preparation'
  },
];

export default function GalleryPageClient() {
  const t = useTranslations('gallery');
  const locale = useLocale();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'clinic' | 'equipment'>('all');

  const filteredItems =
    filter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.type === filter);

  const selectedItem = filteredItems.find((item) => item.id === selectedImage);

  const handlePrev = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedImage
    );
    const prevIndex =
      (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex].id);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedImage
    );
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex].id);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-20">
        <div className="container-custom">
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />

          {/* Tabs */}
          <div className="flex justify-center gap-4 mt-8">
            <Link
              href="/galeri"
              className="px-6 py-2 rounded-full bg-primary-500 text-white font-medium"
            >
              {t('photos')}
            </Link>
            <Link
              href="/galeri/videolar"
              className="px-6 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors"
            >
              {t('videos')}
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Filter buttons */}
          <div className="flex justify-center gap-4 mb-8">
            {(['all', 'clinic', 'equipment'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === type
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type === 'all'
                  ? locale === 'tr' ? 'Tümü' : 'All'
                  : type === 'clinic'
                  ? t('clinic')
                  : t('equipment')}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedImage(item.id)}
                className="group aspect-square rounded-xl overflow-hidden relative hover:scale-105 transition-transform duration-300 shadow-md"
              >
                <Image
                  src={item.src}
                  alt={locale === 'tr' ? item.titleTr : item.titleEn}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">
                      {locale === 'tr' ? item.titleTr : item.titleEn}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-5xl max-h-[85vh] mx-4 relative">
            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedItem.src}
                alt={locale === 'tr' ? selectedItem.titleTr : selectedItem.titleEn}
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-white text-lg font-medium bg-black/50 inline-block px-4 py-2 rounded-lg">
                {locale === 'tr' ? selectedItem.titleTr : selectedItem.titleEn}
              </p>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      )}
    </>
  );
}
