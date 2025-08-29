import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

/**
 * @author ChebroluVirajith
 * @lastModified 2025-07-24
 */
const HowItWorks = () => {
  const steps = [
    {
      icon: "👋",
      title: "Sign Up & Complete Profile",
      description: "Create your account and showcase your content creation expertise across different platforms.",
      color: "from-primary/20 to-accent/20"
    },
    {
      icon: "🔍",
      title: "Browse Active Campaigns",
      description: "Explore campaigns that match your niche and content style. Filter by category, platform, or payout.",
      color: "from-accent/20 to-secondary/20"
    },
    {
      icon: "✍️",
      title: "Create & Submit Content",
      description: "Produce engaging content following brand guidelines. Submit for review through our platform.",
      color: "from-secondary/20 to-primary/20"
    },
    {
      icon: "💰",
      title: "Get Paid for Views",
      description: "Earn based on genuine views and engagement. Track earnings in real-time on your dashboard.",
      color: "from-primary/20 to-accent/20"
    }
  ];

  return (
    <section id="how-it-works" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-dark"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        {/* Glowing Lines */}
        <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute right-0 bottom-1/3 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            How <span className="text-gradient">KreatorKart</span> Works
          </h2>
          <p className="text-muted-foreground/80 max-w-2xl mx-auto">
            Join our platform in four simple steps and start monetizing your content creation skills
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="glass rounded-2xl p-6 relative group hover:scale-105 transition-transform duration-300"
            >
              {/* Step Number */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full gradient-neon flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-4 relative">
                <div className="w-16 h-16 gradient-neon rounded-2xl flex items-center justify-center text-3xl">
                  {step.icon}
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-40"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${step.color})`
                  }}
                ></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gradient mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground/80">
                {step.description}
              </p>

              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-6">
                  <ArrowRight className="w-6 h-6 text-muted-foreground/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="gradient-border bg-background interactive-hover group"
          >
            <span className="text-gradient group-hover:neon-text">Get Started Now</span>
          </Button>
        </div>

        {/* Floating Elements */}
        <div className="absolute -z-10 inset-0">
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-full blur-3xl"></div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-gradient mb-2">10K+</div>
            <div className="text-sm text-muted-foreground/80">Active Creators</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-gradient mb-2">₹50L+</div>
            <div className="text-sm text-muted-foreground/80">Paid to Creators</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-gradient mb-2">200+</div>
            <div className="text-sm text-muted-foreground/80">Brand Partners</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-gradient mb-2">98%</div>
            <div className="text-sm text-muted-foreground/80">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;