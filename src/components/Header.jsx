import { useState } from "react";
import logo from "../assets/Logo@4x.png";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "NEET/JEE",
      href: "#",
      submenu: [
        { name: "NEET", href: "/neet" },
        { name: "JEE", href: "/jee" },
      ],
    },
    {
      name: "Tuition Centre",
      href: "/tuition-centre",
      submenu: [
        { name: "State Board Tuition", href: "/state-board" },
        { name: "CBSE Tuition", href: "/cbse" },
        { name: "ICSE Tuition", href: "/icse" },
        { name: "IGCSE Tuition", href: "/igcse" },
      ],
    },
    {
      name: "Home Tuition",
      href: "/home-tuition",
      submenu: [
        { name: "State Board Home Tuition", href: "/state-board-home-tuition" },
        { name: "CBSE Home Tuition", href: "/cbse-home-tuition" },
        { name: "ICSE Home Tuition", href: "/icse-home-tuition" },
        { name: "IGCSE Home Tuition", href: "/igcse-home-tuition" },
      ],
    },
    {
      name: "Tutorial",
      href: "/tutorial",
      submenu: [
        { name: "10th Standard", href: "/10th-standard" },
        { name: "11th Standard", href: "/11th-standard" },
        { name: "12th Standard", href: "/12th-standard" },
      ],
    },
    { name: "Trust", href: "/trust" },
    { name: "Contact Us", href: "/contact" },
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const closeAll = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center flex-shrink-0"
            >
              <img
                src={logo}
                alt="Einstein's Academy"
                className="h-10 md:h-12 transition-all duration-300"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <a
                    href={item.href}
                    className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 group-hover:bg-blue-50 rounded-lg"
                  >
                    {item.name}
                    {item.submenu && (
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </a>

                  {/* Desktop Dropdown */}
                  {item.submenu && (
                    <div className="absolute left-0 top-full mt-1 w-56 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 text-sm font-medium"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="lg:hidden flex flex-col w-6 h-6 justify-between items-center relative z-60"
            >
              <span
                className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeAll}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <a
            href="/"
            className="flex items-center"
            onClick={closeAll}
          >
            <img
              src={logo}
              alt="Einstein's Academy"
              className="h-10"
            />
          </a>
          <button
            onClick={closeAll}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="py-4">
            {menuItems.map((item, index) => (
              <li key={index} className="border-b border-gray-100 last:border-b-0">
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex items-center justify-between w-full px-6 py-4 text-left text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium"
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Mobile Dropdown */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeDropdown === index ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <ul className="bg-gray-50 py-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subItem.href}
                              onClick={closeAll}
                              className="block px-10 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-100 transition-colors duration-200 text-sm font-medium"
                            >
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    onClick={closeAll}
                    className="block px-6 py-4 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Info in Mobile Sidebar */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="space-y-3 text-sm">
            <p className="font-semibold text-gray-800">Contact Info</p>
            <p className="text-gray-600">+91 - 9994240707</p>
            <p className="text-gray-600">einsteinsacademycbe@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  );
}
