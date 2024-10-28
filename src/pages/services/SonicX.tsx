import React from 'react';
import { Zap, Clock, Shield, MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SonicX() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Clock,
      title: "10-Minute Delivery",
      description: "Ultra-fast delivery for urgent needs"
    },
    {
      icon: Shield,
      title: "Premium Protection",
      description: "Enhanced security and insurance"
    },
    {
      icon: MapPin,
      title: "Smart Routing",
      description: "AI-optimized delivery paths"
    },
    {
      icon: Zap,
      title: "Priority Handling",
      description: "VIP treatment for every package"
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-gray-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">SonicX</h1>
            <p className="text-xl text-gray-600">
              Ultra-fast 10-minute delivery service
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Experience Lightning-Fast Delivery
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              SonicX is our premium 10-minute delivery service, designed for 
              businesses that need ultra-fast, reliable delivery solutions. 
              Powered by AI and our extensive network of dark stores.
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
              src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=800&q=80"
              alt="SonicX Delivery"
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
                Ready for Ultra-Fast Delivery?
              </h3>
              <p className="text-gray-600 mb-6">
                Join leading businesses using SonicX for their urgent delivery needs.
              </p>
              <button 
                onClick={() => navigate('/get-started')}
                className="material-button bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700"
              >
                Start with SonicX
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">10min</div>
                <div className="text-sm text-gray-600">Delivery Time</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Availability</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">VIP</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}