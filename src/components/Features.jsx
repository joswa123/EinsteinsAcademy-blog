import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      image: "https://einsteinsacademy.in/wp-content/uploads/2025/01/Certification.png",
      title: "Grades",
      description: "Tutoring programs for grades starting from 6th standard to 12th standard"
    },
    {
      image: "https://einsteinsacademy.in/wp-content/uploads/2025/01/Classes.png",
      title: "Curriculums", 
      description: "Tutoring programs that cover major curriculum like StateBoard, CBSE, ICSE, IGCSE. We specialize in exam preparation for NEET and JEE exams."
    },
    {
      image: "https://einsteinsacademy.in/wp-content/uploads/2025/01/Grades.png",
      title: "Subjects",
      description: "Personalized tutoring for Mathematics, Physics, Chemistry and Biology."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="h-8"></div> {/* Spacer */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Best Tuition Centre in Coimbatore - Academic Success For All Students
          </h2>
          <div className="h-8"></div> {/* Spacer */}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              {/* Image */}
              <div className="mb-6">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-32 h-32 mx-auto object-contain"
                  // Replace with your actual image paths
                  // src={`/images/${feature.title.toLowerCase()}.png`}
                />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;