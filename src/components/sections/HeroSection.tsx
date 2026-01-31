import { Search, Sparkles } from "lucide-react";
import SearchBar from "@/components/ui/SearchBar";

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

const HeroSection = ({ onSearch }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            AI-Powered Item Recovery
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Find What You've{" "}
            <span className="text-gradient-hero">Lost</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Our intelligent matching system connects lost items with their rightful owners. 
            Simply describe what you've lost and let AI do the rest.
          </p>

          {/* Search Bar */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <SearchBar 
              onSearch={onSearch} 
              placeholder="Describe your lost item (e.g., blue backpack, iPhone, keys...)"
            />
          </div>

          {/* Quick search hints */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <span className="text-sm text-muted-foreground">Popular:</span>
            {["Wallet", "Phone", "Keys", "ID Card", "Laptop"].map((item) => (
              <button
                key={item}
                onClick={() => onSearch(item)}
                className="px-3 py-1.5 text-sm rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "500ms" }}>
            {[
              { value: "95%", label: "Recovery Rate" },
              { value: "< 24h", label: "Avg. Match Time" },
              { value: "10K+", label: "Items Returned" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
