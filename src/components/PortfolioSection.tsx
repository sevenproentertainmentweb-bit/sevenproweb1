import React, { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Expand, Flame, X } from 'lucide-react';

interface PortfolioProject {
  id: string;
  number: string;
  title: string;
  projectType: string;
  date: string;
  location: string;
  paragraphs: string[];
  highlights: string;
  images: { src: string; alt: string }[];
}

const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'fire-collaboration',
    number: '01.',
    title: 'Fire Collaboration',
    projectType: 'Dance',
    date: '20 Feb 2026',
    location: 'Bali',
    paragraphs: [
      'Sebuah pertunjukan spektakuler yang memadukan koreografi tari kreasi, teknik acrobalance, dan permainan elemen api dalam satu harmoni yang memukau. Fire Collaboration bukan sekadar pertunjukan, tetapi sebuah pengalaman visual yang menghadirkan energi, keberanian, dan keindahan dalam setiap gerakan.',
      'Perpaduan dinamika tubuh para penari dengan kekuatan api menciptakan komposisi yang dramatis dan penuh adrenalin. Gerakan yang presisi berpadu dengan permainan properti api seperti fire staff, fire cube, hingga instalasi api besar, menghasilkan atmosfer megah yang mampu memikat perhatian sejak detik pertama.',
    ],
    highlights: 'Koreografi Tari Kreasi · Teknik Acrobalance · Fire Staff · Fire Cube · Instalasi Api Besar',
    images: [
      {
        src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795446984/c9f68095-f44a-4c1d-9cd7-81cdc676c2cd.png',
        alt: 'Fire Collaboration — Pertunjukan koreografi tari dan permainan api di Bali (1)',
      },
      {
        src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795446988/8d0fe6fb-7567-431c-b0cb-022defda2012.png',
        alt: 'Fire Collaboration — Aksi teknik acrobalance dan properti fire staff (2)',
      },
      {
        src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795446995/0fe8fdb6-7663-43bd-b4b9-f5917d90fa17.png',
        alt: 'Fire Collaboration — Komposisi visual fire cube dan penari panggung (3)',
      },
      {
        src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795447008/ad7dbd9d-82d1-4ec5-bc52-57bc8d472ec7.png',
        alt: 'Fire Collaboration — Instalasi api besar dan klimaks pertunjukan malam di Bali (4)',
      },
    ],
  },
  {
    id: 'dewi-langit',
    number: '02.',
    title: 'DEWI LANGIT',
    projectType: 'Dance',
    date: 'Februari 2026',
    location: 'Bali',
    paragraphs: [
      'Tarian Dewi Langit adalah pertunjukan tari kreasi yang terinspirasi dari keindahan dan ketenangan langit, ditampilkan dengan kostum biru elegan yang melambangkan kedalaman dan harmoni.',
      'Gerakan penari yang lembut dan mengalir dipadukan dengan kipas biru panjang sebagai simbol angin dan awan, serta bola lampu biru yang merepresentasikan cahaya bintang dan energi langit, menciptakan suasana magis, anggun, dan memukau untuk pertunjukan eksklusif.',
    ],
    highlights: 'Kostum Biru Elegan · Kipas Biru Panjang · Bola Lampu Biru · Tari Kreasi Eksklusif',
    images: [
      {
        src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795354037/8d419c3d-5ef0-4e10-bed2-9e85b2d56275.png',
        alt: 'DEWI LANGIT — Tarian kreasi kostum biru elegan dengan kipas panjang dan bola lampu biru',
      },
    ],
  },
  {
    id: 'chinese-new-year',
    number: '03.',
    title: 'Chinese New Year',
    projectType: 'Dance',
    date: 'February 2026',
    location: 'Bali',
    paragraphs: [
      'Pertunjukan tari tematik perayaan Tahun Baru Imlek yang menggabungkan koreografi kipas dan selendang klasik dengan balutan kostum merah keemasan yang megah serta penuh semangat.',
      'Dirancang khusus untuk menyemarakkan acara gala dinner resort, perayaan korporat, dan panggung hiburan Imlek di Bali dengan formasi penari yang harmonis dan tata visual panggung yang semarak.',
    ],
    highlights: 'Koreografi Tari Imlek · Properti Kipas & Selendang · Kostum Merah Keemasan',
    images: [
      {
        src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795355709/50e1caef-7e77-4dfa-a518-51444d29c6c3.png',
        alt: 'Chinese New Year — Penampilan tari perayaan Imlek Sevenpro Entertainment (1)',
      },
      {
        src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795447367/784e57ac-a3a1-4170-a751-8b345d063922.png',
        alt: 'Chinese New Year — Koreografi formasi dan kostum tematik Imlek di Bali (2)',
      },
    ],
  },
  {
    id: 'lamp-dance',
    number: '04.',
    title: 'Lamp Dance',
    projectType: 'Dance',
    date: 'Februari 2026',
    location: 'Bali',
    paragraphs: [
      'Pertunjukan tari kreasi yang menghadirkan permainan cahaya lentera dan lampu panggung yang lembut, memadukan keanggunan gerak tubuh penari dengan atmosfer visual yang hangat serta intim.',
      'Ideal untuk pembukaan gala dinner, resepsi malam di tepi pantai, maupun acara eksklusif yang mengutamakan kesan artistik, elegan, dan berkelas sejak momen pertama.',
    ],
    highlights: 'Tari Kreasi Cahaya · Properti Lentera & Lampu Panggung · Gala & Resepsi Malam',
    images: [
      {
        src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795448051/0d92f93a-8790-41cc-92f9-9495711b92de.png',
        alt: 'Lamp Dance — Pertunjukan tari kreasi dengan properti lampu artistik di Bali (1)',
      },
      {
        src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795448122/b4233f2b-7194-40ac-b384-559a4a224802.png',
        alt: 'Lamp Dance — Koreografi ensemble cahaya dan kostum panggung elegan (2)',
      },
      {
        src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795355724/f8b12ce0-2d88-4d39-a5a5-6810e05f30cb.png',
        alt: 'Lamp Dance — Pertunjukan tari kreasi cahaya lampu panggung di Bali (3)',
      },
    ],
  },
  {
    id: 'acrobalance',
    number: '05.',
    title: 'Acrobalance',
    projectType: 'Dance',
    date: 'Februari 2026',
    location: 'Bali',
    paragraphs: [
      'Pertunjukan akrobatik berpasangan yang mengutamakan kekuatan, keseimbangan presisi, dan kelenturan tubuh dalam rangkaian formasi artistik di atas panggung.',
      'Setiap transisi gerakan dirancang dengan kontrol tinggi dan estetika teatrikal, menjadikannya suguhan utama yang memukau untuk acara korporat, peluncuran produk, maupun perayaan eksklusif.',
    ],
    highlights: 'Akrobatik Keseimbangan · Koreografi Berpasangan · Formasi Panggung Eksklusif',
    images: [
      {
        src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795355750/fa94c44d-3b53-4e0c-9460-3f65be235864.png',
        alt: 'Acrobalance — Formasi akrobatik keseimbangan panggung Sevenpro Entertainment (1)',
      },
      {
        src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795448298/856dfa54-2a98-423c-8981-450943c14524.png',
        alt: 'Acrobalance — Gerakan keseimbangan berpasangan dengan pencahayaan dramatis (2)',
      },
      {
        src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795448304/97ac3d3c-40a8-4ff9-8eea-3d5be1303c32.png',
        alt: 'Acrobalance — Pose akrobatik presisi untuk acara gala di Bali (3)',
      },
      {
        src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795448366/cea591a8-7911-4248-9ea6-48339fa1b2ea.png',
        alt: 'Acrobalance — Komposisi tubuh dan kekuatan panggung Sevenpro Entertainment (4)',
      },
    ],
  },
  {
    id: 'asmara-surya-ratih',
    number: '06.',
    title: 'ASMARA SURYA RATIH',
    projectType: 'Dance',
    date: 'February 2026',
    location: 'Bali',
    paragraphs: [
      'Tarian ini mengisahkan cinta abadi antara Dewa Surya, penguasa matahari, dan Dewi Ratih, sang dewi bulan. Surya melambangkan cahaya dan kekuatan, sementara Ratih merepresentasikan ketenangan dan keindahan. Pertemuan keduanya menciptakan harmoni alam melalui siklus siang dan malam.',
      'Pertunjukan ini dibawakan oleh 8 penari (4 perempuan dan 4 laki-laki) dengan perpaduan gerak keras dan halus yang dikemas dalam tari kreasi, menghadirkan sajian yang megah dan indah.',
    ],
    highlights: '8 Penari (4 Perempuan & 4 Laki-laki) · Gerak Keras & Halus · Tari Kreasi Bali',
    images: [
      {
        src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795448459/9d9c9fac-0b2f-475e-a73b-e70d31f432f1.png',
        alt: 'ASMARA SURYA RATIH — Kisah Dewa Surya dan Dewi Ratih oleh 8 penari Bali (1)',
      },
      {
        src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795448465/275d39a4-d365-437a-95c9-77c4642e1463.png',
        alt: 'ASMARA SURYA RATIH — Formasi tari kreasi gerak keras dan halus Sevenpro Entertainment (2)',
      },
    ],
  },
  {
    id: 'salsa-dance',
    number: '07.',
    title: 'SALSA DANCE',
    projectType: 'Fotografi',
    date: 'April 2023',
    location: 'Bali',
    paragraphs: [
      'Salsa is more than just a dance; it is a vibrant, high-energy celebration of rhythm and culture. Originating from a fusion of Cuban (Son and Afro-Cuban) and Puerto Rican influences, it evolved significantly in the melting pot of New York City during the 1960s and 70s.',
      'Salsa music is characterized by its complex percussion. The heartbeat of the dance is the Clave rhythm, usually played on two wooden sticks. Most Salsa is written in 4/4 time, but the dance follows a specific eight-count phrase.',
    ],
    highlights: 'Salsa Partner Choreography · Clave Rhythm · 4/4 Time Eight-Count Phrase',
    images: [
      {
        src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795355772/66cfc946-da87-4dd6-a83e-8d119d207a51.png',
        alt: 'SALSA DANCE — Penampilan tari Salsa penuh energi Sevenpro Entertainment (1)',
      },
      {
        src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795448531/85006221-eb7f-4d35-8463-e7c38f5283ba.png',
        alt: 'SALSA DANCE — Dokumentasi fotografi koreografi Salsa berpasangan di Bali (2)',
      },
    ],
  },
];

interface PortfolioSectionProps {
  onBookProject: (projectTitle: string) => void;
}

interface LightboxState {
  project: PortfolioProject;
  index: number;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onBookProject }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const visibleProjects =
    selectedFilter === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.id === selectedFilter);

  useEffect(() => {
    if (!lightbox) return;
    const total = lightbox.project.images.length;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightbox(null);
      } else if (e.key === 'ArrowRight') {
        setLightbox((prev) =>
          prev ? { ...prev, index: (prev.index + 1) % total } : null
        );
      } else if (e.key === 'ArrowLeft') {
        setLightbox((prev) =>
          prev ? { ...prev, index: (prev.index - 1 + total) % total } : null
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox]);

  const handleSelectFilter = (filterId: string) => {
    setSelectedFilter(filterId);
    setLightbox(null);
  };

  return (
    <section
      id="portofolio"
      aria-label="Portofolio Sevenpro Entertainment"
      className="bg-[#070709] border-t border-white/10 py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col gap-6 pb-10 border-b border-white/10">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-[#D4AF37] uppercase mb-3">
              Portofolio
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white [text-wrap:balance]">
              Featured Productions & Live Stage Works
            </h2>
          </div>

          {/* Interactive Project Filter (Default: All) */}
          <div
            className="flex flex-wrap items-center gap-2"
            role="tablist"
            aria-label="Filter portfolio projects"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedFilter === 'all'}
              onClick={() => handleSelectFilter('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium border transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                selectedFilter === 'all'
                  ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                  : 'bg-[#0B0B0D] text-white/75 border-white/15 hover:text-white hover:border-white/35'
              }`}
            >
              All
            </button>

            {PORTFOLIO_PROJECTS.map((project) => {
              const isSelected = selectedFilter === project.id;
              return (
                <button
                  key={project.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleSelectFilter(project.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium border transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                    isSelected
                      ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                      : 'bg-[#0B0B0D] text-white/75 border-white/15 hover:text-white hover:border-white/35'
                  }`}
                >
                  <span className="font-mono tabular-nums mr-1.5 opacity-75">
                    {project.number}
                  </span>
                  {project.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Vertical Stacked Projects Showcase */}
        <div className="mt-12 space-y-16 md:space-y-20">
          {visibleProjects.map((project, projectIdx) => (
            <article
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start ${
                projectIdx > 0 ? 'pt-16 md:pt-20 border-t border-white/10' : ''
              }`}
            >
              {/* Left Column: Project Metadata & Story */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="flex items-center gap-2.5 text-xs font-mono tabular-nums text-[#D4AF37] mb-3">
                  <span>{project.number}</span>
                  <span aria-hidden="true">/</span>
                  <span>Selected Production</span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                  {project.title}
                </h3>

                {/* Unboxed Metadata Grid */}
                <dl className="mt-7 grid grid-cols-3 gap-4 py-5 border-y border-white/10">
                  <div>
                    <dt className="text-[11px] font-medium tracking-[0.14em] text-white/50 uppercase">
                      Jenis proyek
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium text-white">
                      {project.projectType}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-medium tracking-[0.14em] text-white/50 uppercase">
                      Tanggal
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium tabular-nums text-white">
                      {project.date}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-medium tracking-[0.14em] text-white/50 uppercase">
                      Lokasi
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium text-white">
                      {project.location}
                    </dd>
                  </div>
                </dl>

                {/* Narrative Copy */}
                <div className="mt-7 space-y-4 text-[15px] leading-[1.75] text-white/80">
                  {project.paragraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Clean Unboxed Elements Line */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="text-[11px] font-medium tracking-[0.14em] text-white/50 uppercase mb-1.5">
                    Elemen & Properti
                  </p>
                  <p className="text-xs sm:text-sm text-[#E5C158] leading-relaxed">
                    {project.highlights}
                  </p>
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => onBookProject(`Portofolio — ${project.title}`)}
                    className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#E5C158] px-6 py-3 text-sm font-semibold text-black transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  >
                    <span>Book {project.title}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Interactive Photo Gallery */}
              <div className="lg:col-span-7">
                <div
                  className={`grid gap-4 ${
                    project.images.length === 1
                      ? 'grid-cols-1'
                      : project.images.length === 2 || project.images.length === 3
                        ? 'grid-cols-1 sm:grid-cols-2'
                        : 'grid-cols-1 sm:grid-cols-3'
                  }`}
                >
                  {project.images.map((img, idx) => {
                    const isAcrobalanceLead = project.id === 'acrobalance' && idx === 0;
                    const isLeadThree = idx === 0 && project.images.length === 3;
                    const isLeadFourPlus = idx === 0 && project.images.length >= 4;
                    const aspectClass =
                      project.images.length === 1
                        ? 'aspect-[4/5] sm:aspect-[16/11]'
                        : project.images.length === 2
                          ? 'aspect-[3/4]'
                          : isLeadThree
                            ? 'sm:col-span-2 aspect-[16/10]'
                            : project.images.length === 3
                              ? 'aspect-[4/3]'
                              : isAcrobalanceLead
                                ? 'sm:col-span-3 max-w-[380px] aspect-[3/4]'
                                : isLeadFourPlus
                                  ? 'sm:col-span-3 aspect-[16/10]'
                                  : 'aspect-[4/3]';
                    const hasFailed = Boolean(failedImages[img.src]);
                    return (
                      <button
                        key={img.src}
                        type="button"
                        onClick={() => setLightbox({ project, index: idx })}
                        aria-label={`Open ${project.title} photo ${idx + 1} in lightbox`}
                        className={`${aspectClass} group relative w-full overflow-hidden border border-white/15 hover:border-[#D4AF37]/60 bg-[#0B0B0D] text-left cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]`}
                      >
                        {!hasFailed ? (
                          <img
                            src={img.src}
                            alt={img.alt}
                            referrerPolicy="no-referrer"
                            onError={() =>
                              setFailedImages((prev) => ({ ...prev, [img.src]: true }))
                            }
                            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                        ) : (
                          <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.14),_rgba(11,11,13,0.98)_75%)] p-6 text-center">
                            <Flame className="h-8 w-8 text-[#D4AF37]/70 mb-2" />
                            <span className="font-display text-sm text-white/80">
                              {project.title}
                            </span>
                          </div>
                        )}

                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/85">
                          <span className="font-mono tabular-nums">
                            {String(idx + 1).padStart(2, '0')} / {String(project.images.length).padStart(2, '0')}
                          </span>
                          <span className="inline-flex items-center gap-1 text-white/75 group-hover:text-[#E5C158] transition-colors">
                            <Expand className="h-3.5 w-3.5" />
                            <span>View</span>
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox Viewer */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${lightbox.project.title} gallery viewer`}
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightbox(null);
          }}
        >
          <div className="relative w-full max-w-5xl bg-[#08080A] border border-white/15 p-3 sm:p-4">
            <div className="flex items-center justify-between gap-4 pb-3 px-1">
              <div className="text-xs sm:text-sm text-white/85">
                <span className="font-display font-medium text-white">
                  {lightbox.project.title}
                </span>
                <span className="mx-2 text-white/40">·</span>
                <span className="font-mono tabular-nums text-[#E5C158]">
                  {lightbox.index + 1} / {lightbox.project.images.length}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                aria-label="Close lightbox"
                className="p-1.5 text-white/70 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
              <img
                src={lightbox.project.images[lightbox.index].src}
                alt={lightbox.project.images[lightbox.index].alt}
                referrerPolicy="no-referrer"
                className="h-full w-full object-contain"
              />

              {lightbox.project.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setLightbox((prev) =>
                        prev
                          ? {
                              ...prev,
                              index:
                                (prev.index - 1 + prev.project.images.length) %
                                prev.project.images.length,
                            }
                          : null
                      )
                    }
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center bg-black/75 border border-white/20 hover:border-[#D4AF37] text-white transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setLightbox((prev) =>
                        prev
                          ? {
                              ...prev,
                              index: (prev.index + 1) % prev.project.images.length,
                            }
                          : null
                      )
                    }
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center bg-black/75 border border-white/20 hover:border-[#D4AF37] text-white transition-colors cursor-pointer"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
