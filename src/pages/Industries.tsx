import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, 
  Package,
  ShoppingCart,
  Store,
  Heart
} from 'lucide-react';

export default function Industries() {
  const navigate = useNavigate();
  
  const industries = [
    {
      icon: ShoppingCart,
      title: "D2C Brands",
      description: "End-to-end delivery infrastructure for direct-to-consumer brands",
      path: "/industries/d2c"
    },
    {
      icon: Package,
      title: "FMCG",
      description: "Fast-moving consumer goods distribution and logistics",
      path: "/industries/fmcg"
    },
    {
      icon: ShoppingBag,
      title: "E-commerce",
      description: "Multi-speed delivery solutions for online retailers",
      path: "/industries/ecommerce"
    },
    {
      icon: Store,
      title: "Retail",
      description: "Store-to-door and omnichannel delivery services",
      path: "/industries/retail"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Critical medical supplies and pharmacy deliveries",
      path: "/industries/healthcare"
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">Industries We Serve</h1>
            <p className="mt-4 text-xl text-teal-50">
              Tailored supply chain solutions for every sector
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map(({ icon: Icon, title, description, path }) => (
            <div 
              key={title} 
              onClick={() => navigate(path)}
              className="material-card p-6 rounded-xl bg-white hover:bg-teal-50 transition-colors group cursor-pointer"
            >
              <div className="p-3 rounded-full bg-teal-50 w-fit group-hover:bg-white transition-colors">
                <Icon className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{description}</p>
              <div className="mt-4 flex items-center text-teal-600 font-medium">
                Learn more
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-teal-50 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Don't See Your Industry?
              </h3>
              <p className="text-gray-600 mb-6">
                We work with businesses across all sectors. Contact us to discuss your 
                specific supply chain needs and how we can help transform your operations.
              </p>
              <button className="material-button bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700">
                Contact Us
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">5+</div>
                <div className="text-sm text-gray-600">Industries Served</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">1000+</div>
                <div className="text-sm text-gray-600">Active Clients</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">99%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
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