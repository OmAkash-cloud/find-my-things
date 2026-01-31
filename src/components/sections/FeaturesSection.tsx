import { 
  Brain, 
  QrCode, 
  Bell, 
  Shield, 
  MapPin, 
  Award,
  Fingerprint,
  Zap
} from "lucide-react";
import FeatureCard from "@/components/ui/FeatureCard";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Our intelligent system compares descriptions, images, and locations to find the best matches automatically.",
  },
  {
    icon: QrCode,
    title: "QR Code Access",
    description: "Scan QR codes placed around campus for instant access—no app installation required.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get real-time alerts when a potential match is found for your lost item.",
  },
  {
    icon: Shield,
    title: "Secure Verification",
    description: "Anti-fraud system ensures only rightful owners can claim items through ownership proof.",
  },
  {
    icon: Fingerprint,
    title: "Secure Handover",
    description: "One-time QR codes and OTPs ensure items are safely returned to verified owners.",
  },
  {
    icon: MapPin,
    title: "Smart Lost Zones",
    description: "AI analytics identify high-risk areas to help prevent future losses.",
  },
  {
    icon: Award,
    title: "Trust & Reputation",
    description: "Earn badges and trust points for helping return items to the community.",
  },
  {
    icon: Zap,
    title: "Instant Reports",
    description: "Quick and simple reporting process with just a few taps.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Powerful Features
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Built with cutting-edge technology to make item recovery fast, secure, and reliable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
