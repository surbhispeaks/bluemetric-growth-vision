
const AboutHero = () => {
  return (
    <section className="py-32 lg:py-40 bg-gradient-to-br from-bluemetric-darkblue via-bluemetric-mediumblue to-bluemetric-darkblue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-bluemetric-blue rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white/90 font-montserrat font-medium text-sm uppercase tracking-wider border border-white/30">
              Our Story
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-8 lg:mb-10 leading-tight">
            About BlueMetric
          </h1>
          <p className="text-xl lg:text-2xl text-white/95 mb-12 lg:mb-16 leading-relaxed max-w-4xl mx-auto">
            We're on a mission to transform how businesses view their financial information—not as a compliance requirement, but as their most valuable strategic asset.
          </p>
          <div className="flex justify-center">
            <div className="w-24 h-1.5 bg-gradient-to-r from-white to-white/60 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
