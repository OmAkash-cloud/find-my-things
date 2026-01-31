import { useState } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar = ({ onSearch, placeholder = "Describe your lost item...", className }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const clearSearch = () => {
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className={cn("w-full max-w-2xl mx-auto", className)}>
      <div
        className={cn(
          "relative flex items-center rounded-2xl bg-card border-2 transition-all duration-300",
          isFocused 
            ? "border-primary shadow-glow" 
            : "border-border shadow-md hover:border-primary/50"
        )}
      >
        <div className="pl-5 pr-3">
          <Search className="w-5 h-5 text-muted-foreground" />
        </div>
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="flex-1 py-4 pr-4 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-base"
        />
        
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="p-2 mr-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        
        <button
          type="submit"
          className="m-2 px-6 py-2.5 bg-gradient-hero text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
          disabled={!query.trim()}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
