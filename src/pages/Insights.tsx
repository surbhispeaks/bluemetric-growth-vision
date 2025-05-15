
import Layout from "@/components/layout/Layout";
import InsightHero from "@/components/insights/InsightHero";
import InsightCard from "@/components/insights/InsightCard";
import CallToAction from "@/components/home/CallToAction";

const Insights = () => {
  const insights = [
    {
      title: "5 Financial Metrics Every Growing Business Should Track",
      excerpt: "Beyond revenue and profit, discover the key performance indicators that truly predict business success and sustainability.",
      category: "Performance Metrics",
      slug: "financial-metrics-growing-business",
      date: "May 10, 2023"
    },
    {
      title: "QuickBooks vs Xero: Choosing the Right Financial Platform",
      excerpt: "A comprehensive comparison of two leading accounting platforms to help you determine which best suits your business needs.",
      category: "Financial Systems",
      slug: "quickbooks-vs-xero",
      date: "April 22, 2023"
    },
    {
      title: "Cash Flow Management Strategies for Service Businesses",
      excerpt: "Practical approaches to maintaining healthy cash flow when your business model relies on service delivery and client payments.",
      category: "Cash Flow",
      slug: "cash-flow-service-businesses",
      date: "March 15, 2023"
    },
    {
      title: "Understanding Financial Statements: A Guide for Entrepreneurs",
      excerpt: "A straightforward explanation of balance sheets, income statements, and cash flow statements specifically for non-financial business owners.",
      category: "Financial Literacy",
      slug: "understanding-financial-statements",
      date: "February 28, 2023"
    },
    {
      title: "Tax Planning Strategies for Small Businesses",
      excerpt: "Proactive approaches to minimize tax liability while remaining fully compliant with regulations.",
      category: "Tax Planning",
      slug: "tax-planning-small-business",
      date: "January 17, 2023"
    },
    {
      title: "Setting Up Financial Systems for Startup Success",
      excerpt: "The essential financial infrastructure every startup needs from day one to support healthy growth and prevent future headaches.",
      category: "Startups",
      slug: "financial-systems-startups",
      date: "December 5, 2022"
    }
  ];

  return (
    <Layout>
      <InsightHero />
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight) => (
              <InsightCard key={insight.slug} {...insight} />
            ))}
          </div>
        </div>
      </section>
      <CallToAction />
    </Layout>
  );
};

export default Insights;
