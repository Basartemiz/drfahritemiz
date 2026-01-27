'use client';

import { useTranslations } from 'next-intl';
import { Star, Quote } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/home/CTASection';
import { TESTIMONIALS } from '@/lib/constants';

// Extended testimonials for the dedicated page
const extendedTestimonials = [
  ...TESTIMONIALS,
  {
    id: 6,
    rating: 5,
    textKey: '1.text',
    author: 'N. A.',
    date: '2023',
  },
  {
    id: 7,
    rating: 5,
    textKey: '2.text',
    author: 'H. Y.',
    date: '2023',
  },
  {
    id: 8,
    rating: 5,
    textKey: '3.text',
    author: 'Z. K.',
    date: '2023',
  },
];

export default function TestimonialsPageClient() {
  const t = useTranslations('testimonials');

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-20">
        <div className="container-custom">
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />

          {/* Stats */}
          <div className="flex justify-center gap-12 mt-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary-500">500+</p>
              <p className="text-gray-600">Mutlu Hasta</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary-500">5.0</p>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary-500">25+</p>
              <p className="text-gray-600">Yıl Deneyim</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extendedTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
              >
                {/* Quote icon */}
                <Quote className="absolute top-4 right-4 w-10 h-10 text-primary-100" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  &ldquo;{t(`${testimonial.id > 5 ? testimonial.id - 5 : testimonial.id}.text`)}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-500 font-semibold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                  </div>
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
