import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { useAuth } from '../context/AuthContext';
import { Spinner } from './ui/Spinner';
import { ArrowRight } from 'lucide-react';

/**
 * @author ChebroluVirajith
 * @lastModified 2025-08-05 16:30:00
 * Final and corrected modal for Google Sign-In using the native Firebase SDK.
 */

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpModal = ({ isOpen, onClose }) => {
  const { googleSignup, isAuthenticated } = useAuth();
  const [showGoogleButton, setShowGoogleButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated && isOpen) {
      onClose();
    }
  }, [isAuthenticated, isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setShowGoogleButton(false);
    }
  }, [isOpen]);

  const handleSignInClick = () => {
    setShowGoogleButton(true);
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    await googleSignup();
    setIsLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-background glass text-center">
        <DialogHeader>
          <DialogTitle className="text-gradient text-3xl font-bold">Welcome to VYRAL</DialogTitle>
        </DialogHeader>

        {!showGoogleButton ? (
          <div className="flex flex-col space-y-4 items-center mt-6">
            <p className="text-muted-foreground text-sm">Sign in to continue</p>
            <Button
              onClick={handleSignInClick}
              className="w-full gradient-neon text-white hover:scale-105 transition-transform duration-300"
            >
              Sign In
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="flex flex-col space-y-4 items-center mt-6">
            <p className="text-muted-foreground text-sm">Continue with Google to start earning!</p>
            <Button
              onClick={handleGoogleSignIn} 
              disabled={isLoading}
              className="w-full bg-slate-900 text-white hover:bg-slate-800 transition-colors relative"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <Spinner size="sm" />
                  <span>Signing in...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)">
                    <path d="M44.5 20H24V28.5H35.25C34.725 31.85 32.8 35.1 30.15 37.15L36.25 41.65C39.5 38.65 41.5 34.5 42.5 29.75H44.5V20Z" fill="#4285F4"/>
                    <path d="M24 45C30.6 45 36.25 42.85 40.5 39.15L34.15 34.65C31.5 36.15 28.05 37.15 24 37.15C17.7 37.15 12.35 32.85 10.35 26.6H4.25V31.1H10.35C12.35 37.35 17.7 41.65 24 41.65C28.05 41.65 31.5 40.15 34.15 37.15L40.5 41.65C36.25 44.85 30.6 47 24 47C14.15 47 6.05 41.15 2.15 33.65L8.25 29.15C9.4 31.35 11.25 33.2 13.55 34.35C15.85 35.5 18.35 36.15 21 36.15C24.05 36.15 26.95 35.3 29.35 33.65Z" fill="#34A853"/>
                    <path d="M10.35 26.6C10.1 25.85 10 25.1 10 24.35C10 23.6 10.1 22.85 10.35 22.1L4.25 17.6C2.35 20.35 1.5 23.35 1.5 26.6C1.5 29.85 2.35 32.85 4.25 35.6L10.35 31.1C10.1 30.35 10 29.6 10 28.85C10 28.1 10.1 27.35 10.35 26.6Z" fill="#FBBC04"/>
                    <path d="M44.5 20C44.15 17.9 43.45 15.8 42.5 13.9L36.25 18.4C37.5 19.85 38.35 21.6 38.35 23.55C38.35 24.1 38.3 24.65 38.25 25.15H24V33.65H38.25C37.85 34.9 37.25 36.05 36.25 37.15L42.5 41.65C43.5 39.55 44.15 37.3 44.5 34.85C44.75 32.45 44.85 29.95 44.85 27.55C44.85 24.45 44.1 21.55 42.5 18.9L44.5 20Z" fill="#EA4335"/>
                  </svg>
                  Sign in with Google
                </div>
              )}
            </Button>
          </div>
        )}

        <div className="mt-8 text-sm text-muted-foreground">
          <p>
            By Signing In, I agree to the{' '}
            <a href="#" className="text-primary hover:underline">Terms & Conditions</a>{' '}
            and{' '}
            <a href="#" className="text-primary hover:underline">Privacy Policy</a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpModal;
