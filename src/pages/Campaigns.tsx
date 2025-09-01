// File: src/pages/Campaigns.tsx
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import TermsModal from "../components/TermsModal"; // Import the new modal component

/**
 * @author ChebroluVirajith
 * @lastModified 2025-08-05 17:30:00
 * Campaigns page component with scroll to top functionality and terms modal.
 */
const Campaigns = () => {
  const location = useLocation();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isTermsOpen, setIsTermsOpen] = useState(false); // New state for the modal
  const [selectedCampaignId, setSelectedCampaignId] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [location]);

  const campaigns = [
    {
      id: 1,
      brand: "VYRAL",
      logo: "👗",
      payout: "100 coins",
      description: "Promote our brand and earn point to reedem yummy Frankies",
      progress: 75,
      type: "Fashion",
      platforms: ["Instagram", "YouTube","FaceBook"],
      views: "1.2K",
      color: "bg-primary"
    },
     {
      id: 2,
      brand: "TechMonkiez",
      logo: "👗",
      payout: "₹49",
      description: "Create trendy fashion content and styling tips for our latest collection",
      progress: 26.8,
      type: "Technology",
      platforms: ["Instagram","FaceBook"],
      views: "1.2K",
      color: "bg-primary"
    },
    
  ];

  const handleApplyClick = (campaignId) => {
    setSelectedCampaignId(campaignId);
    setIsTermsOpen(true);
  };

  const handleAcceptTerms = () => {
    // This is where you would integrate the campaign application logic
    console.log(`User accepted terms for campaign ID: ${selectedCampaignId}`);
    // You can add a toast notification or redirect the user here
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <section className="relative overflow-hidden">
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
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Active <span className="text-gradient">Campaigns</span>
              </h1>
              <p className="text-muted-foreground/80 max-w-2xl mx-auto">
                Browse through our curated collection of brand campaigns and start creating content that resonates with your audience.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                variant={selectedFilter === 'all' ? 'default' : 'outline'}
                className={`gradient-border ${selectedFilter === 'all' ? 'gradient-neon' : ''}`}
                onClick={() => setSelectedFilter('all')}
              >
                All Campaigns
              </Button>
              <Button
                variant={selectedFilter === 'fashion' ? 'default' : 'outline'}
                className={`gradient-border ${selectedFilter === 'fashion' ? 'gradient-neon' : ''}`}
                onClick={() => setSelectedFilter('fashion')}
              >
                Fashion
              </Button>
              <Button
                variant={selectedFilter === 'tech' ? 'default' : 'outline'}
                className={`gradient-border ${selectedFilter === 'tech' ? 'gradient-neon' : ''}`}
                onClick={() => setSelectedFilter('tech')}
              >
                Technology
              </Button>
              <Button
                variant={selectedFilter === 'food' ? 'default' : 'outline'}
                className={`gradient-border ${selectedFilter === 'food' ? 'gradient-neon' : ''}`}
                onClick={() => setSelectedFilter('food')}
              >
                Food & Beverage
              </Button>
              <Button
                variant={selectedFilter === 'education' ? 'default' : 'outline'}
                className={`gradient-border ${selectedFilter === 'education' ? 'gradient-neon' : ''}`}
                onClick={() => setSelectedFilter('education')}
              >
                Education
              </Button>
            </div>

            {/* Campaigns Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campaigns.filter(campaign => 
                selectedFilter === 'all' || 
                campaign.type.toLowerCase() === selectedFilter.toLowerCase()
              ).map((campaign) => (
                <div
                  key={campaign.id}
                  className="glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                >
                  {/* Campaign Header */}
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

                  {/* Campaign Description */}
                  <p className="text-sm text-muted-foreground/80 mb-4">
                    {campaign.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-muted-foreground/60 mb-1">
                      <span>Progress</span>
                      <span>{campaign.progress}%</span>
                    </div>
                    <div className="w-full bg-muted/20 rounded-full h-2">
                      <div
                        className="gradient-neon h-2 rounded-full"
                        style={{ width: `${campaign.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Platforms */}
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {campaign.platforms.map((platform, index) => (
                        <div
                          key={index}
                          className="w-8 h-8 rounded-full gradient-neon flex items-center justify-center text-xs"
                          title={platform}
                        >
                          {platform === 'Instagram' && '📸'}
                          {platform === 'YouTube' && '📺'}
                          {platform === 'FaceBook' && '🎵'}
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="gradient-border interactive-hover group"
                      onClick={() => handleApplyClick(campaign.id)} // Open modal on click
                    >
                      <span className="text-gradient group-hover:neon-text">Apply Now</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Render the TermsModal */}
        <TermsModal
          isOpen={isTermsOpen}
          onClose={() => setIsTermsOpen(false)}
          onAccept={handleAcceptTerms}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Campaigns;