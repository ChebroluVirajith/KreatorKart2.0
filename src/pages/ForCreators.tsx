// File: src/pages/ForCreators.tsx
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import WhyKreatorKart from "@/components/WhyKreatorKart";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

/**
 * @author ChebroluVirajith
 * @lastModified 2025-08-05 19:00:00
 * For Creators page component with restored FAQ section.
 */
const ForCreators = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we need to scroll to a section
    if (location.state?.scrollTo === 'testimonials') {
      const section = document.getElementById('testimonials');
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
        // Scroll to top on page load if no specific section is requested
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
  }, [location]);

  const handleScrollToTestimonials = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById('testimonials');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqItems = [
    {
      id: "item-1",
      question: "How do I get paid?",
      answer: "You get paid directly to your linked bank account or UPI ID. Payments are processed automatically based on your campaign's performance and are settled on a bi-weekly basis."
    },
    {
      id: "item-2",
      question: "What kind of content can I create?",
      answer: "You can create content that aligns with your niche and the brand's guidelines. We support all major platforms like Instagram, YouTube, and TikTok. Just be authentic and creative!"
    },
    {
      id: "item-3",
      question: "Are there any follower requirements?",
      answer: "No! We believe in quality over quantity. Your earnings are based on genuine views and engagement, not on your follower count. This gives every creator a fair chance."
    },
    {
      id: "item-4",
      question: "How do I find campaigns?",
      answer: "Once you sign up and complete your profile, you can browse all active campaigns on the 'Campaigns' page. You can filter them by category, platform, and payout to find the perfect match."
    },
    {
      id: "item-5",
      question: "What if I have another question?",
      answer: (
        <>
          If you have more questions, feel free to submit them through our{' '}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfKNxutcBZdLLHznsjM4nnhur1JyWAgyAj2VDClr5gi2vOQqQ/viewform?usp=dialog" // REPLACE THIS WITH YOUR GOOGLE FORM LINK
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Google Form
          </a>
          .
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 gradient-dark"></div>
            <div className="absolute inset-0 grid-pattern opacity-30"></div>
            {/* Animated Orbs */}
            <div className="absolute top-20 left-[20%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-[20%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Text Content */}
              <div className="relative space-y-8">
                <div className="absolute -left-8 top-0 w-1 h-32 gradient-neon rounded-full neon-glow"></div>
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    Powering{" "}
                    <span className="text-gradient neon-text animate-glow">
                      Creator
                    </span>
                    {" "}Economy
                  </h1>
                  <p className="text-2xl text-muted-foreground leading-relaxed animate-float" style={{ animationDelay: '0.5s' }}>
                    Your content. Your rules. Real earnings.
                  </p>
                  <p className="text-lg text-muted-foreground/80 max-w-xl animate-float" style={{ animationDelay: '1s' }}>
                    Connect with brands that value your unique voice and reach. Our platform empowers you to monetize your creativity without the stress of managing brand deals.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild
                    size="lg" 
                    className="relative gradient-neon text-white neon-glow interactive-hover group overflow-hidden"
                  >
                    <Link to="/campaigns">
                        <span className="relative z-10 flex items-center">
                            Join Our Community
                            <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 shimmer"></div>
                    </Link>
                  </Button>
                 
                </div>
              </div>

              {/* Right Column - Visual */}
              <div className="relative perspective-1000">
                {/* Visual placeholder for creator content */}
                <div className="w-full h-96 glass rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 animate-float">
                  <div className="h-full w-full bg-gradient-to-br from-muted/40 to-muted/20 rounded-xl shimmer flex items-center justify-center">
                    <span className="text-xl font-bold text-muted-foreground/50">Your Content Here</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhyKreatorKart />
        
        {/* Restored FAQ Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                Frequently Asked{" "}
                <span className="text-gradient animate-glow">
                  Questions
                </span>
              </h2>
              <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto">
                Everything you need to know about becoming a VYRAL creator.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item) => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ForCreators;
