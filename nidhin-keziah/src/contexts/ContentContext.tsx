import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Wish {
  id: string;
  name: string;
  message: string;
  timestamp: number;
}

interface ContentContextType {
  content: {
    wishes: Wish[];
  };
  addWish: (wish: Wish) => void;
  deleteWish: (id: string) => void;
  saveData: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

interface ContentProviderProps {
  children: ReactNode;
}

export const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const [content, setContent] = useState({
    wishes: [] as Wish[]
  });

  const addWish = (wish: Wish) => {
    setContent(prev => ({
      ...prev,
      wishes: [...prev.wishes, wish]
    }));
  };

  const deleteWish = (id: string) => {
    setContent(prev => ({
      ...prev,
      wishes: prev.wishes.filter(wish => wish.id !== id)
    }));
  };

  const saveData = () => {
    // This function can be used to save data to localStorage or an API
    localStorage.setItem('wedding-content', JSON.stringify(content));
  };

  useEffect(() => {
    // Load data from localStorage on mount
    const savedContent = localStorage.getItem('wedding-content');
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent);
        setContent(parsed);
      } catch (error) {
        console.error('Error parsing saved content:', error);
      }
    }
  }, []);

  return (
    <ContentContext.Provider value={{ content, addWish, deleteWish, saveData }}>
      {children}
    </ContentContext.Provider>
  );
};
