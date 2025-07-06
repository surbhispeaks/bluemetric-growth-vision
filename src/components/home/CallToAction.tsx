
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-transparent relative">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-bluemetric-darkblue via-bluemetric-mediumblue to-bluemetric-blue rounded-2xl sm:rounded-3xl lg:rounded-[2rem] px-6 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-20 text-center shadow-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-white rounded-full blur-2xl"></div>
            <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 w-32 sm:w-40 h-32 sm:h-40 bg-bluemetric-lightgray rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-white mb-4 sm:mb-6 lg:mb-8 max-w-4xl mx-auto leading-tight px-4">
              Ready to transform your financial data into your strongest business asset?
            </h2>
            <p className="text-white/95 text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Schedule a consultation to discuss how BlueMetric can provide the financial clarity your growing business needs.
            </p>
            <Link to="https://outlook.office.com/bookwithme/user/ea237c751c5f4ffcb4f1257dc6947314@blue-metric.com?anonymous&ep=plink">
              <Button className="bg-white hover:bg-bluemetric-lightgray text-bluemetric-darkblue font-montserrat font-bold text-base sm:text-lg lg:text-xl px-6 sm:px-10 lg:px-12 py-4 sm:py-6 lg:py-8 h-auto shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 rounded-xl">
                Book Your Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
