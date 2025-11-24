import React, { useState, useRef, useEffect } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const faqData = [
    {
      id: 1,
      question: "Can students from both English and Tamil mediums join your ICSE tuition classes?",
      answer: "Yes, we offer classes in both English and Tamil mediums to cater to the needs of all students."
    },
    {
      id: 2,
      question: "How do you ensure my child's success in the ICSE exams?",
      answer: "We provide personalized coaching, regular assessments, mock exams, and focused revision to ensure thorough exam preparation."
    },
    {
      id: 3,
      question: "Is there an option to attend a demo class before enrolling?",
      answer: "Yes, we offer a free demo class so that students can experience our teaching style before making a commitment."
    },
    {
      id: 4,
      question: "Do you provide coaching for competitive exams alongside the ICSE syllabus?",
      answer: "Yes, we offer coaching for competitive exams like JEE, NEET, and others, in addition to the regular ICSE syllabus."
    },
    {
      id: 5,
      question: "How can I enroll my child for ICSE tuition?",
      answer: "You can contact us via phone or visit our website to register and enroll your child in our tuition classes."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Update maxHeight styles from effects (avoid reading refs during render)
  useEffect(() => {
    contentRefs.current.forEach((el, i) => {
      if (!el) return;
      if (activeIndex === i) {
        el.style.maxHeight = `${el.scrollHeight}px`;
      } else {
        el.style.maxHeight = '0px';
      }
    });
  }, [activeIndex]);

  // Keep maxHeight correct on resize for the open panel
  useEffect(() => {
    const onResize = () => {
      const el = contentRefs.current[activeIndex];
      if (el) el.style.maxHeight = `${el.scrollHeight}px`;
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [activeIndex]);

  const PlusIcon = () => (
    <svg className="w-5 h-5 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  );

  const MinusIcon = () => (
    <svg className="w-5 h-5 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
    </svg>
  );

  return (
    <section className="w-full px-4 py-16 bg-linear-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        {/* Heading with better styling */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our ICSE tuition programs
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {faqData.map((faq, index) => (
            <div 
              key={faq.id}
              className="border-b border-gray-100 last:border-b-0 transition-all duration-300 hover:bg-gray-50"
            >
              {/* FAQ Header */}
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between group"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-content-${faq.id}`}
              >
                <span className="text-xl font-semibold text-gray-800 pr-8 group-hover:text-blue-600 transition-colors duration-200">
                  {faq.question}
                </span>
                <span className={`shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-blue-100 text-blue-600 rotate-180' 
                    : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                }`}>
                  {activeIndex === index ? <MinusIcon /> : <PlusIcon />}
                </span>
              </button>

              {/* FAQ Content */}
              <div
                id={`faq-content-${faq.id}`}
                ref={el => contentRefs.current[index] = el}
                className="transition-all duration-500 ease-in-out overflow-hidden"
              >
                <div className="px-8 pb-6">
                  <div className="w-12 h-1 bg-blue-500 rounded-full mb-4"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;