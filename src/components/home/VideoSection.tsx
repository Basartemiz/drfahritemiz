'use client';

import { useState, useRef } from 'react';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { Play, X, Pause, Volume2, VolumeX } from 'lucide-react';

export default function VideoSection() {
  const locale = useLocale();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const title = locale === 'tr' ? 'Muayenehanemizi Tanıyın' : 'Meet Our Clinic';
  const subtitle = locale === 'tr'
    ? 'Modern ekipmanlarımız ve rahat ortamımız ile tanışın'
    : 'Discover our modern equipment and comfortable environment';

  const handlePlay = () => {
    setIsPlaying(true);
    setIsPaused(false);
  };

  const handleClose = () => {
    setIsPlaying(false);
    setIsPaused(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
        setIsPaused(false);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Video container */}
        <div className="relative max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden bg-gray-800">
          {!isPlaying ? (
            <>
              {/* Thumbnail */}
              <Image
                src="/images/dr-fahri-temiz-ultrasound.jpg"
                alt={locale === 'tr' ? 'Muayenehane Tanıtımı' : 'Clinic Introduction'}
                fill
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />
              {/* Play button */}
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Play video"
              >
                <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center group-hover:bg-primary-600 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>
              </button>
            </>
          ) : (
            <div className="relative w-full h-full">
              <video
                ref={videoRef}
                src="/videos/video-1.mp4"
                className="w-full h-full object-cover"
                autoPlay
                playsInline
                onEnded={() => {
                  setIsPlaying(false);
                  setIsPaused(false);
                }}
              />

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handlePlayPause}
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    {isPaused ? (
                      <Play className="w-5 h-5 text-white ml-0.5" />
                    ) : (
                      <Pause className="w-5 h-5 text-white" />
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
              </div>

              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
