
import { ChartLine, Search, TrendingUp } from "lucide-react";

const Differentiators = () => {
  const differentiators = [
    {
      title: "Strategic Insight",
      description: "We translate financial data into business opportunities, helping you see beyond compliance to competitive advantage.",
      icon: TrendingUp,
    },
    {
      title: "Analytical Foundation",
      description: "Drawing on investment analysis experience, we identify the metrics that truly matter for your business decisions.",
      icon: ChartLine,
    },
    {
      title: "Growth Partnership",
      description: "Our systems and approach evolve with your needs, providing the right level of support at each stage of your journey.",
      icon: Search,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-background to-bluemetric-lightbg dark:from-background dark:to-bluemetric-lightbg">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-montserrat font-bold text-bluemetric-darkblue dark:text-bluemetric-darkblue text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            The BlueMetric Difference
          </h2>
          <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-bluemetric-blue to-bluemetric-mediumblue mx-auto mb-6 sm:mb-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
          {differentiators.map((item, index) => (
            <div 
              key={item.title} 
              className="group bg-card dark:bg-card rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl dark:shadow-2xl dark:hover:shadow-blue-500/20 transition-all duration-500 border border-bluemetric-lightgray/30 dark:border-bluemetric-lightgray/20 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-bluemetric-blue/5 via-transparent to-bluemetric-mediumblue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-bluemetric-blue/10 to-bluemetric-mediumblue/10 p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl inline-flex mb-4 sm:mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-bluemetric-blue" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-montserrat font-bold text-bluemetric-darkblue dark:text-bluemetric-darkblue mb-3 sm:mb-4 lg:mb-6 group-hover:text-bluemetric-blue dark:group-hover:text-bluemetric-blue transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
