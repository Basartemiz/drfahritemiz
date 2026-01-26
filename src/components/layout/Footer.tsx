'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const tContact = useTranslations('contact.info');

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">FT</span>
              </div>
              <div>
                <p className="font-bold text-white">Op. Dr. Fahri Temiz</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  {tNav('home')}
                </Link>
              </li>
              <li>
                <Link
                  href="/hakkimizda"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  {tNav('about')}
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  {tNav('services')}
                </Link>
              </li>
              <li>
                <Link
                  href="/galeri"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  {tNav('gallery')}
                </Link>
              </li>
              <li>
                <Link
                  href="/hasta-yorumlari"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  {tNav('testimonials')}
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  {tNav('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t('contactInfo')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{CONTACT_INFO.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phoneClean}`}
                  className="flex items-center gap-3 hover:text-primary-400 transition-colors"
                >
                  <Phone size={18} className="text-primary-400" />
                  <span className="text-sm">{CONTACT_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 hover:text-primary-400 transition-colors"
                >
                  <Mail size={18} className="text-primary-400" />
                  <span className="text-sm">{CONTACT_INFO.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="font-semibold text-white mb-4">{tContact('hours')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-primary-400" />
                <div className="text-sm">
                  <p className="font-medium text-white">{tContact('weekdays')}</p>
                  <p>{CONTACT_INFO.workingHours.weekdays}</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-primary-400" />
                <div className="text-sm">
                  <p className="font-medium text-white">{tContact('saturday')}</p>
                  <p>{CONTACT_INFO.workingHours.saturday}</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-primary-400" />
                <div className="text-sm">
                  <p className="font-medium text-white">{tContact('sunday')}</p>
                  <p>{tContact('closed')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Op. Dr. Fahri Temiz. {t('rights')}
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
              >
                {t('privacy')}
              </Link>
              <Link
                href="/"
                className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
              >
                {t('terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
