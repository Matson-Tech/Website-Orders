import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';
import { supabase, getAuthToken, isAuthenticated as checkSupabaseAuth } from '../lib/supabase';

interface WeddingContent {
  hero: {
    brideName: string;
    groomName: string;
    tagline: string;
    date: string;
    venue: string;
    background?: string;
    image?: string;
  };
  loveStory: {
    title: string;
    content: string;
    image?: string;
  };
  schedule: Array<{
    id: string;
    time: string;
    event: string;
    description: string;
    locationMyDestination?: string;
    btnLabel?: string;
  }>;
  about: {
    gettingThere: string;
    dressCode: string;
    parking: string;
    receptionVenueTitle: string;
    dressCodeTitle: string;
    parkingTitle: string;
  };
  gallery: {
    title: string;
    photos: Array<{
      id: string;
      url: string;
      alt: string;
    }>;
  };
  wishes: Array<{
    id: string;
    name: string;
    message: string;
    timestamp: number;
  }>;
  contact: {
    bride: {
      name: string;
      phone: string;
      email: string;
    };
    groom: {
      name: string;
      phone: string;
      email: string;
    };
  };
}

interface ContentContextType {
  content: WeddingContent;
  updateContent: (section: keyof WeddingContent, data: any) => void;
  addWish: (name: string, message: string) => void;
  deleteWish: (id: string) => void;
  addGalleryPhoto: (photo: { id: string; url: string; alt: string }) => void;
  addMultipleGalleryPhotos: (photos: Array<{ id: string; url: string; alt: string }>, onComplete?: () => void) => void;
  deleteGalleryPhoto: (photoId: string) => Promise<void>;
  reorderGalleryPhotos: (reorderedPhotos: Array<{ id: string; url: string; alt: string }>) => Promise<void>;
  saveData: () => Promise<void>;
  saveGalleryPhotos: (newPhotos: Array<{ id: string; url: string; alt: string }>) => Promise<void>;
  isLoading: boolean;
}

const defaultContent: WeddingContent = {
  hero: {
    brideName: 'Kirsten',
    groomName: 'Rafael',
    tagline: 'ARE GETTING MARRIED',
    date: 'APRIL 27, 2030, 6:00 PM',
    venue: 'THE SUNROOM AT RIZAL GARDENS',
    background: '',
  },
  loveStory: {
    title: 'Our Love for Gardens (and Each Other)',
    content: 'Write a paragraph that tells your story as a couple. You can include details like how you met, your journey together, and what makes your relationship unique. This is your chance to share your personality and connect with your guests.',
    image: '',
  },
  schedule: [
    {
      id: '1',
      time: '5:00 PM',
      event: 'Welcome Photos & Cocktails',
      description: 'Join us for cocktails and photos in the garden'
    },
    {
      id: '2',
      time: '6:00 PM',
      event: 'Dinner Program',
      description: 'Ceremony followed by dinner reception'
    },
    {
      id: '3',
      time: '7:00 PM',
      event: 'Toasts & Speeches',
      description: 'Heartfelt words from family and friends'
    },
    {
      id: '4',
      time: '8:00 PM',
      event: 'Official Picture Taking',
      description: 'Professional photos with family and friends'
    },
    {
      id: '5',
      time: '9:00 PM',
      event: 'Open Bar & Dancing',
      description: 'Celebrate with music and dancing'
    }
  ],
  about: {
    gettingThere: 'Our reception will take place in The Sunroom at Rizal Gardens - an open-air garden space. The celebration will be outdoors, so expect fresh air, soft grass, and lots of golden hour glow.',
    dressCode: 'Garden party chic! Flowy, breathable fabrics and comfortable shoes (heels are optional, sinking in the grass is not required). Pastel colors are preferred but not mandatory!',
    parking: 'Free parking is available on-site, with designated areas for PWDs and senior guests. If you need special assistance or a drop-off closer to the garden entrance, let us know.',
    receptionVenueTitle: 'Reception Venue',
    dressCodeTitle: 'Dress Code',
    parkingTitle: 'Parking & Directions',
  },
  gallery: {
    title: 'Gallery',
    photos: [],
  },
  wishes: [
    {
      id: '1',
      name: 'Sarah & Michael',
      message: 'Wishing you both a lifetime of love, laughter, and beautiful garden moments together! 🌸',
      timestamp: Date.now() - 86400000
    },
    {
      id: '2',
      name: 'The Johnson Family',
      message: 'So excited to celebrate your special day! You two are perfect for each other.',
      timestamp: Date.now() - 172800000
    }
  ],
  contact: {
    bride: {
      name: 'Kirsten',
      phone: '(123) 456-7890',
      email: 'hello@reallygreatsite.com'
    },
    groom: {
      name: 'Rafael',
      phone: '(123) 456-7890',
      email: 'hello@reallygreatsite.com'
    }
  }
};

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<WeddingContent>(defaultContent);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [hasUserEdited, setHasUserEdited] = useState(false);

  useEffect(() => {
    checkAuth();
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session);
      if (session?.user) {
        setCurrentUserId(session.user.id);
        loadData(session.user.id);
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const checkAuth = async () => {
    const authStatus = await checkSupabaseAuth();
    setIsAuthenticated(authStatus);
    if (authStatus) {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setCurrentUserId(user.id);
        await loadData(user.id);
      }
    } else {
      setCurrentUserId(null);
      const defaultUserId = import.meta.env.VITE_USER_ID;
      if (defaultUserId) {
        await loadData(defaultUserId);
      } else {
        setContent(defaultContent);
      }
    }
  };

  const loadData = async (userId: string) => {
    try {
      setIsLoading(true);
      const { data: tableData, error: tableError } = await supabase.from('web_entries').select('*').eq('user_id', userId).single();
      if (tableError && tableError.code !== 'PGRST116') throw tableError;
      if (tableData && tableData.web_data) {
        const loadedData = tableData.web_data;
        // Merge with default content to ensure all fields exist
        const mergedData = {
          ...defaultContent,
          ...loadedData,
          gallery: {
            ...defaultContent.gallery,
            ...loadedData.gallery,
          },
        };
        console.log('Loaded data from table:', { 
          originalPhotos: loadedData.gallery?.photos?.length || 0,
          mergedPhotos: mergedData.gallery.photos.length,
          gallery: mergedData.gallery 
        });
        setContent(mergedData);
        setHasUserEdited(false);
        return;
      }
      const { data: edgeData, error: edgeError } = await supabase.functions.invoke('getwebdata', { body: { user_id: userId } });
      if (!edgeError) {
        let parsedData;
        try {
          parsedData = typeof edgeData === 'string' ? JSON.parse(edgeData) : edgeData;
        } catch (parseError) {
          parsedData = null;
        }
        const weddingData = parsedData?.web_data || parsedData?.data;
        if (weddingData) {
          // Merge with default content to ensure all fields exist
          const mergedData = {
            ...defaultContent,
            ...weddingData,
            gallery: {
              ...defaultContent.gallery,
              ...weddingData.gallery,
            },
          };
          console.log('Loaded data from edge function:', { 
            originalPhotos: weddingData.gallery?.photos?.length || 0,
            mergedPhotos: mergedData.gallery.photos.length,
            gallery: mergedData.gallery 
          });
          setContent(mergedData);
          setHasUserEdited(false);
          return;
        }
      }
      setContent(defaultContent);
      setHasUserEdited(false);
    } catch (error) {
      toast.error('Failed to load wedding data. Please try again later.');
      setContent(defaultContent);
      setHasUserEdited(false);
    } finally {
      setIsLoading(false);
    }
  };

  const saveToTable = async (userId: string, data: WeddingContent) => {
    try {
      console.log('saveToTable called with:', { userId, galleryPhotos: data.gallery?.photos?.length });
      const { error } = await supabase.from('web_entries').upsert({ 
        user_id: userId, 
        web_data: data, 
        updated_at: new Date().toISOString() 
      }, { onConflict: 'user_id' });
      
      if (error) {
        console.error('Table save error:', error);
        throw error;
      }
      
      console.log('Data saved to table successfully');
    } catch (error) {
      console.error('Failed to save to table:', error);
      throw error;
    }
  };

  const updateContent = (section: keyof WeddingContent, data: any) => {
    setHasUserEdited(true);
    setContent(prev => {
      let updated;
      if (section === 'schedule') {
        updated = { ...prev, [section]: Array.isArray(data) ? data : prev[section] };
      } else {
        updated = { ...prev, [section]: { ...prev[section], ...data } };
      }
      return updated;
    });
  };

  const addWish = (name: string, message: string) => {
    const newWish = { id: Date.now().toString(), name, message, timestamp: Date.now() };
    setContent(prev => ({ ...prev, wishes: [newWish, ...prev.wishes] }));
  };

  const deleteWish = (id: string) => {
    setContent(prev => ({ ...prev, wishes: prev.wishes.filter(wish => wish.id !== id) }));
  };

  const addGalleryPhoto = (photo: { id: string; url: string; alt: string }) => {
    console.log('addGalleryPhoto called', { photo, currentPhotos: content.gallery?.photos?.length });
    setHasUserEdited(true);
    setContent(prev => ({
      ...prev,
      gallery: {
        ...prev.gallery,
        photos: [...prev.gallery.photos, photo],
      },
    }));
  };

  const addMultipleGalleryPhotos = (photos: Array<{ id: string; url: string; alt: string }>, onComplete?: () => void) => {
    console.log('addMultipleGalleryPhotos called', { photosCount: photos.length, currentPhotos: content.gallery?.photos?.length });
    setHasUserEdited(true);
    
    setContent(prev => {
      const newState = {
        ...prev,
        gallery: {
          ...prev.gallery,
          photos: [...prev.gallery.photos, ...photos],
        },
      };
      
      // Resolve with the new state
      setTimeout(() => {
        if (onComplete) {
          onComplete();
        }
      }, 0);
      
      return newState;
    });
  };

  const deleteGalleryPhoto = async (photoId: string) => {
    console.log('deleteGalleryPhoto called', { photoId, currentPhotos: content.gallery?.photos?.length });
    
    // Find the photo to delete
    const photo = content.gallery.photos.find(p => p.id === photoId);
    if (!photo) {
      console.log('Photo not found:', photoId);
      return;
    }

    // Create updated content with photo removed
    const updatedContent = {
      ...content,
      gallery: {
        ...content.gallery,
        photos: content.gallery.photos.filter(p => p.id !== photoId),
      },
    };

    // Try to get user ID from multiple sources
    let userId = currentUserId;
    if (!userId) {
      userId = import.meta.env.VITE_USER_ID;
      console.log('Using fallback userId from env:', userId);
    }

    if (!userId) {
      console.log('No user ID available');
      toast.error('Please log in to save changes');
      return;
    }

    try {
      const token = await getAuthToken();
      console.log('Auth token:', token ? 'Found' : 'Not found');

      console.log('Saving deleted photo to database...', { 
        userId, 
        remainingPhotos: updatedContent.gallery.photos.length,
        deletedPhotoId: photoId
      });

      const [edgeResult, tableResult] = await Promise.all([
        supabase.functions.invoke('webdata', { body: { user_id: userId, web_data: updatedContent } }),
        saveToTable(userId, updatedContent)
      ]);

      if (edgeResult.error) {
        console.error('Edge function error:', edgeResult.error);
        throw edgeResult.error;
      }

      // Update the state with the new content
      setContent(updatedContent);
      setHasUserEdited(false);

      console.log('Photo deleted and saved successfully to both edge function and table');
      toast.success('Photo deleted and saved successfully!');
    } catch (error) {
      console.error('Delete save error:', error);
      toast.error('Failed to save deletion to database');
      throw error;
    }
  };

  const reorderGalleryPhotos = async (reorderedPhotos: Array<{ id: string; url: string; alt: string }>) => {
    console.log('reorderGalleryPhotos called', { 
      reorderedCount: reorderedPhotos.length, 
      currentPhotos: content.gallery?.photos?.length 
    });
    
    // Create updated content with reordered photos
    const updatedContent = {
      ...content,
      gallery: {
        ...content.gallery,
        photos: reorderedPhotos,
      },
    };

    // Try to get user ID from multiple sources
    let userId = currentUserId;
    if (!userId) {
      userId = import.meta.env.VITE_USER_ID;
      console.log('Using fallback userId from env:', userId);
    }

    if (!userId) {
      console.log('No user ID available');
      toast.error('Please log in to save changes');
      return;
    }

    try {
      const token = await getAuthToken();
      console.log('Auth token:', token ? 'Found' : 'Not found');

      console.log('Saving reordered photos to database...', { 
        userId, 
        totalPhotos: updatedContent.gallery.photos.length
      });

      // Update state immediately for better UX
      setContent(updatedContent);
      setHasUserEdited(true);

      const [edgeResult, tableResult] = await Promise.all([
        supabase.functions.invoke('webdata', { body: { user_id: userId, web_data: updatedContent } }),
        saveToTable(userId, updatedContent)
      ]);

      if (edgeResult.error) {
        console.error('Edge function error:', edgeResult.error);
        throw edgeResult.error;
      }

      setHasUserEdited(false);
      console.log('Photos reordered and saved successfully to both edge function and table');
      toast.success('Gallery order updated successfully!');
    } catch (error) {
      console.error('Reorder save error:', error);
      toast.error('Failed to save gallery order');
      // Revert to original order on error
      setContent(content);
      throw error;
    }
  };

  const saveData = async () => {
    console.log('saveData called', { 
      isAuthenticated, 
      currentUserId, 
      hasUserEdited,
      contentGalleryPhotos: content.gallery?.photos?.length,
      contentKeys: Object.keys(content)
    });
    
    // Try to get user ID from multiple sources
    let userId = currentUserId;
    if (!userId) {
      // Try to get from environment variable
      userId = import.meta.env.VITE_USER_ID;
      console.log('Using fallback userId from env:', userId);
    }
    
    if (!userId) {
      console.log('No user ID available');
      toast.error('Please log in to save changes');
      return;
    }
    
    try {
      const token = await getAuthToken();
      console.log('Auth token:', token ? 'Found' : 'Not found');
      
      console.log('Saving data to database...', { 
        userId, 
        galleryPhotos: content.gallery?.photos?.length,
        galleryData: content.gallery 
      });
      
      const [edgeResult, tableResult] = await Promise.all([
        supabase.functions.invoke('webdata', { body: { user_id: userId, web_data: content } }),
        saveToTable(userId, content)
      ]);
      
      if (edgeResult.error) {
        console.error('Edge function error:', edgeResult.error);
        throw edgeResult.error;
      }
      
      console.log('Data saved successfully to both edge function and table');
      setHasUserEdited(false);
      toast.success('Changes saved successfully');
    } catch (error) {
      console.error('Save error:', error);
      toast.error('Failed to save changes');
      throw error;
    }
  };

  const saveGalleryPhotos = async (newPhotos: Array<{ id: string; url: string; alt: string }>) => {
    console.log('saveGalleryPhotos called', { newPhotosCount: newPhotos.length, currentPhotos: content.gallery?.photos?.length });
    
    // Create updated content with new photos
    const updatedContent = {
      ...content,
      gallery: {
        ...content.gallery,
        photos: [...content.gallery.photos, ...newPhotos],
      },
    };
    
    // Try to get user ID from multiple sources
    let userId = currentUserId;
    if (!userId) {
      userId = import.meta.env.VITE_USER_ID;
      console.log('Using fallback userId from env:', userId);
    }
    
    if (!userId) {
      console.log('No user ID available');
      toast.error('Please log in to save changes');
      return;
    }
    
    try {
      const token = await getAuthToken();
      console.log('Auth token:', token ? 'Found' : 'Not found');
      
      console.log('Saving gallery photos to database...', { 
        userId, 
        totalPhotos: updatedContent.gallery.photos.length,
        newPhotos: newPhotos.length
      });
      
      const [edgeResult, tableResult] = await Promise.all([
        supabase.functions.invoke('webdata', { body: { user_id: userId, web_data: updatedContent } }),
        saveToTable(userId, updatedContent)
      ]);
      
      if (edgeResult.error) {
        console.error('Edge function error:', edgeResult.error);
        throw edgeResult.error;
      }
      
      // Update the state with the new content
      setContent(updatedContent);
      setHasUserEdited(false);
      
      console.log('Gallery photos saved successfully to both edge function and table');
      toast.success('Photos saved successfully');
    } catch (error) {
      console.error('Save error:', error);
      toast.error('Failed to save photos');
      throw error;
    }
  };

  useEffect(() => {
    if (isAuthenticated && currentUserId && !isLoading && hasUserEdited) {
      const saveTimeout = setTimeout(async () => {
        try {
          await saveData();
        } catch (error) {}
      }, 1000);
      return () => clearTimeout(saveTimeout);
    }
  }, [content, isAuthenticated, currentUserId, hasUserEdited]);

  const value = {
    content,
    updateContent,
    addWish,
    deleteWish,
    addGalleryPhoto,
    addMultipleGalleryPhotos,
    deleteGalleryPhoto,
    reorderGalleryPhotos,
    saveData,
    saveGalleryPhotos,
    isLoading,
  };

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
