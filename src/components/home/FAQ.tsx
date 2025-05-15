
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      question: "What makes BlueMetric different from other accounting firms?",
      answer: "While many firms focus solely on compliance and historical reporting, we bring an analytical perspective that helps translate financial data into business insights. My background in investment analysis, combined with accounting expertise, allows me to spot trends and opportunities in your numbers that others might miss. We maintain the technical excellence you'd expect, but pair it with a forward-looking approach that supports better decision-making. Our goal is for your financial information to become a strategic asset, not just a compliance requirement."
    },
    {
      question: "How does your multidisciplinary background benefit my business?",
      answer: "My multidisciplinary background is actually central to BlueMetric's value proposition. My investment analysis experience helps me identify the financial metrics that truly drive business value. My entrepreneurial ventures taught me how financial information should inform practical decisions. My work as a SCORE mentor keeps me connected to diverse business challenges. Rather than being scattered, these experiences converge to help me see your business's financial picture more holistically. This means we can provide both the technical accuracy of specialists and the contextual understanding of business generalists."
    },
    {
      question: "Will you be able to grow with my business over time?",
      answer: "BlueMetric is intentionally designed to support businesses through various growth stages. We start by establishing solid financial foundations, but our systems and approach scale alongside your needs. As your business evolves, we can expand from core bookkeeping to more strategic financial planning, analysis, and advisory services. My background working with businesses of different sizes – from startups to established companies – helps me anticipate and prepare for the changing financial needs that come with growth. Our goal is to be a long-term partner in your business journey."
    },
    {
      question: "What's your approach to communication and responsiveness?",
      answer: "Clear, proactive communication is central to our client relationships. During onboarding, we establish communication preferences and expectations, including response timeframes for different types of inquiries. We schedule regular check-ins based on your needs – monthly, quarterly, or customized intervals. For day-to-day questions, clients typically receive responses within 24 business hours, often sooner. We use secure client portals for document sharing and maintain detailed documentation of all conversations. Most importantly, we focus on explaining financial concepts in accessible language, ensuring you can confidently use the information we provide."
    },
    {
      question: "How do you handle technology integration with existing business systems?",
      answer: "Technology integration is increasingly important for efficient financial management. We begin by assessing your current technology ecosystem and workflows before recommending any changes. As QuickBooks ProAdvisors, we specialize in optimizing that platform's capabilities, but we're also experienced with various accounting software and related business tools. We focus on creating seamless connections between systems to eliminate duplicate data entry and improve information flow. Our approach prioritizes solutions that balance immediate efficiency with future adaptability as your business evolves."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-semibold text-bluemetric-darkblue text-sm uppercase tracking-wider mb-2">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-bluemetric-blue mx-auto mb-6"></div>
          <h3 className="text-3xl md:text-4xl font-montserrat font-semibold text-bluemetric-darkblue mb-6">
            Got Questions? We Have Answers
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are answers to some common questions about our services and approach.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-bluemetric-lightgray rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-bluemetric-lightbg font-montserrat font-medium text-bluemetric-darkblue text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/faq" 
            className="inline-flex items-center text-bluemetric-blue hover:text-bluemetric-mediumblue font-montserrat font-medium transition-colors"
          >
            View all FAQs
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
