import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 gradient-dark"></div>
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        {/* Animated Orbs */}
        <div className="absolute top-20 left-[20%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-[20%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[40%] right-[40%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="relative space-y-8">
            {/* Decorative Element */}
            <div className="absolute -left-8 top-0 w-1 h-32 gradient-neon rounded-full neon-glow"></div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Turn{" "}
                <span className="text-gradient neon-text animate-glow">
                  Attention
                </span>
                {" "}into{" "}
                <span className="text-gradient neon-text animate-glow" style={{ animationDelay: '1s' }}>
                  Income
                </span>
              </h1>
              <p className="text-2xl text-muted-foreground leading-relaxed animate-float" style={{ animationDelay: '0.5s' }}>
                CREATE→POST→EARN
              </p>
              <p className="text-lg text-muted-foreground/80 max-w-xl animate-float" style={{ animationDelay: '1s' }}>
                Connect with brands, create authentic content, and earn based on real engagement. 
                No follower requirements. Just genuine views.
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
                    Start Earning
                    <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 shimmer"></div>
                </Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="gradient-border bg-background interactive-hover group"
              >
                <Link to="/campaigns">
                  <span className="text-gradient group-hover:neon-text">Browse Campaigns</span>
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="glass card-highlight neon-glow rounded-2xl p-4 backdrop-blur-xl animate-float" style={{ animationDelay: '0s' }}>
                <div className="text-3xl font-bold text-gradient neon-text">CREATE</div>
                <div className="text-sm text-muted-foreground/80">Create Reels</div>
              </div>
              <div className="glass card-highlight neon-glow rounded-2xl p-4 backdrop-blur-xl animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="text-3xl font-bold text-gradient neon-text">POST</div>
                <div className="text-sm text-muted-foreground/80">Post Online</div>
              </div>
              <div className="glass card-highlight neon-glow rounded-2xl p-4 backdrop-blur-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-3xl font-bold text-gradient neon-text">EARN</div>
                <div className="text-sm text-muted-foreground/80">Earn per view</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative lg:h-[600px] perspective-1000">
            {/* 3D Floating Cards */}
            <div className="relative w-full h-full">
              {/* Main Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 glass card-highlight neon-glow rounded-2xl p-6 shadow-2xl transform rotate-12 hover:rotate-0 transition-all duration-500 animate-float">
                <div className="space-y-4">
                  <div className="h-2 w-16 gradient-neon rounded-full"></div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full gradient-neon neon-glow p-[2px]">
                      <div className="w-full h-full bg-card rounded-full"></div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="h-3 bg-muted rounded-full w-3/4 shimmer"></div>
                      <div className="h-2 bg-muted/60 rounded-full w-1/2 shimmer"></div>
                    </div>
                  </div>
                  <div className="h-48 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 shimmer"></div>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full glass flex items-center justify-center animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
                          <div className="w-4 h-4 rounded-full gradient-neon"></div>
                        </div>
                      ))}
                    </div>
                    <div className="text-sm font-semibold text-gradient neon-text">1.2M views</div>
                  </div>
                </div>
              </div>

              {/* Floating Success Card */}
              <div className="absolute top-20 right-0 glass card-highlight neon-glow rounded-2xl px-6 py-3 shadow-lg transform -rotate-6 hover:rotate-0 transition-all duration-500 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full gradient-neon flex items-center justify-center animate-pulse">
                    <span className="text-lg">🎉</span>
                  </div>
                  <div className="text-gradient neon-text font-semibold">₹960 earned!</div>
                </div>
              </div>
              <div className="absolute bottom-80 right-80 glass card-highlight neon-glow rounded-2xl px-6 py-3 shadow-lg transform -rotate-6 hover:rotate-0 transition-all duration-500 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full gradient-neon flex items-center justify-center animate-pulse">
                    <span className="text-lg">❤️</span>
                  </div>
                  <div className="text-gradient neon-text font-semibold">Likes growing!</div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute bottom-20 left-0 glass card-highlight neon-glow rounded-2xl px-6 py-3 shadow-lg transform rotate-6 hover:rotate-0 transition-all duration-500 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full gradient-neon flex items-center justify-center animate-pulse">
                    <span className="text-lg">📈</span>
                  </div>
                  <div className="text-gradient neon-text font-semibold">Views rising!</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-[100px] animate-pulse-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
