// File: src/components/TestimonialsCarousel.tsx
import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

/**
 * @author ChebroluVirajith
 * @lastModified 2025-08-03 12:00:00
 * An interactive carousel component for testimonials, adapted from the original success stories.
 */

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Content Creator",
    avatar: "👩‍💻",
    content: "KreatorKart changed my life! I went from earning nothing to ₹15,000/month just by creating content I love. No follower requirements means everyone has a fair shot.",
    earnings: "₹15K/month",
    platform: "Instagram • YouTube",
    gradient: "from-primary via-secondary to-accent"
  },
  {
    name: "Rahul Gupta",
    role: "Marketing Director, TechFlow",
    avatar: "👨‍💼",
    content: "Finally, a platform where we only pay for results. Our campaigns reach authentic audiences, and the ROI is incredible. KreatorKart delivered 3x more engagement than traditional ads.",
    company: "TechFlow",
    results: "3x ROI increase",
    gradient: "from-secondary via-accent to-primary"
  },
  {
    name: "Sneha Patel",
    role: "Student & Part-time Creator",
    avatar: "👩‍🎓",
    content: "Perfect for students like me! I create content between classes and earn enough to cover my expenses. The campaign briefs are clear and payments are always on time.",
    earnings: "₹8K/month",
    platform: "Instagram • X",
    gradient: "from-accent via-primary to-secondary"
  },
  {
    name: "David Chen",
    role: "Brand Manager, EcoWear",
    avatar: "👨‍🌾",
    content: "We found genuine creators who actually care about sustainability. The content feels authentic because it is. Our brand awareness increased by 200% in just 3 months.",
    company: "EcoWear",
    results: "200% awareness boost",
    gradient: "from-primary via-accent to-secondary"
  }
];


const TestimonialsCarousel = () => {
  return (
    <section id="testimonials" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-dark"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Hear From Our{" "}
            <span className="text-gradient animate-glow">
              Creators
            </span>
          </h2>
          <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto">
            See how KreatorKart is empowering content creators to monetize their passion.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Carousel>
            <CarouselContent className="-ml-1">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div
                    className="glass card-highlight neon-glow rounded-2xl p-6 interactive-hover group h-full"
                  >
                    {/* Header */}
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-xl flex items-center justify-center text-xl neon-glow animate-float`}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gradient neon-text">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground/80">{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <p className="text-sm text-muted-foreground/80 mb-4 leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/5 to-transparent shimmer"></div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
