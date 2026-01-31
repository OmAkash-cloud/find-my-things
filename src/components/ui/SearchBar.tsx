import { useState } from "react";
import { Search, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar = ({ onSearch, placeholder = "WHAT DID YOU LOSE?", className }: SearchBarProps) => {
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
    <form onSubmit={handleSubmit} className={cn("w-full", className)}>
      <div
        className={cn(
          "relative flex items-stretch bg-card brutal-border transition-all duration-150",
          isFocused ? "brutal-shadow-lg -translate-x-1 -translate-y-1" : "brutal-shadow"
        )}
      >
        <div className="flex items-center pl-5 pr-3 border-r-3 border-foreground bg-muted">
          <Search className="w-6 h-6 text-foreground" />
        </div>
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="flex-1 py-5 px-5 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-lg font-medium tracking-wide"
        />
        
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="px-4 text-muted-foreground hover:text-foreground transition-colors border-l-3 border-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        )}
        
        <button
          type="submit"
          className="px-8 bg-primary text-primary-foreground font-display text-xl hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          disabled={!query.trim()}
        >
          FIND IT
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
