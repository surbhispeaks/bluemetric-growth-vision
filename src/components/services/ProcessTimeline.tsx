
const ProcessTimeline = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "We start with a detailed discussion to understand your business goals and challenges."
    },
    {
      number: "02",
      title: "Analysis",
      description: "Our team assesses your current financial systems and identifies opportunities for improvement."
    },
    {
      number: "03",
      title: "Strategy",
      description: "We create a customized plan aligned with your business objectives and growth trajectory."
    },
    {
      number: "04",
      title: "Implementation",
      description: "Our experts set up the proper systems and processes to achieve your financial goals."
    },
    {
      number: "05",
      title: "Ongoing Support",
      description: "We provide continuous guidance and adapt our approach as your business evolves."
    }
  ];
  
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-bluemetric-lightbg via-white to-bluemetric-lightbg">
      <div className="container mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-bluemetric-darkblue mb-6">
            Our Process
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We follow a structured approach to ensure we deliver maximum value while minimizing disruption to your operations.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-bluemetric-blue via-bluemetric-mediumblue to-bluemetric-blue/50"></div>
          
          {/* Timeline steps */}
          <div className="space-y-16 lg:space-y-20">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 lg:gap-12`}>
                {/* Timeline point */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full border-4 border-bluemetric-blue bg-white shadow-lg flex items-center justify-center z-10">
                  <span className="text-bluemetric-blue font-montserrat font-bold text-sm">
                    {step.number}
                  </span>
                </div>
                
                {/* Content */}
                <div className="md:w-1/2 pl-20 md:pl-0 md:px-8">
                  <div className="bg-white p-8 lg:p-10 rounded-2xl lg:rounded-3xl shadow-lg border border-bluemetric-lightgray/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center mb-4 md:hidden">
                      <span className="text-bluemetric-blue font-montserrat font-bold text-2xl mr-4">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-montserrat font-bold text-bluemetric-darkblue mb-4 lg:mb-6">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
