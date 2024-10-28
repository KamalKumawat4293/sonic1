import React from 'react';
import { Brain, Zap, Network, Shield } from 'lucide-react';

export default function Innovation() {
  const innovations = [
    {
      icon: Brain,
      title: "AI-Powered Routing",
      description: "Machine learning algorithms optimize delivery routes in real-time for maximum efficiency"
    },
    {
      icon: Zap,
      title: "Predictive Analytics",
      description: "Smart forecasting helps anticipate demand and optimize resource allocation"
    },
    {
      icon: Network,
      title: "Smart Network",
      description: "Dynamic network adaptation based on real-time conditions and demand patterns"
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "End-to-end supply chain visibility with immutable tracking records"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Innovation at Scale</h2>
          <p className="mt-4 text-xl text-gray-600">
            Cutting-edge technology powering next-generation logistics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {innovations.map(({ icon: Icon, title, description }) => (
            <div key={title} className="material-card p-6 rounded-xl bg-white group hover:bg-gradient-to-br hover:from-teal-500 hover:to-emerald-500 transition-colors duration-300">
              <div className="p-3 rounded-full bg-teal-50 w-fit group-hover:bg-white/10">
                <Icon className="h-6 w-6 text-teal-600 group-hover:text-white" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900 group-hover:text-white">{title}</h3>
              <p className="mt-2 text-gray-600 group-hover:text-white/90">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}