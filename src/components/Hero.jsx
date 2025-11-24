import React from "react";
import heroImage from "../assets/Screenshot 2025-11-24 004944.png"
const HeroSection = () => {
  return (
    <section className="relative bg-linear-to-r from-purple-700 to-orange-400 py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-snug mb-8">
              Empowering Young Minds, <br /> Shaping Bright Futures
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl">
              At Einstein's Academy, we are committed to empowering young minds with
              quality education and innovative teaching methods. As a leading tuition
              centre in Coimbatore, we provide personalized learning experiences that
              nurture academic excellence and essential life skills, shaping bright
              futures for every student.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="https://einsteinsacademy.in/contact-us/"
                target="_blank"
                className="bg-green-500 hover:bg-green-600 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all"
              >
                Join Today
              </a>

              <a
                href="https://einsteinsacademy.in/career/"
                target="_blank"
                className="bg-blue-900 hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold rounded-full border-2 border-white shadow-lg transition-all"
              >
                Become A Tutor
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <img
              src={heroImage}
              alt="Student"
              className="max-w-md w-full drop-shadow-2xl"
            />

            {/* Right-side floating doodles */}
            <img
              src="https://einsteinsacademy.in/wp-content/uploads/2024/12/atom-outline.png"
              alt=""
              className="absolute right-0 top-1/3 w-40 opacity-60"
            />
            <img
              src="https://einsteinsacademy.in/wp-content/uploads/2024/12/magnifier-outline.png"
              alt=""
              className="absolute -right-6 top-6 w-32 opacity-60"
            />
            <img
              src="https://einsteinsacademy.in/wp-content/uploads/2024/12/triangle-ruler-outline.png"
              alt=""
              className="absolute bottom-6 right-0 w-40 opacity-60"
            />
            <img
              src=""
              alt=""
              className="absolute -left-10 top-1/3 w-40 opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
