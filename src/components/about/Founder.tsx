
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
                  Surbhi brings a unique perspective to business finances, combining expertise in accounting, investment analysis, and entrepreneurship.
                </p>
                
                <p>
                  With qualifications including CFA, Chartered Accountancy (India), and Company Secretaryship (India), Surbhi offers both technical excellence and strategic insight.
                </p>
                
                <p>
                  Her approach has been shaped by analyzing businesses across more than 20 sectors and launching entrepreneurial ventures, giving her a comprehensive understanding of business challenges and opportunities.
                </p>
                
                <p>
                  Based at UF Innovate Hub, Surbhi is actively involved in Gainesville's business ecosystem while maintaining a global perspective through her international background.
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
