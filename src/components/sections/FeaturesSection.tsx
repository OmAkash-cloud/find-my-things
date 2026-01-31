import { Brain, Bell, Shield, Zap, Users, Globe } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI MATCHING",
    description: "Advanced algorithms scan and match items with 95% accuracy.",
  },
  {
    icon: Bell,
    title: "INSTANT ALERTS",
    description: "Get notified the moment a potential match is found.",
  },
  {
    icon: Shield,
    title: "SECURE CLAIMS",
    description: "Verification process ensures items reach rightful owners.",
  },
  {
    icon: Zap,
    title: "FAST RECOVERY",
    description: "Average item recovery time under 24 hours.",
  },
  {
    icon: Users,
    title: "COMMUNITY",
    description: "Join thousands helping reunite items with owners.",
  },
  {
    icon: Globe,
    title: "NATIONWIDE",
    description: "Coverage across all major cities and locations.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-muted" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-primary brutal-border brutal-shadow mb-6">
            <span className="font-display text-lg">WHY CHOOSE US</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-foreground">
            POWERFUL
            <span className="block">FEATURES</span>
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 brutal-border">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isOdd = index % 2 === 1;
            return (
              <div
                key={feature.title}
                className={`group p-8 border-b-3 border-r-3 border-foreground last:border-r-0 sm:last:border-r-3 lg:[&:nth-child(3)]:border-r-0 lg:[&:nth-child(6)]:border-r-0 [&:nth-last-child(-n+3)]:border-b-3 lg:[&:nth-last-child(-n+3)]:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 ${
                  isOdd ? "bg-muted" : "bg-card"
                } hover:bg-primary hover:text-primary-foreground transition-colors cursor-default`}
              >
                <div className="w-14 h-14 brutal-border bg-card flex items-center justify-center mb-6 group-hover:bg-primary-foreground transition-colors">
                  <Icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="font-display text-2xl mb-3">{feature.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
