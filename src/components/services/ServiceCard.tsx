
import { ReactNode } from "react";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  difference: string;
  icon: ReactNode;
  isReversed?: boolean;
  imageType?: "chart" | "document" | "dashboard" | "report";
}

const ServiceCard = ({
  id,
  title,
  description,
  deliverables,
  difference,
  icon,
  isReversed = false,
  imageType = "chart",
}: ServiceCardProps) => {
  // Helper function to get appropriate image based on type
  const getServiceImage = () => {
    switch (imageType) {
      case "document":
        return (
          <div className="bg-white rounded-lg shadow-sm p-6 relative">
            <img 
              src="/placeholder.svg" 
              alt="Bookkeeping documents" 
              className="w-full h-auto rounded-lg mb-4"
              style={{ aspectRatio: "16/9", objectFit: "cover" }}
            />
            <h3 className="text-xl font-montserrat font-medium text-bluemetric-darkblue mb-2">
              {title}
            </h3>
            <p className="text-sm text-gray-600">
              Organized financial records and reporting
            </p>
          </div>
        );
      case "chart":
        return (
          <div className="bg-white rounded-lg shadow-sm p-6 relative">
            <img 
              src="/placeholder.svg" 
              alt="Performance metrics chart" 
              className="w-full h-auto rounded-lg mb-4"
              style={{ aspectRatio: "16/9", objectFit: "cover" }}
            />
            <h3 className="text-xl font-montserrat font-medium text-bluemetric-darkblue mb-2">
              {title}
            </h3>
            <p className="text-sm text-gray-600">
              Data-driven business insights
            </p>
          </div>
        );
      case "dashboard":
        return (
          <div className="bg-white rounded-lg shadow-sm p-6 relative">
            <img 
              src="/placeholder.svg" 
              alt="Financial systems dashboard" 
              className="w-full h-auto rounded-lg mb-4"
              style={{ aspectRatio: "16/9", objectFit: "cover" }}
            />
            <h3 className="text-xl font-montserrat font-medium text-bluemetric-darkblue mb-2">
              {title}
            </h3>
            <p className="text-sm text-gray-600">
              Streamlined financial processes
            </p>
          </div>
        );
      case "report":
        return (
          <div className="bg-white rounded-lg shadow-sm p-6 relative">
            <img 
              src="/placeholder.svg" 
              alt="Business advisory report" 
              className="w-full h-auto rounded-lg mb-4"
              style={{ aspectRatio: "16/9", objectFit: "cover" }}
            />
            <h3 className="text-xl font-montserrat font-medium text-bluemetric-darkblue mb-2">
              {title}
            </h3>
            <p className="text-sm text-gray-600">
              Strategic financial guidance
            </p>
          </div>
        );
    }
  };

  return (
    <div id={id} className="py-16 border-b border-bluemetric-lightgray/50 scroll-mt-24">
      <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12`}>
        <div className="lg:w-1/2">
          <div className="flex items-center mb-4">
            <div className="text-bluemetric-blue mr-4">
              {icon}
            </div>
            <h2 className="text-2xl md:text-3xl font-montserrat font-semibold text-bluemetric-darkblue">
              {title}
            </h2>
          </div>
          
          <p className="text-gray-600 mb-8">
            {description}
          </p>
          
          <div className="mb-8">
            <h3 className="text-lg font-montserrat font-medium text-bluemetric-darkblue mb-4">
              What we deliver:
            </h3>
            <ul className="space-y-2">
              {deliverables.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-bluemetric-blue mr-2 font-bold">•</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-montserrat font-medium text-bluemetric-darkblue mb-4">
              The BlueMetric Difference:
            </h3>
            <p className="text-gray-600">
              {difference}
            </p>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex items-center justify-center">
          <div className="bg-bluemetric-lightbg rounded-lg p-8 w-full max-w-md">
            {getServiceImage()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
