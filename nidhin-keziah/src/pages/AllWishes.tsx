import React, { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { WishesManagement } from '@/components/WishesManagement';
import Footer from '@/components/Footer';

const AllWishes: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <Header title="Wishes Management" />
      
      <main className="py-8 px-4 mt-20">
        <div className="max-w-7xl mx-auto">
          <WishesManagement isAdminView={true} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AllWishes;
