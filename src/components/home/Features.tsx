'use client';

import { useTranslations } from 'next-intl';
import { Monitor, Clock, Heart } from 'lucide-react';

const features = [
  {
    icon: Monitor,
    titleKey: 'technology.title',
    descKey: 'technology.desc',
  },
  {
    icon: Clock,
    titleKey: 'support.title',
    descKey: 'support.desc',
  },
  {
    icon: Heart,
    titleKey: 'personal.title',
    descKey: 'personal.desc',
  },
];

export default function Features() {
  const t = useTranslations('features');

  return (
    <section className="relative -mt-16 z-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 flex items-start gap-4 transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-primary-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
