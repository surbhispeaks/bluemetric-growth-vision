
import { MapPin, ExternalLink } from "lucide-react";

const ContactMap = () => {
  // Coordinates for 747 SW 2nd Ave. Gainesville, FL 32601
  const address = "747 SW 2nd Ave, Gainesville, FL 32601";
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full border border-bluemetric-lightgray/20">
      <div className="h-80 bg-gray-200 relative">
        {/* Placeholder for map */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-bluemetric-lightbg via-white to-bluemetric-lightbg">
          <div className="text-center p-8">
            <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <MapPin className="w-10 h-10 text-bluemetric-blue" />
            </div>
            <h4 className="text-xl font-montserrat font-semibold text-bluemetric-darkblue mb-3">
              Visit Our Office
            </h4>
            <p className="text-gray-600 mb-6 leading-relaxed">
              UF Innovate Hub<br />
              747 SW 2nd Ave.<br />
              Gainesville, FL 32601
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-bluemetric-blue text-white px-6 py-3 rounded-lg hover:bg-bluemetric-mediumblue transition-all duration-300 shadow-md hover:shadow-lg font-medium"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-8">
        <h4 className="font-montserrat font-semibold text-bluemetric-darkblue mb-4 text-lg">
          Getting Here
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Located in the heart of Gainesville's innovation district, our office at UF Innovate Hub 
          provides easy access for clients throughout North Central Florida. Free parking is available 
          on-site for all consultation appointments.
        </p>
        
        <div className="mt-6 p-4 bg-bluemetric-lightbg rounded-lg">
          <p className="text-sm text-bluemetric-darkblue font-medium">
            💡 Pro tip: Enter through the main UF Innovate Hub entrance and check in at the front desk.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
