import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Heart, Home, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-rose-25 to-white relative overflow-hidden flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100/20 via-transparent to-purple-100/20"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 animate-sparkle">
          <Sparkles className="w-8 h-8 text-rose-300/20" />
        </div>
        <div className="absolute top-48 left-16 animate-sparkle" style={{ animationDelay: '2s' }}>
          <Star className="w-6 h-6 text-purple-300/20" />
        </div>
        <div className="absolute bottom-40 right-20 animate-sparkle" style={{ animationDelay: '4s' }}>
          <Heart className="w-7 h-7 text-pink-300/20" />
        </div>
      </div>

      <div className="text-center relative z-10 max-w-md mx-auto px-6">
        <div className="glass-card border-0 elegant-shadow p-12 rounded-2xl">
          {/* 404 with decorative hearts */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Heart className="w-8 h-8 text-rose-400" />
              <h1 className="serif-font text-6xl font-bold text-gradient">404</h1>
              <Heart className="w-8 h-8 text-rose-400" />
            </div>
            <div className="decorative-border mx-auto mb-6" style={{ width: 'auto' }}></div>
          </div>
          
          <p className="serif-font text-2xl text-gray-800 mb-4">Oops! Page not found</p>
          <p className="sans-font text-gray-600 mb-8 leading-relaxed">
            It looks like this page wandered off to the reception early. Let's get you back to the celebration!
          </p>
          
          <a href="/">
            <Button className="hero-gradient hover:opacity-90 transition-opacity h-12 text-lg font-medium rounded-xl px-8">
              <Home className="w-5 h-5 mr-2" />
              Return to Home
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
