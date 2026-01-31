import { MapPin, Mail, Phone } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">
                Lost&Found<span className="text-primary">AI</span>
              </span>
            </div>
            <p className="text-background/70 max-w-sm mb-6">
              AI-powered lost and found system helping communities reunite with their belongings quickly and securely.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Report Lost", "Report Found", "Claim Item", "How it Works"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/70 hover:text-background transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {["Help Center", "FAQs", "Contact Us", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/70 hover:text-background transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center text-background/50 text-sm">
          © {new Date().getFullYear()} Lost&Found AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
