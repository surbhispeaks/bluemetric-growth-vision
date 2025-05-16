
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
                <div className="flex justify-between items-end mb-6">
                  <div className="w-1/4 bg-bluemetric-blue h-32 rounded-t-lg"></div>
                  <div className="w-1/4 bg-bluemetric-blue h-40 rounded-t-lg"></div>
                  <div className="w-1/4 bg-bluemetric-blue h-48 rounded-t-lg"></div>
                  <div className="w-1/4 bg-bluemetric-blue h-56 rounded-t-lg"></div>
                </div>
                <div className="h-1.5 bg-bluemetric-blue rounded-full mb-4"></div>
                <div className="flex justify-between items-center">
                  <span className="font-montserrat text-bluemetric-darkblue font-medium">Revenue</span>
                  <span className="font-montserrat text-bluemetric-darkblue font-semibold">+24%</span>
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
