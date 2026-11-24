import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Check, ChevronRight, X } from 'lucide-react';

interface ServiceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  details: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: '01.',
    title: 'Dancer',
    subtitle: 'Traditional Balinese · Contemporary · Fire & LED · Stage Choreography',
    description:
      'Our talented dancers specialize in a variety of dance styles, showcasing the beauty and artistry of each.',
    highlights: [
      'Traditional Balinese & Indonesian cultural ensembles',
      'Contemporary, modern, and theatrical gala performances',
      'Synchronized LED, fire, and custom corporate opener shows',
      'Choreographed routines tailored to venue layout and theme',
    ],
    details:
      'From intimate luxury resort dinners to large national corporate galas and government ceremonies, our resident dancers deliver disciplined choreography, expressive stage presence, and cohesive visual storytelling.',
  },
  {
    number: '02.',
    title: 'Band & Live Music',
    subtitle: 'Band Performers · Music Equipment · Sound Systems · Lighting & Generators',
    description:
      'Band Performers and Music Equipment, Sound System',
    highlights: [
      'Full live bands, acoustic ensembles, and solo vocalists',
      'Professional sound systems, backline instruments, and audio engineering',
      'Stage lighting rigs, power generators, and technical crew',
      'Bilingual event MCs ready to guide program pacing and guest energy',
    ],
    details:
      'We pair seasoned musicians and charismatic MCs with reliable technical infrastructure—including sound systems, stage lighting, and backup generators—so your event runs smoothly indoors or outdoors.',
  },
  {
    number: '03.',
    title: 'Costume',
    subtitle: 'Custom Wardrobe · Traditional & Thematic Rent · Wardrobe Styling',
    description:
      'We provide for Costume Rent for you!',
    highlights: [
      'Traditional Indonesian & Balinese ceremonial dance attire',
      'Thematic gala, carnival, and contemporary performance costumes',
      'Accessories, headpieces, and custom stage properties',
      'Pre-event sizing, styling coordination, and garment maintenance',
    ],
    details:
      'Curated by our Costume Director and Art Director team, our wardrobe collection supports individual performers, corporate talent groups, and themed productions seeking stage-ready visual impact.',
  },
  {
    number: '04.',
    title: 'Consulting',
    subtitle: 'Free Consultation · Concept Planning · Talent & Technical Budgeting',
    description:
      'Free Consultation With Professional!',
    highlights: [
      'Complimentary initial concept & entertainment briefing',
      'Talent lineup recommendations matched to audience and venue',
      'Technical assessment for sound, lighting, and generator capacity',
      'Transparent scheduling and cooperation options for corporate & government events',
    ],
    details:
      'Speak directly with our Bali management and creative direction team to map out your event rundown, entertainment flow, and production requirements before locking in your booking.',
  },
];

interface HomeOverviewProps {
  onBookService: (serviceTitle?: string) => void;
  onOpenDancerPage: () => void;
}

export const HomeOverview: React.FC<HomeOverviewProps> = ({
  onBookService,
  onOpenDancerPage,
}) => {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    if (!activeService) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveService(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeService]);

  return (
    <section
      id="services"
      aria-label="Our Services"
      className="bg-[#050505] border-t border-white/10 py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-[0.2em] text-[#D4AF37] uppercase mb-3">
              Our Services
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white [text-wrap:balance]">
              Entertainment Talent, Stage Equipment & Live Production
            </h2>
            <p className="mt-4 text-[15px] sm:text-base leading-[1.7] text-white/75 max-w-[70ch]">
              Sevenpro Entertainment provides a variety of services to meet your event
              needs, including professional dancers, event equipment such as lighting,
              generators, and sound systems. Additionally, we offer live music bands and
              MCs ready to entertain your guests and make your event unforgettable.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onBookService('Proposal & Konsultasi Event')}
            className="self-start lg:self-auto inline-flex items-center gap-2 border border-white/20 hover:border-[#D4AF37]/70 bg-[#0B0B0D] hover:bg-[#141418] px-5 py-3 text-sm font-medium text-white transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <span>Request Event Proposal</span>
            <ArrowUpRight className="h-4 w-4 text-[#D4AF37]" />
          </button>
        </div>

        {/* 4 Core Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <article
              key={service.number}
              className="group flex flex-col justify-between bg-[#0B0B0D] border border-white/10 hover:border-[#D4AF37]/45 p-7 md:p-8 transition-colors duration-200"
            >
              <div>
                <div className="flex items-baseline justify-between gap-4 mb-4">
                  <span className="font-mono tabular-nums text-sm text-[#D4AF37]">
                    {service.number}
                  </span>
                  <span className="text-xs text-white/45">
                    Bali & Indonesia
                  </span>
                </div>

                <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-xs text-white/50 tracking-wide">
                  {service.subtitle}
                </p>

                <p className="mt-5 text-[15px] leading-relaxed text-white/80 max-w-[54ch]">
                  {service.description}
                </p>
              </div>

              <div className="mt-7 pt-5 border-t border-white/10 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => {
                    if (service.title === 'Dancer') {
                      onOpenDancerPage();
                    } else {
                      setActiveService(service);
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-[#E5C158] transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  <span>Read More</span>
                  <ChevronRight className="h-4 w-4 text-[#D4AF37] transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onBookService(service.title)}
                  className="text-xs font-medium text-white/55 hover:text-white inline-flex items-center gap-1 transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Quantitative Proof Strip */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 border border-white/10 bg-[#08080A] divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          <div className="p-6 md:p-8">
            <p className="font-display tabular-nums text-2xl md:text-3xl font-semibold text-white">
              150+
            </p>
            <p className="mt-1.5 text-sm text-white/60">
              Live stage & gala productions across Bali
            </p>
          </div>
          <div className="p-6 md:p-8">
            <p className="font-display tabular-nums text-2xl md:text-3xl font-semibold text-white">
              40+
            </p>
            <p className="mt-1.5 text-sm text-white/60">
              Resident dancers, musicians & technical crew
            </p>
          </div>
          <div className="p-6 md:p-8">
            <p className="font-display tabular-nums text-2xl md:text-3xl font-semibold text-white">
              24h
            </p>
            <p className="mt-1.5 text-sm text-white/60">
              Turnaround for custom talent concepts & quotes
            </p>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-detail-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveService(null);
          }}
        >
          <div className="relative w-full max-w-lg bg-[#0B0B0D] border border-white/15 p-6 sm:p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveService(null)}
              aria-label="Close service details"
              className="absolute top-5 right-5 p-2 text-white/60 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <X className="h-5 w-5" />
            </button>

            <p className="font-mono tabular-nums text-xs tracking-[0.18em] text-[#D4AF37] uppercase mb-2">
              {activeService.number} Sevenpro Service
            </p>
            <h3
              id="service-detail-title"
              className="font-display text-2xl font-semibold text-white mb-2"
            >
              {activeService.title}
            </h3>
            <p className="text-xs text-white/50 mb-5">{activeService.subtitle}</p>
            <p className="text-sm leading-relaxed text-white/80 mb-6">
              {activeService.details}
            </p>

            <ul className="space-y-2.5 mb-7 border-t border-white/10 pt-5">
              {activeService.highlights.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-white/80">
                  <Check className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="px-4 py-2.5 text-sm text-white/65 hover:text-white transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = activeService.title;
                  setActiveService(null);
                  onBookService(title);
                }}
                className="bg-[#D4AF37] hover:bg-[#E5C158] text-black font-semibold text-sm px-6 py-2.5 transition-colors cursor-pointer whitespace-nowrap inline-flex items-center gap-1.5"
              >
                <span>Book {activeService.title}</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
