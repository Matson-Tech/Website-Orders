import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Our Story', path: '/our-story' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Events', path: '/events' },
  // { name: 'Watch Live', path: '/watch-live' },
  { name: 'Location', path: '/location' },
  { name: 'Family', path: '/family' },
  { name: 'Wishes', path: '/wishes-page' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-cream/90 backdrop-blur-md shadow-md py-2" : "py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-bickham text-2xl md:text-3xl text-gold">
           Nithin & Keziah
          </Link>
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile navigation menu - vertical list */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-screen bg-white py-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "nav-link block text-center py-2 border-b border-gold/20",
                  currentPath === item.path && "active"
                )}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {item.name}
              </Link>
            ))}
            
            {isAuthenticated && (
              <button 
                className="nav-link flex items-center justify-center py-2 border-b border-gold/20 text-rose-500"
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            )}
          </div>
        </div>

        {/* Desktop navigation - horizontal list */}
        <div className="hidden lg:flex lg:justify-center lg:space-x-8 lg:mt-0">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "nav-link",
                currentPath === item.path && "active"
              )}
              onClick={() => {}}
            >
              {item.name}
            </Link>
          ))}
          
          {isAuthenticated && (
            <button 
              className="nav-link flex items-center text-rose-500 hover:text-rose-600 transition-colors" 
              onClick={logout}
            >
              <LogOut className="w-4 h-4 mr-1" />
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}