import HeroSlider from '@/components/home/HeroSlider';
import Features from '@/components/home/Features';
import AboutPreview from '@/components/home/AboutPreview';
import ServicesGrid from '@/components/home/ServicesGrid';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import UpcomingTopics from '@/components/home/UpcomingTopics';
import VideoSection from '@/components/home/VideoSection';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <Features />
      <AboutPreview />
      <ServicesGrid />
      <TestimonialsCarousel />
      <UpcomingTopics />
      <VideoSection />
      <CTASection />
    </>
  );
}
