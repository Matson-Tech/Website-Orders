import React from 'react';
import { WishesManagement } from '@/components/WishesManagement';

const Wishes: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <WishesManagement isAdminView={false} />
        </div>
      </div>
    </div>
  );
};

export default Wishes;
