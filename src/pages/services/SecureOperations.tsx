import React from 'react';
import { Shield, Lock, FileCheck, Bell, ArrowRight } from 'lucide-react';

export default function SecureOperations() {
  const features = [
    {
      icon: Shield,
      title: "End-to-End Security",
      description: "Complete protection throughout the delivery journey"
    },
    {
      icon: Lock,
      title: "Blockchain Tracking",
      description: "Immutable record of every delivery milestone"
    },
    {
      icon: FileCheck,
      title: "Compliance",
      description: "Meeting all regulatory requirements"
    },
    {
      icon: Bell,
      title: "Real-time Alerts",
      description: "Instant notifications for any security events"
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-gray-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Secure Operations</h1>
            <p className="text-xl text-gray-600">
              State-of-the-art security for your supply chain
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Blockchain-Secured Supply Chain
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our secure operations platform leverages blockchain technology and 
              advanced security protocols to ensure complete transparency and 
              protection throughout your supply chain.
            </p>
            <button className="material-button bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 flex items-center">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-xl blur-xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
              alt="Secure Operations"
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
                Ready to Secure Your Supply Chain?
              </h3>
              <p className="text-gray-600 mb-6">
                Join leading businesses that trust our secure operations platform 
                for their logistics needs.
              </p>
              <button className="material-button bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700">
                Get Started
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Secure Tracking</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">0</div>
                <div className="text-sm text-gray-600">Security Breaches</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Monitoring</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">ISO</div>
                <div className="text-sm text-gray-600">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}