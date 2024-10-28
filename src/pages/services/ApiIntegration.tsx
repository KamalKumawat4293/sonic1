import React from 'react';
import { Code, Database, Lock, Zap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ApiIntegration() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Code,
      title: "Easy Integration",
      description: "Simple REST API with comprehensive documentation"
    },
    {
      icon: Database,
      title: "Real-time Data",
      description: "Live tracking and delivery updates"
    },
    {
      icon: Lock,
      title: "Secure Access",
      description: "Enterprise-grade security protocols"
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "High-availability API endpoints"
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-gray-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">API Integration</h1>
            <p className="text-xl text-gray-600">
              Seamlessly integrate our delivery services into your platform
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Powerful API for Developers
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our comprehensive API allows you to integrate our delivery services 
              directly into your platform. With detailed documentation and 
              developer support, getting started is easy.
            </p>
            <button 
              onClick={() => navigate('/get-started')}
              className="material-button bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 flex items-center"
            >
              View Documentation <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-xl blur-xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
              alt="API Integration"
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
                Ready to Integrate?
              </h3>
              <p className="text-gray-600 mb-6">
                Get started with our API and transform your delivery operations.
              </p>
              <button 
                onClick={() => navigate('/get-started')}
                className="material-button bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700"
              >
                Get API Access
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">&lt;100ms</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">REST</div>
                <div className="text-sm text-gray-600">API</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}