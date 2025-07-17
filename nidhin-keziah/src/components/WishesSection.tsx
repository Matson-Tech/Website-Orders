import React, { useState, useEffect } from 'react';
import { Heart, Send, Trash2, MessageCircle, User, Clock, Sparkles, Settings, ChevronRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useContent } from '@/contexts/ContentContext';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { ENV } from '@/lib/env';
import Marquee from 'react-fast-marquee';
import AOS from 'aos';

// Define Wish type
interface Wish {
  id: string;
  name: string;
  message: string;
  timestamp: number;
}

export const WishesSection: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  // Delete wish function
  const handleDeleteWish = async (wishId: string) => {
    try {
      const res = await fetch(`${ENV.VITE_API_URL}/delete-wish`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${ENV.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({ user_id: ENV.VITE_USER_ID, wish_id: wishId })
      });
      
      if (!res.ok) throw new Error('Failed to delete wish');
      toast.success('Wish deleted successfully');
      await fetchWishes();
    } catch (error) {
      toast.error('Failed to delete wish');
    }
  };

  // Fetch wishes from edge function
  const fetchWishes = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${ENV.VITE_API_URL}/get-wish`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${ENV.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({ user_id: ENV.VITE_USER_ID })
      });
      const data = await res.json();
      setWishes(Array.isArray(data.wishes) ? data.wishes : []);
    } catch (error) {
      toast.error('Failed to load wishes.');
      setWishes([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWishes();
    // Refresh AOS to detect new elements
    AOS.refresh();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setIsSubmitting(true);
    try {
      const wish = {
        id: Date.now().toString(),
        name: name.trim(),
        message: message.trim(),
        timestamp: Date.now()
      };
      const res = await fetch(`${ENV.VITE_API_URL}/add-wish`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${ENV.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({ user_id: ENV.VITE_USER_ID, wish })
      });
      if (!res.ok) throw new Error('Failed to send wish');
      setName('');
      setMessage('');
      toast.success('Wish sent!');
      setShowForm(false);
      await fetchWishes();
    } catch (error) {
      toast.error('Failed to send wish. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Filter for featured wishes (top 3 most recent)
  const featuredWishes = wishes.slice(0, 3);
  
  return (
    <section id="wishes" className="py-24 bg-gradient-to-b from-white via-pink-50/30 to-white relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-[10%] w-64 h-64 rounded-full bg-rose-100 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 right-[15%] w-80 h-80 rounded-full bg-pink-200 opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 opacity-30 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-gold to-yellow-400 p-4 rounded-full shadow-lg">
              <Heart className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-rose-600 mb-6" style={{display: 'block'}}>Wedding Wishes</h2>
          
          <p className="text-xl mb-8 text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Share your love and blessings with Nithin & Keziah as they begin their journey together
          </p>
          {/* <div className="w-32 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mb-12 rounded-full"></div> */}
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          {/* Featured Wishes Section - Top Row */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-serif text-gray-800 flex items-center">
                <Sparkles className="w-6 h-6 mr-2 text-gold" />
                <span>Recent Wishes</span>
              </h3>
              
              <div className="flex space-x-3">
                {isAuthenticated && (
                  <Link to="/wishes" className="flex items-center text-sm text-rose-500 hover:text-rose-600 transition">
                    <Settings className="w-4 h-4 mr-1" />
                    <span>Manage</span>
                  </Link>
                )}
                
                <Link to="/wishes-page" className="flex items-center text-sm text-rose-500 hover:text-rose-600 transition">
                  <span>View All</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rose-500"></div>
              </div>
            ) : wishes.length === 0 ? (
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-sm border border-rose-100">
                <Heart className="w-16 h-16 text-rose-200 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-800 mb-2">No wishes yet</h4>
                <p className="text-gray-500 mb-8">Be the first to share your wishes with the couple!</p>
                <Button 
                  onClick={() => setShowForm(true)}
                  className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full"
                >
                  Send a Wish
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredWishes.map((wish) => (
                  <div key={wish.id} className="bg-white rounded-3xl p-6 shadow-sm border border-rose-100 hover:shadow-md hover:border-rose-200 transition-all duration-300 group relative">
                    <div className="absolute -right-2 -top-2 w-8 h-8 bg-rose-100 rounded-full opacity-60 group-hover:bg-rose-200 transition-colors"></div>
                    
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full flex items-center justify-center shadow-md">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-serif text-lg font-medium text-gray-800">{wish.name}</h4>
                        <div className="flex items-center text-xs text-gray-400">
                          <Clock className="w-3 h-3 mr-1" />
                          {formatDate(wish.timestamp)}
                        </div>
                      </div>
                      {isAuthenticated && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteWish(wish.id)}
                          className="ml-auto opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                    
                    <p className="text-gray-600 italic leading-relaxed line-clamp-4">"{wish.message}"</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Horizontal Scrolling Wishes */}
          {wishes.length > 3 && (
            <div className="mb-20 overflow-hidden">
              <Marquee
                speed={30}
                pauseOnHover
                gradient
                gradientColor="#ffffff"
                gradientWidth={60}
              >
                <div className="flex gap-4 py-4">
                  {wishes.map((wish) => (
                    <div 
                      key={`scroll-${wish.id}`} 
                      className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 border border-rose-100 shadow-sm flex-shrink-0 w-[280px] hover:border-rose-200 transition group ml-5"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <p className="font-serif font-medium text-gray-800">{wish.name}</p>
                        <div className="text-xs text-gray-400">{formatDate(wish.timestamp)}</div>
                      </div>
                      <p className="text-sm text-gray-600 italic line-clamp-2">"{wish.message}"</p>
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          )}

          {/* Add Wish CTA Section */}
          {!showForm ? (
            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-10 shadow-xl border border-rose-100 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full mb-6 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-3">
                Share Your Wishes
              </h3>
              
              <p className="text-gray-600 mb-8">
                We'd love to hear your blessings and well wishes as we embark on this beautiful journey together.
              </p>
              
              <Button 
                onClick={() => setShowForm(true)}
                className="bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Heart className="w-5 h-5 mr-2" />
                Send a Wish
              </Button>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-rose-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-serif text-2xl font-semibold text-gray-800">
                  Send Your Wishes
                </h3>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </Button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 ml-1">Your Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-rose-300" />
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="pl-12 border-rose-100 focus-visible:ring-rose-200 focus-visible:border-rose-300 rounded-xl h-12"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 ml-1">Your Wishes</label>
                  <Textarea
                    id="message"
                    placeholder="Share your heartfelt wishes for the couple..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="border-rose-100 focus-visible:ring-rose-200 focus-visible:border-rose-300 rounded-xl resize-none"
                  />
                </div>
                
                <div className="flex justify-end pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting || !name.trim() || !message.trim()}
                    className="bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white mr-2"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        <span>Send Wish</span>
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
        
        {/* Bottom Decoration */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-rose-300 opacity-60"></div>
            <div className="w-3 h-3 rounded-full bg-rose-400 opacity-70"></div>
            <div className="w-2 h-2 rounded-full bg-rose-300 opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
