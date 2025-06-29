
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { MapPin, Church, Navigation } from 'lucide-react';

const Location = () => {
  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-cream via-white to-cream/70 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <PageHeader title="Wedding Location" />
        
        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            {/* Venue Information */}
            <div className="flex flex-col" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-gradient-to-br from-white via-cream/30 to-gold/10 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-gold/20 transition-all duration-500 hover:shadow-3xl flex-1 flex flex-col">
                {/* Icon and Title */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gold to-darkGold rounded-full mb-4 shadow-lg">
                    <Church size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif text-gold mb-2">Sacred Venue</h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-gold to-darkGold mx-auto rounded-full"></div>
                </div>

                {/* Church Details */}
                <div className="text-center mb-8">
                  <h4 className="text-2xl md:text-3xl font-serif text-burgundy mb-4">St.Mary's Orthodox Syrian Church</h4>
                  <p className="text-gold/80 font-medium text-lg">Kallooppara</p>
                </div>

                {/* Address Card */}
                <div className="bg-gradient-to-r from-cream to-gold/20 rounded-2xl p-6 mb-8 border-l-4 border-gold">
                  <div className="text-center space-y-1">
                    <p className="font-medium text-gray-700">St. Mary's Orthodox Church,</p>
                    <p className="text-gray-600">Kallooppara-Pathanamthitta Road,</p>
                    <p className="text-gray-600">Kallooppara,</p>
                    <p className="text-gray-600">Kerala 689583,</p>
                    <p className="text-gray-600">India</p>
                  </div>
                </div>

                {/* Description */}
                <div className="text-center space-y-4 mb-8 flex-1">
                  <p className="text-lg leading-relaxed text-gray-700">
                    Join us as we exchange vows at the beautiful St.Mary's Orthodox Syrian Church in Kallooppara.
                  </p>
                  <p className="text-base leading-relaxed text-gray-600 italic">
                    This historic church is known for its stunning architecture and peaceful atmosphere, making it the perfect backdrop for our special day.
                  </p>
                </div>

                {/* Get Directions Button */}
                <div className="text-center mt-auto">
                  <a 
                    href="https://maps.google.com/?q=St+Mary's+Orthodox+Church+Kallooppara+Kerala" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group bg-gradient-to-r from-gold to-darkGold text-white px-8 py-4 rounded-full hover:from-darkGold hover:to-gold transition-all duration-300 font-medium inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Navigation size={20} className="mr-3 group-hover:rotate-12 transition-transform duration-300" />
                    Get Directions
                    <MapPin size={18} className="ml-2 opacity-70" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="flex flex-col" data-aos="fade-up" data-aos-delay="200">
              <div className="flex-1 flex flex-col space-y-6">
                <div className="relative group flex-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-burgundy/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gold/20 transition-all duration-500 hover:shadow-3xl h-full flex flex-col">
                    <div className="flex-1">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.2900221213877!2d76.63367457502345!3d9.39592489068079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0624b67e929eb5%3A0x8ca0cc6604585436!2sSt.%20Mary&#39;s%20Orthodox%20Church%2C%20Kallooppara!5e0!3m2!1sen!2sin!4v1751215382898!5m2!1sen!2sin" 
                        className="w-full h-full min-h-[400px] rounded-2xl"
                        style={{border:0}} 
                        allowFullScreen={true}
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="St. Mary's Orthodox Church, Kallooppara Location"
                      />
                    </div>
                    
                    {/* Map Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg">
                        <p className="text-sm font-medium text-gray-800 mb-2">📍 Interactive Map</p>
                        <p className="text-xs text-gray-600">Zoom, pan, and navigate directly on the map</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-white to-cream/50 rounded-2xl p-6 shadow-lg border border-gold/10 hover:shadow-xl transition-all duration-300">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">⛪</span>
                      </div>
                      <h5 className="font-serif text-gold font-medium mb-2">Sacred Space</h5>
                      <p className="text-sm text-gray-600">Orthodox tradition meets modern celebration</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white to-cream/50 rounded-2xl p-6 shadow-lg border border-gold/10 hover:shadow-xl transition-all duration-300">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-burgundy/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">🕊️</span>
                      </div>
                      <h5 className="font-serif text-burgundy font-medium mb-2">Peaceful Setting</h5>
                      <p className="text-sm text-gray-600">Serene atmosphere for our blessed union</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
