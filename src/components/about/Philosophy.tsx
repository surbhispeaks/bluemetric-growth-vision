
const Philosophy = () => {
  const philosophyPoints = [
    {
      title: "Compliance and Beyond",
      description: "We believe financial services should embrace compliance and go beyond it to drive strategic business growth."
    },
    {
      title: "Data-Driven Decisions",
      description: "Every business decision should be informed by clear, accurate financial intelligence."
    },
    {
      title: "Growth-Focused",
      description: "Our approach scales with your business, providing the right level of support at each stage of growth."
    },
    {
      title: "Education & Empowerment",
      description: "We help business owners understand their finances so they can make confident decisions."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-bluemetric-lightbg via-white to-bluemetric-lightbg dark:from-background dark:via-background dark:to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-bluemetric-blue/10 rounded-full text-bluemetric-blue font-montserrat font-medium text-sm uppercase tracking-wider mb-6">
            How We Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-bluemetric-darkblue dark:text-foreground mb-6">
            Our Philosophy
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-bluemetric-blue to-bluemetric-mediumblue rounded-full mx-auto mb-8"></div>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At BlueMetric, we approach financial services differently, with a focus on driving business growth through strategic financial insights.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {philosophyPoints.map((point, index) => (
              <div 
                key={index} 
                className="group relative"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-bluemetric-blue/5 to-bluemetric-mediumblue/10 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                
                {/* Main card */}
                <div className="relative bg-white dark:bg-card p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl dark:shadow-2xl dark:hover:shadow-primary/10 transition-all duration-300 border border-bluemetric-lightgray/20 dark:border-border/30 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-bluemetric-blue to-bluemetric-mediumblue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-montserrat font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-montserrat font-bold text-bluemetric-darkblue dark:text-card-foreground mb-4 group-hover:text-bluemetric-blue transition-colors duration-300">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
