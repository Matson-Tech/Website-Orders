
import React from 'react';
import PageHeader from '@/components/PageHeader';

const Family = () => {
  const familyImage = '/lovable-uploads/0bb998e8-b0e9-442b-80e0-aea5f0990ccf.png';
  
  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-cream via-white to-cream/70 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <PageHeader title="Meet the Couple" />
        
        <div className="max-w-7xl mx-auto">
          {/* Hero Image Section */}
          <div className="mb-20" data-aos="fade-up">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
              <img 
                src={familyImage}
                alt="Nithin and Keziah" 
                className="w-full h-[400px] md:h-[600px] lg:h-[700px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="text-center">
                  <h2 className="text-3xl md:text-5xl font-serif text-white mb-2 drop-shadow-lg">Nithin & Keziah</h2>
                  <p className="text-lg md:text-xl text-white/90 drop-shadow-md">Two hearts, one beautiful journey</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* About Us Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
            {/* About the Bride */}
            <div className="group" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-gradient-to-br from-white via-cream/30 to-gold/10 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-gold/20 transition-all duration-500 hover:shadow-3xl hover:-translate-y-2 hover:border-gold/40">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br rounded-full mb-4 shadow-lg">
                    <span className="text-3xl">💐</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-serif text-gold mb-2 tracking-wide">About the Bride</h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-gold to-darkGold mx-auto rounded-full"></div>
                </div>
                
                <div className="text-center mb-6">
                  <h4 className="text-2xl md:text-3xl font-serif text-burgundy mb-2">Meet Keziah</h4>
                  <p className="text-gold/80 font-medium">Practice Nurse • Book Lover • Spanish Enthusiast</p>
                </div>
                
                <div className="space-y-5 text-gray-700 leading-relaxed text-base md:text-lg">
                  <p className="text-center italic text-burgundy font-medium">
                    "Living my dream of caring for others, one patient at a time."
                  </p>
                  
                  <p>
                    Hi! I'm Keziah — a Practice Nurse in Nottinghamshire and have been doing this amazing job for just over 3 years now. Fun fact: I've wanted to be a nurse since I was 16 — and now I'm literally living that dream.
                  </p>
                  
                  <p>
                    Now I get to care for people every day, build long-term connections with patients, and somehow keep a smile on my face while explaining flu vaccine side effects for the hundredth time. 😉
                  </p>
                  
                  <p>
                    When I'm not doing this, you'll probably find me curled up with a book, binge-watching a TV show, or laughing at old, cringey teen romcoms like it's still 2009 (don't judge me — they're iconic).
                  </p>
                  
                  <p>
                    I'm big on family, love a good hangout with friends, and once learned Spanish for 3–4 years… can I speak it fluently? Not really. Do I still randomly say "¿Dónde está el baño?" Absolutely. 😂
                  </p>
                  
                  <div className="bg-gradient-to-r from-cream to-gold/20 rounded-2xl p-6 mt-6 border-l-4 border-gold">
                    <p className="text-burgundy font-medium text-center italic">
                      "I'm so excited to be sharing this new chapter with the people who mean the world to us. Thanks for being part of our special day! 💕"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* About the Groom */}
            <div className="group" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-gradient-to-br from-white via-cream/30 to-burgundy/10 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-burgundy/20 transition-all duration-500 hover:shadow-3xl hover:-translate-y-2 hover:border-burgundy/40">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br rounded-full mb-4 shadow-lg">
                    <span className="text-2xl">🎻✈️</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-serif text-gold mb-2 tracking-wide">About the Groom</h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-burgundy to-burgundy/80 mx-auto rounded-full"></div>
                </div>
                
                <div className="text-center mb-6">
                  <h4 className="text-2xl md:text-3xl font-serif text-gold mb-2">Meet Nithin</h4>
                  <p className="text-burgundy/80 font-medium">Aircraft Engineer • Movie Buff • Violin Virtuoso</p>
                </div>
                
                <div className="space-y-5 text-gray-700 leading-relaxed text-base md:text-lg">
                  <p className="text-center italic text-gold font-medium">
                    "Engineering dreams and musical melodies, one adventure at a time."
                  </p>
                  
                  <p>
                    Hi, I'm Nithin Andrew Alex! I'm originally from Kallooppara, where I spent most of my school years before heading to Bengaluru for further studies. In 2019, I made the big move to Malta to specialise in Aircraft Structural Engineering — because apparently, I like my challenges with a side of travel. 😄
                  </p>
                  
                  <p>
                    When I'm not geeking out over aircraft or engineering things you probably don't want to hear about during dinner, I'm a huge movie buff. If there's a new release in theatres, I have to be there — popcorn in hand, back row if possible.
                  </p>
                  
                  <p>
                    I love spending time with friends, whether it's a random hangout or a full-blown plan that turns into a food tour.
                  </p>
                  
                  <p>
                    And here's a fun fact that surprises most people — I was first runner-up twice at Kerala Kalolsavam for violin! 🎻 (Yes, I still remember how to play… sort of!)
                  </p>
                  
                  <div className="bg-gradient-to-r from-cream to-burgundy/20 rounded-2xl p-6 mt-6 border-l-4 border-burgundy">
                    <p className="text-gold font-medium text-center italic">
                      "Can't wait to celebrate this big day with all the people who make life beautiful — that includes you!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Messages from Parents */}
          <div className="space-y-16">
            {/* Section Header */}
            <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="250">
              <h2 className="text-4xl md:text-6xl font-serif text-gold mb-4">Words from the Heart</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-gold via-darkGold to-gold mx-auto rounded-full mb-4"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Heartfelt messages from the families who have watched our love story unfold
              </p>
            </div>

            {/* Message from Bride's Parents */}
            <div className="group" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-gradient-to-br from-cream/80 via-white to-gold/10 backdrop-blur-sm rounded-3xl p-10 md:p-12 shadow-2xl border border-gold/30 transition-all duration-500 hover:shadow-3xl hover:border-gold/50">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br rounded-full mb-6 shadow-xl">
                    <span className="text-4xl">💕</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-serif text-gold mb-4">A Message from the Bride's Parents</h3>
                  <div className="w-32 h-1 bg-gradient-to-r from-gold to-darkGold mx-auto rounded-full"></div>
                </div>
                
                <div className="max-w-4xl mx-auto">
                  <div className="space-y-6 text-gray-700 leading-relaxed text-lg md:text-xl">
                    <div className="text-center mb-8">
                      <p className="text-2xl md:text-3xl font-serif text-burgundy italic">Dear Keziah mol,</p>
                    </div>
                    
                    <div className="prose prose-lg max-w-none space-y-6">
                      <p>
                        Today, as we watch you step into this beautiful new chapter of your life, our hearts are overflowing with love, pride, and emotion. It feels like just yesterday you were our little girl — full of dreams, laughter, and boundless curiosity. And today, you are a stunning bride, ready to begin a new journey hand in hand with the one you love.
                      </p>
                      
                      <blockquote className="border-l-4 border-gold bg-cream/50 p-6 rounded-r-2xl my-8">
                        <p className="text-burgundy font-medium italic text-xl">
                          Marriage is a partnership built on trust, respect, and unconditional love. It won't always be perfect, but with patience, kindness, and communication, it will be beautiful.
                        </p>
                      </blockquote>
                      
                      <p>
                        Cherish each other, lift one another up, and always make time for laughter and understanding.
                      </p>
                      
                      <p>
                        We are so proud of the woman you've become — strong, graceful, and full of heart. May your days be filled with joy, and your love grow deeper with every passing year.
                      </p>
                      
                      <p>
                        No matter where life takes you, remember that you will always be our little girl, and our love will always walk beside you.
                      </p>
                      
                      <p>
                        We pray that your marriage will be a testimony of God's faithfulness and grace. May your home be filled with peace, your hearts with compassion, and your lives with purpose. Know that we will always be here, loving you, supporting you, and praying for you both.
                      </p>
                    </div>
                    
                    <div className="text-center mt-10 pt-8 border-t border-gold/30">
                      <p className="text-2xl font-serif text-burgundy mb-2">With all our love and blessings,</p>
                      <p className="text-xl font-medium text-gold">Appa & Amma</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Message from Groom's Parents */}
            <div className="group" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-gradient-to-br from-cream/80 via-white to-burgundy/10 backdrop-blur-sm rounded-3xl p-10 md:p-12 shadow-2xl border border-burgundy/30 transition-all duration-500 hover:shadow-3xl hover:border-burgundy/50">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br rounded-full mb-6 shadow-xl">
                    <span className="text-4xl">🙏</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-serif text-gold mb-4">A Message from the Groom's Parents</h3>
                  <div className="w-32 h-1 bg-gradient-to-r from-burgundy to-burgundy/80 mx-auto rounded-full"></div>
                </div>
                
                <div className="max-w-4xl mx-auto">
                  <div className="space-y-6 text-gray-700 leading-relaxed text-lg md:text-xl">
                    <div className="text-center mb-8">
                      <p className="text-2xl md:text-3xl font-serif text-gold">ദൈവത്തിനു സ്തുതി.</p>
                    </div>
                    
                    <div className="prose prose-lg max-w-none space-y-6 text-center">
                      <div className="bg-gradient-to-r from-cream via-gold/10 to-cream rounded-2xl p-8 border border-gold/30">
                        <p>
                          ദൈവേഷ്ടമായാൽ, 2026 ജനുവരി 12 ആം തീയതി കല്ലൂപ്പാറ സെന്റ് മേരിസ് ഓർത്തഡോക്സ് വലിയ പള്ളിയിൽ വച്ചു വിവാഹിതരാകാൻ തീരുമാനിച്ചിരിക്കുന്ന ഞങ്ങളുടെ മകൻ Nithin Andrew Alex നും പള്ളം കല്ലൂപറമ്പിൽ Biji Varughese യുടെയും Sheena Philips ന്റെയും മകൾ Keziah Susanna Biji ക്കും എല്ലാ വിധ ആശംസകളും നേരുന്നു.
                        </p>
                      </div>
                      
                      <blockquote className="border-l-4 border-burgundy bg-cream/50 p-6 rounded-r-2xl my-8">
                        <p className="text-gold font-medium italic text-xl">
                          തുടർന്നുള്ള അവരുടെ വിവാഹ ജീവിതത്തിൽ ദൈവം തമ്പുരാൻ നന്മയും ആയുസ്സും ആരോഗ്യവും അനുഗ്രഹങ്ങളും നൽകണമേ എന്ന് ആത്മാർത്ഥമായി പ്രാർത്ഥിക്കുന്നു.
                        </p>
                      </blockquote>
                      
                      <p>
                        ഇത്രയും നാൾ നടത്തിയ ദൈവത്തിനു ഒരായിരം നന്ദിയും സ്തോത്രവും അർപ്പിക്കുന്നു...
                      </p>
                    </div>
                    
                    <div className="text-center mt-10 pt-8 border-t border-burgundy/30">
                      <p className="text-xl font-serif text-gold mb-4">എന്ന് സ്വന്തം</p>
                      <p className="text-xl font-medium text-burgundy">Alexander K Thomas</p>
                      <p className="text-xl font-medium text-burgundy">Shebamol Alexander</p>
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

export default Family;
