'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SOCIAL_LINKS } from '@/lib/constants';

const slides = [
  {
    id: 1,
    image: '/images/dr-fahri-temiz-ultrasound.jpg',
    gradient: 'from-primary-900/80 via-primary-800/60 to-transparent',
    titleKey: 'slide1.title',
    subtitleKey: 'slide1.subtitle',
    ctaKey: 'slide1.cta',
    ctaLink: SOCIAL_LINKS.whatsapp,
    external: true,
  },
  {
    id: 2,
    image: '/images/dr-fahri-temiz-hospital.jpg',
    gradient: 'from-gray-900/80 via-gray-800/60 to-transparent',
    titleKey: 'slide2.title',
    subtitleKey: 'slide2.subtitle',
    ctaKey: 'slide2.cta',
    ctaLink: '/hizmetler',
    external: false,
  },
  {
    id: 3,
    image: '/images/surgery-team.jpg',
    gradient: 'from-pink-900/80 via-pink-800/60 to-transparent',
    titleKey: 'slide3.title',
    subtitleKey: 'slide3.subtitle',
    ctaKey: 'slide3.cta',
    ctaLink: '/iletisim',
    external: false,
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = useTranslations('hero');

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000',
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          )}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />

          {/* Overlay */}
          <div className={cn('absolute inset-0 bg-gradient-to-r', slide.gradient)} />

          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl">
                <h1
                  className={cn(
                    'text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700',
                    index === currentSlide
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-8 opacity-0'
                  )}
                  style={{ transitionDelay: '200ms' }}
                >
                  {t(slide.titleKey)}
                </h1>
                <p
                  className={cn(
                    'text-lg md:text-xl text-white/90 mb-8 transition-all duration-700',
                    index === currentSlide
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-8 opacity-0'
                  )}
                  style={{ transitionDelay: '400ms' }}
                >
                  {t(slide.subtitleKey)}
                </p>
                <div
                  className={cn(
                    'transition-all duration-700',
                    index === currentSlide
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-8 opacity-0'
                  )}
                  style={{ transitionDelay: '600ms' }}
                >
                  {slide.external ? (
                    <a
                      href={slide.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-lg"
                    >
                      {t(slide.ctaKey)}
                    </a>
                  ) : (
                    <Link href={slide.ctaLink as '/hizmetler' | '/iletisim'} className="btn-primary text-lg">
                      {t(slide.ctaKey)}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              'w-3 h-3 rounded-full transition-all duration-300',
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/70'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
