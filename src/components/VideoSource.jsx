import React from 'react';
import test1 from '../assets/videos/Testimonial-1.mp4';
import test2 from '../assets/videos/Testimonial-2.mp4';
import test3 from '../assets/videos/Testimonial-3.mp4';
import test4 from '../assets/videos/Testimonial-4.mp4';

const SuccessStoriesSection = () => {
  const successStories = [
    {
      id: 1,
      name: "Selvaganapathy",
      achievement: "12th centum in Business maths",
      school: "Venkatalakshmi matric HR Sec school",
      videoSrc: test1,
    },
    {
      id: 2,
      name: "Maithreyan.N",
      achievement: "10th centum in maths",
      school: "CRR MATRIC HR SEC SCHOOL",
      videoSrc: test2,
    },
    {
      id: 3,
      name: "Banurekha",
      achievement: "Mother Of Nithyajayam - Business Maths Centum",
      school: "St Joseph's Matric Higher Secondary School, Ondipudur",
      videoSrc: test3,
    },
    {
      id: 4,
      name: "Bharath",
      achievement: "Physics topper",
      school: "St.joseph's matric Hr.Sec.School. Ondipudur",
      videoSrc: test4,
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Recent Success Stories
          </h2>
          <div className="h-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {successStories.map((story) => (
            <div key={story.id} className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              {/* Video */}
              <div className="mb-6 rounded-xl overflow-hidden">
                <video 
                  className="w-full h-auto rounded-lg"
                  controls
                  preload="metadata"
                  controlsList="nodownload"
                >
                  <source src={story.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">{story.name}</h3>
                
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    {story.achievement}
                  </span>
                </div>

                <div className="flex items-start text-gray-600">
                  <svg className="w-5 h-5 mr-2 mt-0.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                  <span className="text-sm md:text-base">{story.school}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;