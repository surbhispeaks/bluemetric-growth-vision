import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CallToAction from "@/components/home/CallToAction";

const FAQ = () => {
  useEffect(() => {
    document.title = "FAQ | BlueMetric";
  }, []);

  const faqCategories = [
    {
      category: "Understanding BlueMetric",
      questions: [
        {
          question: "What makes BlueMetric different from other accounting firms?",
          answer: "While many firms focus solely on compliance and historical reporting, BlueMetric brings an <strong>analytical perspective</strong> that helps translate financial data into <strong>business insights</strong>. Our team's background in <strong>investment analysis</strong>, combined with accounting expertise, allows us to spot <strong>trends and opportunities</strong> in your numbers that others might miss. We maintain the technical excellence you'd expect, but pair it with a <strong>forward-looking approach</strong> that supports better decision-making. Our goal is for your financial information to become a <strong>strategic asset</strong>, not just a compliance requirement."
        },
        {
          question: "What services does BlueMetric offer?",
          answer: "BlueMetric offers a <strong>comprehensive suite of financial services</strong> designed to support your business at every stage. Our core services include: <strong>(1) Bookkeeping & Financial Reporting</strong> - establishing accurate financial records and meaningful reports; <strong>(2) Business Performance Metrics</strong> - identifying and tracking KPIs that truly matter for your specific business; <strong>(3) Financial Systems Setup & Optimization</strong> - implementing efficient systems that scale with your business; and <strong>(4) Business Advisory</strong> - providing guidance that helps you navigate financial decisions with confidence. All our services integrate seamlessly to provide a <strong>complete financial management solution</strong>."
        },
        {
          question: "How does BlueMetric's multidisciplinary expertise benefit businesses?",
          answer: "BlueMetric's <strong>multidisciplinary expertise</strong> is central to our value proposition. Our <strong>investment analysis experience</strong> helps identify the financial metrics that truly drive business value. Our <strong>practical business experience</strong> informs how financial information should guide strategic decisions. Our <strong>diverse client work</strong> keeps us connected to a wide range of business challenges. These experiences converge to help us see your business's financial picture more <strong>holistically</strong>. This means we provide both the <strong>technical accuracy of specialists</strong> and the <strong>contextual understanding of business generalists</strong>."
        }
      ]
    },
    {
      category: "Our Services",
      questions: [
        {
          question: "What does BlueMetric's bookkeeping and financial reporting service include?",
          answer: "Our <strong>comprehensive bookkeeping service</strong> establishes the foundation for all your financial decisions. We handle all aspects of <strong>transaction recording, reconciliation, and reporting</strong>. This includes setting up and maintaining your chart of accounts, processing invoices and bills, reconciling bank and credit card accounts, and producing clear <strong>financial statements (Income Statement, Balance Sheet, and Cash Flow)</strong>. What sets us apart is how we structure these reports to highlight <strong>key insights</strong> about your business performance, not just presenting numbers. We work with various accounting platforms and can either take <strong>full responsibility</strong> for your bookkeeping or <strong>support your in-house team</strong>."
        },
        {
          question: "How do BlueMetric's business performance metrics help with decision-making?",
          answer: "Our business performance metrics service translates <strong>raw financial data into actionable intelligence</strong>. We identify the <strong>specific KPIs</strong> that truly matter for your unique business and industry, moving beyond standard metrics like revenue and profit margins. We create <strong>customized dashboards</strong> that track these indicators over time, highlighting <strong>trends and patterns</strong> that impact your business. This service includes <strong>regular performance analysis, competitive benchmarking, early warning systems</strong> for potential issues, and <strong>strategic recommendations</strong>. The result is clearer decision-making based on metrics that actually <strong>predict your business success</strong> rather than just recording past performance."
        },
        {
          question: "What is involved in BlueMetric's financial systems setup and optimization?",
          answer: "Our financial systems service focuses on creating an <strong>efficient financial infrastructure</strong> that grows with your business. We start by evaluating your current processes and pain points, then design a <strong>custom system</strong> that supports both immediate needs and future growth. This includes selecting and implementing appropriate <strong>accounting software</strong>, setting up <strong>integrations with other business tools</strong> (like CRM, inventory, or e-commerce platforms), <strong>documenting processes</strong>, and <strong>training your team</strong>. Our approach eliminates <strong>duplicate data entry</strong>, reduces manual work, and ensures your financial information flows smoothly throughout your organization. We're experienced with various accounting platforms and related business tools to find the <strong>best fit for your specific needs</strong>."
        },
        {
          question: "How does BlueMetric's business advisory service work?",
          answer: "Our business advisory service provides <strong>strategic financial guidance</strong> beyond day-to-day accounting. We offer <strong>regular financial review sessions</strong> where we analyze your business performance, identify opportunities and challenges, and develop action plans. Our advisory work includes <strong>strategic planning support, cash flow forecasting and management, growth financing evaluation</strong>, and <strong>scenario planning</strong> for business decisions. We bring a unique perspective that combines <strong>technical financial expertise with practical business experience</strong>, allowing us to offer guidance that's both rigorous and realistic. Our goal is to serve as a <strong>trusted financial partner</strong> who helps you navigate complex business decisions with confidence."
        }
      ]
    },
    {
      category: "Working with BlueMetric",
      questions: [
        {
          question: "What is BlueMetric's client onboarding process like?",
          answer: "Our <strong>structured onboarding process</strong> ensures a smooth transition and clear expectations. We begin with a <strong>comprehensive consultation</strong> to understand your business goals and challenges. Next, we conduct a <strong>thorough analysis</strong> of your current financial systems, identifying opportunities for improvement. Based on this analysis, we develop a <strong>customized service plan</strong> aligned with your objectives. We then implement the necessary systems and processes, working closely with you throughout the transition. Finally, we establish <strong>regular check-in schedules and communication protocols</strong> to ensure ongoing alignment. The entire process typically takes <strong>2-4 weeks</strong>, depending on your business complexity, and is designed to <strong>minimize disruption</strong> to your operations."
        },
        {
          question: "Can BlueMetric scale its services as our business grows?",
          answer: "BlueMetric is intentionally designed to <strong>support businesses through various growth stages</strong>. We start by establishing <strong>solid financial foundations</strong>, but our systems and approach <strong>scale alongside your needs</strong>. As your business evolves, we can expand from core bookkeeping to more strategic <strong>financial planning, analysis, and advisory services</strong>. Our experience working with businesses of different sizes – from startups to established companies – helps us <strong>anticipate and prepare</strong> for the changing financial needs that come with growth. Our goal is to be a <strong>long-term partner</strong> in your business journey, providing the right level of support at each stage of development."
        },
        {
          question: "What is BlueMetric's approach to communication and responsiveness?",
          answer: "<strong>Clear, proactive communication</strong> is central to our client relationships. During onboarding, we establish <strong>communication preferences and expectations</strong>, including response timeframes for different types of inquiries. We schedule <strong>regular check-ins</strong> based on your needs – monthly, quarterly, or customized intervals. For day-to-day questions, clients typically receive responses <strong>within 24 business hours</strong>, often sooner. We use <strong>secure client portals</strong> for document sharing and maintain detailed documentation of all conversations. Most importantly, we focus on explaining <strong>financial concepts in accessible language</strong>, ensuring you can confidently use the information we provide."
        },
        {
          question: "How does BlueMetric handle technology integration with existing business systems?",
          answer: "<strong>Technology integration</strong> is increasingly important for efficient financial management. BlueMetric begins by <strong>assessing your current technology ecosystem</strong> and workflows before recommending any changes. While our team includes <strong>certified accounting software advisors</strong>, we're experienced with various accounting platforms and related business tools beyond any single system. We focus on creating <strong>seamless connections between systems</strong> to eliminate duplicate data entry and improve information flow. Our approach prioritizes solutions that balance <strong>immediate efficiency with future adaptability</strong> as your business evolves."
        }
      ]
    },
    {
      category: "Business Value",
      questions: [
        {
          question: "How quickly can businesses expect to see value from BlueMetric's services?",
          answer: "Most clients begin experiencing <strong>tangible benefits within the first month</strong> of working with BlueMetric. Initially, you'll gain <strong>clarity on your current financial position</strong> through organized, accurate financial statements. Within the <strong>first quarter</strong>, you'll benefit from our performance metrics insights, which typically identify <strong>specific opportunities for operational improvements</strong>. By the <strong>six-month mark</strong>, most clients report significant improvements in <strong>decision-making confidence</strong> and often see <strong>measurable financial gains</strong> from implemented recommendations. The <strong>full transformative impact</strong>, where financial data becomes a true strategic asset driving growth decisions, typically emerges over the <strong>first year</strong> of our partnership as we continually refine and deepen our understanding of your business."
        }
      ]
    }
  ];

  return (
    <Layout>
      <section className="py-32 lg:py-40 bg-gradient-to-br from-bluemetric-darkblue via-bluemetric-mediumblue to-bluemetric-darkblue relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-bluemetric-blue rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white/90 font-montserrat font-medium text-sm uppercase tracking-wider border border-white/30">
                Support Center
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-8 lg:mb-10 leading-tight">
              Your Questions Answered
            </h1>
            <p className="text-xl lg:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto">
              Get insights into BlueMetric's approach, services, and how we can help your business thrive.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-gradient-to-b from-background to-bluemetric-lightbg dark:from-background dark:to-bluemetric-lightbg">
        <div className="container mx-auto px-4 max-w-5xl">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 lg:mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-bluemetric-darkblue dark:text-bluemetric-darkblue">
                  {category.category}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-bluemetric-blue to-bluemetric-mediumblue rounded-full mx-auto mt-6"></div>
              </div>
              
              <Accordion type="single" collapsible className="space-y-6">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem 
                    key={`${categoryIndex}-${faqIndex}`} 
                    value={`item-${categoryIndex}-${faqIndex}`} 
                    className="border border-bluemetric-lightgray/30 dark:border-bluemetric-lightgray/20 rounded-2xl overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-bluemetric-lightbg/50 dark:hover:bg-bluemetric-lightgray/20 font-montserrat font-semibold text-bluemetric-darkblue dark:text-bluemetric-darkblue text-left text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-8 py-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg border-t border-bluemetric-lightgray/20 dark:border-bluemetric-lightgray/10">
                      <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>
      
      <div className="bg-gradient-to-b from-bluemetric-lightbg to-bluemetric-darkblue">
        <CallToAction />
      </div>
    </Layout>
  );
};

export default FAQ;
