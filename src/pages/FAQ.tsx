
import Layout from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CallToAction from "@/components/home/CallToAction";

const FAQ = () => {
  const faqs = [
    {
      question: "What makes BlueMetric different from other accounting firms?",
      answer: "While many firms focus solely on compliance and historical reporting, BlueMetric brings an analytical perspective that helps translate financial data into business insights. Our team's background in investment analysis, combined with accounting expertise, allows us to spot trends and opportunities in your numbers that others might miss. We maintain the technical excellence you'd expect, but pair it with a forward-looking approach that supports better decision-making. Our goal is for your financial information to become a strategic asset, not just a compliance requirement."
    },
    {
      question: "How does BlueMetric's multidisciplinary expertise benefit businesses?",
      answer: "BlueMetric's multidisciplinary expertise is central to our value proposition. Our investment analysis experience helps identify the financial metrics that truly drive business value. Our practical business experience informs how financial information should guide strategic decisions. Our diverse client work keeps us connected to a wide range of business challenges. These experiences converge to help us see your business's financial picture more holistically. This means we provide both the technical accuracy of specialists and the contextual understanding of business generalists."
    },
    {
      question: "Can BlueMetric scale its services as our business grows?",
      answer: "BlueMetric is intentionally designed to support businesses through various growth stages. We start by establishing solid financial foundations, but our systems and approach scale alongside your needs. As your business evolves, we can expand from core bookkeeping to more strategic financial planning, analysis, and advisory services. Our experience working with businesses of different sizes – from startups to established companies – helps us anticipate and prepare for the changing financial needs that come with growth. Our goal is to be a long-term partner in your business journey."
    },
    {
      question: "What is BlueMetric's approach to communication and responsiveness?",
      answer: "Clear, proactive communication is central to our client relationships. During onboarding, we establish communication preferences and expectations, including response timeframes for different types of inquiries. We schedule regular check-ins based on your needs – monthly, quarterly, or customized intervals. For day-to-day questions, clients typically receive responses within 24 business hours, often sooner. We use secure client portals for document sharing and maintain detailed documentation of all conversations. Most importantly, we focus on explaining financial concepts in accessible language, ensuring you can confidently use the information we provide."
    },
    {
      question: "How does BlueMetric handle technology integration with existing business systems?",
      answer: "Technology integration is increasingly important for efficient financial management. BlueMetric begins by assessing your current technology ecosystem and workflows before recommending any changes. While our team includes certified accounting software advisors, we're experienced with various accounting platforms and related business tools beyond any single system. We focus on creating seamless connections between systems to eliminate duplicate data entry and improve information flow. Our approach prioritizes solutions that balance immediate efficiency with future adaptability as your business evolves."
    }
  ];

  return (
    <Layout>
      <section className="py-20 bg-bluemetric-darkblue">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-semibold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90">
              Find answers to common questions about our services and approach.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-bluemetric-lightgray rounded-lg overflow-hidden">
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
      </section>
      
      <div className="bg-bluemetric-darkblue">
        <CallToAction />
      </div>
    </Layout>
  );
};

export default FAQ;
