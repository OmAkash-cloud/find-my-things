import { ArrowLeft, MapPin, Calendar, Tag, AlertCircle } from "lucide-react";

interface SearchResultsProps {
  query: string;
  onBack: () => void;
}

const SearchResults = ({ query, onBack }: SearchResultsProps) => {
  // Mock results - in real app, this would come from API/database
  const mockResults = [
    {
      id: 1,
      title: "Black Leather Wallet",
      description: "Found near Central Park entrance. Contains some cards.",
      location: "Central Park, NYC",
      date: "2 hours ago",
      category: "Wallet",
      matchScore: 92,
    },
    {
      id: 2,
      title: "Brown Bifold Wallet",
      description: "Discovered at subway station. Has initials J.D.",
      location: "Times Square Station",
      date: "5 hours ago",
      category: "Wallet",
      matchScore: 78,
    },
    {
      id: 3,
      title: "Navy Blue Wallet",
      description: "Left at coffee shop counter. Contains ID.",
      location: "Starbucks, 5th Ave",
      date: "1 day ago",
      category: "Wallet",
      matchScore: 65,
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 font-bold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            BACK TO HOME
          </button>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-block px-4 py-2 bg-primary brutal-border brutal-shadow-sm mb-4">
                <span className="font-display text-sm">SEARCH RESULTS</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground">
                SHOWING MATCHES FOR
              </h1>
              <p className="font-display text-3xl sm:text-4xl text-primary mt-2">"{query.toUpperCase()}"</p>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 bg-muted brutal-border">
              <AlertCircle className="w-5 h-5 text-accent" />
              <span className="text-sm font-bold">{mockResults.length} POTENTIAL MATCHES</span>
            </div>
          </div>
        </div>

        {/* Results grid */}
        <div className="space-y-4">
          {mockResults.map((result, index) => (
            <div
              key={result.id}
              className="group bg-card brutal-border brutal-shadow hover-brutal p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-6">
                  {/* Match score */}
                  <div className="flex-shrink-0 w-20 h-20 bg-primary brutal-border flex flex-col items-center justify-center">
                    <span className="font-display text-2xl text-primary-foreground">{result.matchScore}%</span>
                    <span className="text-xs font-bold text-primary-foreground/70">MATCH</span>
                  </div>
                  
                  {/* Item details */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-display text-xs px-2 py-1 bg-muted text-muted-foreground">
                        #{String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xs font-bold text-muted-foreground flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        {result.category.toUpperCase()}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl text-foreground mb-2">{result.title.toUpperCase()}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{result.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {result.location}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {result.date}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Action button */}
                <button className="px-6 py-3 bg-secondary text-secondary-foreground font-display text-lg brutal-border brutal-shadow-sm hover-brutal whitespace-nowrap">
                  CLAIM THIS
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No exact match CTA */}
        <div className="mt-12 p-8 bg-muted brutal-border text-center">
          <h3 className="font-display text-2xl mb-3">DON'T SEE YOUR ITEM?</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Report your lost item and we'll notify you instantly when a match is found.
          </p>
          <button className="px-8 py-4 bg-primary text-primary-foreground font-display text-lg brutal-border brutal-shadow hover-brutal">
            REPORT LOST ITEM
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
