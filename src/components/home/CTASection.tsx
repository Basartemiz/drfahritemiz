'use client';

import { useTranslations } from 'next-intl';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';

export default function CTASection() {
  const t = useTranslations('cta');

  return (
    <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-600">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-whatsapp text-white font-semibold rounded-lg hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={20} />
              {t('whatsapp')}
            </a>
            <a
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              <Phone size={20} />
              {t('call')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
