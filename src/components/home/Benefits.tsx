
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
    <section className="py-20 lg:py-32 bg-gradient-to-b from-bluemetric-lightbg to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-montserrat font-bold text-bluemetric-darkblue text-sm uppercase tracking-wider mb-4">
            What This Means For Your Business
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-bluemetric-blue to-bluemetric-mediumblue mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title} 
              className="group bg-white p-8 lg:p-10 rounded-2xl lg:rounded-3xl border-t-4 border-bluemetric-blue shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-bluemetric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start mb-6">
                  <div className="bg-bluemetric-blue/10 p-3 rounded-full mr-4 group-hover:bg-bluemetric-blue/20 transition-colors duration-300">
                    <CheckCircle className="text-bluemetric-blue h-6 w-6 lg:h-7 lg:w-7" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-montserrat font-bold text-bluemetric-darkblue group-hover:text-bluemetric-blue transition-colors duration-300">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-16">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
