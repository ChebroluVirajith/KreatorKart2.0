
const WhyKreatorKart = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Why{" "}
                <span className="text-gradient animate-glow">
                  KreatorKart
                </span>
                ?
              </h2>
              <div className="space-y-6">
                <div className="glass rounded-2xl p-6 transform hover:translate-y-[-4px] transition-transform duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 gradient-neon rounded-xl flex items-center justify-center text-white text-lg font-bold mt-1 shadow-lg shadow-primary/25">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gradient mb-2">
                        Brands pay only when they get results
                      </h3>
                      <p className="text-muted-foreground/80">
                        No upfront costs, no wasted budgets. Brands only pay for verified views and genuine engagement, ensuring every rupee drives real value.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 transform hover:translate-y-[-4px] transition-transform duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 gradient-neon rounded-xl flex items-center justify-center text-white text-lg font-bold mt-1 shadow-lg shadow-primary/25">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gradient mb-2">
                        Creators earn from views, no followers needed
                      </h3>
                      <p className="text-muted-foreground/80">
                        Your creativity matters more than your follower count. Earn based on the quality of your content and the engagement it generates.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 transform hover:translate-y-[-4px] transition-transform duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 gradient-neon rounded-xl flex items-center justify-center text-white text-lg font-bold mt-1 shadow-lg shadow-primary/25">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gradient mb-2">
                        Real-time tracking & transparent payments
                      </h3>
                      <p className="text-muted-foreground/80">
                        Advanced analytics track your content performance across all platforms. See your earnings grow in real-time with complete transparency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative perspective-1000">
            <div className="glass rounded-2xl p-8 shadow-2xl transform hover:rotate-y-12 transition-transform duration-500">
              {/* Phone Mockup showing viral content */}
              <div className="bg-gradient-dark rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                  <div className="text-xs text-muted-foreground/80">KreatorKart Dashboard</div>
                </div>

                {/* Viral Video Stats */}
                <div className="space-y-6">
                  <div className="glass rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-muted-foreground/80">Total Views</span>
                      <span className="text-2xl font-bold text-gradient">2.4M</span>
                    </div>
                    <div className="w-full bg-muted/20 rounded-full h-2">
                      <div className="gradient-neon h-2 rounded-full w-3/4 animate-pulse"></div>
                    </div>
                  </div>

                  <div className="glass rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground/80">Earnings</span>
                      <span className="text-2xl font-bold text-gradient">₹1,920</span>
                    </div>
                    <div className="text-xs text-muted-foreground/60">@ ₹80 per 1K views</div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="glass rounded-lg p-3 text-center transform hover:scale-105 transition-transform duration-300">
                      <div className="text-lg font-semibold">📱</div>
                      <div className="text-xs text-muted-foreground/80">Instagram</div>
                      <div className="text-sm font-medium text-gradient">1.2M</div>
                    </div>
                    <div className="glass rounded-lg p-3 text-center transform hover:scale-105 transition-transform duration-300">
                      <div className="text-lg font-semibold">📺</div>
                      <div className="text-xs text-muted-foreground/80">YouTube</div>
                      <div className="text-sm font-medium text-gradient">890K</div>
                    </div>
                    <div className="glass rounded-lg p-3 text-center transform hover:scale-105 transition-transform duration-300">
                      <div className="text-lg font-semibold">🐦</div>
                      <div className="text-xs text-muted-foreground/80">X</div>
                      <div className="text-sm font-medium text-gradient">310K</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Achievement */}
              <div className="absolute -top-4 -right-4 gradient-neon text-white px-6 py-3 rounded-2xl shadow-lg shadow-primary/25 transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="text-sm font-bold flex items-center space-x-2">
                  <span>Viral!</span>
                  <span className="text-lg animate-pulse">🔥</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 inset-0 blur-3xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKreatorKart;
