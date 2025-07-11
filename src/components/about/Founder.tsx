
const Founder = () => {
  return (
    <section className="py-24 lg:py-32 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 items-start">
            <div className="order-2 lg:order-1 lg:col-span-2">
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-bluemetric-lightbg via-white to-bluemetric-lightbg/50 p-8 rounded-3xl shadow-2xl border border-bluemetric-lightgray/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-bluemetric-blue/5 to-transparent"></div>
                  <div className="relative">
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
                
                <blockquote className="border-l-4 border-bluemetric-blue pl-8 italic mt-8 text-xl text-bluemetric-darkblue bg-gradient-to-r from-bluemetric-lightbg/40 to-transparent py-8 pr-8 rounded-r-lg relative">
                  <div className="absolute top-4 left-4 text-bluemetric-blue/20 text-6xl font-serif">"</div>
                  <p className="relative z-10 leading-relaxed">
                    My goal is to transform how businesses view their financial information—not as a compliance requirement, but as their most valuable strategic asset.
                  </p>
                  <div className="absolute bottom-4 right-4 text-bluemetric-blue/20 text-6xl font-serif">"</div>
                </blockquote>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 lg:col-span-3">
              <div className="mb-12">
                <span className="inline-block px-6 py-3 bg-gradient-to-r from-bluemetric-blue/10 to-bluemetric-mediumblue/10 rounded-full text-bluemetric-blue font-montserrat font-medium text-sm uppercase tracking-wider mb-6 border border-bluemetric-blue/20">
                  Meet Our Founder
                </span>
                <h2 className="text-5xl lg:text-6xl font-montserrat font-bold text-bluemetric-darkblue mb-6 leading-tight">
                  Surbhi Aggarwal<span className="text-bluemetric-blue">, CFA</span>
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-bluemetric-blue via-bluemetric-mediumblue to-bluemetric-blue/50 rounded-full mb-10"></div>
              </div>
              
              <div className="space-y-8 text-gray-600 text-lg leading-relaxed">
                <div className="bg-gradient-to-r from-bluemetric-lightbg/30 to-transparent p-6 rounded-2xl border-l-4 border-bluemetric-blue/30">
                  <p className="text-xl font-medium text-bluemetric-darkblue mb-4">The Problem She Saw</p>
                  <p>
                    After years of working in investment analysis and watching countless businesses struggle with their finances, Surbhi had a realization: most business owners weren't getting the financial support they actually needed. They were drowning in spreadsheets that felt like homework, getting more questions instead of answers from their financial advisors, and treating their numbers as a necessary evil rather than a strategic advantage.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-bluemetric-mediumblue/10 to-transparent p-6 rounded-2xl border-l-4 border-bluemetric-mediumblue/50">
                  <p className="text-xl font-medium text-bluemetric-darkblue mb-4">The Solution</p>
                  <p>
                    That's what led her to found BlueMetric.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-bluemetric-lightbg/30 to-transparent p-6 rounded-2xl border-l-4 border-bluemetric-blue/30">
                  <p className="text-xl font-medium text-bluemetric-darkblue mb-4">Her Expertise</p>
                  <p>
                    With over a decade of experience spanning investment analysis, accounting, and entrepreneurship across more than 20 industries, Surbhi brings a unique perspective that combines deep technical expertise with real-world business understanding. Her qualifications include CFA, Chartered Accountancy (India), and Company Secretaryship (India) – but what really drives her work is seeing business owners finally "get" their numbers and feel confident making financial decisions.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-bluemetric-mediumblue/10 to-transparent p-6 rounded-2xl border-l-4 border-bluemetric-mediumblue/50">
                  <p className="text-xl font-medium text-bluemetric-darkblue mb-4">Her Impact</p>
                  <p>
                    Based at UF Innovate Hub in Gainesville, Surbhi is deeply involved in the local business ecosystem while maintaining a global perspective through her international background. She's launched her own ventures, analyzed everything from tech startups to manufacturing companies, and has seen firsthand what works (and what doesn't) when it comes to business finances.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-bluemetric-lightbg/30 to-transparent p-6 rounded-2xl border-l-4 border-bluemetric-blue/30">
                  <p className="text-xl font-medium text-bluemetric-darkblue mb-4">Her Philosophy</p>
                  <p>
                    Her approach is simple: financial information shouldn't feel like a compliance burden. It should be your most valuable strategic asset, giving you clarity and confidence to grow your business exactly the way you envision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
