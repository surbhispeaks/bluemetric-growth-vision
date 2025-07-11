const SoundFamiliar = () => {
  const commonProblems = [
    "I spend more time fighting with QuickBooks than running my business.",
    "My accountant gives me reports I don't understand, then charges me to explain them.",
    "Every investor meeting feels like I'm apologizing for my financials instead of showcasing my growth.",
    "I know my business is profitable, but I'm always stressed about cash flow.",
    "I need financial projections for a loan, but I don't know where to start."
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-bluemetric-lightbg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-bluemetric-darkblue mb-8">
              SOUND FAMILIAR?
            </h2>
          </div>

          {/* Problems Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
            {commonProblems.map((problem, index) => (
              <div 
                key={index}
                className="group bg-white p-6 lg:p-8 rounded-2xl shadow-lg border border-bluemetric-lightgray/20 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-bluemetric-blue/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-bluemetric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="absolute -top-1 -left-1 text-bluemetric-blue/30 text-4xl lg:text-5xl font-serif leading-none">"</div>
                  <p className="text-gray-700 text-lg lg:text-xl leading-relaxed pt-6 pb-4 italic">
                    {problem}
                  </p>
                  <div className="absolute -bottom-1 -right-1 text-bluemetric-blue/30 text-4xl lg:text-5xl font-serif leading-none">"</div>
                </div>
              </div>
            ))}
          </div>

          {/* Transition Text */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-bluemetric-lightbg/60 via-white to-bluemetric-lightbg/60 p-8 lg:p-12 rounded-2xl shadow-xl border border-bluemetric-blue/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-bluemetric-blue/5 to-bluemetric-mediumblue/5"></div>
              <p className="relative text-xl lg:text-2xl text-bluemetric-darkblue leading-relaxed font-medium max-w-4xl mx-auto">
                If any of these sound familiar, you're not alone. That's exactly why{' '}
                <span className="text-bluemetric-blue font-bold">BlueMetric</span> exists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoundFamiliar;