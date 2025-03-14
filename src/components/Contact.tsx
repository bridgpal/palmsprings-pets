import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo = ({ icon, title, content }) => {
  return (
    <div className="flex items-start mb-6">
      <div className="mr-4 mt-1">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to experience peace of mind for your property and pets? Get in touch today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Get In Touch</h3>
            
            <ContactInfo 
              icon={<Phone className="h-5 w-5 text-teal-600" />}
              title="Phone"
              content="(760) 555-1234"
            />
            
            <ContactInfo 
              icon={<Mail className="h-5 w-5 text-teal-600" />}
              title="Email"
              content="info@desertoasis-palmsprings.com"
            />
            
            <ContactInfo 
              icon={<MapPin className="h-5 w-5 text-teal-600" />}
              title="Address"
              content="123 Palm Canyon Drive, Palm Springs, CA 92262"
            />
            
            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 mb-4">Service Areas</h4>
              <p className="text-gray-600 mb-2">
                We proudly serve Palm Springs and surrounding areas including:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-gray-600">
                <li>• Palm Desert</li>
                <li>• Rancho Mirage</li>
                <li>• Cathedral City</li>
                <li>• La Quinta</li>
                <li>• Indian Wells</li>
                <li>• Desert Hot Springs</li>
              </ul>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="property-management">Property Management</option>
                  <option value="pet-sitting">Pet Sitting</option>
                  <option value="both">Both Services</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-amber-500 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;