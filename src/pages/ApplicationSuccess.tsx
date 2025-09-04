// File: src/pages/ApplicationSuccess.tsx
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from '../components/ui/button';
import { ExternalLink } from 'lucide-react';

/**
 * @author ChebroluVirajith
 * @lastModified 2025-08-14 18:45:00
 * A page to confirm successful application and redirect to the Google Form.
 */

const GOOGLE_FORM_LINK = "https://forms.gle/CKntLDj4GNZCYnqV6"; // REPLACE WITH YOUR GOOGLE FORM LINK

const ApplicationSuccess: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Add some debugging
    console.log('ApplicationSuccess component loaded');
    console.log('Current location:', location.pathname);
  }, [location]);

  const handleFormRedirect = () => {
    console.log('Redirecting to Google Form:', GOOGLE_FORM_LINK);
    window.open(GOOGLE_FORM_LINK, '_blank');
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="relative min-h-[80vh] flex items-center justify-center py-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center relative z-10">
            {/* Success Icon 
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>*/}

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              You're 1 step there!!
            </h1>
            
            <p className="text-xl text-muted-foreground mb-4">
              Fill out the Google Form below 👇
            </p>
            
            <p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto">
              We're excited to have you on board! Please complete your profile by filling out the Google Form below to finalize your application and start your creator journey with us.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={handleFormRedirect}
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Complete Application Form
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={handleGoHome}
                className="border-muted-foreground/30 hover:border-primary/50 hover:bg-primary/10"
              >
                Join our Community
              </Button>
            </div>

            <div className="mt-12 p-6 rounded-lg bg-muted/10 border border-muted/20">
              <h3 className="text-lg font-semibold mb-2 text-foreground">What happens next?</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>• Complete the application form (2-3 minutes)</p>
                <p>• Join the link shared at the end of the form</p>
                <p>• Once approved, you'll receive access to the campaign</p>
                <p>• Start creating content and earning rewards!</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ApplicationSuccess;