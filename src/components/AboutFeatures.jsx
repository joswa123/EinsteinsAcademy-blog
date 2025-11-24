import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Spacer */}
          <div className="h-8"></div>
          
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
            About Einstein's Academy
          </h2>

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="https://einsteinsacademy.in/wp-content/uploads/2025/01/cropped-Favicon@4x-300x300.png" 
              alt="Einstein's Academy Logo"
              className="w-24 h-24 rounded-full"
              // Replace with your actual logo path
              // src="/images/logo.png"
            />
          </div>

          {/* Description */}
          <div className="text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to Einstein's Academy, Coimbatore's hub for innovative and quality education. 
              As a leading tuition centre in Coimbatore, we are dedicated to inspiring young minds 
              and fostering a dynamic learning environment that encourages curiosity, creativity, 
              and critical thinking. At Einstein's Academy, we believe every student has unique 
              potential, and our goal is to help them realize it. Our carefully designed curriculum 
              blends academic rigor with modern teaching methodologies to ensure that students not 
              only excel in their studies but also develop the skills necessary to thrive in today's 
              competitive world.
            </p>
          </div>

          {/* Spacer */}
          <div className="h-8"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;