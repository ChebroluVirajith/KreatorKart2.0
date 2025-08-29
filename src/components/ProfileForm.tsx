// File: src/components/ProfileForm.tsx
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { useAuth } from '../context/AuthContext';
import { Spinner } from '@/components/ui/Spinner';

/**
 * @author ChebroluVirajith
 * @lastModified 2025-08-05 15:45:00
 * A modal form for editing user profile details, integrated with Firestore.
 */

interface ProfileFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ isOpen, onClose }) => {
  const { user, updateUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || '',
    username: user?.username || '',
    bio: user?.bio || '',
    phone: user?.phone || '',
    instagram: user?.socialLinks?.instagram || '',
    youtube: user?.socialLinks?.youtube || '',
  });

  useEffect(() => {
    if (isOpen && user) {
      setFormData({
        name: user.name || '',
        username: user.username || '',
        bio: user.bio || '',
        phone: user.phone || '',
        instagram: user.socialLinks?.instagram || '',
        youtube: user.socialLinks?.youtube || '',
      });
    }
  }, [isOpen, user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (user) {
      setIsLoading(true);
      const updatedUser = {
        ...user,
        name: formData.name,
        username: formData.username,
        bio: formData.bio,
        phone: formData.phone,
        socialLinks: {
          ...user.socialLinks,
          instagram: formData.instagram,
          youtube: formData.youtube,
        }
      };
      await updateUser(updatedUser);
      setIsLoading(false);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-background glass">
        <DialogHeader>
          <DialogTitle className="text-gradient">Edit Profile</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="col-span-3 glass"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="col-span-3 glass"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bio" className="text-right">
              Bio
            </Label>
            <Textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="col-span-3 glass"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="col-span-3 glass"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="instagram" className="text-right">
              Instagram ID
            </Label>
            <Input
              id="instagram"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              className="col-span-3 glass"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="youtube" className="text-right">
              YouTube ID
            </Label>
            <Input
              id="youtube"
              name="youtube"
              value={formData.youtube}
              onChange={handleChange}
              className="col-span-3 glass"
            />
          </div>
        </div>
        <DialogFooter>
          <Button 
            onClick={handleSave} 
            disabled={isLoading}
            className="gradient-neon text-white hover:scale-105 transition-transform duration-300"
          >
            {isLoading ? <Spinner size="sm" /> : 'Save changes'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileForm;
