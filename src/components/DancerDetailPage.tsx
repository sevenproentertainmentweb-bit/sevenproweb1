import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Sparkles } from 'lucide-react';

type DanceCategory = 'All' | 'Cultural & Heritage' | 'Fire & Acrobatic' | 'Gala & Contemporary';

interface DanceShow {
  id: string;
  number: string;
  title: string;
  category: Exclude<DanceCategory, 'All'>;
  image: string;
  description: string;
}

const DANCE_SHOWS: DanceShow[] = [
  {
    id: 'asmara-surya-ratih',
    number: '01.',
    title: 'ASMARA SURYA RATIH',
    category: 'Cultural & Heritage',
    image:
      'https://res.cloudinary.com/ypvr42cl/image/upload/v1795353892/0306fd78-3d5f-4bc1-9746-5693c1fd5946.png',
    description:
      'Regal classical choreography inspired by Balinese mythology, pairing ornate golden attire with synchronized ensemble storytelling.',
  },
  {
    id: 'fire-dance',
    number: '02.',
    title: 'Fire Dance',
    category: 'Fire & Acrobatic',
    image:
      'https://res.cloudinary.com/ypvr42cl/image/upload/v1795354000/6f541b40-8c3c-4fd0-8f51-69981524aeec.png',
    description:
      'High-energy flame choreography designed for beachfront stages, resort evenings, and dramatic outdoor event climaxes.',
  },
  {
    id: 'dewi-langit',
    number: '03.',
    title: 'DEWI LANGIT',
    category: 'Cultural & Heritage',
    image:
      'https://res.cloudinary.com/ypvr42cl/image/upload/v1795354037/8d419c3d-5ef0-4e10-bed2-9e85b2d56275.png',
    description:
      'Graceful celestial-inspired stage performance combining traditional movement vocabulary with theatrical lighting.',
  },
  {
    id: 'chinese-dance',
    number: '04.',
    title: 'Chinese Dance',
    category: 'Cultural & Heritage',
    image:
      'https://res.cloudinary.com/ypvr42cl/image/upload/v1795355709/50e1caef-7e77-4dfa-a518-51444d29c6c3.png',
    description:
      'Vibrant fan and silk ribbon choreography tailored for Lunar New Year celebrations, themed galas, and cultural showcases.',
  },
  {
    id: 'lamp-dance',
    number: '05.',
    title: 'Lamp Dance',
    category: 'Gala & Contemporary',
    image:
      'https://res.cloudinary.com/ypvr42cl/image/upload/v1795355724/f8b12ce0-2d88-4d39-a5a5-6810e05f30cb.png',
    description:
      'Atmospheric illuminated stage act blending warm lantern visuals and fluid contemporary ensemble movement.',
  },
  {
    id: 'acrobalance',
    number: '06.',
    title: 'Acrobalance',
    category: 'Fire & Acrobatic',
    image:
      'https://res.cloudinary.com/ypvr42cl/image/upload/v1795355750/fa94c44d-3b53-4e0c-9460-3f65be235864.png',
    description:
      'Precision partner acrobatics and sculptural balance sequences crafted as a centerpiece highlight for gala stages.',
  },
  {
    id: 'salsa',
    number: '07.',
    title: 'Salsa',
    category: 'Gala & Contemporary',
    image:
      'https://res.cloudinary.com/ypvr42cl/image/upload/v1795355772/66cfc946-da87-4dd6-a83e-8d119d207a51.png',
    description:
      'Fast-paced Latin partner choreography bringing infectious rhythm and audience interaction to cocktail parties and weddings.',
  },
  {
    id: 'fire-collaboration',
    number: '08.',
    title: 'Fire Collaboration',
    category: 'Fire & Acrobatic',
    image:
      'https://res.cloudinary.com/ypvr42cl/image/upload/v1795355791/997a1118-cbbd-43d0-bbd3-8d705e0160c9.png',
    description:
      'Multi-performer fire fusion combining traditional percussive intensity with coordinated pyrotechnic choreography.',
  },
  {
    id: 'shamadan-dance',
    number: '09.',
    title: 'Shamadan Dance',
    category: 'Cultural & Heritage',
    image:
      'https://res.cloudinary.com/ypvr42cl/image/upload/v1795355794/9250b2a1-cb94-4062-91d1-46fce192a51d.png',
    description:
      'Ornate candelabra balance performance delivering poised, exotic elegance for luxury dinner receptions and themed nights.',
  },
  {
    id: 'jaranan',
    number: '10.',
    title: 'Jaranan',
    category: 'Cultural & Heritage',
    image:
      'https://res.cloudinary.com/ypvr42cl/image/upload/v1795355862/1a6a8fe6-6eef-41a6-b237-b14c8f9f69a9.png',
    description:
      'Dynamic Nusantara folk choreography showcasing rhythmic energy, traditional horse props, and heritage pride.',
  },
  {
    id: 'lady-rose',
    number: '11.',
    title: 'LADY ROSE',
    category: 'Gala & Contemporary',
    image:
      'https://res.cloudinary.com/ypvr42cl/image/upload/v1795356203/a2d079b9-1389-4ec2-96cf-da177f061bd4.png',
    description:
      'Glamorous floral-themed showgirl and contemporary performance designed for luxury brand launches and VIP welcomes.',
  },
  {
    id: 'disco-ball',
    number: '12.',
    title: 'Disco Ball',
    category: 'Gala & Contemporary',
    image:
      'https://res.cloudinary.com/ypvr42cl/image/upload/v1795356229/18f86299-dc8a-49d1-9c0a-0d9554fca0e6.png',
    description:
      'Reflective mirror-costume entertainment engineered to ignite dance floors, afterparties, and countdown celebrations.',
  },
];

const CATEGORIES: DanceCategory[] = [
  'All',
  'Cultural & Heritage',
  'Fire & Acrobatic',
  'Gala & Contemporary',
];

interface DancerDetailPageProps {
  onBack: () => void;
  onBookDance: (danceTitle: string) => void;
}

export const DancerDetailPage: React.FC<DancerDetailPageProps> = ({
  onBack,
  onBookDance,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<DanceCategory>('All');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const visibleShows =
    selectedCategory === 'All'
      ? DANCE_SHOWS
      : DANCE_SHOWS.filter((show) => show.category === selectedCategory);

  return (
    <section
      aria-label="Dance Services Catalog"
      className="bg-[#050505] min-h-[calc(100vh-72px)] py-12 md:py-16"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16">
        {/* Top Back Navigation */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 border border-white/15 hover:border-[#D4AF37]/60 bg-[#0B0B0D] px-4 py-2.5 text-sm font-medium text-white transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <ArrowLeft className="h-4 w-4 text-[#D4AF37]" />
            <span>Back to Our Services</span>
          </button>

          <span className="font-mono tabular-nums text-xs text-white/55">
            {visibleShows.length} Performances Available
          </span>
        </div>

        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-[0.2em] text-[#D4AF37] uppercase mb-3">
              Our Services · Dancer Division
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white [text-wrap:balance]">
              Dance Performances & Choreography Roster
            </h1>
            <p className="mt-4 text-[15px] sm:text-base leading-[1.7] text-white/75 max-w-[66ch]">
              Explore our curated dance productions available for corporate galas,
              government ceremonies, luxury resorts, and private celebrations across Bali
              and Indonesia.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onBookDance('Dancer — Custom Lineup')}
            className="self-start lg:self-auto inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#E5C158] px-6 py-3 text-sm font-semibold text-black transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <span>Request Dance Lineup</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        {/* Interactive Category Filter Controls */}
        <div
          className="mt-8 flex flex-wrap items-center gap-2"
          role="tablist"
          aria-label="Filter dance styles"
        >
          {CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                  active
                    ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                    : 'bg-[#0B0B0D] text-white/75 border-white/15 hover:text-white hover:border-white/30'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Dance Acts Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleShows.map((show) => {
            const hasFailed = Boolean(failedImages[show.id]);
            return (
              <article
                key={show.id}
                className="group flex flex-col bg-[#0B0B0D] border border-white/10 hover:border-[#D4AF37]/50 transition-colors duration-200"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#111114] border-b border-white/10">
                  {!hasFailed ? (
                    <img
                      src={show.image}
                      alt={show.title}
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [show.id]: true }))
                      }
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.14),_rgba(11,11,13,0.98)_75%)] p-6 text-center">
                      <Sparkles className="h-8 w-8 text-[#D4AF37]/70 mb-2" />
                      <span className="font-display text-base text-white/80">
                        {show.title}
                      </span>
                    </div>
                  )}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                  />
                  <span className="absolute bottom-3 left-4 font-mono tabular-nums text-xs text-[#E5C158]">
                    {show.number}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-white/50 mb-1.5">{show.category}</p>
                    <h2 className="font-display text-lg font-semibold tracking-tight text-white">
                      {show.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {show.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => onBookDance(`Dancer — ${show.title}`)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-[#E5C158] transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                    >
                      <span>Book This Performance</span>
                      <ArrowUpRight className="h-4 w-4 text-[#D4AF37]" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
