import { useState } from "react";
import { toast } from "sonner";
import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ActionsSection from "@/components/sections/ActionsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import FooterSection from "@/components/sections/FooterSection";
import SearchResults from "@/components/SearchResults";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleBackToHome = () => {
    setSearchQuery(null);
  };

  const handleReportLost = () => {
    toast.info("Report Lost feature coming soon!", {
      description: "You'll be able to report lost items here.",
    });
  };

  const handleReportFound = () => {
    toast.info("Report Found feature coming soon!", {
      description: "You'll be able to report found items here.",
    });
  };

  const handleClaimItem = () => {
    toast.info("Claim Item feature coming soon!", {
      description: "You'll be able to claim items here.",
    });
  };

  // Show search results if there's a query
  if (searchQuery) {
    return (
      <>
        <Navbar />
        <SearchResults query={searchQuery} onBack={handleBackToHome} />
      </>
    );
  }

  // Show landing page
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection onSearch={handleSearch} />
      <ActionsSection 
        onReportLost={handleReportLost}
        onReportFound={handleReportFound}
        onClaimItem={handleClaimItem}
      />
      <FeaturesSection />
      <FooterSection />
    </div>
  );
};

export default Index;
