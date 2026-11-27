import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight, MessageSquare, Sparkles } from 'lucide-react';

interface HeroSlide {
  src: string;
  alt: string;
  objectPosition?: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    src: 'https://res.cloudinary.com/ypvr42cl/image/upload/f_auto,q_auto/v1795350363/5aaa181d-4a58-499f-8020-731045e30bc0.png',
    alt: 'Sevenpro Entertainment performers in dramatic red and gold stage choreography in Bali',
    objectPosition: 'object-center',
  },
  {
    src: 'https://res.cloudinary.com/ypvr42cl/image/upload/f_auto,q_auto/v1795350365/ff9c2288-622d-47a9-9a6d-cde05e571719.png',
    alt: 'Sevenpro Entertainment live stage production and dancer ensemble performance',
    objectPosition: 'object-center',
  },
  {
    src: 'https://res.cloudinary.com/ypvr42cl/image/upload/f_auto,q_auto/v1795353892/0306fd78-3d5f-4bc1-9746-5693c1fd5946.png',
    alt: 'Asmara Surya Ratih Balinese mythological ensemble choreography by Sevenpro Entertainment',
    objectPosition: 'object-[50%_30%]',
  },
  {
    src: 'https://res.cloudinary.com/ypvr42cl/image/upload/f_auto,q_auto/v1795354037/8d419c3d-5ef0-4e10-bed2-9e85b2d56275.png',
    alt: 'Dewi Langit celestial blue fan and theatrical light dance show in Bali',
    objectPosition: 'object-[50%_30%]',
  },
  {
    src: 'https://res.cloudinary.com/ypvr42cl/image/upload/f_auto,q_auto/v1795354000/6f541b40-8c3c-4fd0-8f51-69981524aeec.png',
    alt: 'Fire Dance flame choreography for resort stages and outdoor galas in Bali',
    objectPosition: 'object-[50%_25%]',
  },
  {
    src: 'https://res.cloudinary.com/ypvr42cl/image/upload/f_auto,q_auto/v1795448459/9d9c9fac-0b2f-475e-a73b-e70d31f432f1.png',
    alt: 'Eight-dancer traditional and contemporary stage formation by Sevenpro Entertainment',
    objectPosition: 'object-[50%_28%]',
  },
];

const ROTATION_INTERVAL_MS = 5500;

interface HeroSectionProps {
  onOurServicesClick: () => void;
  onOpenBooking: (topic?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOurServicesClick,
  onOpenBooking,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [failedSlides, setFailedSlides] = useState<Record<number, boolean>>({});
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, ROTATION_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    const nextIndex = (currentIndex + 1) % HERO_SLIDES.length;
    const preloader = new Image();
    preloader.referrerPolicy = 'no-referrer';
    preloader.src = HERO_SLIDES[nextIndex].src;
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handleImageError = (index: number) => {
    setFailedSlides((prev) => ({ ...prev, [index]: true }));
  };

  const activeSlide = HERO_SLIDES[currentIndex];
  const hasImageError = Boolean(failedSlides[currentIndex]);

  return (
    <section
      id="home"
      aria-label="Sevenpro Entertainment Hero Showcase"
      className="relative w-full h-[calc(100vh-72px)] min-h-[580px] max-h-[960px] overflow-hidden bg-[#050505]"
    >
      {/* Rotating Full-Bleed Stage Background */}
      <div className="absolute inset-0 bg-[#070709]">
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: shouldReduceMotion ? 0.15 : 0.9, ease: [0.16, 1, 0.3, 1] },
              scale: { duration: shouldReduceMotion ? 0 : 6.2, ease: 'easeOut' },
            }}
            className="absolute inset-0"
          >
            {!hasImageError ? (
              <img
                src={activeSlide.src}
                alt={activeSlide.alt}
                referrerPolicy="no-referrer"
                onError={() => handleImageError(currentIndex)}
                className={`h-full w-full object-cover ${activeSlide.objectPosition || 'object-center'} select-none`}
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.18),_rgba(5,5,5,0.98)_70%)] text-center px-6">
                <Sparkles className="h-10 w-10 text-[#D4AF37]/70 mb-3" />
                <p className="font-display text-lg text-white/80">Sevenpro Entertainment Stage</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Measured Contrast Scrims for WCAG AA Legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/45"
        />
      </div>

      {/* Top-Right Slide Counter & Controls */}
      <div
        className="absolute top-5 right-6 md:top-6 md:right-8 z-20 flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/15 px-2.5 py-1.5"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous hero image"
          className="p-1 text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] cursor-pointer"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
        </button>
        <span className="font-mono tabular-nums text-xs tracking-wider text-white/95 px-1 select-none">
          {currentIndex + 1}/{HERO_SLIDES.length}
        </span>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next hero image"
          className="p-1 text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] cursor-pointer"
        >
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Foreground Content Container */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-14 sm:px-10 md:px-16 md:pb-20">
        <div className="max-w-[460px]">
          {/* Primary Agency Positioning Copy */}
          <h1 className="font-sans text-[17px] sm:text-[19px] md:text-[21px] leading-[1.55] font-normal tracking-[0.01em] text-white/95 [text-wrap:balance] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Sevenpro Entertainment is Agency For Dancer and Any Entertainment Events Based In Bali, Indonesia
          </h1>

          {/* Primary Action Button */}
          <div className="mt-6">
            <button
              type="button"
              onClick={onOurServicesClick}
              className="group inline-flex items-center gap-3 bg-[#08080A]/90 hover:bg-[#141418] border border-white/20 hover:border-[#D4AF37]/70 px-6 py-3.5 text-sm font-medium tracking-wide text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] cursor-pointer whitespace-nowrap"
            >
              <span>Our Services</span>
              <ChevronRight className="h-4 w-4 text-white/80 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#E5C158]" />
            </button>
          </div>

          {/* Subtle Slide Progress Indicators */}
          <div
            className="mt-8 flex items-center gap-2.5"
            role="tablist"
            aria-label="Hero slide selection"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {HERO_SLIDES.map((_, idx) => {
              const active = idx === currentIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-label={`Show stage photo ${idx + 1}`}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-[3px] transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                    active ? 'w-10 bg-[#D4AF37]' : 'w-5 bg-white/30 hover:bg-white/60'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Right-Edge Vertical Social Media Stack */}
      <aside
        aria-label="Social media channels"
        className="absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-5"
      >
        {/* Instagram */}
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Sevenpro Entertainment on Instagram"
          className="p-1.5 text-white/85 hover:text-[#E5C158] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Sevenpro Entertainment on TikTok"
          className="p-1.5 text-white/85 hover:text-[#E5C158] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07Z" />
          </svg>
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Sevenpro Entertainment on YouTube"
          className="p-1.5 text-white/85 hover:text-[#E5C158] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
          </svg>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Sevenpro Entertainment on Facebook"
          className="p-1.5 text-white/85 hover:text-[#E5C158] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z" />
          </svg>
        </a>
      </aside>

      {/* Bottom-Right Floating Booking Form Button */}
      <button
        type="button"
        onClick={() => onOpenBooking('Konsultasi & Booking Event')}
        aria-label="Open event booking form"
        className="absolute bottom-6 right-5 sm:right-6 md:bottom-8 md:right-8 z-20 flex h-12 w-12 items-center justify-center bg-[#08080A]/95 hover:bg-[#141418] border border-white/20 hover:border-[#D4AF37]/70 text-white shadow-2xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] cursor-pointer"
      >
        <MessageSquare className="h-5 w-5 fill-white text-white" />
      </button>
    </section>
  );
};
