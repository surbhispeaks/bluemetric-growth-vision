
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 h-full border border-bluemetric-lightgray/20">
      <h3 className="text-2xl md:text-3xl font-montserrat font-semibold text-bluemetric-darkblue mb-8">
        Contact Information
      </h3>
      
      <div className="space-y-8">
        <div className="flex items-start space-x-4">
          <div className="bg-bluemetric-lightbg p-3 rounded-lg">
            <MapPin className="w-6 h-6 text-bluemetric-blue" />
          </div>
          <div>
            <h4 className="font-montserrat font-semibold text-bluemetric-darkblue mb-2">
              Office Location
            </h4>
            <address className="not-italic text-gray-600 leading-relaxed">
              UF Innovate Hub<br />
              747 SW 2nd Ave. Ste 190<br />
              Gainesville, FL 32601
            </address>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="bg-bluemetric-lightbg p-3 rounded-lg">
            <Mail className="w-6 h-6 text-bluemetric-blue" />
          </div>
          <div>
            <h4 className="font-montserrat font-semibold text-bluemetric-darkblue mb-2">
              Email Address
            </h4>
            <a 
              href="mailto:info@blue-metric.com" 
              className="text-bluemetric-blue hover:text-bluemetric-mediumblue transition-colors font-medium"
            >
              info@blue-metric.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="bg-bluemetric-lightbg p-3 rounded-lg">
            <Clock className="w-6 h-6 text-bluemetric-blue" />
          </div>
          <div>
            <h4 className="font-montserrat font-semibold text-bluemetric-darkblue mb-2">
              Business Hours
            </h4>
            <div className="text-gray-600 space-y-1">
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday & Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-bluemetric-lightgray">
          <Button 
            className="w-full bg-bluemetric-blue hover:bg-bluemetric-mediumblue text-white font-montserrat py-4 h-auto text-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => window.location.href = 'https://outlook.office.com/bookwithme/user/ea237c751c5f4ffcb4f1257dc6947314@blue-metric.com?anonymous&ep=plink'}
          >
            Book A Meeting
          </Button>
        </div>
        
        <div className="pt-6 border-t border-bluemetric-lightgray">
          <h4 className="font-montserrat font-semibold text-bluemetric-darkblue mb-4">
            Follow Us
          </h4>
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/casurbhi/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="bg-bluemetric-lightbg w-12 h-12 rounded-lg flex items-center justify-center text-bluemetric-darkblue hover:bg-bluemetric-blue hover:text-white transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a 
              href="https://x.com/ca_surbhi" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (formerly Twitter)"
              className="bg-bluemetric-lightbg w-12 h-12 rounded-lg flex items-center justify-center text-bluemetric-darkblue hover:bg-bluemetric-blue hover:text-white transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
