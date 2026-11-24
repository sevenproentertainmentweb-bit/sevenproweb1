import React from 'react';
import { SevenproCrest } from './SevenproLogo';
import type { NavSection } from './Navbar';

interface FooterProps {
  onSelectNav: (section: NavSection) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectNav }) => {
  return (
    <footer className="bg-[#050505] border-t border-white/10 py-10">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <SevenproCrest variant="nav" className="h-7 w-auto shrink-0" />
          <div>
            <p className="font-display text-sm font-semibold tracking-[0.2em] text-white uppercase">
              SEVENPRO ENTERTAINMENT
            </p>
            <p className="text-xs text-white/50 mt-0.5">
              Bali, Indonesia · Dance & Entertainment Event Agency
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs text-white/60">
          {(['Home', 'About', 'Our Services', 'Portofolio', 'Contact'] as NavSection[]).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => onSelectNav(item)}
              className="hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              {item}
            </button>
          ))}
        </div>

        <p className="text-xs text-white/45">
          © {new Date().getFullYear()} Sevenpro Entertainment. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
