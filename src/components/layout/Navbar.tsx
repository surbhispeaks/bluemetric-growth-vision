
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/49916e99-9bf8-435e-b1ae-2892adabe9bb.png" 
              alt="BlueMetric Logo" 
              className="h-10 md:h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-montserrat text-gray-700 hover:text-bluemetric-blue transition-colors font-medium">
              Home
            </Link>
            <Link to="/services" className="font-montserrat text-gray-700 hover:text-bluemetric-blue transition-colors font-medium">
              Services
            </Link>
            <Link to="/about" className="font-montserrat text-gray-700 hover:text-bluemetric-blue transition-colors font-medium">
              About
            </Link>
            <Link to="/insights" className="font-montserrat text-gray-700 hover:text-bluemetric-blue transition-colors font-medium">
              Insights
            </Link>
            <Link to="/faq" className="font-montserrat text-gray-700 hover:text-bluemetric-blue transition-colors font-medium">
              FAQ
            </Link>
            <Link to="/contact">
              <Button className="bg-bluemetric-blue hover:bg-bluemetric-mediumblue text-white font-montserrat">
                Book a Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-bluemetric-blue"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-montserrat text-gray-700 hover:text-bluemetric-blue transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="font-montserrat text-gray-700 hover:text-bluemetric-blue transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="font-montserrat text-gray-700 hover:text-bluemetric-blue transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/insights" 
                className="font-montserrat text-gray-700 hover:text-bluemetric-blue transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Insights
              </Link>
              <Link 
                to="/faq" 
                className="font-montserrat text-gray-700 hover:text-bluemetric-blue transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full bg-bluemetric-blue hover:bg-bluemetric-mediumblue text-white font-montserrat">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
