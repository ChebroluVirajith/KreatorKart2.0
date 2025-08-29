import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useAuth } from '../context/AuthContext';

/**
 * @author ChebroluVirajith
 * @lastModified 2025-07-24 18:21:02
 * Login modal component
 */

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const success = await login(formData.email, formData.password);
      if (success) {
        onClose();
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-background glass">
        <DialogHeader>
          <DialogTitle className="text-gradient">Login to KreatorKart</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input 
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="glass"
            />
          </div>
          <div>
            <Input 
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              className="glass"
            />
          </div>
          <Button
            type="submit"
            className="w-full gradient-neon text-white hover:scale-105 transition-transform duration-300"
          >
            Login
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;