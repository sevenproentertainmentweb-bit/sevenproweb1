import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Disc3,
  Expand,
  Flame,
  Globe,
  Image as ImageIcon,
  Layers,
  Lightbulb,
  Music,
  PartyPopper,
  Search,
  Sparkles,
  Users,
  Wand2,
  X,
} from 'lucide-react';
import {
  PORTFOLIO_CATEGORIES,
  type PortfolioCategory,
  type PortfolioItem,
  type PortfolioMedia,
} from '../data/portfolioCatalog';

interface PortfolioSectionProps {
  onBookProject: (projectTitle: string) => void;
}

interface LightboxState {
  categoryTitle: string;
  itemTitle: string;
  images: PortfolioMedia[];
  index: number;
}

function getCategoryIcon(iconKey: PortfolioCategory['iconKey']) {
  switch (iconKey) {
    case 'music':
    case 'band':
      return Music;
    case 'dj':
      return Disc3;
    case 'service':
      return Users;
    case 'fire':
    case 'kecak':
      return Flame;
    case 'international':
      return Globe;
    case 'led':
    case 'modern-contemp':
      return Lightbulb;
    case 'party':
      return PartyPopper;
    case 'special':
      return Wand2;
    case 'nusantara':
    case 'traditional':
    case 'balinese-modern':
    case 'modern':
    default:
      return Sparkles;
  }
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onBookProject }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredCategories = useMemo(() => {
    const byCategory =
      selectedCategoryId === 'all'
        ? PORTFOLIO_CATEGORIES
        : PORTFOLIO_CATEGORIES.filter((cat) => cat.id === selectedCategoryId);

    if (!normalizedQuery) {
      return byCategory;
    }

    return byCategory
      .map((cat) => {
        const categoryMatches =
          cat.title.toLowerCase().includes(normalizedQuery) ||
          cat.summary.toLowerCase().includes(normalizedQuery);
        const matchingItems = categoryMatches
          ? cat.items
          : cat.items.filter(
              (item) =>
                item.title.toLowerCase().includes(normalizedQuery) ||
                item.description.toLowerCase().includes(normalizedQuery)
            );
        return {
          ...cat,
          items: matchingItems,
        };
      })
      .filter((cat) => cat.items.length > 0);
  }, [selectedCategoryId, normalizedQuery]);

  const totalVisibleItems = useMemo(
    () => filteredCategories.reduce((sum, cat) => sum + cat.items.length, 0),
    [filteredCategories]
  );

  useEffect(() => {
    if (!lightbox) return;
    const total = lightbox.images.length;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightbox(null);
      } else if (e.key === 'ArrowRight' && total > 1) {
        setLightbox((prev) => (prev ? { ...prev, index: (prev.index + 1) % total } : null));
      } else if (e.key === 'ArrowLeft' && total > 1) {
        setLightbox((prev) =>
          prev ? { ...prev, index: (prev.index - 1 + total) % total } : null
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox]);

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setLightbox(null);
  };

  const openItemLightbox = (category: PortfolioCategory, item: PortfolioItem, index = 0) => {
    if (!item.images || item.images.length === 0) return;
    setLightbox({
      categoryTitle: category.title,
      itemTitle: item.title,
      images: item.images,
      index,
    });
  };

  return (
    <section
      id="portofolio"
      aria-label="Portofolio Sevenpro Entertainment"
      className="bg-[#070709] border-t border-white/10 py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col gap-7 pb-10 border-b border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <p className="text-xs font-medium tracking-[0.2em] text-[#D4AF37] uppercase mb-3">
                Portofolio & Katalog Pertunjukan
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white [text-wrap:balance]">
                Entertainment Categories, Productions & Live Acts
              </h2>
              <p className="mt-3 text-[15px] leading-[1.7] text-white/75 max-w-[68ch]">
                Jelajahi 15 kategori pertunjukan dan layanan profesional Sevenpro Entertainment di
                Bali—mulai dari musik tradisional, tari budaya dan kontemporer, atraksi api &amp;
                LED, hingga konsep pesta dan permintaan khusus.
              </p>
            </div>

            {/* Search Input */}
            <div className="w-full lg:w-80 shrink-0">
              <label htmlFor="portfolio-search" className="sr-only">
                Cari jenis pertunjukan atau layanan
              </label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/45" />
                <input
                  id="portfolio-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari pertunjukan (mis. Kecak, DJ, LED)..."
                  className="w-full bg-[#0B0B0D] border border-white/15 focus:border-[#D4AF37] pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Interactive 15-Category Filter Tabs */}
          <div
            className="flex flex-wrap items-center gap-2"
            role="tablist"
            aria-label="Filter kategori portofolio"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategoryId === 'all'}
              onClick={() => handleSelectCategory('all')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-medium border transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                selectedCategoryId === 'all'
                  ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                  : 'bg-[#0B0B0D] text-white/75 border-white/15 hover:text-white hover:border-white/35'
              }`}
            >
              Semua Kategori ({PORTFOLIO_CATEGORIES.length})
            </button>

            {PORTFOLIO_CATEGORIES.map((category) => {
              const isSelected = selectedCategoryId === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleSelectCategory(category.id)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium border transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                    isSelected
                      ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                      : 'bg-[#0B0B0D] text-white/75 border-white/15 hover:text-white hover:border-white/35'
                  }`}
                >
                  <span className="font-mono tabular-nums mr-1.5 opacity-75">
                    {category.number}
                  </span>
                  {category.title}
                </button>
              );
            })}
          </div>

          {/* Unboxed Summary Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-white/55">
            <div className="flex items-center gap-2 font-mono tabular-nums">
              <span>{filteredCategories.length} Kategori</span>
              <span aria-hidden="true">·</span>
              <span>{totalVisibleItems} Item Layanan &amp; Pertunjukan</span>
              <span aria-hidden="true">·</span>
              <span>Bali &amp; Indonesia</span>
            </div>
            {(selectedCategoryId !== 'all' || normalizedQuery) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategoryId('all');
                  setSearchQuery('');
                }}
                className="text-xs text-[#E5C158] hover:text-white transition-colors cursor-pointer"
              >
                Reset filter
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {filteredCategories.length === 0 ? (
          <div className="mt-14 border border-white/10 bg-[#0B0B0D] p-12 text-center">
            <Layers className="h-8 w-8 text-[#D4AF37]/70 mx-auto mb-3" />
            <h3 className="font-display text-xl font-semibold text-white">
              Pertunjukan tidak ditemukan
            </h3>
            <p className="mt-2 text-sm text-white/65 max-w-md mx-auto">
              Coba kata kunci lain atau pilih kategori &ldquo;Special Request&rdquo; untuk konsep
              pertunjukan khusus sesuai permintaan acara Anda.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategoryId('all');
                setSearchQuery('');
              }}
              className="mt-6 inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#E5C158] px-5 py-2.5 text-sm font-semibold text-black transition-colors cursor-pointer"
            >
              Tampilkan Semua Kategori
            </button>
          </div>
        ) : (
          /* Categories & Cards Showcase */
          <div className="mt-14 space-y-16 md:space-y-20">
            {filteredCategories.map((category, categoryIdx) => {
              const CategoryIcon = getCategoryIcon(category.iconKey);

              return (
                <section
                  key={category.id}
                  aria-labelledby={`category-${category.id}`}
                  className={categoryIdx > 0 ? 'pt-14 md:pt-16 border-t border-white/10' : ''}
                >
                  {/* Category Header */}
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
                    <div className="max-w-3xl">
                      <div className="flex items-center gap-2.5 text-xs font-mono tabular-nums text-[#D4AF37] mb-2">
                        <span>{category.number}</span>
                        <span aria-hidden="true">/</span>
                        <span>Kategori Portofolio</span>
                        <span aria-hidden="true">·</span>
                        <span>{category.items.length} Pilihan</span>
                      </div>

                      <h3
                        id={`category-${category.id}`}
                        className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-white"
                      >
                        {category.title}
                      </h3>

                      <p className="mt-2.5 text-[15px] leading-[1.7] text-white/75">
                        {category.summary}
                      </p>

                      <p className="mt-2 text-xs text-[#E5C158]/90 leading-relaxed">
                        {category.highlights}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => onBookProject(`Portofolio — ${category.title}`)}
                      className="self-start lg:self-auto inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#E5C158] px-5 py-2.5 text-sm font-semibold text-black transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                    >
                      <span>Book {category.title}</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Items Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {category.items.map((item) => {
                      const primaryImage = item.images?.[0];
                      const photoCount = item.images?.length || 0;
                      const hasFailed = primaryImage ? Boolean(failedImages[primaryImage.src]) : false;
                      const showRealImage = Boolean(primaryImage && !hasFailed);

                      return (
                        <article
                          key={item.id}
                          className="group flex flex-col bg-[#0B0B0D] border border-white/10 hover:border-[#D4AF37]/45 transition-colors duration-200"
                        >
                          {/* Photo Slot or Clean Placeholder */}
                          {showRealImage && primaryImage ? (
                            <button
                              type="button"
                              onClick={() => openItemLightbox(category, item, 0)}
                              aria-label={`Lihat foto ${item.title}`}
                              className="relative aspect-[4/3] w-full overflow-hidden bg-[#111114] border-b border-white/10 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                            >
                              <img
                                src={primaryImage.src}
                                alt={primaryImage.alt}
                                referrerPolicy="no-referrer"
                                loading="lazy"
                                onError={() =>
                                  setFailedImages((prev) => ({
                                    ...prev,
                                    [primaryImage.src]: true,
                                  }))
                                }
                                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                              />
                              <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"
                              />
                              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                                <span className="font-mono tabular-nums text-[#E5C158]">
                                  {photoCount > 1 ? `${photoCount} Foto` : 'Dokumentasi'}
                                </span>
                                <span className="inline-flex items-center gap-1 text-white/80 group-hover:text-[#E5C158] transition-colors">
                                  <Expand className="h-3.5 w-3.5" />
                                  <span>Preview</span>
                                </span>
                              </div>
                            </button>
                          ) : (
                            <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.14),_rgba(12,12,15,0.98)_75%)] p-5 flex flex-col items-center justify-center text-center">
                              <div className="flex h-11 w-11 items-center justify-center border border-[#D4AF37]/30 bg-black/40 mb-3">
                                <CategoryIcon className="h-5 w-5 text-[#D4AF37]/80" />
                              </div>
                              <p className="font-display text-sm font-medium text-white/85">
                                {item.title}
                              </p>
                              <p className="mt-1 inline-flex items-center gap-1.5 text-[11px] font-mono text-white/45">
                                <ImageIcon className="h-3 w-3 text-[#D4AF37]/60" />
                                <span>{item.placeholderLabel || `Foto Placeholder · ${category.title}`}</span>
                              </p>
                            </div>
                          )}

                          {/* Card Body: Title + Description + Booking Trigger */}
                          <div className="p-5 flex-1 flex flex-col justify-between">
                            <div>
                              <p className="text-[11px] font-medium tracking-[0.14em] text-white/45 uppercase mb-1.5">
                                {category.title}
                              </p>
                              <h4 className="font-display text-lg font-semibold tracking-tight text-white">
                                {item.title}
                              </h4>
                              <p className="mt-2 text-sm leading-relaxed text-white/70">
                                {item.description}
                              </p>
                            </div>

                            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                              <button
                                type="button"
                                onClick={() =>
                                  onBookProject(`${category.title} — ${item.title}`)
                                }
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-[#E5C158] transition-colors cursor-pointer whitespace-nowrap min-w-0 max-w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                              >
                                <span className="truncate">Book {item.title}</span>
                                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#D4AF37]" />
                              </button>

                              {showRealImage && photoCount > 1 && (
                                <button
                                  type="button"
                                  onClick={() => openItemLightbox(category, item, 0)}
                                  className="text-xs font-mono tabular-nums text-white/55 hover:text-[#E5C158] transition-colors cursor-pointer whitespace-nowrap"
                                >
                                  +{photoCount - 1} foto
                                </button>
                              )}
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </div>

      {/* Lightbox Viewer for Real Performance Photos */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${lightbox.itemTitle} gallery viewer`}
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightbox(null);
          }}
        >
          <div className="relative w-full max-w-5xl bg-[#08080A] border border-white/15 p-3 sm:p-4">
            <div className="flex items-center justify-between gap-4 pb-3 px-1">
              <div className="text-xs sm:text-sm text-white/85">
                <span className="text-white/50">{lightbox.categoryTitle}</span>
                <span className="mx-2 text-white/35">/</span>
                <span className="font-display font-medium text-white">
                  {lightbox.itemTitle}
                </span>
                <span className="mx-2 text-white/40">·</span>
                <span className="font-mono tabular-nums text-[#E5C158]">
                  {lightbox.index + 1} / {lightbox.images.length}
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
                src={lightbox.images[lightbox.index].src}
                alt={lightbox.images[lightbox.index].alt}
                referrerPolicy="no-referrer"
                className="h-full w-full object-contain"
              />

              {lightbox.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setLightbox((prev) =>
                        prev
                          ? {
                              ...prev,
                              index: (prev.index - 1 + prev.images.length) % prev.images.length,
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
                              index: (prev.index + 1) % prev.images.length,
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
