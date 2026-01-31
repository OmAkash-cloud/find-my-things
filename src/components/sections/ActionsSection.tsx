import { Search, Upload, ShieldCheck } from "lucide-react";
import ActionCard from "@/components/ui/ActionCard";

interface ActionsSectionProps {
  onReportLost: () => void;
  onReportFound: () => void;
  onClaimItem: () => void;
}

const ActionsSection = ({ onReportLost, onReportFound, onClaimItem }: ActionsSectionProps) => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How Can We Help?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose an action below to get started with reporting or claiming items.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <ActionCard
            icon={Search}
            title="Report Lost"
            description="Lost something? Report your item and get notified when a match is found."
            variant="primary"
            onClick={onReportLost}
          />
          
          <ActionCard
            icon={Upload}
            title="Report Found"
            description="Found an item? Help reunite it with the owner by reporting it here."
            variant="secondary"
            onClick={onReportFound}
          />
          
          <ActionCard
            icon={ShieldCheck}
            title="Claim Item"
            description="Spotted your item? Verify ownership and claim it securely."
            variant="accent"
            onClick={onClaimItem}
          />
        </div>
      </div>
    </section>
  );
};

export default ActionsSection;
