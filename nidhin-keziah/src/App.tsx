
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Contexts
import { AuthProvider } from "./contexts/AuthContext";
import { ContentProvider } from "./contexts/ContentContext";

// Pages
import Index from "./pages/Index";
import OurStory from "./pages/OurStory";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import WatchLive from "./pages/WatchLive";
import Location from "./pages/Location";
import Family from "./pages/Family";
import Contact from "./pages/Contact";
import Wishes from "./pages/Wishes";
import AllWishes from "./pages/AllWishes";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopOnMount from "./components/ScrollToTopOnMount";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: false
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <ContentProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <ScrollToTopOnMount />
              <Navbar />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/our-story" element={<OurStory />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/events" element={<Events />} />
                {/* <Route path="/watch-live" element={<WatchLive />} /> */}
                <Route path="/location" element={<Location />} />
                <Route path="/family" element={<Family />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/wishes-page" element={<Wishes />} />
                <Route path="/wishes" element={<AllWishes />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </ContentProvider>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
