
const Founder = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="bg-bluemetric-lightbg p-4 rounded-lg shadow-sm">
              <div className="bg-gradient-to-r from-bluemetric-darkblue to-bluemetric-mediumblue h-64 md:h-96 rounded-md flex items-center justify-center">
                <div className="bg-bluemetric-lightbg/30 w-32 h-32 rounded-full flex items-center justify-center">
                  <span className="font-montserrat font-bold text-white text-xl">SA</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-sm font-montserrat uppercase tracking-wider text-bluemetric-blue mb-2">
              Meet Our Founder
            </h2>
            <h3 className="text-3xl font-montserrat font-semibold text-bluemetric-darkblue mb-6">
              Surbhi Aggarwal
            </h3>
            
            <div className="space-y-4 text-gray-600">
              <p>
                Surbhi brings a unique perspective to business finances, combining expertise in accounting, investment analysis, and entrepreneurship.
              </p>
              
              <p>
                With qualifications including Chartered Accountancy, Company Secretaryship, and the CFA program (plus ongoing CPA certification), Surbhi offers both technical excellence and strategic insight.
              </p>
              
              <p>
                Her approach has been shaped by analyzing businesses across more than 20 sectors, launching entrepreneurial ventures, and guiding fellow business owners as a SCORE mentor.
              </p>
              
              <p>
                Based at UF Innovate Hub, Surbhi is actively involved in Gainesville's business ecosystem while maintaining a global perspective through her international background.
              </p>
              
              <blockquote className="border-l-4 border-bluemetric-blue pl-4 italic my-6">
                "My goal is to transform how businesses view their financial information—not as a compliance requirement, but as their most valuable strategic asset."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
