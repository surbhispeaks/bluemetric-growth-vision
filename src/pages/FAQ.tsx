
import Layout from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CallToAction from "@/components/home/CallToAction";

const FAQ = () => {
  const faqs = [
    {
      question: "What makes BlueMetric different from other accounting firms?",
      answer: "BlueMetric goes beyond traditional accounting by combining bookkeeping accuracy with strategic financial analysis. Rather than just recording your transactions, we translate your financial data into actionable business intelligence, helping you make informed decisions that drive growth. Our background in investment analysis gives us a unique perspective on identifying the metrics that truly matter for your business success."
    },
    {
      question: "How does your multidisciplinary background benefit my business?",
      answer: "Our combined expertise in accounting, investment analysis, and entrepreneurship allows us to view your finances through multiple lenses. We understand both the technical requirements for financial compliance and the practical challenges of running a business. This holistic perspective helps us provide solutions that are both financially sound and operationally realistic."
    },
    {
      question: "Will you be able to grow with my business over time?",
      answer: "Absolutely. We've designed our service model specifically to scale with growing businesses. We can start with establishing sound financial foundations and gradually expand our support as your needs evolve. Our systems and approaches are flexible, allowing us to adapt our services as your business grows from startup through various growth phases."
    },
    {
      question: "What's your approach to communication and responsiveness?",
      answer: "We believe in proactive, clear communication. Our clients can expect regular updates, prompt responses to questions (typically within 24 hours), and financial reports that are designed to be understandable, not just technically accurate. We prioritize explaining financial concepts in plain language and ensuring you're comfortable with the information you're receiving."
    },
    {
      question: "How do you handle technology integration with existing business systems?",
      answer: "We take a thoughtful approach to technology implementation, starting with understanding your current processes and pain points. We're experienced with QuickBooks Online and various integrated tools, but we're careful to recommend only the technology that truly adds value for your specific situation. Our goal is seamless integration that enhances efficiency without unnecessary disruption."
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
      
      <CallToAction />
    </Layout>
  );
};

export default FAQ;
