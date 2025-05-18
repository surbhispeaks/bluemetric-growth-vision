
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
            {imageType === "chart" && (
              <div className="bg-white rounded-lg shadow-sm p-6 relative overflow-hidden">
                <div className="border-b border-bluemetric-lightgray/50 pb-4 mb-4">
                  <h3 className="text-xl font-montserrat font-medium text-bluemetric-darkblue">
                    {title}
                  </h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="h-2.5 bg-bluemetric-lightgray/50 rounded-full w-full"></div>
                  <div className="h-2.5 bg-bluemetric-lightgray/50 rounded-full w-3/4"></div>
                  <div className="h-2.5 bg-bluemetric-lightgray/50 rounded-full w-5/6"></div>
                </div>
                
                <div className="flex items-end space-x-1">
                  <div className="bg-bluemetric-blue h-16 w-1/5 rounded-t-md"></div>
                  <div className="bg-bluemetric-blue h-24 w-1/5 rounded-t-md"></div>
                  <div className="bg-bluemetric-blue h-16 w-1/5 rounded-t-md"></div>
                  <div className="bg-bluemetric-blue h-32 w-1/5 rounded-t-md"></div>
                  <div className="bg-bluemetric-blue h-20 w-1/5 rounded-t-md"></div>
                </div>
              </div>
            )}

            {imageType === "document" && (
              <div className="bg-white rounded-lg shadow-sm p-6 relative overflow-hidden">
                <div className="border-b border-bluemetric-lightgray/50 pb-4 mb-4">
                  <h3 className="text-xl font-montserrat font-medium text-bluemetric-darkblue">
                    {title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="h-2.5 bg-bluemetric-lightgray/50 rounded-full w-full"></div>
                  <div className="h-2.5 bg-bluemetric-lightgray/50 rounded-full w-full"></div>
                  <div className="h-2.5 bg-bluemetric-lightgray/50 rounded-full w-3/4"></div>
                  <div className="h-2.5 bg-bluemetric-lightgray/50 rounded-full w-full"></div>
                  <div className="h-2.5 bg-bluemetric-lightgray/50 rounded-full w-5/6"></div>
                  <div className="h-2.5 bg-bluemetric-lightgray/50 rounded-full w-full"></div>
                  <div className="h-2.5 bg-bluemetric-lightgray/50 rounded-full w-4/5"></div>
                  <div className="h-2.5 bg-bluemetric-lightgray/50 rounded-full w-full"></div>
                </div>
              </div>
            )}

            {imageType === "dashboard" && (
              <div className="bg-white rounded-lg shadow-sm p-6 relative overflow-hidden">
                <div className="border-b border-bluemetric-lightgray/50 pb-4 mb-4">
                  <h3 className="text-xl font-montserrat font-medium text-bluemetric-darkblue">
                    {title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="border border-bluemetric-lightgray/50 rounded p-3">
                    <div className="h-2 bg-bluemetric-blue rounded-full w-3/4 mb-2"></div>
                    <div className="text-xl font-semibold text-bluemetric-darkblue">$24.5k</div>
                  </div>
                  <div className="border border-bluemetric-lightgray/50 rounded p-3">
                    <div className="h-2 bg-bluemetric-blue rounded-full w-3/4 mb-2"></div>
                    <div className="text-xl font-semibold text-bluemetric-darkblue">+12%</div>
                  </div>
                  <div className="border border-bluemetric-lightgray/50 rounded p-3">
                    <div className="h-2 bg-bluemetric-blue rounded-full w-3/4 mb-2"></div>
                    <div className="text-xl font-semibold text-bluemetric-darkblue">45</div>
                  </div>
                  <div className="border border-bluemetric-lightgray/50 rounded p-3">
                    <div className="h-2 bg-bluemetric-blue rounded-full w-3/4 mb-2"></div>
                    <div className="text-xl font-semibold text-bluemetric-darkblue">-3%</div>
                  </div>
                </div>
                
                <div className="h-32 bg-bluemetric-lightgray/30 rounded flex items-end p-2">
                  <div className="bg-bluemetric-blue h-1/3 w-1/6 rounded-t mx-1"></div>
                  <div className="bg-bluemetric-blue h-1/2 w-1/6 rounded-t mx-1"></div>
                  <div className="bg-bluemetric-blue h-3/4 w-1/6 rounded-t mx-1"></div>
                  <div className="bg-bluemetric-blue h-2/3 w-1/6 rounded-t mx-1"></div>
                  <div className="bg-bluemetric-blue h-5/6 w-1/6 rounded-t mx-1"></div>
                  <div className="bg-bluemetric-blue h-1/3 w-1/6 rounded-t mx-1"></div>
                </div>
              </div>
            )}

            {imageType === "report" && (
              <div className="bg-white rounded-lg shadow-sm p-6 relative overflow-hidden">
                <div className="border-b border-bluemetric-lightgray/50 pb-4 mb-4">
                  <h3 className="text-xl font-montserrat font-medium text-bluemetric-darkblue">
                    {title}
                  </h3>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <div className="w-1/3 h-3 bg-bluemetric-lightgray/50 rounded"></div>
                    <div className="w-1/4 h-3 bg-bluemetric-blue rounded"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-1/3 h-3 bg-bluemetric-lightgray/50 rounded"></div>
                    <div className="w-1/2 h-3 bg-bluemetric-blue rounded"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-1/3 h-3 bg-bluemetric-lightgray/50 rounded"></div>
                    <div className="w-2/3 h-3 bg-bluemetric-blue rounded"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-1/3 h-3 bg-bluemetric-lightgray/50 rounded"></div>
                    <div className="w-1/5 h-3 bg-bluemetric-blue rounded"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-1/3 h-3 bg-bluemetric-lightgray/50 rounded"></div>
                    <div className="w-3/4 h-3 bg-bluemetric-blue rounded"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
