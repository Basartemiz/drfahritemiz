'use client';

import { useState, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { Play, X, Pause, Volume2, VolumeX } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const videos = [
  {
    id: 1,
    titleTr: 'Ultrason Görüntüleme',
    titleEn: 'Ultrasound Imaging',
    src: '/videos/video-1.mp4',
    thumbnail: '/images/dr-fahri-temiz-ultrasound.jpg',
  },
  {
    id: 2,
    titleTr: 'Ameliyat Kayıtları',
    titleEn: 'Surgery Records',
    src: '/videos/video-2.mp4',
    thumbnail: '/images/surgery-team.jpg',
  },
  {
    id: 3,
    titleTr: 'Klinik Tanıtımı',
    titleEn: 'Clinic Introduction',
    src: '/videos/video-3.mp4',
    thumbnail: '/images/clinic-exterior-2.jpg',
  },
];

export default function VideosPage() {
  const t = useTranslations('gallery');
  const locale = useLocale();
  const [playingVideo, setPlayingVideo] = useState<typeof videos[0] | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleClose = () => {
    setPlayingVideo(null);
    setIsPlaying(false);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-20">
        <div className="container-custom">
          <SectionHeading title={t('title')} subtitle={t('subtitle')} />

          {/* Tabs */}
          <div className="flex justify-center gap-4 mt-8">
            <Link
              href="/galeri"
              className="px-6 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors"
            >
              {t('photos')}
            </Link>
            <Link
              href="/galeri/videolar"
              className="px-6 py-2 rounded-full bg-primary-500 text-white font-medium"
            >
              {t('videos')}
            </Link>
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group"
              >
                <div className="relative aspect-video">
                  <Image
                    src={video.thumbnail}
                    alt={locale === 'tr' ? video.titleTr : video.titleEn}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  <button
                    onClick={() => {
                      setPlayingVideo(video);
                      setIsPlaying(true);
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-600 hover:scale-110 transition-all duration-300 shadow-lg">
                      <Play className="w-6 h-6 text-white ml-1" fill="white" />
                    </div>
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">
                    {locale === 'tr' ? video.titleTr : video.titleEn}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {playingVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-20"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="w-full max-w-5xl mx-4">
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
              <video
                ref={videoRef}
                src={playingVideo.src}
                className="w-full h-full"
                autoPlay
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              />

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handlePlayPause}
                      className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 text-white" />
                      ) : (
                        <Play className="w-5 h-5 text-white ml-0.5" />
                      )}
                    </button>
                    <button
                      onClick={handleMute}
                      className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5 text-white" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-white" />
                      )}
                    </button>
                  </div>
                  <p className="text-white font-medium">
                    {locale === 'tr' ? playingVideo.titleTr : playingVideo.titleEn}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
