import React from 'react';
import { Building, Globe, Shield, Users, ArrowRight } from 'lucide-react';

export default function EnterpriseSolutions() {
  const features = [
    {
      icon: Globe,
      title: "Global Network",
      description: "Seamless integration with international supply chains"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced security protocols and data protection"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "24/7 enterprise-grade customer service"
    },
    {
      icon: Building,
      title: "Custom Solutions",
      description: "Tailored logistics solutions for your business"
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-gray-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Enterprise Solutions</h1>
            <p className="text-xl text-gray-600">
              Comprehensive logistics solutions for large-scale operations
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Transform Your Enterprise Logistics
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our enterprise solutions provide end-to-end supply chain optimization 
              for large-scale operations. From custom integrations to dedicated 
              support, we help enterprises streamline their logistics operations.
            </p>
            <button className="material-button bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 flex items-center">
              Contact Enterprise Sales <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-xl blur-xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
              alt="Enterprise Solutions"
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
                Enterprise-Grade Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                Join leading enterprises that have transformed their logistics 
                operations with our comprehensive solutions.
              </p>
              <button className="material-button bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700">
                Schedule a Demo
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">100+</div>
                <div className="text-sm text-gray-600">Enterprise Clients</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">Global</div>
                <div className="text-sm text-gray-600">Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}