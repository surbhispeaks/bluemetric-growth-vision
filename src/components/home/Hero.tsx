
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-bluemetric-darkblue via-bluemetric-mediumblue to-bluemetric-darkblue py-20 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-bluemetric-blue rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-montserrat font-bold text-white leading-tight mb-6 lg:mb-8">
              Bookkeeping and Beyond: <br />
              <span className="text-bluemetric-lightgray bg-gradient-to-r from-bluemetric-lightgray to-white bg-clip-text text-transparent">
                Financial Clarity
              </span> for Your Business
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 lg:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We provide bookkeeping services and help transform your financial data into actionable business intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start">
              <Link to="/contact">
                <Button className="bg-white hover:bg-bluemetric-lightgray text-bluemetric-darkblue font-montserrat font-semibold text-lg lg:text-xl px-8 lg:px-10 py-6 lg:py-8 h-auto shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 rounded-xl">
                  Book a Consultation
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 hover:border-white/80 font-montserrat font-semibold text-lg lg:text-xl px-8 lg:px-10 py-6 lg:py-8 h-auto bg-transparent transition-all duration-300 transform hover:scale-105 rounded-xl backdrop-blur-sm">
                  Learn Our Approach
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl lg:rounded-3xl shadow-2xl p-6 lg:p-8 relative transform hover:scale-[1.02] transition-all duration-500 border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl lg:rounded-3xl"></div>
              <img 
                src="/lovable-uploads/dfae76eb-cd72-4328-9a37-904fde3fbcf1.png" 
                alt="Financial analytics dashboard with charts and reports" 
                className="w-full h-auto rounded-xl lg:rounded-2xl shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
