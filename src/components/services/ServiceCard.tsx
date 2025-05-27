
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
    <div id={id} className="py-16 lg:py-24 border-b border-bluemetric-lightgray/30 scroll-mt-24 last:border-b-0">
      <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}>
        <div className="lg:w-1/2 space-y-8">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-br from-bluemetric-blue/10 to-bluemetric-mediumblue/10 p-4 rounded-2xl text-bluemetric-blue mr-5 group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-bold text-bluemetric-darkblue leading-tight">
              {title}
            </h2>
          </div>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            {description}
          </p>
          
          <div className="bg-bluemetric-lightbg p-6 lg:p-8 rounded-2xl border border-bluemetric-lightgray/30">
            <h3 className="text-xl font-montserrat font-bold text-bluemetric-darkblue mb-5 flex items-center">
              <span className="w-2 h-2 bg-bluemetric-blue rounded-full mr-3"></span>
              What we deliver:
            </h3>
            <ul className="space-y-3">
              {deliverables.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-bluemetric-blue mr-3 font-bold text-lg leading-none mt-1">•</span>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-6 lg:p-8 rounded-2xl border-l-4 border-bluemetric-blue shadow-sm">
            <h3 className="text-xl font-montserrat font-bold text-bluemetric-darkblue mb-4 flex items-center">
              <span className="w-2 h-2 bg-bluemetric-blue rounded-full mr-3"></span>
              The BlueMetric Difference:
            </h3>
            <p className="text-gray-700 leading-relaxed italic">
              {difference}
            </p>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex items-center justify-center">
          <div className="bg-gradient-to-br from-bluemetric-lightbg to-white rounded-3xl p-8 lg:p-10 w-full max-w-lg shadow-xl border border-bluemetric-lightgray/30">
            {imageType === "chart" && (
              <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 relative overflow-hidden border border-bluemetric-lightgray/20">
                <div className="border-b border-bluemetric-lightgray/50 pb-4 mb-6">
                  <h3 className="text-xl lg:text-2xl font-montserrat font-bold text-bluemetric-darkblue">
                    {title}
                  </h3>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="h-3 bg-gradient-to-r from-bluemetric-lightgray/50 to-bluemetric-lightgray/30 rounded-full w-full"></div>
                  <div className="h-3 bg-gradient-to-r from-bluemetric-lightgray/50 to-bluemetric-lightgray/30 rounded-full w-3/4"></div>
                  <div className="h-3 bg-gradient-to-r from-bluemetric-lightgray/50 to-bluemetric-lightgray/30 rounded-full w-5/6"></div>
                </div>
                
                <div className="flex items-end space-x-2">
                  <div className="bg-gradient-to-t from-bluemetric-blue to-bluemetric-mediumblue h-16 w-1/5 rounded-t-lg"></div>
                  <div className="bg-gradient-to-t from-bluemetric-blue to-bluemetric-mediumblue h-24 w-1/5 rounded-t-lg"></div>
                  <div className="bg-gradient-to-t from-bluemetric-blue to-bluemetric-mediumblue h-16 w-1/5 rounded-t-lg"></div>
                  <div className="bg-gradient-to-t from-bluemetric-blue to-bluemetric-mediumblue h-32 w-1/5 rounded-t-lg"></div>
                  <div className="bg-gradient-to-t from-bluemetric-blue to-bluemetric-mediumblue h-20 w-1/5 rounded-t-lg"></div>
                </div>
              </div>
            )}

            {imageType === "document" && (
              <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 relative overflow-hidden border border-bluemetric-lightgray/20">
                <div className="border-b border-bluemetric-lightgray/50 pb-4 mb-6">
                  <h3 className="text-xl lg:text-2xl font-montserrat font-bold text-bluemetric-darkblue">
                    {title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="h-3 bg-gradient-to-r from-bluemetric-lightgray/50 to-bluemetric-lightgray/30 rounded-full w-full"></div>
                  <div className="h-3 bg-gradient-to-r from-bluemetric-lightgray/50 to-bluemetric-lightgray/30 rounded-full w-full"></div>
                  <div className="h-3 bg-gradient-to-r from-bluemetric-lightgray/50 to-bluemetric-lightgray/30 rounded-full w-3/4"></div>
                  <div className="h-3 bg-gradient-to-r from-bluemetric-lightgray/50 to-bluemetric-lightgray/30 rounded-full w-full"></div>
                  <div className="h-3 bg-gradient-to-r from-bluemetric-lightgray/50 to-bluemetric-lightgray/30 rounded-full w-5/6"></div>
                  <div className="h-3 bg-gradient-to-r from-bluemetric-lightgray/50 to-bluemetric-lightgray/30 rounded-full w-full"></div>
                  <div className="h-3 bg-gradient-to-r from-bluemetric-lightgray/50 to-bluemetric-lightgray/30 rounded-full w-4/5"></div>
                  <div className="h-3 bg-gradient-to-r from-bluemetric-lightgray/50 to-bluemetric-lightgray/30 rounded-full w-full"></div>
                </div>
              </div>
            )}

            {imageType === "dashboard" && (
              <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 relative overflow-hidden border border-bluemetric-lightgray/20">
                <div className="border-b border-bluemetric-lightgray/50 pb-4 mb-6">
                  <h3 className="text-xl lg:text-2xl font-montserrat font-bold text-bluemetric-darkblue">
                    {title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="border border-bluemetric-lightgray/50 rounded-xl p-4 bg-gradient-to-br from-bluemetric-lightbg to-white">
                    <div className="h-2 bg-gradient-to-r from-bluemetric-blue to-bluemetric-mediumblue rounded-full w-3/4 mb-3"></div>
                    <div className="text-xl font-bold text-bluemetric-darkblue">$24.5k</div>
                  </div>
                  <div className="border border-bluemetric-lightgray/50 rounded-xl p-4 bg-gradient-to-br from-bluemetric-lightbg to-white">
                    <div className="h-2 bg-gradient-to-r from-bluemetric-blue to-bluemetric-mediumblue rounded-full w-3/4 mb-3"></div>
                    <div className="text-xl font-bold text-bluemetric-darkblue">+12%</div>
                  </div>
                  <div className="border border-bluemetric-lightgray/50 rounded-xl p-4 bg-gradient-to-br from-bluemetric-lightbg to-white">
                    <div className="h-2 bg-gradient-to-r from-bluemetric-blue to-bluemetric-mediumblue rounded-full w-3/4 mb-3"></div>
                    <div className="text-xl font-bold text-bluemetric-darkblue">45</div>
                  </div>
                  <div className="border border-bluemetric-lightgray/50 rounded-xl p-4 bg-gradient-to-br from-bluemetric-lightbg to-white">
                    <div className="h-2 bg-gradient-to-r from-bluemetric-blue to-bluemetric-mediumblue rounded-full w-3/4 mb-3"></div>
                    <div className="text-xl font-bold text-bluemetric-darkblue">-3%</div>
                  </div>
                </div>
                
                <div className="h-32 bg-gradient-to-br from-bluemetric-lightgray/30 to-bluemetric-lightgray/10 rounded-xl flex items-end p-3">
                  <div className="bg-gradient-to-t from-bluemetric-blue to-bluemetric-mediumblue h-1/3 w-1/6 rounded-t mx-1"></div>
                  <div className="bg-gradient-to-t from-bluemetric-blue to-bluemetric-mediumblue h-1/2 w-1/6 rounded-t mx-1"></div>
                  <div className="bg-gradient-to-t from-bluemetric-blue to-bluemetric-mediumblue h-3/4 w-1/6 rounded-t mx-1"></div>
                  <div className="bg-gradient-to-t from-bluemetric-blue to-bluemetric-mediumblue h-2/3 w-1/6 rounded-t mx-1"></div>
                  <div className="bg-gradient-to-t from-bluemetric-blue to-bluemetric-mediumblue h-5/6 w-1/6 rounded-t mx-1"></div>
                  <div className="bg-gradient-to-t from-bluemetric-blue to-bluemetric-mediumblue h-1/3 w-1/6 rounded-t mx-1"></div>
                </div>
              </div>
            )}

            {imageType === "report" && (
              <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 relative overflow-hidden border border-bluemetric-lightgray/20">
                <div className="border-b border-bluemetric-lightgray/50 pb-4 mb-6">
                  <h3 className="text-xl lg:text-2xl font-montserrat font-bold text-bluemetric-darkblue">
                    {title}
                  </h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <div className="w-1/3 h-3 bg-bluemetric-lightgray/50 rounded-full"></div>
                    <div className="w-1/4 h-3 bg-gradient-to-r from-bluemetric-blue to-bluemetric-mediumblue rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-1/3 h-3 bg-bluemetric-lightgray/50 rounded-full"></div>
                    <div className="w-1/2 h-3 bg-gradient-to-r from-bluemetric-blue to-bluemetric-mediumblue rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-1/3 h-3 bg-bluemetric-lightgray/50 rounded-full"></div>
                    <div className="w-2/3 h-3 bg-gradient-to-r from-bluemetric-blue to-bluemetric-mediumblue rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-1/3 h-3 bg-bluemetric-lightgray/50 rounded-full"></div>
                    <div className="w-1/5 h-3 bg-gradient-to-r from-bluemetric-blue to-bluemetric-mediumblue rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-1/3 h-3 bg-bluemetric-lightgray/50 rounded-full"></div>
                    <div className="w-3/4 h-3 bg-gradient-to-r from-bluemetric-blue to-bluemetric-mediumblue rounded-full"></div>
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
