import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { UserData } from '@/types/auth';
import { Instagram, Youtube, Twitter, Pencil } from 'lucide-react';
import { Separator } from './ui/separator';
import { Button } from './ui/button';

/**
 * @author ChebroluVirajith
 * @lastModified 2025-08-05 15:30:00
 * Reusable component to display a user's profile information with an edit button.
 * Corrected a syntax error in the AvatarImage src attribute.
 */

interface ProfileCardProps {
  user: UserData;
  onEdit: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user, onEdit }) => {
  const getInitials = (name: string): string => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };
  
  // Define the image URL as a variable to prevent syntax errors in the JSX
  const avatarImageUrl = `https://placehold.co/96x96/22223b/ffffff?text=${getInitials(user.name)}`;

  return (
    <Card className="glass rounded-2xl p-6 neon-glow interactive-hover relative">
      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute top-4 right-4 rounded-full text-muted-foreground/80 hover:text-primary transition-colors"
        onClick={onEdit}
      >
        <Pencil className="h-5 w-5" />
      </Button>
      <CardHeader className="flex flex-col items-center">
        <Avatar className="h-24 w-24 mb-4 neon-glow">
          <AvatarImage src={avatarImageUrl} alt={user.name} />
          <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-gradient neon-text">{user.name}</CardTitle>
        <CardDescription className="text-lg text-muted-foreground/80">@{user.username}</CardDescription>
      </CardHeader>
      <CardContent className="mt-4 text-left space-y-4">
        {user.bio && (
          <div className="space-y-1">
            <h4 className="font-semibold text-sm">Bio</h4>
            <p className="text-muted-foreground/80">{user.bio}</p>
          </div>
        )}
        <Separator />
        <div className="space-y-1">
          <h4 className="font-semibold text-sm">Contact Info</h4>
          <p className="text-muted-foreground/80">{user.email}</p>
        </div>
        <div className="space-y-1">
          <h4 className="font-semibold text-sm">Phone Number</h4>
          <p className="text-muted-foreground/80">{user.phone || 'Not provided'}</p>
        </div>
        
        {user.socialLinks && Object.keys(user.socialLinks).length > 0 && (
          <>
            <Separator />
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Social Profiles</h4>
              <div className="flex flex-col space-y-2 mt-2">
                {user.socialLinks.instagram && (
                  <a href={`https://instagram.com/${user.socialLinks.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted-foreground/80 hover:text-primary transition-colors">
                    <Instagram className="h-5 w-5" />
                    <span>@{user.socialLinks.instagram}</span>
                  </a>
                )}
                {user.socialLinks.youtube && (
                  <a href={`https://youtube.com/channel/${user.socialLinks.youtube}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted-foreground/80 hover:text-primary transition-colors">
                    <Youtube className="h-5 w-5" />
                    <span>{user.socialLinks.youtube}</span>
                  </a>
                )}
                {user.socialLinks.tiktok && (
                  <a href={`https://tiktok.com/@${user.socialLinks.tiktok}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted-foreground/80 hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                    <span>@{user.socialLinks.tiktok}</span>
                  </a>
                )}
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
