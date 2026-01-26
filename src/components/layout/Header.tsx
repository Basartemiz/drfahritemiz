'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';

const navItems = [
  { href: '/', labelKey: 'home' },
  { href: '/hakkimizda', labelKey: 'about' },
  { href: '/hizmetler', labelKey: 'services' },
  { href: '/galeri', labelKey: 'gallery' },
  { href: '/hasta-yorumlari', labelKey: 'testimonials' },
  { href: '/iletisim', labelKey: 'contact' },
] as const;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLocale = locale === 'tr' ? 'en' : 'tr';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      {/* Top bar */}
      <div className="hidden md:block bg-primary-500 text-white py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className="flex items-center gap-2 hover:text-primary-100 transition-colors"
            >
              <Phone size={14} />
              {CONTACT_INFO.phone}
            </a>
          </div>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 hover:text-primary-100 transition-colors"
          >
            <Globe size={14} />
            {locale === 'tr' ? 'English' : 'Türkçe'}
          </button>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg md:text-xl">FT</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-gray-900 text-sm md:text-base">
                Op. Dr. Fahri Temiz
              </p>
              <p className="text-xs text-gray-500">
                {locale === 'tr'
                  ? 'Kadın Hastalıkları ve Doğum Uzmanı'
                  : 'Obstetrics & Gynecology'}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary-500',
                  pathname === item.href ? 'text-primary-500' : 'text-gray-700'
                )}
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </div>

          {/* CTA Button & Language (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-primary-500 transition-colors"
            >
              <Globe size={16} />
              {locale === 'tr' ? 'EN' : 'TR'}
            </button>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              {t('appointment')}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm text-gray-600"
            >
              <Globe size={16} />
              {locale === 'tr' ? 'EN' : 'TR'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                    pathname === item.href
                      ? 'bg-primary-50 text-primary-500'
                      : 'text-gray-700 hover:bg-gray-50'
                  )}
                >
                  {t(item.labelKey)}
                </Link>
              ))}
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-2 btn-primary text-sm text-center"
              >
                {t('appointment')}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
