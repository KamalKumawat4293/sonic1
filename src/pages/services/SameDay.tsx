import React from 'react';
import { Clock, Package, MapPin, Shield, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SameDay() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Clock,
      title: "Same Day Delivery",
      description: "Guaranteed delivery within 24 hours"
    },
    {
      icon: Package,
      title: "Package Protection",
      description: "Full insurance coverage for your shipments"
    },
    {
      icon: MapPin,
      title: "Wide Coverage",
      description: "Available across all major cities"
    },
    {
      icon: Shield,
      title: "Secure Handling",
      description: "Professional care for your packages"
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-gray-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Same Day Delivery</h1>
            <p className="text-xl text-gray-600">
              Reliable and efficient delivery within 24 hours
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Fast, Reliable Same-Day Delivery
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our same-day delivery service ensures your packages reach their destination 
              within 24 hours. Perfect for businesses that need reliable, quick delivery 
              solutions.
            </p>
            <button 
              onClick={() => navigate('/get-started')}
              className="material-button bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 flex items-center"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-xl blur-xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
              alt="Same Day Delivery"
              className="relative rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="material-card p-6 rounded-xl bg-white">
              <div className="p-3 rounded-full bg-teal-50 w-fit mb-4">
                <Icon className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-teal-50 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                Experience the convenience of same-day delivery. Sign up now and 
                transform your delivery operations.
              </p>
              <button 
                onClick={() => navigate('/get-started')}
                className="material-button bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700"
              >
                Start Shipping
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">24h</div>
                <div className="text-sm text-gray-600">Delivery Time</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Coverage</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}