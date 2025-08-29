import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import ProfileForm from "../components/ProfileForm";
import { useAuth } from '../context/AuthContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Spinner } from '@/components/ui/Spinner';

/**
 * @author ChebroluVirajith
 * @lastModified 2025-08-05 16:30:00
 * User profile page to display and edit authenticated user information.
 */
const Profile = () => {
  const { user, isAuthenticated, authReady } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  if (!authReady) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
        <Spinner size="lg" />
        <h1 className="text-4xl font-bold animate-pulse mt-4">Loading...</h1>
        <p className="mt-4 text-muted-foreground">Please wait while we connect.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 gradient-dark"></div>
            <div className="absolute inset-0 grid-pattern opacity-30"></div>
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              My <span className="text-gradient neon-text animate-glow">Profile</span>
            </h1>
            <p className="text-lg text-muted-foreground/80 mb-8">
              View and manage your account information.
            </p>

            {isAuthenticated && user ? (
              <>
                <ProfileCard user={user} onEdit={() => setIsEditing(true)} />
                <ProfileForm isOpen={isEditing} onClose={() => setIsEditing(false)} />
              </>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-6 p-10 glass rounded-2xl">
                <p className="text-xl text-muted-foreground">
                  You are not signed in.
                </p>
                <Button 
                  asChild
                  size="lg" 
                  className="relative gradient-neon text-white neon-glow interactive-hover group overflow-hidden"
                >
                    <Link to="/">
                      <span className="relative z-10 flex items-center">
                        Go to Home
                        <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                      </span>
                      <div className="absolute inset-0 shimmer"></div>
                    </Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
