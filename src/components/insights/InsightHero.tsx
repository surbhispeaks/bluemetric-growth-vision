
import { useState } from "react";
import { Search, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { categories } from "@/data/insights";

interface InsightHeroProps {
  onSearch: (term: string) => void;
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
}

const InsightHero = ({ onSearch, onCategoryChange, selectedCategory }: InsightHeroProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <section className="py-20 bg-bluemetric-darkblue">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-semibold text-white mb-6">
            Financial Insights
          </h1>
          <p className="text-xl text-white/90 mb-10">
            Expert guidance and practical advice to help you make informed business decisions.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <form onSubmit={handleSearchSubmit} className="flex-grow flex">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  type="search"
                  placeholder="Search articles..." 
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button 
                type="submit" 
                className="ml-2 bg-bluemetric-blue hover:bg-bluemetric-mediumblue"
              >
                Search
              </Button>
            </form>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Tag className="h-4 w-4 mr-2" />
                  {selectedCategory === "All Categories" ? "Categories" : selectedCategory}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {categories.map((category) => (
                  <DropdownMenuItem 
                    key={category}
                    className={`cursor-pointer ${selectedCategory === category ? "bg-bluemetric-blue/20 font-medium" : ""}`}
                    onClick={() => onCategoryChange(category)}
                  >
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightHero;
