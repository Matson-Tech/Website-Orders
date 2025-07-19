
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Calendar, MapPin, Heart, Clock, Sparkles, Download } from 'lucide-react';

import image from '@/assets/image7.jpg';

const Events = () => {
  const eventsImage = image; // Image for the hero section
  
  // Wedding events
  const events = [
    {
      date: 'January 8, 2026',
      title: 'Engagement Ceremony',
      description: 'Join us as we celebrate the official engagement of Nithin and Keziah.',
      venue: 'To be announced',
      icon: Heart,
      color: 'from-gold to-gold/70',
      bgColor: 'from-pink-50 to-rose-50'
    },
    {
      date: 'January 9, 2026',
      title: 'Madhuramveppu (Groom\'s Side)',
      description: 'Traditional pre-wedding ceremony celebrating the groom\'s family.',
      venue: 'Groom\'s residence',
      icon: Sparkles,
      color: 'from-gold to-gold/70',
      bgColor: 'from-blue-50 to-indigo-50'
    },
    {
      date: 'January 10, 2026',
      title: 'Madhuramveppu (Bride\'s Side)',
      description: 'Traditional pre-wedding ceremony celebrating the bride\'s family.',
      venue: 'Bride\'s residence',
      icon: Sparkles,
      color: 'from-gold to-gold/70',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      date: 'January 12, 2026',
      title: 'Wedding Ceremony',
      description: 'The sacred wedding ceremony where Nithin and Keziah will unite in holy matrimony.',
      venue: 'St.Mary\'s Orthodox Syrian Church, Kallooppara',
      icon: Heart,
      color: 'from-gold to-gold/70',
      bgColor: 'from-gold/10 to-yellow-50'
    },
    {
      date: 'January 12, 2026',
      title: 'Wedding Reception',
      description: 'Celebrate with us as we continue the joy with lunch and festivities.',
      venue: 'Yahir Auditorium, TK Road, Vallamkulam',
      icon: Sparkles,
      color: 'from-gold to-gold/70',
      bgColor: 'from-emerald-50 to-teal-50'
    }
  ];
  
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-background via-secondary/20 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <PageHeader title="Events" />
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gold/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold/70 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-gold">Wedding Celebrations</h3>
              </div>
              
              <p className="text-lg mb-4 leading-relaxed text-gray-700">
                We're thrilled to invite you to celebrate our wedding journey with us. Join us for 
                a series of beautiful ceremonies and celebrations leading up to our special day.
              </p>
              <p className="text-lg mb-6 leading-relaxed text-gray-700">
                From our engagement to the wedding ceremony and reception, we can't wait to share 
                these precious moments with our loved ones!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-gold/10 to-gold/5 rounded-lg" data-aos="fade-up" data-aos-delay="100">
                  <Calendar className="w-5 h-5 text-gold" />
                  <span className="font-medium text-gray-800">Wedding Date: January 12, 2026</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-gold/10 to-gold/5 rounded-lg" data-aos="fade-up" data-aos-delay="200">
                  <MapPin className="w-5 h-5 text-gold mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">Church: St.Mary's Orthodox Syrian Church, Kallooppara</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-gold/10 to-gold/5 rounded-lg" data-aos="fade-up" data-aos-delay="300">
                  <MapPin className="w-5 h-5 text-gold mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">Reception: Yahir Auditorium, TK Road, Vallamkulam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2" data-aos="fade-left">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
              <img 
                src={eventsImage}
                alt="Wedding Events" 
                className="w-full h-96 lg:h-[500px] object-cover object-[center_30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
        
        {/* Events Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold/70 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-serif text-gold">Event Schedule</h3>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold/70 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-gold/30 via-gold to-gold/30 hidden sm:block"></div>
            
            <div className="space-y-8">
              {events.map((event, index) => {
                const IconComponent = event.icon;
                return (
                  <div key={index} className={`relative ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex-row items-center gap-8`} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-delay={index * 100}>
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-gold to-gold/70 rounded-full border-4 border-white shadow-lg z-10 hidden sm:block"></div>
                    
                    {/* Event card */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className={`bg-gradient-to-r ${event.bgColor} backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl`}>
                        <div className="flex items-start gap-4">
                          <div className={`w-16 h-16 bg-gradient-to-br ${event.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Calendar className="w-4 h-4 text-gold" />
                              <span className="text-lg font-semibold text-gold">{event.date}</span>
                            </div>
                            <h4 className="text-xl md:text-2xl font-serif text-gray-800 mb-3">{event.title}</h4>
                            <p className="text-gray-600 leading-relaxed mb-3">{event.description}</p>
                            <div className="flex items-start gap-2">
                              <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                              <p className="text-sm font-medium text-gold">{event.venue}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Spacer for alternating layout */}
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Download section */}
          <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="600">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gold/10 max-w-md mx-auto">
              <h4 className="text-xl font-serif text-gold mb-4">Take Our Schedule With You</h4>
              <p className="text-gray-600 mb-6">Download the complete event schedule to keep handy during our celebrations.</p>
              <button className="group bg-gradient-to-r from-gold to-gold/80 text-white px-8 py-3 rounded-full hover:from-gold/90 hover:to-gold/70 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium inline-flex items-center gap-2">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
