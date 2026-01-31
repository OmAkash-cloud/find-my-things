import { MapPin, Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "FEATURES", href: "#features" },
    { label: "ABOUT", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-3 border-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-primary brutal-border brutal-shadow-sm flex items-center justify-center group-hover:bg-accent transition-colors">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl text-foreground leading-none">
                LOST&FOUND
              </span>
              <span className="text-xs font-bold tracking-widest text-muted-foreground">
                AI POWERED
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 font-display text-lg text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-6 py-3 bg-secondary text-secondary-foreground font-display text-lg brutal-border brutal-shadow-sm hover-brutal">
              <span className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                GET STARTED
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 brutal-border bg-card"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 border-t-3 border-foreground",
            isMenuOpen ? "max-h-80 pb-6" : "max-h-0 border-t-0"
          )}
        >
          <div className="flex flex-col gap-2 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-3 font-display text-xl text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="mt-2 px-6 py-3 bg-secondary text-secondary-foreground font-display text-lg brutal-border brutal-shadow-sm">
              <span className="flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" />
                GET STARTED
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
