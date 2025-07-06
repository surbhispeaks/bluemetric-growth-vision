
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

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
    <nav className={`bg-background/95 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300 border-b border-border ${
      isScrolled ? 'shadow-lg py-2' : 'shadow-sm py-4'
    }`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img 
              src="/lovable-uploads/69266f11-ec98-405c-8f3e-195020c4e0ba.png" 
              alt="BlueMetric Logo" 
              className="h-10 md:h-12 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`relative px-4 py-2 rounded-lg font-montserrat transition-all duration-300 font-medium hover-underline ${
                isActive('/') 
                  ? 'text-primary bg-primary/10' 
                  : 'text-foreground hover:text-primary hover:bg-accent'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`relative px-4 py-2 rounded-lg font-montserrat transition-all duration-300 font-medium hover-underline ${
                isActive('/services') 
                  ? 'text-primary bg-primary/10' 
                  : 'text-foreground hover:text-primary hover:bg-accent'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`relative px-4 py-2 rounded-lg font-montserrat transition-all duration-300 font-medium hover-underline ${
                isActive('/about') 
                  ? 'text-primary bg-primary/10' 
                  : 'text-foreground hover:text-primary hover:bg-accent'
              }`}
            >
              About
            </Link>
            <Link
              to="/faq" 
              className={`relative px-4 py-2 rounded-lg font-montserrat transition-all duration-300 font-medium hover-underline ${
                isActive('/faq') 
                  ? 'text-primary bg-primary/10' 
                  : 'text-foreground hover:text-primary hover:bg-accent'
              }`}
            >
              FAQ
            </Link>
            <Link 
              to="/contact" 
              className={`relative px-4 py-2 rounded-lg font-montserrat transition-all duration-300 font-medium hover-underline ${
                isActive('/contact') 
                  ? 'text-primary bg-primary/10' 
                  : 'text-foreground hover:text-primary hover:bg-accent'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <ThemeToggle />
            <Link to="https://outlook.office.com/bookwithme/user/ea237c751c5f4ffcb4f1257dc6947314@blue-metric.com?anonymous&ep=plink">
              <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground font-montserrat font-medium px-6 py-2.5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 hover-glow">
                Book a Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-foreground hover:text-primary hover:bg-accent transition-all duration-300"
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
            <div className="bg-card rounded-xl shadow-lg border border-border p-4 space-y-2">
              <Link 
                to="/" 
                className={`mobile-nav-link font-montserrat font-medium ${
                  isActive('/') 
                    ? 'text-primary bg-primary/10 border-l-4 border-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`mobile-nav-link font-montserrat font-medium ${
                  isActive('/services') 
                    ? 'text-primary bg-primary/10 border-l-4 border-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className={`mobile-nav-link font-montserrat font-medium ${
                  isActive('/about') 
                    ? 'text-primary bg-primary/10 border-l-4 border-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/faq" 
                className={`mobile-nav-link font-montserrat font-medium ${
                  isActive('/faq') 
                    ? 'text-primary bg-primary/10 border-l-4 border-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                to="/contact" 
                className={`mobile-nav-link font-montserrat font-medium ${
                  isActive('/contact') 
                    ? 'text-primary bg-primary/10 border-l-4 border-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-border">
                <Link 
                  to="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="mobile-button bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground font-montserrat font-medium py-3 shadow-lg transition-all duration-300">
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
