
import Layout from "@/components/layout/Layout";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCard from "@/components/services/ServiceCard";
import ProcessTimeline from "@/components/services/ProcessTimeline";
import CallToAction from "@/components/home/CallToAction";

import { FileText, TrendingUp, Settings, BookOpen } from "lucide-react";

const Services = () => {
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
      icon: <FileText size={28} />,
      imageType: "document" as "document"
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
      icon: <TrendingUp size={28} />,
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
      icon: <Settings size={28} />,
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
      icon: <BookOpen size={28} />,
      imageType: "report" as "report"
    }
  ];

  return (
    <Layout>
      <ServiceHero />
      <section className="py-10 bg-white">
        <div className="container mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              {...service}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </section>
      <ProcessTimeline />
      <CallToAction />
    </Layout>
  );
};

export default Services;
