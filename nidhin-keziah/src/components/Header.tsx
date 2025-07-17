import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, showBackButton = true }) => {
  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-rose-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {showBackButton && (
              <Link 
                to="/" 
                className="text-rose-500 hover:text-rose-600 transition-colors flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back to Home</span>
              </Link>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <Heart className="w-6 h-6 text-rose-500" />
            <span className="font-bickham text-xl text-rose-500">
              {title || 'Nithin & Keziah'}
            </span>
          </div>
          
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>
      </div>
    </header>
  );
};
