
const Founder = () => {
  return (
    <section className="py-24 lg:py-32 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-bluemetric-lightbg to-white p-6 rounded-3xl shadow-xl border border-bluemetric-lightgray/20">
                <img 
                  src="/lovable-uploads/f343346b-18d3-456a-b2e4-5d3ba3020363.png" 
                  alt="Surbhi Aggarwal, Founder of BlueMetric" 
                  className="w-full h-auto rounded-2xl object-cover shadow-lg"
                  loading="lazy"
                  width="600"
                  height="400"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-bluemetric-blue/10 rounded-full text-bluemetric-blue font-montserrat font-medium text-sm uppercase tracking-wider mb-4">
                  Meet Our Founder
                </span>
                <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-bluemetric-darkblue mb-6">
                  Surbhi Aggarwal, CFA
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-bluemetric-blue to-bluemetric-mediumblue rounded-full mb-8"></div>
              </div>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  After years of working in investment analysis and watching countless businesses struggle with their finances, Surbhi had a realization: most business owners weren't getting the financial support they actually needed. They were drowning in spreadsheets that felt like homework, getting more questions instead of answers from their financial advisors, and treating their numbers as a necessary evil rather than a strategic advantage.
                </p>
                
                <p>
                  That's what led her to found BlueMetric.
                </p>
                
                <p>
                  With over a decade of experience spanning investment analysis, accounting, and entrepreneurship across more than 20 industries, Surbhi brings a unique perspective that combines deep technical expertise with real-world business understanding. Her qualifications include CFA, Chartered Accountancy (India), and Company Secretaryship (India) – but what really drives her work is seeing business owners finally "get" their numbers and feel confident making financial decisions.
                </p>
                
                <p>
                  Based at UF Innovate Hub in Gainesville, Surbhi is deeply involved in the local business ecosystem while maintaining a global perspective through her international background. She's launched her own ventures, analyzed everything from tech startups to manufacturing companies, and has seen firsthand what works (and what doesn't) when it comes to business finances.
                </p>
                
                <p>
                  Her approach is simple: financial information shouldn't feel like a compliance burden. It should be your most valuable strategic asset, giving you clarity and confidence to grow your business exactly the way you envision.
                </p>
                
                <blockquote className="border-l-4 border-bluemetric-blue pl-6 italic my-8 text-xl text-bluemetric-darkblue bg-bluemetric-lightbg/30 py-6 pr-6 rounded-r-lg">
                  "My goal is to transform how businesses view their financial information—not as a compliance requirement, but as their most valuable strategic asset."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
