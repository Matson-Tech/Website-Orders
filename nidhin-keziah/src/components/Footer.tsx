
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-cream py-8 border-t border-gold/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-align-center">
            <Link to="/" className="font-bickham text-2xl text-gold">
              Nithin & Keziah
            </Link>
            <p className="text-muted-foreground mt-1">January 12, 2026</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
            <Link to="/" className="text-foreground hover:text-gold transition-colors">
              Home
            </Link>
            <Link to="/our-story" className="text-foreground hover:text-gold transition-colors">
              Our Story
            </Link>
            <Link to="/gallery" className="text-foreground hover:text-gold transition-colors">
              Gallery
            </Link>
            <Link to="/events" className="text-foreground hover:text-gold transition-colors">
              Events
            </Link>
            {/* <Link to="/watch-live" className="text-foreground hover:text-gold transition-colors">
              Watch Live
            </Link> */}
            <Link to="/location" className="text-foreground hover:text-gold transition-colors">
              Location
            </Link>
            <Link to="/family" className="text-foreground hover:text-gold transition-colors">
              Family
            </Link>
            <Link to="/wishes-page" className="text-foreground hover:text-gold transition-colors">
              Wishes
            </Link>
            <Link to="/contact" className="text-foreground hover:text-gold transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2025 Matson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
