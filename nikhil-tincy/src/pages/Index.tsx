import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { LoveStorySection } from '@/components/LoveStorySection';
import { ScheduleSection } from '@/components/ScheduleSection';
import { AboutSection } from '@/components/AboutSection';
import { GallerySection } from '@/components/GallerySection';
import { WishesSection } from '@/components/WishesSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { useContent } from '@/contexts/ContentContext';
import { Loader2 } from 'lucide-react';
import { OurJewelPartner } from '@/components/OurJewelPartner';

const Index = () => {
  const { isLoading } = useContent();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-rose-50 via-rose-25 to-white">
        <Loader2 className="w-10 h-10 animate-spin text-rose-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-rose-25 to-white">
      <Header />
      <main>
        <HeroSection />
        <LoveStorySection />
        <ScheduleSection />
        <AboutSection />
        <GallerySection />
        <WishesSection />
        {/* <OurJewelPartner /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
