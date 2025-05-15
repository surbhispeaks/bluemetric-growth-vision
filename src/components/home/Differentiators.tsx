
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
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-semibold text-bluemetric-darkblue text-sm uppercase tracking-wider mb-2">
            The BlueMetric Difference
          </h2>
          <div className="w-20 h-1 bg-bluemetric-blue mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {differentiators.map((item) => (
            <div 
              key={item.title} 
              className="bg-bluemetric-lightbg rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-bluemetric-lightgray/50"
            >
              <div className="bg-bluemetric-blue/10 p-4 rounded-full inline-flex mb-6">
                <item.icon className="h-8 w-8 text-bluemetric-blue" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-bluemetric-darkblue mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
