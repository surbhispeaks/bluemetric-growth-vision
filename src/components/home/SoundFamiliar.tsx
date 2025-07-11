import { MessageCircle } from "lucide-react";

const SoundFamiliar = () => {
  const commonProblems = [
    "I spend more time fighting with QuickBooks than running my business.",
    "My accountant gives me reports I don't understand, then charges me to explain them.",
    "Every investor meeting feels like I'm apologizing for my financials instead of showcasing my growth.",
    "I know my business is profitable, but I'm always stressed about cash flow.",
    "I need financial projections for a loan, but I don't know where to start."
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-bluemetric-lightbg">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-bluemetric-darkblue mb-6">
              SOUND FAMILIAR?
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-bluemetric-blue via-bluemetric-mediumblue to-bluemetric-blue/50 rounded-full mx-auto"></div>
          </div>

          {/* Problems in Staggered Layout */}
          <div className="space-y-8 mb-16 lg:mb-20">
            {/* Row 1 - 2 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {commonProblems.slice(0, 2).map((problem, index) => (
                <div 
                  key={index}
                  className="group bg-white p-6 lg:p-8 rounded-2xl shadow-lg border border-bluemetric-lightgray/20 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-bluemetric-blue/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-bluemetric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-bluemetric-blue/10 to-bluemetric-mediumblue/10 rounded-full flex items-center justify-center group-hover:from-bluemetric-blue/20 group-hover:to-bluemetric-mediumblue/20 transition-all duration-300">
                      <MessageCircle className="w-6 h-6 text-bluemetric-blue" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 text-lg lg:text-xl leading-relaxed italic">
                        {problem}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 - 1 item centered */}
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <div className="group bg-white p-6 lg:p-8 rounded-2xl shadow-lg border border-bluemetric-lightgray/20 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-bluemetric-blue/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-bluemetric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-bluemetric-blue/10 to-bluemetric-mediumblue/10 rounded-full flex items-center justify-center group-hover:from-bluemetric-blue/20 group-hover:to-bluemetric-mediumblue/20 transition-all duration-300">
                      <MessageCircle className="w-6 h-6 text-bluemetric-blue" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 text-lg lg:text-xl leading-relaxed italic">
                        {commonProblems[2]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3 - 2 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {commonProblems.slice(3, 5).map((problem, index) => (
                <div 
                  key={index + 3}
                  className="group bg-white p-6 lg:p-8 rounded-2xl shadow-lg border border-bluemetric-lightgray/20 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-bluemetric-blue/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-bluemetric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-bluemetric-blue/10 to-bluemetric-mediumblue/10 rounded-full flex items-center justify-center group-hover:from-bluemetric-blue/20 group-hover:to-bluemetric-mediumblue/20 transition-all duration-300">
                      <MessageCircle className="w-6 h-6 text-bluemetric-blue" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 text-lg lg:text-xl leading-relaxed italic">
                        {problem}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transition Text */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-bluemetric-lightbg via-white to-bluemetric-lightbg p-8 lg:p-12 rounded-3xl shadow-2xl border border-bluemetric-blue/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-bluemetric-blue/5 to-bluemetric-mediumblue/5"></div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-bluemetric-blue/20 to-transparent rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-bluemetric-mediumblue/20 to-transparent rounded-full"></div>
              <p className="relative text-xl lg:text-2xl text-bluemetric-darkblue leading-relaxed font-medium max-w-4xl mx-auto">
                If any of these sound familiar, you're not alone. That's exactly why{' '}
                <span className="text-bluemetric-blue font-bold">BlueMetric</span> exists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoundFamiliar;