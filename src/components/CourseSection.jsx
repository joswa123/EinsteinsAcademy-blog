import React from 'react';

const CoursesSection = () => {
  const courses = [
    {
      title: "NEET/JEE",
      image: "https://einsteinsacademy.in/wp-content/uploads/2025/01/Artboard-3@4x-300x267.png",
      alt: "Interactive classroom session with students and instructors at NEET Coaching Centre in Coimbatore",
      description: "Our NEET/JEE coaching program is designed to help aspiring medical and engineering students achieve their dreams. With expert faculty, comprehensive study materials, and targeted test preparation, we provide the tools and support needed to excel in these competitive exams.",
      link: "https://einsteinsacademy.in/neet-jee-1/",
      // Replace with: src="/images/neet-jee-course.jpg"
    },
    {
      title: "Home Tuition",
      image: "https://einsteinsacademy.in/wp-content/uploads/2025/01/Artboard-1@4x-1-768x623.png",
      alt: "Personalized learning session with student and tutor at Home Tuition in Coimbatore",
      description: "Our home tuition services offer personalized, one-on-one learning in the comfort of your home. With expert tutors, customized study plans, and flexible schedules, we focus on enhancing subject understanding, boosting confidence, and improving academic performance tailored to each student's needs.",
      link: "https://einsteinsacademy.in/home-tuition-1/",
      // Replace with: src="/images/home-tuition-course.jpg"
    },
    {
      title: "Tuition Centre",
      image: "https://einsteinsacademy.in/wp-content/uploads/2025/01/Mesa-de-trabajo-1@4x-1-768x512.png",
      alt: "Interactive learning session at Tuition Centre in Coimbatore",
      description: "Our tuition centre provides a supportive and focused learning environment to help students excel academically. With experienced teachers, interactive sessions, and tailored guidance, we ensure a strong foundation in key subjects and foster a passion for learning.",
      link: "https://einsteinsacademy.in/tuition-centre/",
      // Replace with: src="/images/tuition-centre-course.jpg"
    },
    {
      title: "Tutorial classes",
      image: "https://einsteinsacademy.in/wp-content/uploads/2025/01/Artboard-6@4x-300x204.png",
      alt: "Interactive tutorial classes in Coimbatore",
      description: "Our tutorial classes provide personalized and result-oriented coaching for students across various subjects. With expert instructors, interactive learning methods, and tailored study plans, we help students strengthen their concepts, improve academic performance, and achieve their goals with confidence.",
      link: "https://einsteinsacademy.in/tutorial-1/",
      // Replace with: src="/images/tutorial-classes-course.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Explore Our Courses
          </h2>
          <div className="h-8"></div> {/* Spacer */}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <a
              key={index}
              href={course.link}
              className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.alt}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-300"></div>
              </div>

              {/* Content Container */}
              <div className="p-6">
                {/* Spacer */}
                <div className="h-4"></div>

                {/* Course Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {course.title}
                </h3>

                {/* Spacer */}
                <div className="h-4"></div>

                {/* Course Description */}
                <p className="text-gray-600 leading-relaxed text-sm md:text-base line-clamp-3">
                  {course.description}
                </p>

                {/* Spacer */}
                <div className="h-4"></div>

                {/* Learn More Indicator */}
                <div className="flex items-center text-blue-600 font-medium text-sm">
                  Learn More
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;