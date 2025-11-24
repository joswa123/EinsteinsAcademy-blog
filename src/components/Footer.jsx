import React from 'react';
import logo from "../assets/Logo@4x.png";

const Footer = () => {
  // Logo placeholder - replace with actual logo import
  const LogoPlaceholder = () => (
    <div className="w-48 h-16 bg-gray-200 rounded flex items-center justify-center mb-4">
   
      <a
                  href="/"
                  className="flex items-center shrink-0"
                >
                  <img
                    src={logo}
                    alt="Einstein's Academy"
                    className="h-10 md:h-12 transition-all duration-300"
                  />
                </a>
    </div>
  );

  const SocialIcons = () => (
    <div className="flex space-x-4 mt-6">
      {/* Facebook */}
      <a 
        href="https://www.facebook.com/einsteinsacademy05" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>

      {/* Instagram */}
      <a 
        href="https://www.instagram.com/einsteins_academy_cbe" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.198-1.558-.75-.947-.945-2.156-.535-3.303.41-1.146 1.406-1.981 2.604-2.231 1.198-.25 2.396.191 3.198 1.138.802.947.997 2.156.587 3.302-.41 1.147-1.406 1.982-2.604 2.232-.24.04-.48.06-.712.06-.24 0-.48-.02-.712-.06zm7.718 1.558c-.75.947-1.901 1.558-3.198 1.558-1.297 0-2.448-.611-3.198-1.558-.75-.947-.945-2.156-.535-3.303.41-1.146 1.406-1.981 2.604-2.231 1.198-.25 2.396.191 3.198 1.138.802.947.997 2.156.587 3.302-.41 1.147-1.406 1.982-2.604 2.232-.24.04-.48.06-.712.06-.24 0-.48-.02-.712-.06z"/>
        </svg>
      </a>

      {/* Twitter/X */}
      <a 
        href="https://x.com/academycbe" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>

      {/* LinkedIn */}
      <a 
        href="https://www.linkedin.com/in/einstein-s-academy-cbe-a62b22349/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-white hover:bg-blue-900 transition-colors"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>

      {/* YouTube */}
      <a 
        href="https://youtube.com/@einsteinresearchacademy" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      </a>
    </div>
  );

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1 - About & Logo */}
          <div className="lg:col-span-1">
            <p className="text-gray-300 leading-relaxed mt-4">
              Einstein's Academy is a premier educational institution in Coimbatore, dedicated to 
              nurturing young minds with a blend of innovative teaching and practical learning. 
              With a focus on academic excellence, skill development, and holistic growth, we 
              empower students to achieve their full potential and thrive in a competitive world.
            </p>
          </div>

          {/* Column 2 - Classes */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-400">Classes</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  NEET
                </a>
              </li>
              <li>
                <a 
                  href="/" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  JEE
                </a>
              </li>
              <li>
                <a 
                  href="/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Home Tuition
                </a>
              </li>
              <li>
                <a 
                  href="/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Tuition Centre
                </a>
              </li>
              <li>
                <a 
                  href="/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Tutorial
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Careers
                </a>
              </li>
              <li>
                <a 
                  href="/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-400">CONTACT US</h4>
            
            {/* Head Office */}
            <div className="mb-6">
              <h5 className="font-semibold text-lg mb-3">Head Office</h5>
              <p className="text-gray-300 text-sm leading-relaxed">
                1/100 Kamaraj Street, Pattanam Pudur, Ondipudur (via) Pattanam(Post) 
                Coimbatore 641 016.
              </p>
            </div>

            {/* Branch */}
            <div className="mb-6">
              <h5 className="font-semibold text-lg mb-3">Branch</h5>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                136, Sowdamman Kovil Street, Ondipudur, Coimbatore, 641016
              </p>
              <div className="space-y-2">
                <a 
                  href="tel:+919994240707" 
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Tel: +91 - 9994240707
                </a>
                <a 
                  href="mailto:einsteinsacademycbe@gmail.com" 
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Email: einsteinsacademycbe@gmail.com
                </a>
              </div>
            </div>

       
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Copyright © 2025 EINSTEIN'S ACADEMY | Powered by{' '}
              <a 
                href="/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                SHADOW ARROW
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;