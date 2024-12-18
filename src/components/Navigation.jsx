import React, { useState } from 'react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-[90%] mx-auto top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md shadow-lg mt-2">
      <div className="w-[90%] mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-blue-600">
              YourLogo
            </a>
          </div>

          {/* Center: Navigation Links (Desktop) */}
          <div className="hidden md:flex md:flex-1 md:justify-center md:items-center md:space-x-4">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('cta')} 
              className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              CTA
            </button>
          </div>

          {/* Right: CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('cta')}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Get Started
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/70 backdrop-blur-md">
          <div className="w-[80%] mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('cta')} 
              className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              CTA
            </button>
            <button 
              onClick={() => scrollToSection('cta')}
              className="bg-blue-500 text-white block px-3 py-2 rounded-md text-base font-medium w-full text-center hover:bg-blue-600"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
