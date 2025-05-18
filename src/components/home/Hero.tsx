
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart3, FileText, PieChart, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-bluemetric-darkblue to-bluemetric-mediumblue py-20 md:py-32">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-semibold text-white leading-tight mb-6">
              Bookkeeping and Beyond: <br />
              <span className="text-bluemetric-lightgray">Financial Clarity</span> for Your Business
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl">
              We provide bookkeeping services and help transform your financial data into actionable business intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-white hover:bg-bluemetric-lightgray text-bluemetric-darkblue font-montserrat font-medium text-lg px-8 py-6 h-auto">
                  Book a Consultation
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 font-montserrat font-medium text-lg px-8 py-6 h-auto bg-transparent">
                  Learn Our Approach
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="bg-white rounded-lg shadow-xl p-8 relative">
              <div className="bg-bluemetric-lightbg/60 absolute top-0 left-0 right-0 bottom-0 rounded-lg" style={{ zIndex: 0 }}></div>
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-bluemetric-lightgray/30">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-bluemetric-darkblue">Financial Health</span>
                      <TrendingUp className="h-4 w-4 text-bluemetric-blue" />
                    </div>
                    <div className="text-2xl font-semibold text-bluemetric-darkblue">92%</div>
                    <div className="text-xs text-green-500 font-medium">↑ 12% from last month</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-bluemetric-lightgray/30">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-bluemetric-darkblue">Reports Generated</span>
                      <FileText className="h-4 w-4 text-bluemetric-blue" />
                    </div>
                    <div className="text-2xl font-semibold text-bluemetric-darkblue">159</div>
                    <div className="text-xs text-bluemetric-blue font-medium">YTD: 1,245</div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-bluemetric-lightgray/30 mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-bluemetric-darkblue">Financial Metrics Dashboard</span>
                    <BarChart3 className="h-4 w-4 text-bluemetric-blue" />
                  </div>
                  <div className="flex justify-between items-end h-24">
                    <div className="w-[10%] bg-bluemetric-blue h-[30%] rounded-t"></div>
                    <div className="w-[10%] bg-bluemetric-blue h-[45%] rounded-t"></div>
                    <div className="w-[10%] bg-bluemetric-blue h-[65%] rounded-t"></div>
                    <div className="w-[10%] bg-bluemetric-blue h-[80%] rounded-t"></div>
                    <div className="w-[10%] bg-bluemetric-blue h-[60%] rounded-t"></div>
                    <div className="w-[10%] bg-bluemetric-blue h-[75%] rounded-t"></div>
                    <div className="w-[10%] bg-bluemetric-blue h-[90%] rounded-t"></div>
                    <div className="w-[10%] bg-bluemetric-blue h-[70%] rounded-t"></div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-bluemetric-lightgray/30">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-bluemetric-darkblue">Business Insights</span>
                    <PieChart className="h-4 w-4 text-bluemetric-blue" />
                  </div>
                  <div className="flex justify-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-bluemetric-blue"></div>
                      <span className="text-xs">Growth</span>
                    </div>
                    <div className="mx-3 text-lg font-semibold text-bluemetric-darkblue">+18.5%</div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-xs">Efficiency</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
