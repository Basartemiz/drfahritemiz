'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import {
  Baby,
  MonitorCheck,
  Heart,
  Stethoscope,
  Activity,
  Sparkles,
  HeartHandshake,
  Flower2,
  Zap,
  Shield,
  CircleDot,
  Layers,
  ArrowRight,
  AlertCircle,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/home/CTASection';

const iconMap: Record<string, React.ElementType> = {
  Baby,
  MonitorCheck,
  Heart,
  Stethoscope,
  Activity,
  Sparkles,
  HeartHandshake,
  Flower2,
  Zap,
  Shield,
  CircleDot,
  Layers,
  AlertCircle,
};

const services = [
  {
    id: 'pregnancy',
    slug: 'gebelik-takibi',
    icon: 'Baby',
    colorClass: 'bg-pink-500',
  },
  {
    id: 'ultrasound',
    slug: 'detayli-ultrason',
    icon: 'MonitorCheck',
    colorClass: 'bg-purple-500',
  },
  {
    id: 'birth',
    slug: 'dogum',
    icon: 'Heart',
    colorClass: 'bg-red-500',
  },
  {
    id: 'gynecology',
    slug: 'jinekoloji',
    icon: 'Stethoscope',
    colorClass: 'bg-blue-500',
  },
  {
    id: 'urogynecology',
    slug: 'urojinekoloji',
    icon: 'Activity',
    colorClass: 'bg-green-500',
  },
  {
    id: 'genitalAesthetics',
    slug: 'genital-estetik',
    icon: 'Sparkles',
    colorClass: 'bg-amber-500',
  },
  {
    id: 'infertility',
    slug: 'kisirlik-tedavisi',
    icon: 'HeartHandshake',
    colorClass: 'bg-rose-500',
  },
  {
    id: 'menopause',
    slug: 'menopoz',
    icon: 'Flower2',
    colorClass: 'bg-violet-500',
  },
  {
    id: 'laser',
    slug: 'jinekolojik-lazer',
    icon: 'Zap',
    colorClass: 'bg-orange-500',
  },
  {
    id: 'uterine',
    slug: 'rahim-hastaliklari',
    icon: 'Shield',
    colorClass: 'bg-cyan-500',
  },
  {
    id: 'ovarian',
    slug: 'over-hastaliklari',
    icon: 'CircleDot',
    colorClass: 'bg-teal-500',
  },
  {
    id: 'pelvic',
    slug: 'pelvik-taban',
    icon: 'Layers',
    colorClass: 'bg-indigo-500',
  },
  {
    id: 'kurtaj',
    slug: 'kurtaj',
    icon: 'AlertCircle',
    colorClass: 'bg-slate-500',
  },
];

export default function ServicesPageClient() {
  const t = useTranslations('services');

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-20">
        <div className="container-custom">
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon];

              return (
                <Link
                  key={service.slug}
                  href={`/hizmetler/${service.slug}` as '/hizmetler'}
                  className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div
                    className={`w-14 h-14 ${service.colorClass} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors">
                    {t(`${service.id}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {t(`${service.id}.desc`)}
                  </p>
                  <div className="flex items-center gap-2 text-primary-500 font-medium text-sm">
                    {t('learnMore')}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
