
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
    <section className="py-20 bg-bluemetric-lightbg">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-montserrat font-semibold text-bluemetric-darkblue mb-4">
            Our Philosophy
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At BlueMetric, we approach financial services differently, with a focus on driving business growth through strategic financial insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {philosophyPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm border border-bluemetric-lightgray/30"
            >
              <h3 className="text-xl font-montserrat font-semibold text-bluemetric-darkblue mb-4">
                {point.title}
              </h3>
              <p className="text-gray-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
