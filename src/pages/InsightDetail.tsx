
import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { insights } from "@/data/insights";
import { useEffect } from "react";

const InsightDetail = () => {
  const { slug } = useParams();
  const insight = insights.find((item) => item.slug === slug);

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
                <p>
                  Financial management is at the heart of every successful business. 
                  For entrepreneurs and business owners looking to scale their operations, 
                  understanding the key metrics that drive growth is essential. In this article, 
                  we'll explore the financial indicators that can help you make informed decisions 
                  for your business's future.
                </p>
                
                <h2>Understanding the Financial Landscape</h2>
                <p>
                  Before diving into specific metrics, it's important to understand the broader 
                  financial context in which your business operates. Market trends, industry benchmarks, 
                  and economic indicators all play a role in shaping your company's financial health.
                </p>
                
                <p>
                  By analyzing these factors alongside your internal data, you can develop a more 
                  comprehensive view of your business's performance and potential areas for growth.
                </p>
                
                <h2>Key Performance Indicators</h2>
                <p>
                  Every business has its own set of key performance indicators (KPIs) that reflect 
                  its unique goals and challenges. However, there are several universal metrics that 
                  all growing businesses should track:
                </p>
                
                <ul>
                  <li>Cash Flow: The lifeblood of any business, measuring the money coming in and going out</li>
                  <li>Gross Profit Margin: Indicates how efficiently you're producing your products or services</li>
                  <li>Customer Acquisition Cost: Helps determine the effectiveness of your marketing efforts</li>
                  <li>Customer Lifetime Value: Shows the total revenue you can expect from a single customer</li>
                  <li>Burn Rate: Particularly important for startups, measures how quickly you're using up capital</li>
                </ul>
                
                <h2>Implementing Financial Systems</h2>
                <p>
                  Once you've identified the metrics that matter most to your business, it's essential 
                  to establish systems for tracking and analyzing them. This might include:
                </p>
                
                <ul>
                  <li>Automated reporting tools that provide real-time insights</li>
                  <li>Regular financial reviews with key stakeholders</li>
                  <li>Benchmarking against industry standards and competitors</li>
                  <li>Forecasting models that help predict future performance</li>
                </ul>
                
                <p>
                  By maintaining consistent monitoring of these metrics, you can identify trends and 
                  make data-driven decisions that support sustainable growth.
                </p>
                
                <h2>Conclusion</h2>
                <p>
                  Financial metrics are more than just numbers on a spreadsheet—they're powerful tools 
                  that can guide your business strategy and help you achieve your long-term goals. By 
                  focusing on the right indicators and implementing robust systems for tracking them, 
                  you can position your business for continued success in an increasingly competitive marketplace.
                </p>
              </div>
            </Card>
            
            <div className="mt-12">
              <h3 className="text-2xl font-montserrat font-semibold text-bluemetric-darkblue mb-6">
                Related Articles
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {insights.filter(item => 
                  item.slug !== slug && 
                  item.category === insight.category
                ).slice(0, 2).map(item => (
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InsightDetail;
