
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServiceHero = () => {
  return (
    <section className="bg-bluemetric-darkblue py-16 md:py-24 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-montserrat font-semibold text-white mb-6 md:mb-8">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-10">
            We provide a comprehensive suite of financial services - from essential bookkeeping to advanced analytics - tailored to help your business grow with clarity and confidence.
          </p>
          <Link to="/contact">
            <Button className="w-full sm:w-auto bg-white hover:bg-bluemetric-lightgray text-bluemetric-darkblue font-montserrat font-medium shadow-lg hover:shadow-xl transition-all duration-300 py-6 px-8 h-auto text-lg">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
