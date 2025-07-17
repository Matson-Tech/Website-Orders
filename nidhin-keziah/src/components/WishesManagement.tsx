import React, { useState, useEffect } from 'react';
import { Heart, Trash2, Search, Filter, Calendar, Clock, User, MessageCircle, Plus, Edit, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { ENV } from '@/lib/env';

// Define Wish type
interface Wish {
  id: string;
  name: string;
  message: string;
  timestamp: number;
}

interface WishesManagementProps {
  isAdminView?: boolean;
}

export const WishesManagement: React.FC<WishesManagementProps> = ({ isAdminView = false }) => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [filteredWishes, setFilteredWishes] = useState<Wish[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'name'>('newest');
  const [isAddingWish, setIsAddingWish] = useState(false);
  const [editingWish, setEditingWish] = useState<string | null>(null);
  const [newWish, setNewWish] = useState({ name: '', message: '' });

  // Fetch wishes from API
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
      
      if (!res.ok) {
        throw new Error('Failed to fetch wishes');
      }
      
      const data = await res.json();
      const wishesData = Array.isArray(data.wishes) ? data.wishes : [];
      setWishes(wishesData);
      setFilteredWishes(wishesData);
    } catch (error) {
      console.error('Error fetching wishes:', error);
      toast.error('Failed to load wishes.');
      setWishes([]);
      setFilteredWishes([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Add new wish
  const addWish = async () => {
    if (!newWish.name.trim() || !newWish.message.trim()) {
      toast.error('Please fill in both name and message');
      return;
    }

    try {
      const wish = {
        id: Date.now().toString(),
        name: newWish.name.trim(),
        message: newWish.message.trim(),
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

      if (!res.ok) {
        throw new Error('Failed to add wish');
      }

      toast.success('Wish added successfully!');
      setNewWish({ name: '', message: '' });
      setIsAddingWish(false);
      await fetchWishes();
    } catch (error) {
      console.error('Error adding wish:', error);
      toast.error('Failed to add wish. Please try again.');
    }
  };

  // Delete wish
  const deleteWish = async (wishId: string) => {
    try {
      const res = await fetch(`${ENV.VITE_API_URL}/delete-wish`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${ENV.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({ user_id: ENV.VITE_USER_ID, wish_id: wishId })
      });

      if (!res.ok) {
        throw new Error('Failed to delete wish');
      }

      toast.success('Wish deleted successfully');
      await fetchWishes();
    } catch (error) {
      console.error('Error deleting wish:', error);
      toast.error('Failed to delete wish');
    }
  };

  // Filter and sort wishes
  useEffect(() => {
    const filtered = wishes.filter(wish => 
      wish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      wish.message.toLowerCase().includes(searchTerm.toLowerCase())
    );

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

  useEffect(() => {
    fetchWishes();
  }, []);

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

  return (
    <div className="space-y-8 mt-20">
      {/* Header */}
      <div className="text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-rose-500 mb-4">
          {isAdminView ? 'Wishes Management' : 'Wedding Wishes'}
        </h1>
        <div className="w-24 h-1 bg-rose-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {isAdminView ? 'Manage all wedding wishes' : 'Share your love and best wishes for our special day'}
        </p>
      </div>

      {/* Add Wish Section */}
      {!isAdminView && (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-rose-500" />
              Leave a Wish
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!isAddingWish ? (
              <Button
                onClick={() => setIsAddingWish(true)}
                className="w-full bg-rose-500 hover:bg-rose-600 text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Your Wish
              </Button>
            ) : (
              <div className="space-y-4">
                <Input
                  placeholder="Your name"
                  value={newWish.name}
                  onChange={(e) => setNewWish({ ...newWish, name: e.target.value })}
                  className="border-rose-200 focus:border-rose-400"
                />
                <Textarea
                  placeholder="Your heartfelt message..."
                  value={newWish.message}
                  onChange={(e) => setNewWish({ ...newWish, message: e.target.value })}
                  rows={4}
                  className="border-rose-200 focus:border-rose-400"
                />
                <div className="flex gap-2">
                  <Button
                    onClick={addWish}
                    className="bg-rose-500 hover:bg-rose-600 text-white"
                  >
                    <Check className="w-4 h-4 mr-2" />
                    Submit Wish
                  </Button>
                  <Button
                    onClick={() => {
                      setIsAddingWish(false);
                      setNewWish({ name: '', message: '' });
                    }}
                    variant="outline"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Controls */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Search wishes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
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
                className="px-4 py-2 border rounded-lg bg-white"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">{wishes.length}</div>
            <div className="text-sm text-gray-600">Total Wishes</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">{new Set(wishes.map(w => w.name)).size}</div>
            <div className="text-sm text-gray-600">Unique Guests</div>
          </CardContent>
        </Card>
        
        <Card>
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
            <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-2">
              {searchTerm ? 'No wishes match your search' : 'No wishes yet'}
            </h3>
            <p className="text-gray-600">
              {searchTerm ? 'Try adjusting your search terms' : 'Wishes will appear here as guests share them'}
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredWishes.map((wish) => (
              <Card key={wish.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-gray-800 mb-2">
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
                    {isAdminView && (
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setEditingWish(wish.id === editingWish ? null : wish.id)}
                          className="text-gray-400 hover:text-blue-500"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteWish(wish.id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 border">
                    <p className="text-gray-700 leading-relaxed text-lg italic">
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
  );
};
