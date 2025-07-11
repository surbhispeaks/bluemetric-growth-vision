import { MessageCircle, Users } from "lucide-react";

const SoundFamiliar = () => {
  const commonProblems = [
    "I spend more time fighting with QuickBooks than running my business.",
    "My accountant gives me reports I don't understand, then charges me to explain them.",
    "Every investor meeting feels like I'm apologizing for my financials instead of showcasing my growth.",
    "I know my business is profitable, but I'm always stressed about cash flow.",
    "I need financial projections for a loan, but I don't know where to start."
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-bluemetric-lightbg relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-bluemetric-blue/10 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-bluemetric-mediumblue/10 to-transparent rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-bluemetric-blue/10 to-bluemetric-mediumblue/10 rounded-full mb-6">
              <Users className="w-8 h-8 text-bluemetric-blue" />
            </div>
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
                  className={`group bg-white p-6 lg:p-8 rounded-2xl shadow-lg border border-bluemetric-lightgray/20 relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-bluemetric-blue/40 ${index === 0 ? 'md:translate-y-4' : ''}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-bluemetric-blue/5 to-bluemetric-mediumblue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-bluemetric-blue/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-bluemetric-blue/10 to-bluemetric-mediumblue/10 rounded-full flex items-center justify-center group-hover:from-bluemetric-blue/20 group-hover:to-bluemetric-mediumblue/20 transition-all duration-300 group-hover:scale-110">
                      <MessageCircle className="w-7 h-7 text-bluemetric-blue group-hover:text-bluemetric-mediumblue transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 text-lg lg:text-xl leading-relaxed italic group-hover:text-bluemetric-darkblue transition-colors duration-300">
                        {problem}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 - 1 item centered */}
            <div className="flex justify-center">
              <div className="w-full max-w-3xl">
                <div className="group bg-white p-6 lg:p-8 rounded-2xl shadow-lg border border-bluemetric-lightgray/20 relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-bluemetric-blue/40">
                  <div className="absolute inset-0 bg-gradient-to-br from-bluemetric-blue/5 to-bluemetric-mediumblue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-bluemetric-blue/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-bluemetric-blue/10 to-bluemetric-mediumblue/10 rounded-full flex items-center justify-center group-hover:from-bluemetric-blue/20 group-hover:to-bluemetric-mediumblue/20 transition-all duration-300 group-hover:scale-110">
                      <MessageCircle className="w-7 h-7 text-bluemetric-blue group-hover:text-bluemetric-mediumblue transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 text-lg lg:text-xl leading-relaxed italic group-hover:text-bluemetric-darkblue transition-colors duration-300">
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
                  className={`group bg-white p-6 lg:p-8 rounded-2xl shadow-lg border border-bluemetric-lightgray/20 relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-bluemetric-blue/40 ${index === 1 ? 'md:translate-y-4' : ''}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-bluemetric-blue/5 to-bluemetric-mediumblue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-bluemetric-blue/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-bluemetric-blue/10 to-bluemetric-mediumblue/10 rounded-full flex items-center justify-center group-hover:from-bluemetric-blue/20 group-hover:to-bluemetric-mediumblue/20 transition-all duration-300 group-hover:scale-110">
                      <MessageCircle className="w-7 h-7 text-bluemetric-blue group-hover:text-bluemetric-mediumblue transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 text-lg lg:text-xl leading-relaxed italic group-hover:text-bluemetric-darkblue transition-colors duration-300">
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
            <div className="group bg-gradient-to-br from-bluemetric-lightbg via-white to-bluemetric-lightbg p-8 lg:p-12 rounded-3xl shadow-2xl border border-bluemetric-blue/20 relative overflow-hidden transition-all duration-300 hover:shadow-3xl hover:border-bluemetric-blue/40">
              <div className="absolute inset-0 bg-gradient-to-br from-bluemetric-blue/5 to-bluemetric-mediumblue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-bluemetric-blue/20 to-transparent rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-bluemetric-mediumblue/20 to-transparent rounded-full"></div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-bluemetric-blue/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <p className="text-xl lg:text-2xl text-bluemetric-darkblue leading-relaxed font-medium max-w-4xl mx-auto">
                  If any of these sound familiar, you're not alone.
                  <br className="hidden sm:block" />
                  <span className="block sm:inline mt-2 sm:mt-0">
                    That's exactly why <span className="text-bluemetric-blue font-bold">BlueMetric</span> exists.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoundFamiliar;