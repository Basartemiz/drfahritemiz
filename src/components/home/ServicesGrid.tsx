'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import {
  Baby,
  MonitorCheck,
  Heart,
  Stethoscope,
  Activity,
  HeartHandshake,
  Flower2,
  Shield,
  CircleDot,
  Layers,
  ArrowRight,
  AlertCircle,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const iconMap: Record<string, React.ElementType> = {
  Baby,
  MonitorCheck,
  Heart,
  Stethoscope,
  Activity,
  HeartHandshake,
  Flower2,
  Shield,
  CircleDot,
  Layers,
  AlertCircle,
};

const services = [
  { id: 'gebelik-takibi', icon: 'Baby', colorClass: 'bg-pink-100 text-pink-500' },
  { id: 'detayli-ultrason', icon: 'MonitorCheck', colorClass: 'bg-purple-100 text-purple-500' },
  { id: 'dogum', icon: 'Heart', colorClass: 'bg-red-100 text-red-500' },
  { id: 'kurtaj', icon: 'AlertCircle', colorClass: 'bg-slate-100 text-slate-600' },
  { id: 'jinekoloji', icon: 'Stethoscope', colorClass: 'bg-blue-100 text-blue-500' },
  { id: 'urojinekoloji', icon: 'Activity', colorClass: 'bg-green-100 text-green-500' },
  { id: 'kisirlik-tedavisi', icon: 'HeartHandshake', colorClass: 'bg-rose-100 text-rose-500' },
  { id: 'menopoz', icon: 'Flower2', colorClass: 'bg-violet-100 text-violet-500' },
  { id: 'rahim-hastaliklari', icon: 'Shield', colorClass: 'bg-cyan-100 text-cyan-500' },
  { id: 'over-hastaliklari', icon: 'CircleDot', colorClass: 'bg-teal-100 text-teal-500' },
  { id: 'pelvik-taban', icon: 'Layers', colorClass: 'bg-indigo-100 text-indigo-500' },
];

const serviceKeyMap: Record<string, string> = {
  'gebelik-takibi': 'pregnancy',
  'detayli-ultrason': 'ultrasound',
  'dogum': 'birth',
  'kurtaj': 'kurtaj',
  'jinekoloji': 'gynecology',
  'urojinekoloji': 'urogynecology',
  'kisirlik-tedavisi': 'infertility',
  'menopoz': 'menopause',
  'rahim-hastaliklari': 'uterine',
  'over-hastaliklari': 'ovarian',
  'pelvik-taban': 'pelvic',
};

export default function ServicesGrid() {
  const t = useTranslations('services');

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            const key = serviceKeyMap[service.id];

            return (
              <Link
                key={service.id}
                href={`/hizmetler/${service.id}` as '/hizmetler'}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${service.colorClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t(`${key}.title`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {t(`${key}.desc`)}
                </p>
                <span className="inline-flex items-center gap-1 text-primary-500 font-medium text-sm group-hover:gap-2 transition-all">
                  {t('learnMore')}
                  <ArrowRight size={16} />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 btn-primary"
          >
            {t('viewAll')}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
