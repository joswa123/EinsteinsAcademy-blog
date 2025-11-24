import React from 'react';

const WhyWeStartedSection = () => {
  const features = [
    {
      title: "Proven Academic Excellence",
      description: "With over 20 years of experience, our students consistently achieve top results in board and competitive exams, making us a trusted tuition centre in Coimbatore."
    },
    {
      title: "Personalized Learning Approach", 
      description: "As a leading tuition centre in Coimbatore, we tailor lessons to meet each student's unique needs, ensuring a deeper understanding and better retention."
    },
    {
      title: "Expert Faculty Team",
      description: "Our highly qualified and experienced teachers at our tuition centre in Coimbatore are dedicated to providing the best education and guidance."
    },
    {
      title: "Comprehensive Syllabus Coverage",
      description: "We offer specialized tuition for CBSE, State Board, ICSE, and IGCSE syllabi at our tuition centre in Coimbatore, covering every topic in detail."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://einsteinsacademy.in/wp-content/uploads/2025/01/rb_66539.png" 
                alt="Two students studying together at a picnic table, one using a tablet and the other with a stack of books, symbolizing learning at Einstein's Academy in Coimbatore"
                className="w-full h-auto rounded-2xl shadow-lg"
                // Replace with: src="/images/why-we-started.jpg"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            {/* Section Header */}
            <div className="thim-ekits-heading thim-ekit__heading mb-8">
              <h2 className="title text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Why we started Einstein's academy
              </h2>
              <p className="sub-heading"></p>
            </div>

            {/* Features List */}
            <div className="space-y-8 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 group-hover:bg-blue-700 transition-colors">
                      {index + 1}
                    </span>
                    <span className="group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed ml-11">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://einsteinsacademy.in/home-tuition/" 
                target="_blank"
                className="thim-ekits-button inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                <span className="button-content-wrapper">
                  Home Tuition
                </span>
              </a>
              
              <a 
                href="https://einsteinsacademy.in/tutorial/" 
                target="_blank"
                className="thim-ekits-button inline-flex items-center justify-center bg-transparent text-blue-600 font-semibold py-3 px-6 rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 text-center"
              >
                <span className="button-content-wrapper">
                  Tutorial Coaching
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeStartedSection;