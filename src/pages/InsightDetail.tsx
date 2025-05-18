
import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useBlogContext } from "@/context/BlogContext";
import { useEffect } from "react";

const InsightDetail = () => {
  const { slug } = useParams();
  const { blogs, getBlogBySlug } = useBlogContext();
  const insight = slug ? getBlogBySlug(slug) : undefined;

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [slug]);

  if (!insight) {
    return (
      <Layout>
        <div className="py-20">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl font-montserrat font-semibold text-bluemetric-darkblue mb-8">
                Article Not Found
              </h1>
              <p className="mb-8">The article you're looking for doesn't exist or has been moved.</p>
              <Link to="/insights">
                <Button className="bg-bluemetric-blue hover:bg-bluemetric-mediumblue">
                  Return to Insights
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Function to render formatted content with markdown-like syntax
  const renderContent = (content: string) => {
    if (!content) return renderDefaultContent();
    
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-montserrat font-bold mt-8 mb-4">{paragraph.substring(2)}</h1>;
      } else if (paragraph.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-montserrat font-bold mt-6 mb-3">{paragraph.substring(3)}</h2>;
      } else if (paragraph.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-montserrat font-bold mt-5 mb-2">{paragraph.substring(4)}</h3>;
      } else if (paragraph.startsWith('> ')) {
        return <blockquote key={index} className="border-l-4 border-bluemetric-blue pl-4 italic my-4 text-gray-700">{paragraph.substring(2)}</blockquote>;
      } else if (paragraph.match(/^-\s/)) {
        // Simple unordered list detection
        const items = content
          .split('\n')
          .filter(line => line.match(/^-\s/))
          .map((line, i) => <li key={i} className="mb-2">{line.substring(2)}</li>);
        return index === content.split('\n').findIndex(line => line.match(/^-\s/)) ? 
          <ul key={index} className="list-disc pl-6 my-6 space-y-1">{items}</ul> : null;
      } else if (paragraph.match(/^\d+\.\s/)) {
        // Simple ordered list detection
        const items = content
          .split('\n')
          .filter(line => line.match(/^\d+\.\s/))
          .map((line, i) => <li key={i} className="mb-2">{line.replace(/^\d+\.\s/, '')}</li>);
        return index === content.split('\n').findIndex(line => line.match(/^\d+\.\s/)) ? 
          <ol key={index} className="list-decimal pl-6 my-6 space-y-1">{items}</ol> : null;
      } else if (paragraph.trim() === '```' || paragraph.match(/^```[a-z]*$/)) {
        // Code block start/end
        return null;
      } else if (paragraph.trim() && content.split('\n').some(line => line.trim() === '```' || line.match(/^```[a-z]*$/))) {
        // Inside code block
        const isInBlock = (idx: number) => {
          const lines = content.split('\n');
          let inBlock = false;
          for (let i = 0; i <= idx; i++) {
            if (lines[i].trim() === '```' || lines[i].match(/^```[a-z]*$/)) {
              inBlock = !inBlock;
            }
          }
          return inBlock;
        };
        if (isInBlock(index)) {
          return <pre key={index} className="whitespace-pre-wrap bg-gray-100 p-4 rounded-md my-6 font-mono text-sm overflow-x-auto">{paragraph}</pre>;
        }
      }
      
      // Handle bold and italic inline styles
      let formattedText = paragraph;
      formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      formattedText = formattedText.replace(/\*(.*?)\*/g, '<em>$1</em>');
      
      // Handle links
      formattedText = formattedText.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-bluemetric-blue hover:text-bluemetric-mediumblue underline">$1</a>');
      
      return paragraph.trim() ? 
        <p key={index} className="my-5 text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: formattedText }}></p> : 
        <div key={index} className="h-4"></div>;
    });
  };
  
  // Default content for blogs without content field
  const renderDefaultContent = () => {
    return (
      <div>
        <p className="my-5 text-gray-700 leading-relaxed">
          Financial management is at the heart of every successful business. 
          For entrepreneurs and business owners looking to scale their operations, 
          understanding the key metrics that drive growth is essential. In this article, 
          we'll explore the financial indicators that can help you make informed decisions 
          for your business's future.
        </p>
        
        <h2 className="text-2xl font-montserrat font-bold mt-6 mb-3">Understanding the Financial Landscape</h2>
        <p className="my-5 text-gray-700 leading-relaxed">
          Before diving into specific metrics, it's important to understand the broader 
          financial context in which your business operates. Market trends, industry benchmarks, 
          and economic indicators all play a role in shaping your company's financial health.
        </p>
        
        <p className="my-5 text-gray-700 leading-relaxed">
          By analyzing these factors alongside your internal data, you can develop a more 
          comprehensive view of your business's performance and potential areas for growth.
        </p>
        
        <h2 className="text-2xl font-montserrat font-bold mt-6 mb-3">Key Performance Indicators</h2>
        <p className="my-5 text-gray-700 leading-relaxed">
          Every business has its own set of key performance indicators (KPIs) that reflect 
          its unique goals and challenges. However, there are several universal metrics that 
          all growing businesses should track:
        </p>
        
        <ul className="list-disc pl-6 my-6 space-y-1">
          <li className="mb-2">Cash Flow: The lifeblood of any business, measuring the money coming in and going out</li>
          <li className="mb-2">Gross Profit Margin: Indicates how efficiently you're producing your products or services</li>
          <li className="mb-2">Customer Acquisition Cost: Helps determine the effectiveness of your marketing efforts</li>
          <li className="mb-2">Customer Lifetime Value: Shows the total revenue you can expect from a single customer</li>
          <li className="mb-2">Burn Rate: Particularly important for startups, measures how quickly you're using up capital</li>
        </ul>
        
        <h2 className="text-2xl font-montserrat font-bold mt-6 mb-3">Conclusion</h2>
        <p className="my-5 text-gray-700 leading-relaxed">
          Financial metrics are more than just numbers on a spreadsheet—they're powerful tools 
          that can guide your business strategy and help you achieve your long-term goals.
        </p>
      </div>
    );
  };

  return (
    <Layout>
      <div className="py-12 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link 
                to="/insights" 
                className="inline-flex items-center text-bluemetric-blue hover:text-bluemetric-mediumblue transition-colors"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Insights
              </Link>
            </div>
            
            <Card className="p-8 md:p-12 shadow-lg border-t-4 border-t-bluemetric-blue">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-montserrat font-medium text-bluemetric-blue bg-blue-50 px-3 py-1 rounded-full">
                    {insight.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {insight.date}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-bluemetric-darkblue mb-6">
                  {insight.title}
                </h1>
                
                <p className="text-xl text-gray-600 mb-8">
                  {insight.excerpt}
                </p>
                
                <div className="border-b border-gray-200 mb-8"></div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                {renderContent(insight.content || "")}
              </div>
            </Card>
            
            <div className="mt-12">
              <h3 className="text-2xl font-montserrat font-semibold text-bluemetric-darkblue mb-6">
                Related Articles
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogs
                  .filter(item => 
                    item.slug !== slug && 
                    item.category === insight.category
                  )
                  .slice(0, 2)
                  .map(item => (
                    <Card key={item.slug} className="p-6 hover:shadow-md transition-shadow">
                      <div className="mb-3">
                        <span className="text-sm font-montserrat font-medium text-bluemetric-blue">
                          {item.category}
                        </span>
                      </div>
                      
                      <h4 className="text-xl font-montserrat font-semibold text-bluemetric-darkblue mb-3">
                        {item.title}
                      </h4>
                      
                      <Link to={`/insights/${item.slug}`} className="text-bluemetric-blue hover:text-bluemetric-mediumblue font-medium">
                        Read Article →
                      </Link>
                    </Card>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InsightDetail;
