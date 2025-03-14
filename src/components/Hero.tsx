import React from 'react';
import { PawPrint, Home } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-teal-500 to-amber-400 py-20 md:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1540321975033-2fff3a5a3945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Palm Springs" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center items-center mb-6 space-x-2">
            <Home className="h-10 w-10 text-white" />
            <PawPrint className="h-10 w-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Palm Springs Property Management & Pet Sitting!!!
          </h1>
          
          <p className="text-xl text-white mb-8">
            Professional care for your home and furry friends in the heart of Palm Springs
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="bg-white text-teal-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
            >
              Book Now
            </a>
            <a 
              href="#services" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;