import { ArrowDown, Sparkles, Eye, Package, Clock } from "lucide-react";
import SearchBar from "@/components/ui/SearchBar";

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

const HeroSection = ({ onSearch }: HeroSectionProps) => {
  const quickSearchItems = ["WALLET", "PHONE", "KEYS", "BAG", "LAPTOP"];

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Striped background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full striped-bg opacity-50" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-32 left-10 w-20 h-20 bg-primary brutal-border brutal-shadow animate-float hidden lg:block" />
      <div className="absolute bottom-40 right-20 w-16 h-16 bg-accent brutal-border brutal-shadow animate-float hidden lg:block" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-secondary brutal-border brutal-shadow-sm animate-float hidden lg:block" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Marquee banner */}
        <div className="overflow-hidden bg-secondary text-secondary-foreground brutal-border mb-12">
          <div className="flex whitespace-nowrap marquee py-3">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 px-4">
                <span className="font-display text-lg">★ AI-POWERED MATCHING</span>
                <span className="font-display text-lg">★ 95% RECOVERY RATE</span>
                <span className="font-display text-lg">★ INSTANT NOTIFICATIONS</span>
                <span className="font-display text-lg">★ SECURE & VERIFIED</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary brutal-border brutal-shadow-sm mb-8">
              <Sparkles className="w-4 h-4" />
              <span className="font-bold text-sm tracking-wider">NEW: AI MATCHING V2.0</span>
            </div>

            {/* Main headline */}
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground leading-none mb-6">
              LOST
              <span className="block text-primary">SOMETHING?</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
              Our AI scans thousands of found items in seconds. 
              Just describe what you lost—we'll do the detective work.
            </p>

            {/* Search Bar */}
            <SearchBar 
              onSearch={onSearch} 
              placeholder="DESCRIBE YOUR LOST ITEM..."
            />

            {/* Quick search tags */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-sm font-bold text-muted-foreground mr-2">QUICK:</span>
              {quickSearchItems.map((item) => (
                <button
                  key={item}
                  onClick={() => onSearch(item)}
                  className="px-4 py-2 text-sm font-bold bg-card brutal-border hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Right content - Stats cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary brutal-border brutal-shadow p-6 col-span-2">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary-foreground/20 brutal-border flex items-center justify-center">
                    <Eye className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="font-display text-5xl">95%</div>
                    <div className="text-sm font-bold opacity-80">RECOVERY RATE</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card brutal-border brutal-shadow p-6">
                <div className="w-12 h-12 bg-accent text-accent-foreground brutal-border flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="font-display text-4xl text-foreground">&lt;24H</div>
                <div className="text-sm font-bold text-muted-foreground">AVG MATCH</div>
              </div>
              
              <div className="bg-secondary text-secondary-foreground brutal-border brutal-shadow p-6">
                <div className="w-12 h-12 bg-secondary-foreground/20 brutal-border flex items-center justify-center mb-4">
                  <Package className="w-6 h-6" />
                </div>
                <div className="font-display text-4xl">10K+</div>
                <div className="text-sm font-bold opacity-80">RETURNED</div>
              </div>
            </div>

            {/* Decorative arrow */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 hidden lg:block">
              <div className="w-12 h-12 bg-primary brutal-border brutal-shadow flex items-center justify-center animate-bounce">
                <ArrowDown className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
