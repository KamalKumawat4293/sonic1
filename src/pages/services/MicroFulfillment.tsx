import React from 'react';
import { Store, Map, Box, Zap, ArrowRight } from 'lucide-react';

export default function MicroFulfillment() {
  const features = [
    {
      icon: Store,
      title: "Smart Dark Stores",
      description: "AI-optimized micro-warehouses strategically located for fastest delivery"
    },
    {
      icon: Map,
      title: "Location Intelligence",
      description: "Data-driven placement of fulfillment centers based on demand patterns"
    },
    {
      icon: Box,
      title: "Inventory Optimization",
      description: "Real-time inventory management with predictive stocking"
    },
    {
      icon: Zap,
      title: "Instant Fulfillment",
      description: "10-minute order processing and dispatch capabilities"
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-gray-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Micro-Fulfillment</h1>
            <p className="text-xl text-gray-600">
              Next-generation dark stores powered by AI
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Future of Urban Fulfillment
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our micro-fulfillment centers combine strategic locations with AI-powered 
              inventory management to enable ultra-fast delivery. Located in the heart 
              of high-demand areas, these smart dark stores ensure your products are 
              always close to your customers.
            </p>
            <button className="material-button bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 flex items-center">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-xl blur-xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
              alt="Micro-Fulfillment Center"
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
                Ready to Revolutionize Your Fulfillment?
              </h3>
              <p className="text-gray-600 mb-6">
                Join leading brands using our micro-fulfillment network to deliver 
                products faster than ever before.
              </p>
              <button className="material-button bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700">
                Get Started
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Dark Stores</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">10min</div>
                <div className="text-sm text-gray-600">Processing Time</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Operations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}