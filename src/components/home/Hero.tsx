
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-bluemetric-darkblue to-bluemetric-mediumblue py-24 md:py-36">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-semibold text-white leading-tight mb-8">
              Bookkeeping and Beyond: <br />
              <span className="text-bluemetric-lightgray">Financial Clarity</span> for Your Business
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-xl">
              We provide bookkeeping services and help transform your financial data into actionable business intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/contact">
                <Button className="bg-white hover:bg-bluemetric-lightgray text-bluemetric-darkblue font-montserrat font-medium text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300">
                  Book a Consultation
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/20 font-montserrat font-medium text-lg px-8 py-6 h-auto bg-transparent transition-all duration-300">
                  Learn Our Approach
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="bg-white rounded-lg shadow-xl p-6 relative transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src="/lovable-uploads/dfae76eb-cd72-4328-9a37-904fde3fbcf1.png" 
                alt="Financial analytics dashboard with charts and reports" 
                className="w-full h-auto rounded-md shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
