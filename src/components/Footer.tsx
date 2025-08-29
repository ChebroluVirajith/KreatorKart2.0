const Footer = () => {
  return (
    <footer className="relative bg-gradient-dark py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-neon rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-bold text-gradient">KreatorKart</span>
            </div>
            <p className="text-muted-foreground/80 leading-relaxed">
              Revolutionizing content monetization by connecting authentic creators with brands that value genuine engagement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                📘
              </a>
              <a href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                📸
              </a>
              <a href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                🐦
              </a>
              <a href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                💼
              </a>
            </div>
          </div>

          {/* For Creators */}
          <div>
            <h3 className="text-lg font-semibold text-gradient mb-4">For Creators</h3>
            <ul className="space-y-2 text-muted-foreground/80">
              <li><a href="#" className="hover:text-gradient transition-all">How to Start</a></li>
              <li><a href="#" className="hover:text-gradient transition-all">Browse Campaigns</a></li>
              <li><a href="#" className="hover:text-gradient transition-all">Creator Guidelines</a></li>
              <li><a href="#" className="hover:text-gradient transition-all">Payment Info</a></li>
              <li><a href="#" className="hover:text-gradient transition-all">Success Stories</a></li>
            </ul>
          </div>

          {/* For Brands */}
          <div>
            <h3 className="text-lg font-semibold text-gradient mb-4">For Brands</h3>
            <ul className="space-y-2 text-muted-foreground/80">
              <li><a href="#" className="hover:text-gradient transition-all">Launch Campaign</a></li>
              <li><a href="#" className="hover:text-gradient transition-all">Pricing</a></li>
              <li><a href="#" className="hover:text-gradient transition-all">Analytics</a></li>
              <li><a href="#" className="hover:text-gradient transition-all">Brand Safety</a></li>
              <li><a href="#" className="hover:text-gradient transition-all">Case Studies</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-gradient mb-4">Support</h3>
            <ul className="space-y-2 text-muted-foreground/80">
              <li><a href="#" className="hover:text-gradient transition-all">Help Center</a></li>
              <li><a href="#" className="hover:text-gradient transition-all">FAQ</a></li>
              <li><a href="#" className="hover:text-gradient transition-all">Contact Us</a></li>
              <li><a href="#" className="hover:text-gradient transition-all">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gradient transition-all">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-muted pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gradient mb-4">Get in Touch</h3>
              <div className="space-y-2 text-muted-foreground/80">
                <p>📧 hello@kreatorkart.com</p>
                <p>📞 +91 98765 43210</p>
                <p>📍 Bangalore, Karnataka, India</p>
              </div>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gradient mb-4">Business Hours</h3>
              <div className="space-y-2 text-muted-foreground/80">
                <p>Monday - Friday: 9:00 AM - 7:00 PM IST</p>
                <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-muted pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground/60 text-sm">
            © 2024 KreatorKart. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground/60 mt-4 md:mt-0">
            <a href="#" className="hover:text-gradient transition-all">Privacy</a>
            <a href="#" className="hover:text-gradient transition-all">Terms</a>
            <a href="#" className="hover:text-gradient transition-all">Cookies</a>
            <a href="#" className="hover:text-gradient transition-all">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;