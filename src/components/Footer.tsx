import Campaigns from "@/pages/Campaigns";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-dark py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              
              <span className="text-xl font-bold text-gradient">VYRAL</span>
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
              <li><Link to="/campaigns"><a className="hover:text-gradient transition-all">Browse Campaigns</a></Link></li>
              <li><Link to="/campaigns"><a className="hover:text-gradient transition-all">Creator Guidelines</a></Link></li>
              <li><Link to="/campaigns"><a className="hover:text-gradient transition-all">Payment Info</a></Link></li>
              
            </ul>
          </div>

          {/* For Brands */}
          <div>
            <h3 className="text-lg font-semibold text-gradient mb-4">For Brands</h3>
            <ul className="space-y-2 text-muted-foreground/80">
              <li><a href="#" className="hover:text-gradient transition-all">Case Studies</a></li>
              
              <li><a href="#" className="hover:text-gradient transition-all">Analytics</a></li>
              <li><a href="#" className="hover:text-gradient transition-all">Brand Safety</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-gradient mb-4">Support</h3>
            <ul className="space-y-2 text-muted-foreground/80">
              <li><a href="#" className="hover:text-gradient transition-all">Help Center</a></li>
              <li><a href="#" className="hover:text-gradient transition-all">FAQ</a></li>
              <li><a href="#" className="hover:text-gradient transition-all">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-muted pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gradient mb-4">Get in Touch</h3>
              <div className="space-y-2 text-muted-foreground/80">
                <p>📧 kreatorkart37@gmail.com</p>
                <p>📞 +91 93462 32003</p>
                <p>📍 Hyderabad, Telangana, India</p>
              </div>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gradient mb-4">Business Hours</h3>
              <div className="space-y-2 text-muted-foreground/80">
                <p>Monday - Friday: 7:00 PM - 9:00 PM IST</p>
                <p>Saturday: 12:00 AM - 4:00 PM IST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-muted pt-8 flex flex-col md:flex-row justify-between items-center">
         <p className="text-muted-foreground/60 text-sm">
              Made with ♡ in India.
          </p> 
          <div className="flex space-x-6 text-sm text-muted-foreground/60 mt-4 md:mt-0">
            <a href="#" className="hover:text-gradient transition-all">Privacy</a>
            <a href="#" className="hover:text-gradient transition-all">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;