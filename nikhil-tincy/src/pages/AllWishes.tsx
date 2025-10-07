import React, { useState, useEffect } from 'react';
import { Heart, Trash2, ArrowLeft, Clock, User, MessageCircle, Search, Filter, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const WISH_API_BASE = 'https://kzhbmjygrzjardgruunp.supabase.co/functions/v1';
const USER_ID = import.meta.env.VITE_USER_ID || 'public-user';

// Define Wish type
interface Wish {
  id: string;
  name: string;
  message: string;
  timestamp: number;
}

const AllWishes: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [filteredWishes, setFilteredWishes] = useState<Wish[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'name'>('newest');

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // Fetch wishes from edge function
  const fetchWishes = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${WISH_API_BASE}/get-wish`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6aGJtanlncnpqYXJkZ3J1dW5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3NTI5MDMsImV4cCI6MjA2MzMyODkwM30.3Z-xjElKc24Iz6tqSkwsAKpcuFmeAihOqigi3cWtI5g'
        },
        body: JSON.stringify({ user_id: USER_ID })
      });
      const data = await res.json();
      const wishesData = Array.isArray(data.wishes) ? data.wishes : [];
      setWishes(wishesData);
      setFilteredWishes(wishesData);
    } catch (error) {
      toast.error('Failed to load wishes.');
      setWishes([]);
      setFilteredWishes([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchWishes();
    }
  }, [isAuthenticated]);

  // Filter and sort wishes
  useEffect(() => {
    const filtered = wishes.filter(wish => 
      wish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      wish.message.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort wishes
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b.timestamp - a.timestamp;
        case 'oldest':
          return a.timestamp - b.timestamp;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    setFilteredWishes(filtered);
  }, [wishes, searchTerm, sortBy]);

  const deleteWish = async (wishId: string) => {
    try {
      const res = await fetch(`${WISH_API_BASE}/delete-wish`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6aGJtanlncnpqYXJkZ3J1dW5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3NTI5MDMsImV4cCI6MjA2MzMyODkwM30.3Z-xjElKc24Iz6tqSkwsAKpcuFmeAihOqigi3cWtI5g'
        },
        body: JSON.stringify({ user_id: USER_ID, wish_id: wishId })
      });
      
      if (!res.ok) throw new Error('Failed to delete wish');
      
      toast.success('Wish deleted successfully');
      await fetchWishes();
    } catch (error) {
      toast.error('Failed to delete wish');
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDateShort = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <Header />
      
      <main className="section-padding relative overflow-hidden">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 border-2 border-rose-400 rotate-45"></div>
            <div className="absolute top-40 right-32 w-24 h-24 bg-rose-300 rounded-full"></div>
            <div className="absolute bottom-32 left-40 w-20 h-20 border-2 border-pink-400 rotate-12"></div>
            <div className="absolute bottom-20 right-20 w-28 h-28 bg-purple-300 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-rose-300 rotate-45"></div>
            <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-pink-300 rounded-full"></div>
          </div>
        </div>

        <div className="container-width relative z-10">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="flex items-center text-gray-600 hover:text-rose-500 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </div>
            
            <div className="text-center">
              <h1 className="serif-font text-4xl md:text-5xl lg:text-6xl font-bold text-rose-500 mb-6">
                All Wedding Wishes
              </h1>
              <div className="decorative-border mx-auto mb-8"></div>
              <p className="sans-font text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Manage all the beautiful wishes from your loved ones
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="mb-8 bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-rose-100/50">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="relative flex-1 md:w-80">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Search wishes by name or message..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-rose-200 focus:border-rose-400 rounded-2xl h-12 bg-gray-50 hover:bg-white transition-colors"
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Filter className="w-4 h-4" />
                  <span>Sort by:</span>
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'name')}
                  className="px-4 py-2 border border-rose-200 rounded-xl bg-white hover:bg-gray-50 focus:border-rose-400 transition-colors"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/90 backdrop-blur-sm border-rose-100/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-1">{wishes.length}</div>
                <div className="text-sm text-gray-600">Total Wishes</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/90 backdrop-blur-sm border-rose-100/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-1">{new Set(wishes.map(w => w.name)).size}</div>
                <div className="text-sm text-gray-600">Unique Guests</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/90 backdrop-blur-sm border-rose-100/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-1">{filteredWishes.length}</div>
                <div className="text-sm text-gray-600">Showing</div>
              </CardContent>
            </Card>
          </div>

          {/* Wishes List */}
          <div className="space-y-6">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading wishes...</p>
              </div>
            ) : filteredWishes.length === 0 ? (
              <div className="text-center py-12">
                <Heart className="w-16 h-16 text-rose-300 mx-auto mb-6" />
                <h3 className="serif-font text-2xl font-semibold text-gray-800 mb-2">
                  {searchTerm ? 'No wishes match your search' : 'No wishes yet'}
                </h3>
                <p className="text-gray-600">
                  {searchTerm ? 'Try adjusting your search terms' : 'Wishes will appear here as guests share them'}
                </p>
              </div>
            ) : (
              <div className="grid gap-6">
                {filteredWishes.map((wish, index) => (
                  <Card key={wish.id} className="bg-white/90 backdrop-blur-sm border-rose-100/50 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                            <Heart className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="serif-font text-xl font-semibold text-gray-800 mb-2">
                              {wish.name}
                            </h3>
                            <div className="flex items-center text-sm text-gray-500 gap-4">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {formatDateShort(wish.timestamp)}
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {new Date(wish.timestamp).toLocaleTimeString('en-US', { 
                                  hour: '2-digit', 
                                  minute: '2-digit' 
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteWish(wish.id)}
                          className="text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </Button>
                      </div>
                      
                      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                        <p className="sans-font text-gray-700 leading-relaxed text-lg italic">
                          "{wish.message}"
                        </p>
                      </div>
                      
                      <div className="mt-4 text-xs text-gray-400">
                        Full date: {formatDate(wish.timestamp)}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AllWishes;
