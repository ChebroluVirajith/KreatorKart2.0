import { Button } from "./ui/button";

const CampaignDashboard = () => {
  const campaigns = [
    {
      id: 1,
      brand: "TechFlow",
      logo: "🚀",
      payout: "₹120",
      description: "Create engaging tech review content showcasing our latest productivity app",
      progress: 75,
      type: "UGC",
      platforms: ["Instagram", "YouTube"],
      views: "2.3K",
      color: "bg-primary"
    },
    {
      id: 2,
      brand: "EcoWear",
      logo: "🌱",
      payout: "₹80",
      description: "Sustainable fashion haul featuring our eco-friendly clothing line",
      progress: 45,
      type: "Lifestyle",
      platforms: ["Instagram", "X"],
      views: "1.8K",
      color: "bg-accent"
    },
    {
      id: 3,
      brand: "FitLife",
      logo: "💪",
      payout: "₹95",
      description: "Workout routine videos using our premium fitness equipment",
      progress: 60,
      type: "Fitness",
      platforms: ["YouTube", "Instagram"],
      views: "4.1K",
      color: "bg-secondary"
    },
    {
      id: 4,
      brand: "CafeBlend",
      logo: "☕",
      payout: "₹70",
      description: "Coffee brewing tutorials featuring our artisan coffee blends",
      progress: 30,
      type: "Food",
      platforms: ["Instagram"],
      views: "950",
      color: "bg-primary"
    },
    {
      id: 5,
      brand: "GameZone",
      logo: "🎮",
      payout: "₹150",
      description: "Gaming content and reviews of our latest mobile game releases",
      progress: 85,
      type: "Gaming",
      platforms: ["YouTube", "X"],
      views: "6.7K",
      color: "bg-accent"
    },
    {
      id: 6,
      brand: "BookNook",
      logo: "📚",
      payout: "₹60",
      description: "Book review and reading recommendation content for book lovers",
      progress: 20,
      type: "Education",
      platforms: ["Instagram", "YouTube"],
      views: "720",
      color: "bg-secondary"
    }
  ];

  return (
    <section id="campaigns" className="relative py-16 lg:py-24 overflow-hidden">
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
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Active{" "}
            <span className="text-gradient animate-glow">
              Campaigns
            </span>
          </h2>
          <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto">
            Browse and join campaigns that match your interests. Start earning based on real views today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 gradient-neon rounded-xl flex items-center justify-center text-xl">
                    {campaign.logo}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gradient">{campaign.brand}</h3>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${campaign.color}`}>
                        {campaign.type}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gradient">{campaign.payout}</div>
                  <div className="text-xs text-muted-foreground/60">per 1K views</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground/80 mb-4 line-clamp-2">
                {campaign.description}
              </p>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-muted-foreground/60 mb-1">
                  <span>Campaign Progress</span>
                  <span>{campaign.progress}%</span>
                </div>
                <div className="w-full bg-muted/20 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full gradient-neon animate-pulse`}
                    style={{ width: `${campaign.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Platforms & Views */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  {campaign.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="px-2 py-1 glass rounded-lg text-xs text-muted-foreground/80"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
                <div className="text-sm font-medium text-gradient">
                  {campaign.views} views
                </div>
              </div>

              {/* CTA */}
              <Button className="w-full gradient-neon text-white hover:scale-105 transition-transform duration-300">
                Join Campaign
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="gradient-border bg-background hover:scale-105 transition-transform duration-300"
          >
            View All Campaigns
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CampaignDashboard;