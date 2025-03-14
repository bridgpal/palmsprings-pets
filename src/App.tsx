import React from 'react';
import { PawPrint, Home, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Calendar, Shield, Star, Users, DollarSign, Sparkles } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;