import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, Eye, EyeOff, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const Login: React.FC = () => {
  const [username, setUsername] = useState('keziahbiji1999@gmail.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = login(username, password);
      if (success) {
        toast.success('Login successful!');
        navigate('/wishes');
      } else {
        toast.error('Invalid credentials');
      }
    } catch (error) {
      toast.error('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center p-4">
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

      <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm border-rose-100/50 shadow-2xl relative z-10">
        <CardHeader className="text-center pb-2">
          <div className="w-20 h-20 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <CardTitle className="font-serif text-3xl font-bold text-gray-800 mb-2">
            Admin Login
          </CardTitle>
          <p className="text-gray-600">
            Access wishes management
          </p>
        </CardHeader>
        
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="pl-10 border-rose-200 focus:border-rose-400 rounded-xl h-12 bg-gray-50 hover:bg-white transition-colors"
                  disabled
                />
              </div>
              
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-10 pr-10 border-rose-200 focus:border-rose-400 rounded-xl h-12 bg-gray-50 hover:bg-white transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-rose-500 hover:bg-rose-600 text-white h-12 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Logging in...
                </div>
              ) : (
                'Login'
              )}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <button
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-rose-500 transition-colors text-sm"
            >
              ← Back to Wedding Site
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
