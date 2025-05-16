
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServiceHero = () => {
  return (
    <section className="bg-bluemetric-darkblue py-20">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-semibold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/90 mb-8">
            We provide a comprehensive suite of financial services - from essential bookkeeping to advanced analytics - tailored to help your business grow with clarity and confidence.
          </p>
          <Link to="/contact">
            <Button className="bg-white hover:bg-bluemetric-lightgray text-bluemetric-darkblue font-montserrat font-medium">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
