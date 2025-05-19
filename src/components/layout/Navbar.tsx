
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-md py-2' : 'shadow-sm py-4'
    }`}>
      <div className="container mx-auto">
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
            <Link 
              to="/" 
              className={`font-montserrat transition-colors font-medium ${
                isActive('/') 
                  ? 'text-bluemetric-blue border-b-2 border-bluemetric-blue' 
                  : 'text-gray-700 hover:text-bluemetric-blue'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`font-montserrat transition-colors font-medium ${
                isActive('/services') 
                  ? 'text-bluemetric-blue border-b-2 border-bluemetric-blue' 
                  : 'text-gray-700 hover:text-bluemetric-blue'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`font-montserrat transition-colors font-medium ${
                isActive('/about') 
                  ? 'text-bluemetric-blue border-b-2 border-bluemetric-blue' 
                  : 'text-gray-700 hover:text-bluemetric-blue'
              }`}
            >
              About
            </Link>
            <Link 
              to="/insights" 
              className={`font-montserrat transition-colors font-medium ${
                isActive('/insights') 
                  ? 'text-bluemetric-blue border-b-2 border-bluemetric-blue' 
                  : 'text-gray-700 hover:text-bluemetric-blue'
              }`}
            >
              Insights
            </Link>
            <Link 
              to="/faq" 
              className={`font-montserrat transition-colors font-medium ${
                isActive('/faq') 
                  ? 'text-bluemetric-blue border-b-2 border-bluemetric-blue' 
                  : 'text-gray-700 hover:text-bluemetric-blue'
              }`}
            >
              FAQ
            </Link>
            <Link 
              to="/contact" 
              className={`font-montserrat transition-colors font-medium ${
                isActive('/contact') 
                  ? 'text-bluemetric-blue border-b-2 border-bluemetric-blue' 
                  : 'text-gray-700 hover:text-bluemetric-blue'
              }`}
            >
              Contact
            </Link>
            <Link to="/contact">
              <Button className="bg-bluemetric-blue hover:bg-bluemetric-mediumblue text-white font-montserrat shadow-md hover:shadow-lg transition-all duration-300">
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
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`font-montserrat transition-colors font-medium ${
                  isActive('/') 
                    ? 'text-bluemetric-blue border-l-4 border-bluemetric-blue pl-2' 
                    : 'text-gray-700 hover:text-bluemetric-blue'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`font-montserrat transition-colors font-medium ${
                  isActive('/services') 
                    ? 'text-bluemetric-blue border-l-4 border-bluemetric-blue pl-2' 
                    : 'text-gray-700 hover:text-bluemetric-blue'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className={`font-montserrat transition-colors font-medium ${
                  isActive('/about') 
                    ? 'text-bluemetric-blue border-l-4 border-bluemetric-blue pl-2' 
                    : 'text-gray-700 hover:text-bluemetric-blue'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/insights" 
                className={`font-montserrat transition-colors font-medium ${
                  isActive('/insights') 
                    ? 'text-bluemetric-blue border-l-4 border-bluemetric-blue pl-2' 
                    : 'text-gray-700 hover:text-bluemetric-blue'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Insights
              </Link>
              <Link 
                to="/faq" 
                className={`font-montserrat transition-colors font-medium ${
                  isActive('/faq') 
                    ? 'text-bluemetric-blue border-l-4 border-bluemetric-blue pl-2' 
                    : 'text-gray-700 hover:text-bluemetric-blue'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                to="/contact" 
                className={`font-montserrat transition-colors font-medium ${
                  isActive('/contact') 
                    ? 'text-bluemetric-blue border-l-4 border-bluemetric-blue pl-2' 
                    : 'text-gray-700 hover:text-bluemetric-blue'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
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
