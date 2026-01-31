import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Report or Search",
    description: "Found something? Report it. Lost something? Search for matches or file a report.",
  },
  {
    number: "02",
    title: "AI Matching",
    description: "Our AI analyzes details, images, and locations to find the best possible matches.",
  },
  {
    number: "03",
    title: "Verify Ownership",
    description: "Prove you're the rightful owner by confirming unique details about your item.",
  },
  {
    number: "04",
    title: "Secure Handover",
    description: "Use a one-time code to safely collect your item from the finder or admin.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A simple, secure process to reunite you with your belongings.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={step.number}
                  className={cn(
                    "relative flex gap-6 items-start opacity-0 animate-fade-in",
                  )}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Step number */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-md">
                    <span className="font-display text-lg font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
