import React from 'react';
import { Clock, TrendingUp, Shield, Truck, HeartHandshake, Zap } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Same-day delivery guaranteed across service areas"
    },
    {
      icon: TrendingUp,
      title: "Cost Effective",
      description: "Competitive pricing with no hidden charges"
    },
    {
      icon: Shield,
      title: "Secure Handling",
      description: "End-to-end package protection and insurance"
    },
    {
      icon: Truck,
      title: "Large Network",
      description: "Extensive fleet network across major cities"
    },
    {
      icon: HeartHandshake,
      title: "Dedicated Support",
      description: "24/7 customer service and delivery partner support"
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Live tracking and instant notifications"
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">Why Choose Us</h1>
            <p className="mt-4 text-xl text-teal-50">Experience the goSonic advantage</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div key={title} className="material-card p-6 rounded-xl">
              <div className="p-3 rounded-full bg-teal-50 w-fit">
                <Icon className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}