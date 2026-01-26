'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import {
  Award,
  GraduationCap,
  Building2,
  ChevronDown,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/home/CTASection';

const certifications = [
  { icon: GraduationCap, title: 'Tıp Fakültesi Mezuniyeti' },
  { icon: Award, title: 'Kadın Hastalıkları ve Doğum Uzmanlığı' },
  { icon: Building2, title: 'Türk Jinekoloji ve Obstetrik Derneği Üyeliği' },
  { icon: Award, title: 'Ürojinekoloji Sertifikası' },
];

const faqItems = [
  { qKey: 'q1', aKey: 'a1' },
  { qKey: 'q2', aKey: 'a2' },
  { qKey: 'q3', aKey: 'a3' },
  { qKey: 'q4', aKey: 'a4' },
];

export default function AboutPageClient() {
  const t = useTranslations('about');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/dr-fahri-temiz-office.jpg"
                  alt="Op. Dr. Fahri Temiz - İzmir Buca Kadın Doğum Uzmanı"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Stats card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">15+</p>
                    <p className="text-gray-600 text-sm">Yıllık Deneyim</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
                {t('title')}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('subtitle')}
              </h1>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                {t('intro')}
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                {t('experience')}
              </p>
              <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-700">
                &ldquo;{t('philosophy')}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading title={t('certifications')} />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                  <cert.icon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="font-semibold text-gray-900">{cert.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading title={t('faq.title')} />

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-gray-900">
                    {t(`faq.${item.qKey}`)}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'pb-4 max-h-40' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {t(`faq.${item.aKey}`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
