'use client';

import { useTranslations } from 'next-intl';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/contact/ContactForm';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';

export default function ContactPageClient() {
  const t = useTranslations('contact');
  const tInfo = useTranslations('contact.info');

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-20">
        <div className="container-custom">
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Address Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {tInfo('address')}
                    </h3>
                    <p className="text-gray-600 text-sm">{CONTACT_INFO.address}</p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {tInfo('phone')}
                    </h3>
                    <a
                      href={`tel:${CONTACT_INFO.phoneClean}`}
                      className="text-primary-500 hover:text-primary-600 text-sm"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {tInfo('email')}
                    </h3>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-primary-500 hover:text-primary-600 text-sm"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {tInfo('hours')}
                    </h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>
                        <span className="font-medium">{tInfo('weekdays')}:</span>{' '}
                        {CONTACT_INFO.workingHours.weekdays}
                      </p>
                      <p>
                        <span className="font-medium">{tInfo('saturday')}:</span>{' '}
                        {CONTACT_INFO.workingHours.saturday}
                      </p>
                      <p>
                        <span className="font-medium">{tInfo('sunday')}:</span>{' '}
                        {tInfo('closed')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-whatsapp text-white font-semibold rounded-xl hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp ile İletişim
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.7752082426847!2d27.1632!3d38.3808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8e5f0c3b6c3%3A0x5c3f3a1c8c4f4c4c!2sBuca%2C%20%C4%B0zmir!5e0!3m2!1str!2str!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Muayenehane Konumu"
            />
          </div>
        </div>
      </section>
    </>
  );
}
