
import React, { useEffect } from 'react';
import { Mail, Phone, Heart, Users } from 'lucide-react';
import AOS from 'aos';

const Contact = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const contactImage = '/lovable-uploads/b62dea22-612a-4c7a-91b2-08d1c51e5af9.png';
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-cream/50 overflow-hidden">
      {/* Custom Header Section */}
      <div className="relative bg-gradient-to-r from-burgundy via-burgundy/90 to-burgundy bg-cover bg-center py-24" 
           style={{backgroundImage: "url('/lovable-uploads/360ed0a4-45d7-4e43-8657-6730f1d6549e.png')"}}>
        <div className="absolute inset-0 bg-burgundy/70"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-cream max-w-2xl mx-auto">We'd love to hear from you</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-gold via-yellow-400 to-gold p-4 rounded-full shadow-lg">
              <Heart className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-burgundy mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Have questions about our special day? Want to share in our joy? 
            We'd love to connect with you. Reach out to us or our families directly.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto mb-16 lg:items-start">
          {/* Contact Image */}
          <div className="order-2 lg:order-1 flex flex-col space-y-8 h-full" data-aos="fade-right">
            <div className="relative group flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-burgundy/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                <img 
                  src={contactImage}
                  alt="Nithin and Keziah" 
                  className="w-full h-96 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl"></div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-burgundy/10 via-gold/10 to-burgundy/10 rounded-2xl p-8 border border-gold/20 flex-grow flex flex-col justify-center" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-2xl font-bold text-burgundy mb-4 text-center">Can't Wait to Celebrate!</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
                Your presence at our wedding would mean the world to us. For any questions, 
                special accommodations, or just to share in our excitement, please don't hesitate to reach out!
              </p>
              <div className="flex justify-center space-x-2">
                <div className="w-3 h-3 bg-gold rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-burgundy rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-3 h-3 bg-gold rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="order-1 lg:order-2 flex flex-col space-y-8 h-full">
            {/* Couple Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-cream/50 hover:shadow-2xl transition-all duration-300 flex-shrink-0" data-aos="fade-left">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-pink-100 to-blue-100 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-burgundy" />
                </div>
                <h3 className="text-2xl font-bold text-burgundy">The Happy Couple</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Bride */}
                <div className="bg-gradient-to-br from-pink-50 to-cream/30 p-6 rounded-xl">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-xl font-bold text-burgundy">K</span>
                    </div>
                    <h4 className="font-bold text-burgundy">Keziah Susan Matson</h4>
                    <p className="text-sm text-gold font-medium">The Bride</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center p-2 bg-white/70 rounded-lg hover:bg-white transition-colors">
                      <Mail className="h-4 w-4 text-gold mr-3 flex-shrink-0" />
                      <a href="mailto:keziahbiji1999@gmail.com" className="text-sm text-gray-700 hover:text-burgundy transition-colors">
                        keziahbiji1999@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Groom */}
                <div className="bg-gradient-to-br from-blue-50 to-cream/30 p-6 rounded-xl">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-xl font-bold text-burgundy">N</span>
                    </div>
                    <h4 className="font-bold text-burgundy">Nithin Sebastian</h4>
                    <p className="text-sm text-gold font-medium">The Groom</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center p-2 bg-white/70 rounded-lg hover:bg-white transition-colors">
                      <Phone className="h-4 w-4 text-gold mr-3 flex-shrink-0" />
                      <a href="tel:+35679519944" className="text-sm text-gray-700 hover:text-burgundy transition-colors">
                        +356 79519944
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Parents Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-cream/50 hover:shadow-2xl transition-all duration-300 flex-grow" data-aos="fade-left" data-aos-delay="100">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-burgundy/20 to-gold/20 p-3 rounded-full mr-4">
                  <Heart className="h-6 w-6 text-burgundy" />
                </div>
                <h3 className="text-2xl font-bold text-burgundy">Our Families</h3>
              </div>

              <div className="space-y-8">
                {/* Bride's Parents */}
                <div>
                  <h4 className="text-lg font-bold text-burgundy mb-4 flex items-center">
                    <span className="w-3 h-3 bg-pink-300 rounded-full mr-3"></span>
                    Bride's Parents
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 ml-6">
                    <div className="bg-pink-50/50 p-4 rounded-lg border border-pink-100">
                      <p className="font-semibold text-burgundy mb-2">Biji Varughese</p>
                      <p className="text-sm text-gray-600 mb-2">Father</p>
                      <a href="tel:+917915657064" className="flex items-center text-sm text-gray-700 hover:text-burgundy transition-colors">
                        <Phone className="h-3 w-3 mr-2 text-gold" />
                        +91 7915657064
                      </a>
                    </div>
                    <div className="bg-pink-50/50 p-4 rounded-lg border border-pink-100">
                      <p className="font-semibold text-burgundy mb-2">Sheena Philips</p>
                      <p className="text-sm text-gray-600 mb-2">Mother</p>
                      <a href="tel:+917999029975" className="flex items-center text-sm text-gray-700 hover:text-burgundy transition-colors">
                        <Phone className="h-3 w-3 mr-2 text-gold" />
                        +91 7999029975
                      </a>
                    </div>
                  </div>
                </div>

                {/* Groom's Parents */}
                <div>
                  <h4 className="text-lg font-bold text-burgundy mb-4 flex items-center">
                    <span className="w-3 h-3 bg-blue-300 rounded-full mr-3"></span>
                    Groom's Parents
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 ml-6">
                    <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                      <p className="font-semibold text-burgundy mb-2">Alexander K Thomas</p>
                      <p className="text-sm text-gray-600 mb-2">Father</p>
                      <a href="tel:+919400777378" className="flex items-center text-sm text-gray-700 hover:text-burgundy transition-colors">
                        <Phone className="h-3 w-3 mr-2 text-gold" />
                        +91 9400777378
                      </a>
                    </div>
                    <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                      <p className="font-semibold text-burgundy mb-2">Shebamol Alexander</p>
                      <p className="text-sm text-gray-600 mb-2">Mother</p>
                      <a href="tel:+919778071648" className="flex items-center text-sm text-gray-700 hover:text-burgundy transition-colors">
                        <Phone className="h-3 w-3 mr-2 text-gold" />
                        +91 9778071648
                      </a>
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

export default Contact;
