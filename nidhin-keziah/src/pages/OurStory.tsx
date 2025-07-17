import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { Heart, MapPin, Calendar, Sparkles } from 'lucide-react';
import video from '@/assets/video1.mp4';
import thumbnail from '@/assets/image3.jpg';
import image from '@/assets/image4.jpg'; // Ensure this path is correct

const OurStory = () => {
  // Story sections
  const storyVideo = video; // Video file
  const storyThumbnail = thumbnail
  const coupleImage = image; // Image of Nithin and Keziah
  
  // State to toggle between thumbnail and video
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  // State for "Read More" toggles
  const [showFullHowWeMetDesktop, setShowFullHowWeMetDesktop] = useState(false);
  const [showFullHowWeMetMobile, setShowFullHowWeMetMobile] = useState(false);
  const [showFullProposalKeziah, setShowFullProposalKeziah] = useState(false);
  const [showFullProposalNithin, setShowFullProposalNithin] = useState(false);

  // Function to handle play button click
  const handlePlayClick = () => {
    setIsVideoPlaying(true);
    setIsVideoPaused(false);
  };

  // Function to handle video tap for play/pause
  const handleVideoTap = (e) => {
    e.preventDefault();
    const video = e.target;
    if (video.paused) {
      video.play();
      setIsVideoPaused(false);
    } else {
      video.pause();
      setIsVideoPaused(true);
    }
  };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <PageHeader title="Our Story" />
        
        {/* Hero Section with Timeline */}
        <div className="relative mb-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-gold/30 via-gold to-gold/30 hidden lg:block"></div>
          
          {/* How We Met Section */}
          <div className="relative mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:pr-12 order-2 lg:order-1">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gold/10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold/70 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-gold">How We Met</h3>
                  </div>
                  
                  {/* Desktop view: Show content with Read More */}
                  <div className="hidden lg:block space-y-4">
                    <p className="text-lg leading-relaxed text-gray-700">
                      Their story began on a well-known matrimonial site. Though separated by <span className="font-semibold text-gold">3,030 kilometers</span>, Nithin and Keziah were unknowingly on the same journey — searching for the one meant for them.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                      They had both browsed through countless profiles, yet no one seemed quite right. Then one day, Keziah's profile appeared on Nithin's screen. He noticed she was brought up in the UK and wasn't sure how it would work. With hesitation, he declined the profile and moved on.
                    </p>
                    <div className="flex items-center justify-center my-6">
                      <div className="flex items-center gap-2 text-gold font-serif text-xl italic">
                        <Sparkles className="w-5 h-5" />
                        <span>But love has its own timing.</span>
                        <Sparkles className="w-5 h-5" />
                      </div>
                    </div>
                    
                    {showFullHowWeMetDesktop ? (
                      <div className="space-y-4">
                        <p className="text-lg leading-relaxed text-gray-700">
                          Some time later, both Nithin and Keziah found themselves in India, visiting home. During this trip, they each prayed earnestly for God to lead them to the right person.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-700">
                          That very day, something strange happened — Keziah's profile showed up on Nithin's screen again. This was unusual, as the platform typically never re-shows rejected profiles. Nithin took it as a sign and sent her a request.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-700">
                          Keziah's family viewed the profile and was pleased. They reached out the next day, only to discover that Nithin was currently in India — but was leaving in just two days! Without wasting time, Nithin's family visited Keziah's home the very next day.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-700">
                          The families met. The couple talked. There was laughter, ease, and a quiet knowing in their hearts.
                        </p>
                        <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-lg p-4 mt-6">
                          <p className="text-lg leading-relaxed text-gray-800 font-medium italic text-center">
                            And just like that — what began as a random profile became the beginning of forever.
                            Because sometimes, when the timing is just right, love finds its way… no matter the distance, no matter the doubts.
                          </p>
                        </div>
                        <div className="text-center mt-6">
                          <button 
                            onClick={() => setShowFullHowWeMetDesktop(false)}
                            className="bg-gradient-to-r from-gold to-gold/80 text-white px-6 py-2 rounded-full hover:from-gold/90 hover:to-gold/70 transition-all duration-300 transform hover:scale-105 shadow-lg"
                          >
                            Read Less
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center mt-6">
                        <button 
                          onClick={() => setShowFullHowWeMetDesktop(true)}
                          className="bg-gradient-to-r from-gold to-gold/80 text-white px-6 py-2 rounded-full hover:from-gold/90 hover:to-gold/70 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                          Read More
                        </button>
                      </div>
                    )}
                  </div>
                  
                  {/* Mobile view: Show first paragraph with Read More */}
                  <div className="block lg:hidden space-y-4">
                    <p className="text-lg leading-relaxed text-gray-700">
                      Their story began on a well-known matrimonial site. Though separated by <span className="font-semibold text-gold">3,030 kilometers</span>, Nithin and Keziah were unknowingly on the same journey — searching for the one meant for them.
                    </p>
                    {showFullHowWeMetMobile ? (
                      <div className="space-y-4">
                        <p className="text-lg leading-relaxed text-gray-700">
                          They had both browsed through countless profiles, yet no one seemed quite right. Then one day, Keziah's profile appeared on Nithin's screen. He noticed she was brought up in the UK and wasn't sure how it would work. With hesitation, he declined the profile and moved on.
                        </p>
                        <div className="flex items-center justify-center my-6">
                          <div className="flex items-center gap-2 text-gold font-serif text-xl italic">
                            <Sparkles className="w-5 h-5" />
                            <span>But love has its own timing.</span>
                            <Sparkles className="w-5 h-5" />
                          </div>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-700">
                          Some time later, both Nithin and Keziah found themselves in India, visiting home. During this trip, they each prayed earnestly for God to lead them to the right person.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-700">
                          That very day, something strange happened — Keziah's profile showed up on Nithin's screen again. This was unusual, as the platform typically never re-shows rejected profiles. Nithin took it as a sign and sent her a request.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-700">
                          Keziah's family viewed the profile and was pleased. They reached out the next day, only to discover that Nithin was currently in India — but was leaving in just two days! Without wasting time, Nithin's family visited Keziah's home the very next day.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-700">
                          The families met. The couple talked. There was laughter, ease, and a quiet knowing in their hearts.
                        </p>
                        <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-lg p-4 mt-6">
                          <p className="text-lg leading-relaxed text-gray-800 font-medium italic text-center">
                            And just like that — what began as a random profile became the beginning of forever.
                            Because sometimes, when the timing is just right, love finds its way… no matter the distance, no matter the doubts.
                          </p>
                        </div>
                        <button 
                          onClick={() => setShowFullHowWeMetMobile(false)}
                          className="bg-gradient-to-r from-gold to-gold/80 text-white px-6 py-2 rounded-full hover:from-gold/90 hover:to-gold/70 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                          Read Less
                        </button>
                      </div>
                    ) : (
                      <button 
                        onClick={() => setShowFullHowWeMetMobile(true)}
                        className="bg-gradient-to-r from-gold to-gold/80 text-white px-6 py-2 rounded-full hover:from-gold/90 hover:to-gold/70 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Read More
                      </button>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="lg:pl-12 order-1 lg:order-2 relative">
                <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-gold to-gold/70 rounded-full border-4 border-white shadow-lg hidden lg:flex items-center justify-center z-10">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <img 
                    src={coupleImage}
                    alt="Nithin and Keziah" 
                    className="w-full h-96 lg:h-[500px] object-cover object-[center_30%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        
        {/* The Proposal Section */}
        <div className="relative">
          <div className="absolute -left-6 top-12 w-12 h-12 bg-gradient-to-br from-gold to-gold/70 rounded-full border-4 border-white shadow-lg hidden lg:flex items-center justify-center z-10">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl border border-gold/10 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold/70 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-gold">The Proposal</h3>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold/70 mx-auto rounded-full"></div>
            </div>

            {/* Keziah's Perspective */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl md:text-2xl font-serif text-gold mb-4 text-center">
                  Keziah's Perspective
                </h4>
                <p className="text-center text-gold/80 font-medium italic mb-4">
                  "The Surprise That Changed Everything"
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  I was told we were going to Portugal for our annual family trip, and I excitedly got everything ready, counting down the days. But about a week or two before the trip, something felt different. Everyone around me was acting a little strange—whispering, keeping secrets, sharing little smiles when they thought I wasn't looking. I had no idea what was going on.
                </p>
              </div>

              {showFullProposalKeziah ? (
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-700">
                    On the day of our flight, everything still pointed to Portugal. My friends were chatting excitedly about what we'd see, what we'd eat. But then, as we arrived at the departure gate, I looked up—and my heart skipped a beat.
                  </p>
                  <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-lg p-4 text-center">
                    <p className="text-xl font-semibold text-gold">
                      We weren't going to Portugal.<br />
                      We were going to Malta.
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    I was completely stunned. Excited. Nervous. And then it hit me—this was the first time I was going to see Nithin since our marriage had been fixed. My heart was racing.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    And there he was—waiting at the airport with the biggest smile, holding a bunch of sunflowers (my favourite) and my favourite chocolates. That moment alone felt like a dream.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We headed to the hotel, where he had booked the most beautiful seafront room for my parents. The view was magical—like something out of a storybook. It was clear that every detail had been thought out with so much love and care.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    But what touched me the most was what came next.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    I had always dreamed that, when the moment came, the people who had loved me the longest and supported me the most—my parents, my sister, my best friends, and their family—would be there to witness it.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    And the next morning, in front of the most breathtaking view, with all of them by my side, he proposed.
                  </p>
                  <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-lg p-6 text-center">
                    <p className="text-lg leading-relaxed text-gray-800 font-medium italic">
                      It was perfect. Emotional. Beautiful.<br />
                      Every single thing I had wished for—wrapped up in one unforgettable moment.
                    </p>
                  </div>
                  <div className="text-center">
                    <button 
                      onClick={() => setShowFullProposalKeziah(false)}
                      className="bg-gradient-to-r from-gold to-gold/80 text-white px-8 py-3 rounded-full hover:from-gold/90 hover:to-gold/70 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Read Less
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <button 
                    onClick={() => setShowFullProposalKeziah(true)}
                    className="bg-gradient-to-r from-gold to-gold/80 text-white px-8 py-3 rounded-full hover:from-gold/90 hover:to-gold/70 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Read More
                  </button>
                </div>
              )}
            </div>

            {/* Nithin's Perspective */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl md:text-2xl font-serif text-gold mb-4 text-center">
                  Nithin's Perspective
                </h4>
                <p className="text-center text-gold/80 font-medium italic mb-4">
                  "The Story of Our Surprise Proposal"
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  When Keziah told me she was heading to Portugal, I quietly started dreaming up plans to meet her there — to surprise her, to be near her. But then, I got a call from her dad that changed everything. "We're coming to Malta," he said. "It's a surprise for her." I remember smiling so wide, my heart racing. She was coming here — to me. And I had to keep it a secret.
                </p>
              </div>

              {showFullProposalNithin ? (
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-700">
                    I never thought keeping something joyful hidden would be so hard. But it was. Every time she asked questions — and trust me, she asked — I had to play it cool, change the subject, pretend I didn't know anything. That's when I realized something I'll never forget: my fiancée is nearly impossible to surprise. She knows me too well. But somehow, the secret stayed safe.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    As the days drew closer, my excitement grew. I talked about it to my friends every single day. I told them I wanted this trip to be unforgettable — the first time we'd see each other after deciding to spend our lives together. I wanted her to feel just how deeply she is loved.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    That's when the idea of proposing took shape — a way to show her, and the world, that she is mine and I am hers. What started as a quiet plan quickly became a team effort. Our home, our flat, even our office became a space for brainstorming the perfect moment. We had wild ideas, thoughtful ones, meaningful ones — but the one place we all loved needed official permission, and we didn't have enough time.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    I felt crushed. I just wanted it to be special. And the one person who would usually help me figure it all out — the one who knows how to calm me, inspire me — was the one person I couldn't tell.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Then, like it was meant to be, something magical happened. The hotel room I had booked for her parents had a beautiful balcony with a stunning seafront view. My friends and I stepped into that space and just stood still for a moment. It felt perfect. Peaceful. It felt like her.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    With the place found, my next mission was the ring. That journey had started months before. I enlisted the help of Keziah’s sister (Chinnu) my aliyan. Before that, we didn't speak much without others around. But during this mission, we became close. I remember secretly watching YouTube videos on how to find out someone's ring size without them knowing. I told Aliyan, and she found the answer. Thanks to her, I found the perfect ring — one that felt like Keziah.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Next: flowers and chocolate. In one of our conversations, Keziah had told me she loved sunflowers. That stuck with me. So I went searching everywhere until I finally found a tiny shop that sold the most beautiful ones. I told the florist it was for my fiancée, for a proposal. After a long few minutes, she came out with a bouquet that took my breath away. I remember holding it and thinking, she's going to smile so big when she sees this.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Then came the call. It was Keziah. Her face lit up my screen — she was glowing, radiant. She asked about coming to Malta, and all I could say was, "I'll be waiting for you."
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    And then, suddenly, I was at the airport. I had been tracking her flight from the second she boarded. I was nervous. Excited. Restless. I kept checking the arrivals board, watching every person come through, hoping it would be her. And then — I saw her dad. I welcomed them, trying to play it cool.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Then I heard it — a soft, shy, "hi." I turned, and there she was — my soon-to-be fiancée. Her eyes, her smile, her presence — it hit me all at once. That moment is hard to put into words. It was joy, relief, love, and peace, all wrapped into one. I gave her the sunflowers, and seeing her face light up made every bit of effort worth it.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    The next morning, I called my parents to tell them I wanted to propose. They were overjoyed. Then I spoke to her parents and asked for their blessing. They said yes, and I knew — it was time.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    I gathered everyone she loved in the room. Then I took her out to the balcony. I had written a note with everything I wanted to say. But the moment I looked into her eyes, I forgot it all. The words left me — all except for the truth I was carrying in my heart.
                  </p>
                  <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-lg p-6 text-center">
                    <p className="text-lg leading-relaxed text-gray-800 font-medium italic">
                      To this day, I don't remember what I said. But I know it was real. I know it came straight from the deepest part of me. And whatever I said, it was enough — because she smiled, with tears in her eyes, and said "YES."
                    </p>
                  </div>
                  <div className="text-center">
                    <button 
                      onClick={() => setShowFullProposalNithin(false)}
                      className="bg-gradient-to-r from-gold to-gold/80 text-white px-8 py-3 rounded-full hover:from-gold/90 hover:to-gold/70 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Read Less
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <button 
                    onClick={() => setShowFullProposalNithin(true)}
                    className="bg-gradient-to-r from-gold to-gold/80 text-white px-8 py-3 rounded-full hover:from-gold/90 hover:to-gold/70 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Read More
                  </button>
                </div>
              )}
            </div>
            
            {/* Video Section */}
            <div className="relative aspect-[9/16] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
              {isVideoPlaying ? (
                <div className="relative">
                  <video
                    src={storyVideo}
                    className="w-full h-full object-cover cursor-pointer"
                    autoPlay
                    loop
                    onClick={handleVideoTap}
                  />
                  {isVideoPaused && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-white/80 rounded-full flex items-center justify-center shadow-xl">
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-gold ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 5v10l7-5-7-5z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <img 
                    src={storyThumbnail}
                    alt="Our Story Video Thumbnail" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <div
                      onClick={handlePlayClick}
                      className="group w-20 h-20 md:w-24 md:h-24 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-gold transition-all duration-300 transform hover:scale-110 shadow-2xl"
                    >
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-gold group-hover:text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l7-5-7-5z" />
                      </svg>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        </div>
        
        {/* Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gold/10 text-center transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold/70 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl md:text-2xl font-serif text-gold mb-4">First Connection</h4>
            <p className="text-gray-600 leading-relaxed">
              A serendipitous match on a matrimonial site, where Nithin and Keziah's profiles connected, despite 3,030 kilometers between them, sparking the beginning of their journey.
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gold/10 text-center transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold/70 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl md:text-2xl font-serif text-gold mb-4">First Meeting</h4>
            <p className="text-gray-600 leading-relaxed">
              A heartfelt meeting in India, where Nithin and Keziah shared laughter and ease, realizing their deep connection during a family visit.
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gold/10 text-center transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold/70 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl md:text-2xl font-serif text-gold mb-4">The Proposal</h4>
            <p className="text-gray-600 leading-relaxed">
              On a stunning seafront balcony in Malta, surrounded by parents, Keziah's sister, and friends, Nithin proposed with a ring, sunflowers, and heartfelt words.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
