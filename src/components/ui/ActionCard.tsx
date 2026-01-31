import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "primary" | "secondary" | "accent";
  onClick?: () => void;
  className?: string;
}

const ActionCard = ({ 
  icon: Icon, 
  title, 
  description, 
  variant = "primary",
  onClick,
  className 
}: ActionCardProps) => {
  const variantStyles = {
    primary: "bg-gradient-hero text-primary-foreground hover:shadow-glow",
    secondary: "bg-card border border-border text-foreground hover:border-primary hover:shadow-md",
    accent: "bg-gradient-accent text-accent-foreground hover:shadow-lg",
  };

  const iconBgStyles = {
    primary: "bg-primary-foreground/20",
    secondary: "bg-primary/10",
    accent: "bg-accent-foreground/20",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative p-6 rounded-2xl text-left transition-all duration-300 transform hover:-translate-y-1",
        variantStyles[variant],
        className
      )}
    >
      <div className={cn(
        "w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110",
        iconBgStyles[variant]
      )}>
        <Icon className="w-7 h-7" />
      </div>
      
      <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
      <p className={cn(
        "text-sm leading-relaxed",
        variant === "secondary" ? "text-muted-foreground" : "opacity-90"
      )}>
        {description}
      </p>
    </button>
  );
};

export default ActionCard;
