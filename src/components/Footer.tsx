import React from 'react';
import { PawPrint, Home, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                <Home className="h-6 w-6 text-teal-400" />
                <PawPrint className="h-6 w-6 text-amber-400 -ml-1" />
              </div>
              <span className="text-xl font-bold text-white">Desert Oasis</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional property management and pet sitting services in Palm Springs and surrounding areas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Property Management</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Vacation Rental Management</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Pet Sitting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Dog Walking</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Property Security</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <address className="not-italic text-gray-400 space-y-2">
              <p>123 Palm Canyon Drive</p>
              <p>Palm Springs, CA 92262</p>
              <p>Phone: (760) 555-1234</p>
              <p>Email: info@desertoasis-palmsprings.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} Desert Oasis Property Management & Pet Sitting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;