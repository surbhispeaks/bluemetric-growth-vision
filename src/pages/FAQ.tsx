import Layout from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CallToAction from "@/components/home/CallToAction";

const FAQ = () => {
  const faqCategories = [
    {
      category: "Understanding BlueMetric",
      questions: [
        {
          question: "What makes BlueMetric different from other accounting firms?",
          answer: "While many firms focus solely on compliance and historical reporting, BlueMetric brings an analytical perspective that helps translate financial data into business insights. Our team's background in investment analysis, combined with accounting expertise, allows us to spot trends and opportunities in your numbers that others might miss. We maintain the technical excellence you'd expect, but pair it with a forward-looking approach that supports better decision-making. Our goal is for your financial information to become a strategic asset, not just a compliance requirement."
        },
        {
          question: "What services does BlueMetric offer?",
          answer: "BlueMetric offers a comprehensive suite of financial services designed to support your business at every stage. Our core services include: (1) Bookkeeping & Financial Reporting - establishing accurate financial records and meaningful reports; (2) Business Performance Metrics - identifying and tracking KPIs that truly matter for your specific business; (3) Financial Systems Setup & Optimization - implementing efficient systems that scale with your business; and (4) Business Advisory - providing guidance that helps you navigate financial decisions with confidence. All our services integrate seamlessly to provide a complete financial management solution."
        },
        {
          question: "How does BlueMetric's multidisciplinary expertise benefit businesses?",
          answer: "BlueMetric's multidisciplinary expertise is central to our value proposition. Our investment analysis experience helps identify the financial metrics that truly drive business value. Our practical business experience informs how financial information should guide strategic decisions. Our diverse client work keeps us connected to a wide range of business challenges. These experiences converge to help us see your business's financial picture more holistically. This means we provide both the technical accuracy of specialists and the contextual understanding of business generalists."
        }
      ]
    },
    {
      category: "Our Services",
      questions: [
        {
          question: "What does BlueMetric's bookkeeping and financial reporting service include?",
          answer: "Our comprehensive bookkeeping service establishes the foundation for all your financial decisions. We handle all aspects of transaction recording, reconciliation, and reporting. This includes setting up and maintaining your chart of accounts, processing invoices and bills, reconciling bank and credit card accounts, and producing clear financial statements (Income Statement, Balance Sheet, and Cash Flow). What sets us apart is how we structure these reports to highlight key insights about your business performance, not just presenting numbers. We work with various accounting platforms and can either take full responsibility for your bookkeeping or support your in-house team."
        },
        {
          question: "How do BlueMetric's business performance metrics help with decision-making?",
          answer: "Our business performance metrics service translates raw financial data into actionable intelligence. We identify the specific KPIs that truly matter for your unique business and industry, moving beyond standard metrics like revenue and profit margins. We create customized dashboards that track these indicators over time, highlighting trends and patterns that impact your business. This service includes regular performance analysis, competitive benchmarking, early warning systems for potential issues, and strategic recommendations. The result is clearer decision-making based on metrics that actually predict your business success rather than just recording past performance."
        },
        {
          question: "What is involved in BlueMetric's financial systems setup and optimization?",
          answer: "Our financial systems service focuses on creating an efficient financial infrastructure that grows with your business. We start by evaluating your current processes and pain points, then design a custom system that supports both immediate needs and future growth. This includes selecting and implementing appropriate accounting software, setting up integrations with other business tools (like CRM, inventory, or e-commerce platforms), documenting processes, and training your team. Our approach eliminates duplicate data entry, reduces manual work, and ensures your financial information flows smoothly throughout your organization. We're experienced with various accounting platforms and related business tools to find the best fit for your specific needs."
        },
        {
          question: "How does BlueMetric's business advisory service work?",
          answer: "Our business advisory service provides strategic financial guidance beyond day-to-day accounting. We offer regular financial review sessions where we analyze your business performance, identify opportunities and challenges, and develop action plans. Our advisory work includes strategic planning support, cash flow forecasting and management, growth financing evaluation, and scenario planning for business decisions. We bring a unique perspective that combines technical financial expertise with practical business experience, allowing us to offer guidance that's both rigorous and realistic. Our goal is to serve as a trusted financial partner who helps you navigate complex business decisions with confidence."
        }
      ]
    },
    {
      category: "Working with BlueMetric",
      questions: [
        {
          question: "What is BlueMetric's client onboarding process like?",
          answer: "Our structured onboarding process ensures a smooth transition and clear expectations. We begin with a comprehensive consultation to understand your business goals and challenges. Next, we conduct a thorough analysis of your current financial systems, identifying opportunities for improvement. Based on this analysis, we develop a customized service plan aligned with your objectives. We then implement the necessary systems and processes, working closely with you throughout the transition. Finally, we establish regular check-in schedules and communication protocols to ensure ongoing alignment. The entire process typically takes 2-4 weeks, depending on your business complexity, and is designed to minimize disruption to your operations."
        },
        {
          question: "Can BlueMetric scale its services as our business grows?",
          answer: "BlueMetric is intentionally designed to support businesses through various growth stages. We start by establishing solid financial foundations, but our systems and approach scale alongside your needs. As your business evolves, we can expand from core bookkeeping to more strategic financial planning, analysis, and advisory services. Our experience working with businesses of different sizes – from startups to established companies – helps us anticipate and prepare for the changing financial needs that come with growth. Our goal is to be a long-term partner in your business journey, providing the right level of support at each stage of development."
        },
        {
          question: "What is BlueMetric's approach to communication and responsiveness?",
          answer: "Clear, proactive communication is central to our client relationships. During onboarding, we establish communication preferences and expectations, including response timeframes for different types of inquiries. We schedule regular check-ins based on your needs – monthly, quarterly, or customized intervals. For day-to-day questions, clients typically receive responses within 24 business hours, often sooner. We use secure client portals for document sharing and maintain detailed documentation of all conversations. Most importantly, we focus on explaining financial concepts in accessible language, ensuring you can confidently use the information we provide."
        },
        {
          question: "How does BlueMetric handle technology integration with existing business systems?",
          answer: "Technology integration is increasingly important for efficient financial management. BlueMetric begins by assessing your current technology ecosystem and workflows before recommending any changes. While our team includes certified accounting software advisors, we're experienced with various accounting platforms and related business tools beyond any single system. We focus on creating seamless connections between systems to eliminate duplicate data entry and improve information flow. Our approach prioritizes solutions that balance immediate efficiency with future adaptability as your business evolves."
        }
      ]
    },
    {
      category: "Business Value",
      questions: [
        {
          question: "How quickly can businesses expect to see value from BlueMetric's services?",
          answer: "Most clients begin experiencing tangible benefits within the first month of working with BlueMetric. Initially, you'll gain clarity on your current financial position through organized, accurate financial statements. Within the first quarter, you'll benefit from our performance metrics insights, which typically identify specific opportunities for operational improvements. By the six-month mark, most clients report significant improvements in decision-making confidence and often see measurable financial gains from implemented recommendations. The full transformative impact, where financial data becomes a true strategic asset driving growth decisions, typically emerges over the first year of our partnership as we continually refine and deepen our understanding of your business."
        }
      ]
    }
  ];

  return (
    <Layout>
      <section className="py-20 bg-bluemetric-darkblue">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-semibold text-white mb-6">
              Your Questions Answered
            </h1>
            <p className="text-xl text-white/90">
              Get insights into BlueMetric's approach, services, and how we can help your business thrive.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-montserrat font-semibold text-bluemetric-darkblue mb-6 pb-2 border-b border-bluemetric-lightgray">
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-6">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem 
                    key={`${categoryIndex}-${faqIndex}`} 
                    value={`item-${categoryIndex}-${faqIndex}`} 
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
          ))}
        </div>
      </section>
      
      <div className="bg-bluemetric-darkblue">
        <CallToAction />
      </div>
    </Layout>
  );
};

export default FAQ;
