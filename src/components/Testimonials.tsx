const Testimonials = () => {
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

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 gradient-dark"></div>
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        {/* Animated Orbs */}
        <div className="absolute top-20 left-[20%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-[20%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Success{" "}
            <span className="text-gradient neon-text animate-glow">
              Stories
            </span>
          </h2>
          <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto animate-float">
            Real creators and brands sharing their KreatorKart journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass card-highlight neon-glow rounded-2xl p-6 interactive-hover group"
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

              {/* Stats */}
              <div className="border-t border-muted/20 pt-4">
                {testimonial.earnings && (
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-muted-foreground/60">Monthly Earnings</span>
                    <span className="text-sm font-bold text-gradient neon-text animate-pulse">{testimonial.earnings}</span>
                  </div>
                )}
                {testimonial.results && (
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-muted-foreground/60">Results</span>
                    <span className="text-sm font-bold text-gradient neon-text animate-pulse">{testimonial.results}</span>
                  </div>
                )}
                {testimonial.platform && (
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground/60">Platforms:</span>
                    <span className="text-xs font-medium text-gradient">{testimonial.platform}</span>
                  </div>
                )}
                {testimonial.company && (
                  <div className="text-xs font-medium text-gradient neon-text text-right">
                    {testimonial.company}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="glass card-highlight neon-glow rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gradient neon-text mb-4">Ready to Join Thousands of Successful Creators?</h3>
            <p className="text-lg text-muted-foreground/80 mb-6">Start your journey today and turn your creativity into income</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="gradient-neon text-white px-8 py-3 rounded-xl font-semibold interactive-hover group overflow-hidden relative">
                <span className="relative z-10">Start as Creator</span>
                <div className="absolute inset-0 shimmer"></div>
              </button>
              <button className="gradient-border bg-background px-8 py-3 rounded-xl font-semibold interactive-hover">
                <span className="text-gradient neon-text">Partner as Brand</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;