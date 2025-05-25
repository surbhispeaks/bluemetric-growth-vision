
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
    <nav className={`bg-white/95 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300 border-b border-gray-100 ${
      isScrolled ? 'shadow-lg py-2' : 'shadow-sm py-4'
    }`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img 
              src="/lovable-uploads/ab09fc48-b0c7-43c6-b299-960844ca182a.png" 
              alt="BlueMetric Logo" 
              className="h-10 md:h-12 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`relative px-4 py-2 rounded-lg font-montserrat transition-all duration-300 font-medium ${
                isActive('/') 
                  ? 'text-bluemetric-blue bg-bluemetric-blue/10' 
                  : 'text-gray-700 hover:text-bluemetric-blue hover:bg-gray-50'
              }`}
            >
              Home
              {isActive('/') && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-bluemetric-blue rounded-full"></div>
              )}
            </Link>
            <Link 
              to="/services" 
              className={`relative px-4 py-2 rounded-lg font-montserrat transition-all duration-300 font-medium ${
                isActive('/services') 
                  ? 'text-bluemetric-blue bg-bluemetric-blue/10' 
                  : 'text-gray-700 hover:text-bluemetric-blue hover:bg-gray-50'
              }`}
            >
              Services
              {isActive('/services') && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-bluemetric-blue rounded-full"></div>
              )}
            </Link>
            <Link 
              to="/about" 
              className={`relative px-4 py-2 rounded-lg font-montserrat transition-all duration-300 font-medium ${
                isActive('/about') 
                  ? 'text-bluemetric-blue bg-bluemetric-blue/10' 
                  : 'text-gray-700 hover:text-bluemetric-blue hover:bg-gray-50'
              }`}
            >
              About
              {isActive('/about') && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-bluemetric-blue rounded-full"></div>
              )}
            </Link>
            <Link 
              to="/insights" 
              className={`relative px-4 py-2 rounded-lg font-montserrat transition-all duration-300 font-medium ${
                isActive('/insights') 
                  ? 'text-bluemetric-blue bg-bluemetric-blue/10' 
                  : 'text-gray-700 hover:text-bluemetric-blue hover:bg-gray-50'
              }`}
            >
              Insights
              {isActive('/insights') && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-bluemetric-blue rounded-full"></div>
              )}
            </Link>
            <Link 
              to="/faq" 
              className={`relative px-4 py-2 rounded-lg font-montserrat transition-all duration-300 font-medium ${
                isActive('/faq') 
                  ? 'text-bluemetric-blue bg-bluemetric-blue/10' 
                  : 'text-gray-700 hover:text-bluemetric-blue hover:bg-gray-50'
              }`}
            >
              FAQ
              {isActive('/faq') && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-bluemetric-blue rounded-full"></div>
              )}
            </Link>
            <Link 
              to="/contact" 
              className={`relative px-4 py-2 rounded-lg font-montserrat transition-all duration-300 font-medium ${
                isActive('/contact') 
                  ? 'text-bluemetric-blue bg-bluemetric-blue/10' 
                  : 'text-gray-700 hover:text-bluemetric-blue hover:bg-gray-50'
              }`}
            >
              Contact
              {isActive('/contact') && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-bluemetric-blue rounded-full"></div>
              )}
            </Link>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-bluemetric-blue to-bluemetric-mediumblue hover:from-bluemetric-mediumblue hover:to-bluemetric-darkblue text-white font-montserrat font-medium px-6 py-2.5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                Book a Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-700 hover:text-bluemetric-blue hover:bg-gray-100 transition-all duration-300"
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
          <div className="lg:hidden mt-4 pb-6 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 space-y-2">
              <Link 
                to="/" 
                className={`flex items-center px-4 py-3 rounded-lg font-montserrat transition-all duration-300 font-medium ${
                  isActive('/') 
                    ? 'text-bluemetric-blue bg-bluemetric-blue/10 border-l-4 border-bluemetric-blue' 
                    : 'text-gray-700 hover:text-bluemetric-blue hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`flex items-center px-4 py-3 rounded-lg font-montserrat transition-all duration-300 font-medium ${
                  isActive('/services') 
                    ? 'text-bluemetric-blue bg-bluemetric-blue/10 border-l-4 border-bluemetric-blue' 
                    : 'text-gray-700 hover:text-bluemetric-blue hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className={`flex items-center px-4 py-3 rounded-lg font-montserrat transition-all duration-300 font-medium ${
                  isActive('/about') 
                    ? 'text-bluemetric-blue bg-bluemetric-blue/10 border-l-4 border-bluemetric-blue' 
                    : 'text-gray-700 hover:text-bluemetric-blue hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/insights" 
                className={`flex items-center px-4 py-3 rounded-lg font-montserrat transition-all duration-300 font-medium ${
                  isActive('/insights') 
                    ? 'text-bluemetric-blue bg-bluemetric-blue/10 border-l-4 border-bluemetric-blue' 
                    : 'text-gray-700 hover:text-bluemetric-blue hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Insights
              </Link>
              <Link 
                to="/faq" 
                className={`flex items-center px-4 py-3 rounded-lg font-montserrat transition-all duration-300 font-medium ${
                  isActive('/faq') 
                    ? 'text-bluemetric-blue bg-bluemetric-blue/10 border-l-4 border-bluemetric-blue' 
                    : 'text-gray-700 hover:text-bluemetric-blue hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                to="/contact" 
                className={`flex items-center px-4 py-3 rounded-lg font-montserrat transition-all duration-300 font-medium ${
                  isActive('/contact') 
                    ? 'text-bluemetric-blue bg-bluemetric-blue/10 border-l-4 border-bluemetric-blue' 
                    : 'text-gray-700 hover:text-bluemetric-blue hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-gray-100">
                <Link 
                  to="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full bg-gradient-to-r from-bluemetric-blue to-bluemetric-mediumblue hover:from-bluemetric-mediumblue hover:to-bluemetric-darkblue text-white font-montserrat font-medium py-3 shadow-lg transition-all duration-300">
                    Book a Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
