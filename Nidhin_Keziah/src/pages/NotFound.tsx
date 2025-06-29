
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center p-8">
        <h1 className="text-6xl font-serif text-gold mb-4">404</h1>
        <p className="text-xl text-foreground mb-8">Oops! Page not found</p>
        <Link to="/" className="bg-gold text-white px-6 py-3 rounded-md hover:bg-darkGold transition-colors font-medium">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
