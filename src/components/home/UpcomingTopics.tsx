'use client';

import { useTranslations } from 'next-intl';
import { Calendar, ChevronRight } from 'lucide-react';

const topicKeys = ['1', '2', '3', '4', '5', '6', '7'];

export default function UpcomingTopics() {
  const t = useTranslations('upcomingTopics');

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            {t('subtitle')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topicKeys.map((key, index) => (
            <div
              key={key}
              className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-primary-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 font-semibold text-sm group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                    {t(`topics.${key}`)}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary-500 transition-colors flex-shrink-0 mt-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
