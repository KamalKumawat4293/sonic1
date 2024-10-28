import React from 'react';
import { Brain, Cpu, Network, Zap, BarChart3, ArrowRight } from 'lucide-react';

export default function SmartSupplyChain() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Optimization",
      description: "Machine learning algorithms optimize routes and resource allocation in real-time"
    },
    {
      icon: Cpu,
      title: "Automated Decision Making",
      description: "Smart systems that make instant decisions for efficient operations"
    },
    {
      icon: Network,
      title: "Network Intelligence",
      description: "Dynamic network adaptation based on real-time conditions"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive insights into supply chain performance"
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-gray-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Smart Supply Chain</h1>
            <p className="text-xl text-gray-600">
              Transform your logistics with AI-powered intelligence and automation
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Next-Generation Supply Chain Intelligence
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our smart supply chain solution leverages cutting-edge artificial intelligence 
              to optimize every aspect of your logistics operations. From predictive analytics 
              to automated decision-making, we're revolutionizing how businesses manage their 
              supply chains.
            </p>
            <button className="material-button bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 flex items-center">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-xl blur-xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
              alt="Smart Supply Chain"
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
                Ready to Transform Your Supply Chain?
              </h3>
              <p className="text-gray-600 mb-6">
                Join leading businesses that have revolutionized their operations with our 
                smart supply chain solution. Get started today and experience the future 
                of logistics.
              </p>
              <button className="material-button bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700">
                Schedule a Demo
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">30%</div>
                <div className="text-sm text-gray-600">Cost Reduction</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">50%</div>
                <div className="text-sm text-gray-600">Faster Delivery</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">99%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Real-time Tracking</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}