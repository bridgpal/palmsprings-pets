import React, { useState } from 'react';
import { PawPrint, Home, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <Home className="h-6 w-6 text-teal-600" />
            <PawPrint className="h-6 w-6 text-amber-500 -ml-1" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-amber-500 bg-clip-text text-transparent">
            Desert Oasis
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-teal-600 font-medium">Home</a>
          <a href="#services" className="text-gray-700 hover:text-teal-600 font-medium">Services</a>
          <a href="#testimonials" className="text-gray-700 hover:text-teal-600 font-medium">Testimonials</a>
          <a href="#contact" className="text-gray-700 hover:text-teal-600 font-medium">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-gray-700 hover:text-teal-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#services" 
              className="text-gray-700 hover:text-teal-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-teal-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-teal-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;