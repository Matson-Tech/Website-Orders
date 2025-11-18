import React, { useEffect, useRef, useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LoveStorySection } from "@/components/LoveStorySection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { AboutSection } from "@/components/AboutSection";
import { GallerySection } from "@/components/GallerySection";
import { WishesSection } from "@/components/WishesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useContent } from "@/contexts/ContentContext";
import { Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const { isLoading } = useContent();
  const audioRef = useRef(null);
  const [showModal, setShowModal] = useState(true);

  const handleExplore = () => {
    setShowModal(false);
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-rose-50 via-rose-25 to-white">
        <Loader2 className="w-10 h-10 animate-spin text-rose-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-rose-25 to-white">
      {/* Background Music */}
      <audio ref={audioRef} loop preload="auto">
        <source
          src="/music/ED-SHEERAN-PERFECT-instrumental.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>

      {/* Explore Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 text-center shadow-2xl max-w-sm mx-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-rose-600 mb-3">
                Welcome to Our Wedding ❤️
              </h2>
              <p className="text-gray-600 mb-6">
               Thank you for visiting — your wishes are the most precious gift to our story. 💕
              </p>
              <button
                onClick={handleExplore}
                className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md transition-all duration-300 hover:scale-105"
              >
                Explore
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <Header />
      <main>
        <HeroSection />
        <LoveStorySection />
        <ScheduleSection />
        <AboutSection />
        <GallerySection />
        <WishesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
