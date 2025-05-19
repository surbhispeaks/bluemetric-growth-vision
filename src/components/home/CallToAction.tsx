
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-bluemetric-darkblue to-bluemetric-mediumblue rounded-xl px-8 py-16 text-center shadow-lg">
          <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-white mb-6 max-w-3xl mx-auto">
            Ready to transform your financial data into your strongest business asset?
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Schedule a consultation to discuss how BlueMetric can provide the financial clarity your growing business needs.
          </p>
          <Link to="/contact">
            <Button className="bg-white hover:bg-bluemetric-lightgray text-bluemetric-darkblue font-montserrat font-medium text-lg px-10 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300">
              Book Your Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
