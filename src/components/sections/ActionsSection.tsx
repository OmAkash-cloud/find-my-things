import { Search, Upload, ShieldCheck, ArrowUpRight } from "lucide-react";

interface ActionsSectionProps {
  onReportLost: () => void;
  onReportFound: () => void;
  onClaimItem: () => void;
}

const ActionsSection = ({ onReportLost, onReportFound, onClaimItem }: ActionsSectionProps) => {
  const actions = [
    {
      icon: Search,
      title: "REPORT LOST",
      description: "Lost something? Report your item and get notified when a match is found.",
      onClick: onReportLost,
      color: "bg-primary text-primary-foreground",
      number: "01",
    },
    {
      icon: Upload,
      title: "REPORT FOUND",
      description: "Found an item? Help reunite it with the owner by reporting it here.",
      onClick: onReportFound,
      color: "bg-card text-foreground",
      number: "02",
    },
    {
      icon: ShieldCheck,
      title: "CLAIM ITEM",
      description: "Spotted your item? Verify ownership and claim it securely.",
      onClick: onClaimItem,
      color: "bg-secondary text-secondary-foreground",
      number: "03",
    },
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-block px-4 py-2 bg-secondary text-secondary-foreground brutal-border brutal-shadow-sm mb-4">
              <span className="font-display text-sm">TAKE ACTION</span>
            </div>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-foreground leading-none">
              HOW CAN WE
              <span className="block text-primary">HELP YOU?</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            Choose an action below to get started. Our AI will guide you through the process.
          </p>
        </div>

        {/* Action cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.title}
                onClick={action.onClick}
                className={`group relative p-8 brutal-border brutal-shadow hover-brutal text-left ${action.color}`}
              >
                {/* Number */}
                <div className="absolute top-6 right-6 font-display text-6xl opacity-20">
                  {action.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 brutal-border bg-card flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="w-8 h-8 text-foreground group-hover:text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-3xl mb-3 flex items-center gap-2">
                  {action.title}
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm opacity-80 leading-relaxed">
                  {action.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ActionsSection;
