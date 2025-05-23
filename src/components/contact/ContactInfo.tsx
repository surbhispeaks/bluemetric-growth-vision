
const ContactInfo = () => {
  return (
    <div className="bg-bluemetric-lightbg rounded-lg p-8">
      <h3 className="text-2xl font-montserrat font-semibold text-bluemetric-darkblue mb-6">
        Contact Information
      </h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-montserrat font-medium text-bluemetric-darkblue mb-2">
            Location
          </h4>
          <address className="not-italic text-gray-600">
            UF Innovate Hub<br />
            747 SW 2nd Ave.<br />
            Gainesville, FL
          </address>
        </div>
        
        <div>
          <h4 className="font-montserrat font-medium text-bluemetric-darkblue mb-2">
            Email
          </h4>
          <a href="mailto:hello@blue-metric.com" className="text-bluemetric-blue hover:underline">
            hello@blue-metric.com
          </a>
        </div>
        
        <div>
          <h4 className="font-montserrat font-medium text-bluemetric-darkblue mb-2">
            Working Hours
          </h4>
          <p className="text-gray-600">
            Monday - Friday: 9:00 AM - 5:00 PM<br />
            Saturday & Sunday: Closed
          </p>
        </div>
        
        <div className="pt-4 border-t border-bluemetric-lightgray">
          <h4 className="font-montserrat font-medium text-bluemetric-darkblue mb-4">
            Follow Us
          </h4>
          <div className="flex space-x-4">
            <a 
              href="#" 
              aria-label="LinkedIn"
              className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-bluemetric-darkblue hover:bg-bluemetric-blue hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a 
              href="#" 
              aria-label="Twitter"
              className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-bluemetric-darkblue hover:bg-bluemetric-blue hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
