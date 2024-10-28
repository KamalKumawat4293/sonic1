import React from 'react';
import { Rocket, Package, Zap, CheckCircle } from 'lucide-react';

export default function GetStarted() {
  const steps = [
    {
      icon: Package,
      title: "Create Account",
      description: "Sign up for free and complete your business profile"
    },
    {
      icon: Zap,
      title: "Set Up Integration",
      description: "Connect your e-commerce platform or use our API"
    },
    {
      icon: CheckCircle,
      title: "Start Delivering",
      description: "Begin processing deliveries with our network"
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Get Started with goSonic</h1>
            <p className="mt-4 text-xl text-teal-100">Quick setup, seamless integration</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-teal-600 mb-8">How It Works</h2>
            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-400/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-teal-600">
                        <span className="text-teal-400">{index + 1}. </span>
                        {step.title}
                      </h3>
                      <p className="mt-2 text-gray-600">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="material-card p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-teal-600 mb-6">Create Your Account</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <button className="w-full material-button bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center">
                <Rocket className="h-5 w-5 mr-2" />
                Get Started Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}