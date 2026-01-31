import { ArrowLeft, MapPin, Clock, Tag } from "lucide-react";

interface SearchResultsProps {
  query: string;
  onBack: () => void;
}

const SearchResults = ({ query, onBack }: SearchResultsProps) => {
  // Mock empty results - in real app, this would come from backend
  const results: Array<{
    id: string;
    name: string;
    description: string;
    location: string;
    time: string;
    matchScore: number;
    image?: string;
  }> = [];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">
            Search Results
          </h1>
          <p className="text-muted-foreground">
            Showing matches for: <span className="text-foreground font-medium">"{query}"</span>
          </p>
        </div>

        {/* Results */}
        {results.length > 0 ? (
          <div className="grid gap-4">
            {results.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-md"
              >
                <div className="flex gap-4">
                  {item.image && (
                    <div className="w-24 h-24 rounded-xl bg-muted flex-shrink-0 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                          {item.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium">
                        {item.matchScore}% Match
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {item.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <Tag className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
              No matches found
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              We couldn't find any items matching "{query}" in our database yet. 
              Would you like to report it as lost so we can notify you when it's found?
            </p>
            <button className="px-6 py-3 bg-gradient-hero text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-opacity shadow-md">
              Report as Lost
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
