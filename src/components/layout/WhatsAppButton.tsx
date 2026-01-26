'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const t = useTranslations('whatsapp');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 3000);
      }, 2000);

      return () => clearTimeout(tooltipTimer);
    }
  }, [isVisible]);

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-50 transition-all duration-500',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      )}
    >
      {/* Tooltip */}
      <div
        className={cn(
          'absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap transition-all duration-300',
          showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        )}
      >
        {t('tooltip')}
        <div className="absolute bottom-0 right-6 translate-y-full">
          <div className="border-8 border-transparent border-t-gray-900" />
        </div>
      </div>

      {/* Button */}
      <a
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-whatsapp text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 whatsapp-pulse"
        aria-label="WhatsApp ile iletişim"
      >
        <MessageCircle size={28} className="md:w-8 md:h-8" />
      </a>
    </div>
  );
}
