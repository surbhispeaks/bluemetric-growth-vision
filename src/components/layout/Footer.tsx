
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This component will help scroll to top on navigation
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // When hash is present, wait for the page to render and then scroll to the element
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  }, [pathname, hash]);

  return null;
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <ScrollToTop />
      <footer className="bg-bluemetric-darkblue text-white pt-16 pb-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <img 
                src="/lovable-uploads/21f0f4a4-4cd3-4a87-a4f1-d507622aa4e7.png" 
                alt="BlueMetric Logo" 
                className="h-12 mb-6 brightness-0 invert"
              />
              <p className="text-gray-300 mb-5">
                Transforming financial data into actionable business intelligence.
              </p>
              <p className="text-white text-xs uppercase font-montserrat tracking-wider font-semibold">
                Numbers And Beyond
              </p>
            </div>
            
            <div>
              <h3 className="font-montserrat font-semibold text-white text-lg mb-5 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-[3px] after:bg-bluemetric-blue">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/services#bookkeeping" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <span className="text-bluemetric-blue mr-2">›</span> Bookkeeping & Reporting
                  </Link>
                </li>
                <li>
                  <Link to="/services#performance" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <span className="text-bluemetric-blue mr-2">›</span> Performance Metrics
                  </Link>
                </li>
                <li>
                  <Link to="/services#systems" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <span className="text-bluemetric-blue mr-2">›</span> Financial Systems
                  </Link>
                </li>
                <li>
                  <Link to="/services#advisory" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <span className="text-bluemetric-blue mr-2">›</span> Business Advisory
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-montserrat font-semibold text-white text-lg mb-5 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-[3px] after:bg-bluemetric-blue">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <span className="text-bluemetric-blue mr-2">›</span> About Us
                  </Link>
                </li>
                <li>
                  <Link to="/insights" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <span className="text-bluemetric-blue mr-2">›</span> Insights
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <span className="text-bluemetric-blue mr-2">›</span> Contact
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <span className="text-bluemetric-blue mr-2">›</span> FAQ
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-montserrat font-semibold text-white text-lg mb-5 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-[3px] after:bg-bluemetric-blue">Contact</h3>
              <p className="text-gray-300 mb-3">
                UF Innovate Hub<br />
                747 SW 2nd Ave. Ste 190<br />
                Gainesville, FL 32601
              </p>
              <p className="text-gray-300 mb-5">
                <a href="mailto:info@blue-metric.com" className="hover:text-white transition-colors">
                  info@blue-metric.com
                </a>
              </p>
              <div className="flex space-x-4">
                <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-colors bg-bluemetric-mediumblue/30 p-2 rounded-full hover:bg-bluemetric-mediumblue/50">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white transition-colors bg-bluemetric-mediumblue/30 p-2 rounded-full hover:bg-bluemetric-mediumblue/50">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {currentYear} BlueMetric. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
