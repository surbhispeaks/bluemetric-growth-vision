
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
    <section className="py-20 bg-bluemetric-lightbg">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-semibold text-bluemetric-darkblue text-sm uppercase tracking-wider mb-2">
            What This Means For Your Business
          </h2>
          <div className="w-20 h-1 bg-bluemetric-blue mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title} 
              className="bg-white p-8 rounded-lg border-t-4 border-bluemetric-blue shadow-sm"
            >
              <div className="flex items-start mb-4">
                <CheckCircle className="text-bluemetric-blue h-6 w-6 mr-2 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-montserrat font-semibold text-bluemetric-darkblue">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-600 pl-8">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
