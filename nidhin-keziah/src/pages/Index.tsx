
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Heart, Calendar, MapPin, Users, Camera } from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';
import AOS from 'aos';
import bgImg from '@/assets/image3.jpg'; // Ensure this path is correct

const Index = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  // Updated hero image path to use the new uploaded image
  const heroImage = bgImg; // Replace with the correct path to your hero image
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-cream/50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Nithin and Keziah" 
            className="w-full h-full object-cover object-center md:object-[center_30%]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white mt-16">
          <div className="animate-fade-in">
            <div className="mb-8">
              <div className="flex justify-center mb-4">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full opacity-0">
                  <Heart className="h-8 w-8 text-white " />
                </div>
              </div>
              <h1 className="font-script text-5xl md:text-7xl lg:text-8xl mb-4 text-shadow-lg">
                Nithin & Keziah
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mb-6 rounded-full"></div>
            </div>
            
            <p className="text-2xl md:text-3xl font-serif mb-8 text-shadow">
              Together Forever, Starting Now
            </p>
            
            <div className="mb-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto border border-white/20">
              <p className="uppercase tracking-widest text-lg md:text-xl font-light mb-2 ">
                SAVE THE DATE
              </p>
              <p className="text-3xl md:text-4xl font-bold mb-2">
                January 12, 2026
              </p>
              <p className="text-lg text-cream">
                St. Mary's Orthodox Syrian Church
              </p>
              <p className="text-sm text-cream/80">
                Kallooppara, Kerala
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
              <Link 
                to="/our-story" 
                className="bg-gradient-to-r from-gold to-yellow-400 text-white px-8 py-4 rounded-full hover:from-yellow-400 hover:to-gold transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
              >
                <Heart className="h-5 w-5 mr-2" />
                Our Love Story
              </Link>
              <Link 
                to="/events" 
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full hover:bg-white/30 transition-all duration-300 font-semibold inline-flex items-center justify-center"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Wedding Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section id="welcome" className="py-24 bg-gradient-to-r from-cream via-white to-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-gold to-yellow-400 p-4 rounded-full shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-burgundy mb-6">Welcome to Our Wedding</h2>
            <p className="text-xl mb-8 text-gray-700 leading-relaxed max-w-3xl mx-auto">
              We're overjoyed to share this special moment with our beloved family and friends. 
              Join us as we embark on this beautiful journey together and celebrate our union.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mb-12 rounded-full"></div>
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-cream/50">
              <CountdownTimer targetDate="2026-01-26T10:00:00" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-burgundy mb-4">Explore Our Wedding</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our special day
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Link 
              to="/our-story" 
              className="group bg-gradient-to-br from-pink-50 to-cream/30 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-pink-100 hover:border-pink-200 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-gradient-to-r from-gold/20 to-yellow-400/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-gold/30">
                <Heart className="h-8 w-8 text-gold group-hover:text-burgundy transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-burgundy mb-4">Our Love Story</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Discover how Nithin and Keziah met and the beautiful journey that led to this moment.
              </p>
              <span className="inline-flex items-center text-gold font-semibold group-hover:text-burgundy transition-colors">
                Read Our Story 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            
            <Link 
              to="/events" 
              className="group bg-gradient-to-br from-blue-50 to-cream/30 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-blue-100 hover:border-blue-200 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-gradient-to-r from-burgundy/20 to-red-800/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-burgundy/30">
                <Calendar className="h-8 w-8 text-burgundy group-hover:text-gold transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-burgundy mb-4">Wedding Events</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Explore the schedule of our wedding ceremonies and celebrations across several occasions.
              </p>
              <span className="inline-flex items-center text-gold font-semibold group-hover:text-burgundy transition-colors">
                View Schedule 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            
            <Link 
              to="/gallery" 
              className="group bg-gradient-to-br from-purple-50 to-cream/30 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-purple-100 hover:border-purple-200 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-gradient-to-r from-cream to-cream/60 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-gold/30">
                <Camera className="h-8 w-8 text-gold group-hover:text-burgundy transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-burgundy mb-4">Photo Gallery</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Browse through our engagement photos and pre-wedding memories captured beautifully.
              </p>
              <span className="inline-flex items-center text-gold font-semibold group-hover:text-burgundy transition-colors">
                View Photos 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            
            <Link 
              to="/location" 
              className="group bg-gradient-to-br from-green-50 to-cream/30 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-green-100 hover:border-green-200 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="bg-gradient-to-r from-gold/30 to-burgundy/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-burgundy/30">
                <MapPin className="h-8 w-8 text-burgundy group-hover:text-gold transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-burgundy mb-4">Wedding Venue</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get directions to St. Mary's Orthodox Syrian Church and explore the beautiful location.
              </p>
              <span className="inline-flex items-center text-gold font-semibold group-hover:text-burgundy transition-colors">
                Get Directions 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Family Section */}
      <section className="py-24 bg-gradient-to-r from-cream via-white to-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-burgundy to-red-800 p-4 rounded-full shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-burgundy mb-6">Meet Our Families</h2>
            <p className="text-xl mb-12 text-gray-700 leading-relaxed max-w-3xl mx-auto">
              We're blessed to have the love and support of our wonderful families. 
              Get to know the people who have shaped our lives and made us who we are today.
            </p>
            <Link 
              to="/family" 
              className="inline-flex items-center bg-gradient-to-r from-burgundy to-red-800 text-white px-8 py-4 rounded-full hover:from-red-800 hover:to-burgundy transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Users className="h-5 w-5 mr-2" />
              Meet Our Families
            </Link>
          </div>
        </div>
      </section>

      {/* Watch Live Section */}
      {/* <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-gold to-yellow-400 p-4 rounded-full shadow-lg">
                <Play className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-burgundy mb-6">Join Us Virtually</h2>
            <p className="text-xl mb-12 text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Can't make it to Kerala? No worries! We'll be streaming our wedding ceremony live 
              so you can be part of our special day from anywhere in the world.
            </p>
            <Link 
              to="/watch-live" 
              className="inline-flex items-center bg-gradient-to-r from-gold to-yellow-400 text-white px-8 py-4 rounded-full hover:from-yellow-400 hover:to-gold transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Play className="h-5 w-5 mr-2" />
              Watch Live Stream
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Index;
