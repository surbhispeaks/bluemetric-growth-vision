
const Founder = () => {
  return (
    <section className="py-24 lg:py-32 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-bluemetric-blue/10 to-bluemetric-mediumblue/10 rounded-full text-bluemetric-blue font-montserrat font-medium text-sm uppercase tracking-wider mb-6 border border-bluemetric-blue/20">
              Meet Our Founder
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-bluemetric-darkblue mb-6 leading-tight">
              Surbhi Aggarwal<span className="text-bluemetric-blue">, CFA</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-bluemetric-blue via-bluemetric-mediumblue to-bluemetric-blue/50 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 xl:gap-20 items-start">
            {/* Image and Quote Column */}
            <div className="order-2 lg:order-1 lg:col-span-2">
              <div className="lg:sticky lg:top-8">
                <div className="group bg-gradient-to-br from-bluemetric-lightbg via-white to-bluemetric-lightbg/50 p-6 md:p-8 rounded-3xl shadow-2xl border border-bluemetric-lightgray/20 relative overflow-hidden transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] hover:border-bluemetric-blue/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-bluemetric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/f343346b-18d3-456a-b2e4-5d3ba3020363.png" 
                      alt="Surbhi Aggarwal, Founder of BlueMetric" 
                      className="w-full h-auto rounded-2xl object-cover shadow-lg transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                      width="600"
                      height="400"
                    />
                  </div>
                </div>
                
                <div className="group mt-8 relative">
                  <blockquote className="border-l-4 border-bluemetric-blue pl-6 md:pl-8 italic text-lg md:text-xl text-bluemetric-darkblue bg-gradient-to-r from-bluemetric-lightbg/40 to-transparent py-6 md:py-8 pr-6 md:pr-8 rounded-r-lg relative transition-all duration-300 hover:from-bluemetric-lightbg/60 hover:border-bluemetric-mediumblue hover:shadow-lg">
                    <div className="absolute -top-2 -left-1 text-bluemetric-blue/30 text-4xl md:text-5xl font-serif leading-none">"</div>
                    <p className="relative z-10 leading-relaxed pt-4">
                      My goal is to transform how businesses view their financial information—not as a compliance requirement, but as their most valuable strategic asset.
                    </p>
                    <div className="absolute -bottom-2 -right-1 text-bluemetric-blue/30 text-4xl md:text-5xl font-serif leading-none">"</div>
                  </blockquote>
                </div>
              </div>
            </div>
            
            {/* Content Column */}
            <div className="order-1 lg:order-2 lg:col-span-3">
              <div className="space-y-6 md:space-y-8 text-gray-600 text-base md:text-lg leading-relaxed">
                <div className="group bg-gradient-to-r from-bluemetric-lightbg/30 to-transparent p-4 md:p-6 rounded-2xl border-l-4 border-bluemetric-blue/30 transition-all duration-300 hover:from-bluemetric-lightbg/50 hover:shadow-lg hover:border-bluemetric-blue/50 hover:-translate-y-1">
                  <p className="text-lg md:text-xl font-medium text-bluemetric-darkblue mb-3 md:mb-4">The Problem She Saw</p>
                  <p>
                    After years of working in investment analysis and watching countless businesses struggle with their finances, Surbhi had a realization: most business owners weren't getting the financial support they actually needed. They were drowning in spreadsheets that felt like homework, getting more questions instead of answers from their financial advisors, and treating their numbers as a necessary evil rather than a strategic advantage.
                  </p>
                </div>
                
                <div className="group bg-gradient-to-r from-bluemetric-mediumblue/10 to-transparent p-4 md:p-6 rounded-2xl border-l-4 border-bluemetric-mediumblue/50 transition-all duration-300 hover:from-bluemetric-mediumblue/20 hover:shadow-lg hover:border-bluemetric-mediumblue/70 hover:-translate-y-1">
                  <p className="text-lg md:text-xl font-medium text-bluemetric-darkblue mb-3 md:mb-4">The Solution</p>
                  <p>
                    That's what led her to found BlueMetric.
                  </p>
                </div>
                
                <div className="group bg-gradient-to-r from-bluemetric-lightbg/30 to-transparent p-4 md:p-6 rounded-2xl border-l-4 border-bluemetric-blue/30 transition-all duration-300 hover:from-bluemetric-lightbg/50 hover:shadow-lg hover:border-bluemetric-blue/50 hover:-translate-y-1">
                  <p className="text-lg md:text-xl font-medium text-bluemetric-darkblue mb-3 md:mb-4">Her Expertise</p>
                  <p>
                    With over a decade of experience spanning investment analysis, accounting, and entrepreneurship across more than 20 industries, Surbhi brings a unique perspective that combines deep technical expertise with real-world business understanding. Her qualifications include CFA, Chartered Accountancy (India), and Company Secretaryship (India) – but what really drives her work is seeing business owners finally "get" their numbers and feel confident making financial decisions.
                  </p>
                </div>
                
                <div className="group bg-gradient-to-r from-bluemetric-mediumblue/10 to-transparent p-4 md:p-6 rounded-2xl border-l-4 border-bluemetric-mediumblue/50 transition-all duration-300 hover:from-bluemetric-mediumblue/20 hover:shadow-lg hover:border-bluemetric-mediumblue/70 hover:-translate-y-1">
                  <p className="text-lg md:text-xl font-medium text-bluemetric-darkblue mb-3 md:mb-4">Her Impact</p>
                  <p>
                    Based at UF Innovate Hub in Gainesville, Surbhi is deeply involved in the local business ecosystem while maintaining a global perspective through her international background. She's launched her own ventures, analyzed everything from tech startups to manufacturing companies, and has seen firsthand what works (and what doesn't) when it comes to business finances.
                  </p>
                </div>
                
                <div className="group bg-gradient-to-r from-bluemetric-lightbg/30 to-transparent p-4 md:p-6 rounded-2xl border-l-4 border-bluemetric-blue/30 transition-all duration-300 hover:from-bluemetric-lightbg/50 hover:shadow-lg hover:border-bluemetric-blue/50 hover:-translate-y-1">
                  <p className="text-lg md:text-xl font-medium text-bluemetric-darkblue mb-3 md:mb-4">Her Approach</p>
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
