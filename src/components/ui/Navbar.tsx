import { MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "How it Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "About", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center shadow-sm group-hover:shadow-glow transition-shadow">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              Lost&Found<span className="text-primary">AI</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-5 py-2.5 bg-gradient-hero text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-opacity shadow-sm">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMenuOpen ? "max-h-64 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full px-5 py-2.5 bg-gradient-hero text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
