import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCard from "@/components/services/ServiceCard";
import ProcessTimeline from "@/components/services/ProcessTimeline";
import CallToAction from "@/components/home/CallToAction";

import { FileText, TrendingUp, Settings, BookOpen } from "lucide-react";

const Services = () => {
  useEffect(() => {
    document.title = "Our Services | BlueMetric";
  }, []);

  const services = [
    {
      id: "bookkeeping",
      title: "Bookkeeping & Financial Reporting",
      description: "Our bookkeeping services establish the accurate financial records essential for both compliance and insight. Rather than viewing bookkeeping as a necessary burden, we approach it as the foundation for meaningful business intelligence.",
      deliverables: [
        "Clean, organized financial records in QuickBooks or any other software",
        "Monthly reconciliations ensuring accuracy",
        "Clear financial statements (Income Statement, Balance Sheet, Cash Flow)",
        "Custom reports aligned with your decision-making needs",
        "Secure, accessible financial documentation"
      ],
      difference: "While many bookkeepers focus solely on recording transactions, we structure your financial information to reveal the stories behind the numbers. Our approach ensures you're not just compliant, but informed.",
      icon: <FileText size={32} />,
      imageType: "document" as "document"
    },
    {
      id: "financial-modeling",
      title: "Financial Modeling & Forecasting",
      description: "We create comprehensive financial models that help you understand your business dynamics, plan for growth, and make data-driven strategic decisions with confidence about your financial future.",
      deliverables: [
        "Custom financial models tailored to your business structure",
        "Revenue and expense forecasting with scenario planning",
        "Cash flow projections and working capital analysis",
        "Sensitivity analysis for key business variables",
        "Growth planning and capacity modeling",
        "Monthly model updates and variance analysis"
      ],
      difference: "Our financial models go beyond simple projections - we build dynamic tools that help you understand the 'what-if' scenarios and their impact on your business, enabling proactive rather than reactive management.",
      icon: <TrendingUp size={32} />,
      imageType: "chart" as "chart"
    },
    {
      id: "funding-readiness",
      title: "Investment & Funding Preparation",
      description: "We prepare your business for investment opportunities and funding rounds by organizing financial documentation, creating investor-ready materials, and ensuring your financial story is compelling and transparent.",
      deliverables: [
        "Investor-ready financial statements and projections",
        "Due diligence preparation and documentation organization",
        "Business valuation analysis and benchmarking",
        "Pitch deck financial section development",
        "Data room setup with organized financial records",
        "Ongoing investor relations financial support"
      ],
      difference: "Having worked with investment analysis, we understand what investors look for and can help position your financial story in the most compelling way while maintaining complete transparency and accuracy.",
      icon: <BookOpen size={32} />,
      imageType: "report" as "report"
    },
    {
      id: "performance",
      title: "Business Performance Metrics",
      description: "We identify and track the key performance indicators that truly matter for your specific business, providing clear insights into your company's financial health and growth trajectory.",
      deliverables: [
        "Customized dashboard of relevant KPIs for your business",
        "Regular performance analysis and trend identification",
        "Competitive benchmarking against industry standards",
        "Early warning systems for potential issues",
        "Strategic recommendations based on performance data"
      ],
      difference: "Our investment analysis background allows us to look beyond basic financial metrics to identify the true drivers of your business success, helping you focus on what truly matters.",
      icon: <TrendingUp size={32} />,
      imageType: "chart" as "chart"
    },
    {
      id: "systems",
      title: "Financial Systems Setup & Optimization",
      description: "We implement efficient financial systems that scale with your business, automating routine tasks and providing the infrastructure for strategic financial management.",
      deliverables: [
        "Evaluation of current financial processes and pain points",
        "Custom system design tailored to your business needs",
        "Software selection and implementation (QuickBooks or any other)",
        "Process documentation and team training",
        "Ongoing system refinement and optimization"
      ],
      difference: "We don't just set up software; we create comprehensive financial ecosystems that integrate with your business operations and evolve as you grow.",
      icon: <Settings size={32} />,
      imageType: "dashboard" as "dashboard"
    },
    {
      id: "advisory",
      title: "Business Advisory",
      description: "Drawing on diverse expertise in accounting, investment analysis, and entrepreneurship, we provide guidance that helps you navigate financial decisions with confidence.",
      deliverables: [
        "Regular financial review sessions",
        "Strategic planning support",
        "Cash flow forecasting and management",
        "Growth financing evaluation and recommendations",
        "Scenario planning for business decisions"
      ],
      difference: "Our advisory services combine technical financial expertise with practical business experience, offering guidance that's both rigorous and realistic for entrepreneurs.",
      icon: <BookOpen size={32} />,
      imageType: "report" as "report"
    }
  ];

  return (
    <Layout>
      <ServiceHero />
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-bluemetric-lightbg/30 to-white px-4 md:px-0">
        <div className="container mx-auto">
          {services.map((service, index) => (
            <div key={service.id} className="mb-8 lg:mb-12 last:mb-0">
              <ServiceCard
                {...service}
                isReversed={index % 2 !== 0}
              />
            </div>
          ))}
        </div>
      </section>
      <ProcessTimeline />
      <div className="bg-gradient-to-b from-bluemetric-lightbg to-bluemetric-darkblue">
        <CallToAction />
      </div>
    </Layout>
  );
};

export default Services;
