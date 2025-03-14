import React from 'react';
import { Home, PawPrint, Shield, Calendar, Sparkles, Users, DollarSign, Star } from 'lucide-react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-teal-100 to-amber-100">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const propertyServices = [
    {
      icon: <Shield className="h-6 w-6 text-teal-600" />,
      title: "Property Security",
      description: "Regular checks to ensure your property remains secure while you're away."
    },
    {
      icon: <Calendar className="h-6 w-6 text-teal-600" />,
      title: "Rental Management",
      description: "Full-service vacation rental management including guest communication and cleaning."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-teal-600" />,
      title: "Cleaning Services",
      description: "Professional cleaning to keep your property pristine for your return or guests."
    },
    {
      icon: <DollarSign className="h-6 w-6 text-teal-600" />,
      title: "Bill Payment",
      description: "Handling utility bills and other payments while you're away from your property."
    }
  ];

  const petServices = [
    {
      icon: <PawPrint className="h-6 w-6 text-amber-500" />,
      title: "In-Home Pet Sitting",
      description: "Caring for your pets in the comfort of their own home while you're away."
    },
    {
      icon: <Users className="h-6 w-6 text-amber-500" />,
      title: "Dog Walking",
      description: "Regular walks to keep your dogs happy, healthy, and exercised."
    },
    {
      icon: <Star className="h-6 w-6 text-amber-500" />,
      title: "Pet Taxi",
      description: "Transportation to vet appointments, grooming, or other pet services."
    },
    {
      icon: <Home className="h-6 w-6 text-amber-500" />,
      title: "Overnight Care",
      description: "Extended stays to provide round-the-clock care for your beloved pets."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive care for your Palm Springs property and pets
          </p>
        </div>

        <div className="mb-20">
          <div className="flex items-center justify-center mb-10">
            <Home className="h-8 w-8 text-teal-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-800">Property Management</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertyServices.map((service, index) => (
              <ServiceCard 
                key={`property-${index}`}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center mb-10">
            <PawPrint className="h-8 w-8 text-amber-500 mr-3" />
            <h3 className="text-2xl font-bold text-gray-800">Pet Sitting</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {petServices.map((service, index) => (
              <ServiceCard 
                key={`pet-${index}`}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;