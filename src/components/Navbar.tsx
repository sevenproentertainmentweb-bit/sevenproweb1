import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SevenproCrest } from './SevenproLogo';

export type NavSection = 'Home' | 'About' | 'Our Services' | 'Portofolio' | 'Contact';

interface NavbarProps {
  activeNav: NavSection;
  onSelectNav: (item: NavSection) => void;
}

const NAV_ITEMS: NavSection[] = ['Home', 'About', 'Our Services', 'Portofolio', 'Contact'];

export const Navbar: React.FC<NavbarProps> = ({ activeNav, onSelectNav }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (item: NavSection) => {
    setMobileOpen(false);
    onSelectNav(item);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#050505]/95 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-8 px-6 md:px-10">
        {/* Zone 1: Brand Mark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('Home');
          }}
          className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm"
        >
          <SevenproCrest variant="nav" className="h-9 w-auto shrink-0 transition-transform duration-200 group-hover:scale-105" />
          <span className="font-display text-lg md:text-xl font-semibold tracking-[0.22em] text-white uppercase">
            SEVENPRO
          </span>
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7 lg:gap-10">
          {NAV_ITEMS.map((item) => {
            const isActive = activeNav === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => handleNavClick(item)}
                className={`relative py-2 text-sm font-medium tracking-[0.02em] whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm cursor-pointer ${
                  isActive ? 'text-white' : 'text-white/65 hover:text-white'
                }`}
              >
                {item}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 bottom-0 h-[1.5px] bg-[#D4AF37] transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center border border-white/15 bg-white/5 text-white hover:border-[#D4AF37]/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden border-t border-white/10 bg-[#08080A] px-6 py-4"
        >
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeNav === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleNavClick(item)}
                  className={`w-full text-left px-3 py-3 text-sm font-medium tracking-wide transition-colors border-b border-white/5 last:border-b-0 ${
                    isActive ? 'text-[#E5C158]' : 'text-white/75 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
};
