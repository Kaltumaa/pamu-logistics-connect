import { Link } from 'react-router-dom';
import { Truck, Phone, Mail, MapPin, Facebook, Linkedin, MessageCircle, Instagram } from 'lucide-react';

const Footer = () => {
  const services = [
    'Customs Clearance',
    'Freight Forwarding', 
    'Transport Solutions',
    'Motor Vehicle Handling',
    'Conventional Cargo Handling',
    'Import & Export Consultancy'
  ];

  const offices = [
    {
      city: 'Nairobi HQ',
      address: 'Westlands, Nairobi',
      phone: '+254 700 000 000'
    },
    {
      city: 'Mombasa',
      address: 'Shimanzi, Mombasa',
      phone: '+254 700 000 001'
    },
    {
      city: 'Juba',
      address: 'Central Juba, South Sudan',
      phone: '+211 900 000 000'
    }
  ];

  return (
    <footer className="bg-brand-dark text-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-brand-light rounded-lg">
                <Truck className="h-6 w-6 text-brand-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Pamu</span>
                <span className="text-sm text-brand-sky block leading-none">Services Limited</span>
              </div>
            </div>
            <p className="text-brand-sky text-sm leading-relaxed">
              Your trusted logistics partner delivering excellence in customs clearance, 
              freight forwarding, and transport solutions across East Africa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-sky hover:text-brand-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-sky hover:text-brand-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-sky hover:text-brand-white transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-sky hover:text-brand-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/services" 
                    className="text-brand-sky hover:text-brand-white transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-brand-sky hover:text-brand-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-brand-sky hover:text-brand-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-brand-sky hover:text-brand-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-brand-sky hover:text-brand-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              {offices.map((office, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-brand-light" />
                    <span className="text-sm font-medium">{office.city}</span>
                  </div>
                  <p className="text-brand-sky text-xs pl-6">{office.address}</p>
                  <div className="flex items-center space-x-2 pl-6">
                    <Phone className="h-3 w-3 text-brand-light" />
                    <span className="text-brand-sky text-xs">{office.phone}</span>
                  </div>
                </div>
              ))}
              <div className="flex items-center space-x-2 pt-2">
                <Mail className="h-4 w-4 text-brand-light" />
                <span className="text-brand-sky text-sm">info@pamuservices.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-deep mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-brand-sky text-sm">
              © 2024 Pamu Services Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-brand-sky hover:text-brand-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-brand-sky hover:text-brand-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;