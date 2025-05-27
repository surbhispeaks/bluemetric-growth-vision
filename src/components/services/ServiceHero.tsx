
const ServiceHero = () => {
  return (
    <section className="bg-gradient-to-br from-bluemetric-darkblue via-bluemetric-mediumblue to-bluemetric-darkblue py-20 md:py-28 lg:py-36 px-4 md:px-0 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-bluemetric-blue rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-montserrat font-bold text-white mb-6 md:mb-8 lg:mb-10 leading-tight">
            Our Services
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-8 md:mb-10 lg:mb-12 leading-relaxed max-w-3xl mx-auto">
            We provide a comprehensive suite of financial services - from essential bookkeeping to advanced analytics - tailored to help your business grow with clarity and confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
