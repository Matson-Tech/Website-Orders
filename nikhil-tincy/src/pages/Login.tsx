import React, { useState } from 'react';
import { LoginModal } from '@/components/LoginModal';

const LoginPage = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-rose-50 via-rose-25 to-white">
      <LoginModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default LoginPage; 