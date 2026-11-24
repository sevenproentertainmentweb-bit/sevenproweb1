/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { DancerDetailPage } from './components/DancerDetailPage';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { HomeOverview } from './components/HomeOverview';
import { InquiryModal } from './components/InquiryModal';
import { Navbar, type NavSection } from './components/Navbar';
import { PortfolioSection } from './components/PortfolioSection';

type ActivePage = 'home' | 'about' | 'services' | 'dancer' | 'portofolio';

const PAGE_TO_NAV: Record<ActivePage, NavSection> = {
  home: 'Home',
  about: 'About',
  services: 'Our Services',
  dancer: 'Our Services',
  portofolio: 'Portofolio',
};

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingTopic, setBookingTopic] = useState<string | undefined>(undefined);

  const openBookingForm = (topic?: string) => {
    setBookingTopic(topic);
    setBookingOpen(true);
  };

  const navigateTo = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectNav = (item: NavSection) => {
    if (item === 'Contact') {
      openBookingForm('Konsultasi & Booking Event');
      return;
    }

    if (item === 'Home') {
      navigateTo('home');
      return;
    }

    if (item === 'About') {
      navigateTo('about');
      return;
    }

    if (item === 'Our Services') {
      navigateTo('services');
      return;
    }

    if (item === 'Portofolio') {
      navigateTo('portofolio');
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 flex flex-col">
      <Navbar activeNav={PAGE_TO_NAV[activePage]} onSelectNav={handleSelectNav} />

      <main className="flex-1">
        {activePage === 'home' && (
          <HeroSection
            onOurServicesClick={() => navigateTo('services')}
            onOpenBooking={openBookingForm}
          />
        )}

        {activePage === 'about' && (
          <AboutSection
            onServicesClick={() => navigateTo('services')}
            onBookCooperation={() => openBookingForm('Corporate & Government Cooperation')}
          />
        )}

        {activePage === 'services' && (
          <HomeOverview
            onOpenDancerPage={() => navigateTo('dancer')}
            onBookService={openBookingForm}
          />
        )}

        {activePage === 'dancer' && (
          <DancerDetailPage
            onBack={() => navigateTo('services')}
            onBookDance={openBookingForm}
          />
        )}

        {activePage === 'portofolio' && (
          <PortfolioSection onBookProject={openBookingForm} />
        )}
      </main>

      <Footer onSelectNav={handleSelectNav} />

      <InquiryModal
        isOpen={bookingOpen}
        initialService={bookingTopic}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
