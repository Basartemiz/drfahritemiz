'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { CheckCircle, ArrowRight } from 'lucide-react';

const highlights = [
  'Gebelik takibi ve doğum',
  'Jinekolojik muayene',
  'Ürojinekoloji',
  'Estetik jinekoloji',
];

export default function AboutPreview() {
  const t = useTranslations('about');

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Doctor Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/dr-fahri-temiz-office.jpg"
                alt="Op. Dr. Fahri Temiz - İzmir Buca Kadın Doğum Uzmanı"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-500/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-500/10 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-primary-500 font-semibold mb-2 block">
              {t('title')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('subtitle')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">{t('intro')}</p>
            <p className="text-gray-600 leading-relaxed mb-8">{t('experience')}</p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/hakkimizda"
              className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors"
            >
              {t('readMore')}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
