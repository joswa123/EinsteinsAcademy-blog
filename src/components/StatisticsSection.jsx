import React, { useState, useEffect, useRef } from 'react';

const StatisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { number: 200, suffix: '+', title: 'Students' },
    { number: 10, suffix: '', title: 'Total Courses' },
    { number: 11, suffix: '', title: 'Instructors' },
    { number: 99.9, suffix: '%', title: 'Satisfaction Rate' }
  ];

  const [animatedNumbers, setAnimatedNumbers] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 2000;
        const steps = 60;
        const increment = stat.number / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.number) {
            current = stat.number;
            clearInterval(timer);
          }

          setAnimatedNumbers(prev => {
            const newNumbers = [...prev];
            newNumbers[index] = Math.floor(current);
            return newNumbers;
          });
        }, duration / steps);
      });
    }
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-gradient-to-r from-blue-50 to-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="elementor-counter">
                <div className="elementor-counter-title text-gray-600 font-medium mb-3 text-sm md:text-base">
                  {stat.title}
                </div>
                <div className="elementor-counter-number-wrapper">
                  <span className="elementor-counter-number-prefix"></span>
                  <span 
                    className="elementor-counter-number text-3xl md:text-4xl font-bold text-blue-900"
                  >
                    {animatedNumbers[index]}
                    {stat.suffix && (
                      <span className="elementor-counter-number-suffix text-2xl md:text-3xl">
                        {stat.suffix}
                      </span>
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;