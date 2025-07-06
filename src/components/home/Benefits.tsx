
import { CheckCircle } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      title: "Clear Financial Direction",
      description: "Understand exactly where your business stands and where it's heading.",
    },
    {
      title: "Confident Decision-Making",
      description: "Make business moves backed by reliable financial intelligence.",
    },
    {
      title: "Time Freedom",
      description: "Focus on growing your business while we handle the financial details.",
    },
    {
      title: "Compliance Peace of Mind",
      description: "Rest assured your finances meet all regulatory requirements.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-bluemetric-lightbg via-background to-bluemetric-lightbg dark:from-bluemetric-lightbg dark:via-background dark:to-bluemetric-lightbg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 className="font-montserrat font-bold text-bluemetric-darkblue dark:text-bluemetric-darkblue text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6">
            What This Means For Your Business
          </h2>
          <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-bluemetric-blue to-bluemetric-mediumblue mx-auto mb-8 sm:mb-10 rounded-full"></div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-bluemetric-darkblue dark:text-bluemetric-darkblue mb-4 sm:mb-6 max-w-4xl mx-auto leading-tight">
            Transform Your Business With Financial Clarity
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            When your financial data becomes a strategic asset, every decision drives growth with confidence and precision.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title} 
                className={`group relative ${index % 2 === 0 ? 'md:translate-y-8' : ''}`}
              >
                {/* Background card */}
                <div className="absolute inset-0 bg-gradient-to-br from-bluemetric-blue to-bluemetric-mediumblue rounded-2xl sm:rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500 opacity-10"></div>
                
                {/* Main card */}
                <div className="relative bg-card dark:bg-card p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl dark:shadow-2xl dark:hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2 border border-bluemetric-lightgray/20 dark:border-bluemetric-lightgray/10">
                  {/* Icon container */}
                  <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-bluemetric-blue to-bluemetric-mediumblue rounded-xl sm:rounded-2xl mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="text-white h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-montserrat font-bold text-bluemetric-darkblue dark:text-bluemetric-darkblue mb-3 sm:mb-4 group-hover:text-bluemetric-blue dark:group-hover:text-bluemetric-blue transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                    {benefit.description}
                  </p>
                  
                  {/* Decorative element */}
                  <div className="absolute top-6 sm:top-8 right-6 sm:right-8 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-bluemetric-blue/5 to-bluemetric-mediumblue/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
