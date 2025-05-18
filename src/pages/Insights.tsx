
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import InsightHero from "@/components/insights/InsightHero";
import InsightCard from "@/components/insights/InsightCard";
import CallToAction from "@/components/home/CallToAction";
import { useBlogContext } from "@/context/BlogContext";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Insights = () => {
  const { blogs } = useBlogContext();
  const [filteredInsights, setFilteredInsights] = useState(blogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchTerm, setSearchTerm] = useState("");
  
  const itemsPerPage = 6;
  
  useEffect(() => {
    let results = blogs;
    
    // Apply category filter
    if (selectedCategory !== "All Categories") {
      results = results.filter(insight => insight.category === selectedCategory);
    }
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(insight => 
        insight.title.toLowerCase().includes(term) || 
        insight.excerpt.toLowerCase().includes(term) ||
        insight.category.toLowerCase().includes(term)
      );
    }
    
    setFilteredInsights(results);
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedCategory, searchTerm, blogs]);
  
  const totalPages = Math.ceil(filteredInsights.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentInsights = filteredInsights.slice(startIndex, startIndex + itemsPerPage);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <Layout>
      <InsightHero 
        onSearch={handleSearch} 
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          {filteredInsights.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-montserrat font-semibold text-bluemetric-darkblue mb-4">
                No articles found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-montserrat font-semibold text-bluemetric-darkblue">
                  {searchTerm 
                    ? `Search results for "${searchTerm}"`
                    : selectedCategory !== "All Categories" 
                      ? `Articles in ${selectedCategory}` 
                      : "Latest Insights"
                  }
                </h2>
                <p className="text-gray-600">
                  {filteredInsights.length} {filteredInsights.length === 1 ? "article" : "articles"} found
                </p>
              </div>
            
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentInsights.map((insight) => (
                  <InsightCard key={insight.slug} {...insight} />
                ))}
              </div>
              
              {totalPages > 1 && (
                <div className="mt-16">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                          className={currentPage <= 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>
                      
                      {Array.from({ length: totalPages }).map((_, index) => (
                        <PaginationItem key={index}>
                          <PaginationLink
                            onClick={() => handlePageChange(index + 1)}
                            isActive={currentPage === index + 1}
                            className="cursor-pointer"
                          >
                            {index + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      
                      <PaginationItem>
                        <PaginationNext
                          onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                          className={currentPage >= totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </>
          )}
        </div>
      </section>
      
      <CallToAction />
    </Layout>
  );
};

export default Insights;
