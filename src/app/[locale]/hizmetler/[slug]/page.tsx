import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocale } from 'next-intl/server';
import {
  Baby,
  MonitorCheck,
  Heart,
  Stethoscope,
  Activity,
  Sparkles,
  HeartHandshake,
  Flower2,
  Shield,
  CircleDot,
  Layers,
  CheckCircle,
  ChevronDown,
  ArrowRight,
  Phone,
  MessageCircle,
  AlertCircle,
} from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { getServiceContent, getServiceData, getAllServiceSlugs } from '@/lib/services-data';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';
import CTASection from '@/components/home/CTASection';
import ServiceDetailClient from './ServiceDetailClient';

const iconMap: Record<string, React.ElementType> = {
  Baby,
  MonitorCheck,
  Heart,
  Stethoscope,
  Activity,
  Sparkles,
  HeartHandshake,
  Flower2,
  Shield,
  CircleDot,
  Layers,
  AlertCircle,
};

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  const locales = ['tr', 'en'];

  return locales.flatMap((locale) =>
    slugs.map((slug) => ({
      locale,
      slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const content = getServiceContent(slug, locale);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://drfahritemiz.com';

  if (!content) {
    return {};
  }

  const isTr = locale === 'tr';
  const locationText = isTr ? 'İzmir Buca' : 'Izmir Buca';

  return {
    title: `${content.title} | ${locationText}`,
    description: isTr
      ? `${locationText}'da ${content.title.toLowerCase()} hizmeti. ${content.subtitle}. Op. Dr. Fahri Temiz - Kadın Hastalıkları ve Doğum Uzmanı.`
      : `${content.title} service in ${locationText}. ${content.subtitle}. Op. Dr. Fahri Temiz - Obstetrician & Gynecologist.`,
    keywords: isTr
      ? [
          content.title.toLowerCase(),
          `${content.title.toLowerCase()} izmir`,
          `${content.title.toLowerCase()} buca`,
          'kadın doğum uzmanı izmir',
          'jinekolog buca',
          'Op. Dr. Fahri Temiz',
        ]
      : [
          content.title.toLowerCase(),
          `${content.title.toLowerCase()} izmir`,
          `${content.title.toLowerCase()} buca`,
          'gynecologist izmir',
          'obstetrician buca',
          'Op. Dr. Fahri Temiz',
        ],
    openGraph: {
      title: `${content.title} | Op. Dr. Fahri Temiz - ${locationText}`,
      description: content.subtitle,
      url: `${baseUrl}/${locale}/hizmetler/${slug}`,
      siteName: 'Op. Dr. Fahri Temiz',
      locale: isTr ? 'tr_TR' : 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${content.title} | Op. Dr. Fahri Temiz`,
      description: content.subtitle,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/hizmetler/${slug}`,
      languages: {
        'tr-TR': `${baseUrl}/tr/hizmetler/${slug}`,
        'en-US': `${baseUrl}/en/hizmetler/${slug}`,
      },
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  const serviceData = getServiceData(slug);
  const content = getServiceContent(slug, locale);

  if (!serviceData || !content) {
    notFound();
  }

  const Icon = iconMap[serviceData.icon];

  return (
    <>
      {/* Hero Section */}
      <section className={`relative py-20 md:py-28 ${serviceData.colorClass}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {content.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {content.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-whatsapp text-white font-semibold rounded-lg hover:bg-green-600 transition-colors shadow-lg"
              >
                <MessageCircle size={20} />
                {locale === 'tr' ? 'WhatsApp ile Randevu' : 'Book via WhatsApp'}
              </a>
              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur text-white font-semibold rounded-lg hover:bg-white/30 transition-colors"
              >
                <Phone size={20} />
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  {locale === 'tr' ? 'Genel Bilgi' : 'Overview'}
                </h2>
                <div className="prose prose-lg max-w-none">
                  {content.longDescription.map((paragraph, index) => (
                    <p key={index} className="text-gray-600 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Procedures */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  {locale === 'tr' ? 'Uygulanan İşlemler' : 'Procedures'}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {content.procedures.map((procedure, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
                    >
                      <div className={`w-10 h-10 ${serviceData.colorClass} rounded-lg flex items-center justify-center mb-4`}>
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {procedure.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {procedure.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  {locale === 'tr' ? 'Sık Sorulan Sorular' : 'Frequently Asked Questions'}
                </h2>
                <ServiceDetailClient faq={content.faq} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Benefits Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4">
                    {locale === 'tr' ? 'Hizmet Özellikleri' : 'Service Features'}
                  </h3>
                  <ul className="space-y-3">
                    {content.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className={`w-5 h-5 ${serviceData.colorClass.replace('bg-', 'text-')} flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Appointment Card */}
                <div className={`${serviceData.colorClass} rounded-2xl p-6 text-white`}>
                  <h3 className="font-bold text-xl mb-2">
                    {locale === 'tr' ? 'Randevu Alın' : 'Book Appointment'}
                  </h3>
                  <p className="text-white/90 text-sm mb-4">
                    {locale === 'tr'
                      ? 'Detaylı bilgi ve randevu için bizimle iletişime geçin.'
                      : 'Contact us for detailed information and appointment.'}
                  </p>
                  <a
                    href={SOCIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>
                </div>

                {/* Related Services */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">
                    {locale === 'tr' ? 'İlgili Hizmetler' : 'Related Services'}
                  </h3>
                  <div className="space-y-3">
                    {content.relatedServices.map((relatedSlug) => {
                      const relatedService = getServiceData(relatedSlug);
                      const relatedContent = getServiceContent(relatedSlug, locale);
                      if (!relatedService || !relatedContent) return null;
                      const RelatedIcon = iconMap[relatedService.icon];

                      return (
                        <Link
                          key={relatedSlug}
                          href={`/hizmetler/${relatedSlug}` as '/hizmetler'}
                          className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                        >
                          <div className={`w-10 h-10 ${relatedService.colorClass} rounded-lg flex items-center justify-center`}>
                            <RelatedIcon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-gray-700 font-medium text-sm">
                            {relatedContent.title}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Services */}
      <section className="pb-16">
        <div className="container-custom">
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            {locale === 'tr' ? 'Tüm Hizmetleri Görüntüle' : 'View All Services'}
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
