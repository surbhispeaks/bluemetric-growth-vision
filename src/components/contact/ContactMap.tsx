
import { MapPin } from "lucide-react";

const ContactMap = () => {
  // Coordinates for 747 SW 2nd Ave. Gainesville, FL 32601
  const address = "747 SW 2nd Ave, Gainesville, FL 32601";
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(address)}`;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-96 bg-gray-200 relative">
        {/* Placeholder for map - would need Google Maps API key */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-bluemetric-lightbg to-white">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-bluemetric-blue mx-auto mb-4" />
            <h4 className="text-lg font-montserrat font-semibold text-bluemetric-darkblue mb-2">
              Visit Our Office
            </h4>
            <p className="text-gray-600 mb-4">
              UF Innovate Hub<br />
              747 SW 2nd Ave.<br />
              Gainesville, FL 32601
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-bluemetric-blue hover:text-bluemetric-mediumblue font-medium"
            >
              <MapPin className="w-4 h-4 mr-2" />
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h4 className="font-montserrat font-semibold text-bluemetric-darkblue mb-3">
          Directions
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed">
          Located in the heart of Gainesville's innovation district, our office at UF Innovate Hub 
          provides easy access for clients throughout North Central Florida. Free parking is available 
          on-site for all consultation appointments.
        </p>
      </div>
    </div>
  );
};

export default ContactMap;
