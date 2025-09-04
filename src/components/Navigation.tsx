import { useState } from "react";
import { Button } from "./ui/button";
import { Wallet } from "lucide-react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import SignUpModal from './SignUpModal';
import LoginModal from './LoginModal';

/**
 * @author ChebroluVirajith
 * @lastModified 2025-08-03 12:30:00
 * Navigation component with authentication and profile link integration.
 * This version changes the signup button text to 'Sign Up / Log In'.
 */
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    navigate('/');
  };

  const handleHowItWorksClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'how-it-works' } });
    } else {
      const section = document.getElementById('how-it-works');
      section?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={handleLogoClick}
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
            role="button"
            aria-label="Go to homepage"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleLogoClick();
              }
            }}
          >
           
            <span className="text-xl font-bold text-gradient">VYRAL</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#how-it-works" 
              onClick={handleHowItWorksClick}
              className="text-muted-foreground hover:text-gradient transition-all"
            >
              How It Works
            </a>
            <Link to="/creators" className="text-muted-foreground hover:text-gradient transition-all">
              For Creators
            </Link>
            <Link 
              to="/campaigns" 
              className="text-muted-foreground hover:text-gradient transition-all"
            >
              Campaigns
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                
                <Link to="/profile" className="text-muted-foreground hover:text-gradient transition-all">
                  Welcome, {user?.name || 'Creator'}
                </Link>
                <Button 
                  variant="ghost" 
                  className="text-muted-foreground hover:text-gradient hover:scale-105 transition-all duration-300"
                  onClick={logout}
                >
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Button 
                  className="gradient-neon text-white hover:scale-105 transition-transform duration-300"
                  onClick={() => setIsSignUpOpen(true)}
                >
                  Sign Up / Log In
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border glass">
            <div className="flex flex-col space-y-4">
              <a 
                href="#how-it-works" 
                onClick={handleHowItWorksClick}
                className="text-muted-foreground hover:text-gradient transition-all px-4"
              >
                How It Works
              </a>
              <Link 
                to="/creators"
                className="text-muted-foreground hover:text-gradient transition-all px-4"
              >
                For Creators
              </Link>
              <Link 
                to="/campaigns"
                className="text-muted-foreground hover:text-gradient transition-all px-4"
              >
                Campaigns
              </Link>
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/profile"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-muted-foreground hover:text-gradient transition-all px-4"
                  >
                    Welcome, {user?.name || 'Creator'}
                  </Link>
                  <Button 
                    variant="ghost" 
                    className="text-muted-foreground hover:text-gradient transition-all px-4 justify-start"
                    onClick={logout}
                  >
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    variant="ghost"
                    className="text-muted-foreground hover:text-gradient transition-all px-4 justify-start"
                    onClick={() => setIsSignUpOpen(true)}
                  >
                    Sign Up / Log In
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Auth Modals */}
      <SignUpModal isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </nav>
  );
};

export default Navigation;
