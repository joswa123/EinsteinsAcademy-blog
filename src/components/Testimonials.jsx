import React from 'react';
import aisha from "../assets/Aish.jpg";
import aadhithiya from "../assets/Aidhitya.jpg";
import jassim from "../assets/jassim.jpg";
import mithra from "../assets/zcz.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "I studied my 11 and 12 standard in sudarshan tuition…now i am college final yr sudarshan tuition plays an important role in my life… it helps me to learn lot of new things in life .. the people there was very sweet persons and teach all the subject very well if i have doubt in what they teach they teach me again which help me to get good marks in my 12 th standard.",
      name: "Aisha", // Fixed: changed from image import to string
      school: "CRR Matric Higher Secondary School",
      image: aisha
    },
    {
      id: 2,
      text: "I had an exceptional experience with this tuition center. The structured, supportive environment and engaging teaching methods made learning effective. Complex topics were simplified, and regular feedback boosted my confidence. The tutor's patience and dedication stood out, leading to noticeable academic improvement.",
      name: "Aadhithiya.R",
      school: "GD Public School",
      image: aadhithiya // Fixed: using correct image import
    },
    {
      id: 3,
      text: "Suresh Sir is an excellent educator who makes learning engaging and effective. His clear explanations and patience help students grasp complex concepts easily. Under his guidance, Einstein Academy provides quality education with valuable resources. His dedication ensures student success. Highly recommended for academic excellence!",
      name: "Jassim M",
      school: "GD Public School",
      image: jassim // Fixed: using correct image import
    },
    {
      id: 4,
      text: "Suresh Sir is an exceptional teacher who makes learning engaging and effective. His expertise and clear explanations help students grasp complex concepts with ease. He is patient, approachable, and always ready to clear doubts. Under his leadership, Einstein Academy offers quality education with accessible resources.I highly recommend it!",
      name: "Mithra Ashok",
      school: "Ksirs School",
      image: mithra // Fixed: using correct image import
    }
  ];

  const QuoteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="30" viewBox="0 0 36 30" fill="none">
      <path d="M24.5 29.8L35.5 2.3L29.9 -4.05312e-06L16.6 26.7L24.5 29.8ZM7.9 29.8L18.9 2.3L13.3 -4.05312e-06L2.38419e-07 26.7L7.9 29.8Z" fill="#E0E0E0" />
    </svg>
  );

  return (
    <section className="w-full px-4 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Some <span className="text-red-500">❤</span> From Our Learners
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            What Students Say about Einstein's Academy
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-6 relative border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20">
                <QuoteIcon />
              </div>

              {/* Testimonial Content */}
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed line-clamp-6">
                  {testimonial.text}
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                {/* Avatar Image */}
                <div className="flex-shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 truncate">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {testimonial.school}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Spacer */}
        <div className="h-8 lg:h-12"></div>
      </div>
    </section>
  );
};

export default Testimonials;