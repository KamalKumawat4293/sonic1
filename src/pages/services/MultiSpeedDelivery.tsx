import React from 'react';
import { Zap, Clock, Rocket, ArrowRight } from 'lucide-react';

const deliveryTiers = [
  {
    icon: Rocket,
    name: "SonicX",
    time: "10 minutes",
    price: "₹139",
    description: "Ultra-fast delivery for urgent needs",
    features: [
      "10-minute delivery guarantee",
      "Real-time tracking",
      "Priority support",
      "Insurance included"
    ]
  },
  {
    icon: Zap,
    name: "Priority",
    time: "4 hours",
    price: "₹89",
    description: "Express delivery for important packages",
    features: [
      "4-hour delivery window",
      "Live tracking updates",
      "Dedicated support",
      "Basic insurance"
    ]
  },
  {
    icon: Clock,
    name: "Standard",
    time: "Same day",
    price: "₹69",
    description: "Reliable same-day delivery",
    features: [
      "Same-day delivery",
      "Regular updates",
      "Customer support",
      "Package protection"
    ]
  }
];

export default function MultiSpeedDelivery() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-gray-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Multi-Speed Delivery</h1>
            <p className="text-xl text-gray-600">
              Choose the perfect delivery speed for your needs
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {deliveryTiers.map(({ icon: Icon, name, time, price, description, features }) => (
            <div key={name} className="material-card p-6 rounded-xl bg-white">
              <div className="p-3 rounded-full bg-teal-50 w-fit mb-4">
                <Icon className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
              <div className="text-teal-600 font-medium mb-2">{time}</div>
              <p className="text-gray-600 mb-4">{description}</p>
              <div className="text-3xl font-bold text-gray-900 mb-6">
                {price}
                <span className="text-base font-normal text-gray-500">/delivery</span>
              </div>
              <ul className="space-y-3 mb-6">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <Zap className="h-4 w-4 text-teal-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full material-button bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700">
                Choose {name}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-teal-50 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Not Sure Which Speed to Choose?
              </h3>
              <p className="text-gray-600 mb-6">
                Our team can help you select the perfect delivery speed based on your needs.
                Get in touch for a personalized recommendation.
              </p>
              <button className="material-button bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 flex items-center">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">On-Time Delivery</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">50K+</div>
                <div className="text-sm text-gray-600">Daily Deliveries</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">10min</div>
                <div className="text-sm text-gray-600">Fastest Delivery</div>
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