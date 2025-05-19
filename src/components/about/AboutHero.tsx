
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-bluemetric-darkblue to-bluemetric-mediumblue">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-semibold text-white mb-8">
            About BlueMetric
          </h1>
          <p className="text-xl text-white/90 mb-10">
            We're on a mission to transform how businesses view their financial information—not as a compliance requirement, but as their most valuable strategic asset.
          </p>
          <Link to="/contact">
            <Button className="bg-white hover:bg-bluemetric-lightgray text-bluemetric-darkblue font-montserrat font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              Work With Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
