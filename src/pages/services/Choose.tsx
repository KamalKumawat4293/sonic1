import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket, Zap, Clock, Shield, MapPin, CheckCircle } from 'lucide-react';

const serviceTiers = [
  {
    icon: Rocket,
    name: "SonicX",
    time: "10 minutes",
    price: "₹139",
    color: "teal",
    description: "Ultra-fast delivery for urgent needs",
    bestFor: "Time-critical deliveries and emergency supplies",
    features: [
      "10-minute delivery guarantee",
      "Priority routing",
      "Dedicated delivery partner",
      "Real-time tracking",
      "Priority support",
      "Insurance included",
      "Live chat support",
      "Multiple payment options"
    ],
    coverage: ["Mumbai", "Delhi", "Bangalore"]
  },
  {
    icon: Zap,
    name: "Priority",
    time: "4 hours",
    price: "₹89",
    color: "emerald",
    description: "Express delivery for important packages",
    bestFor: "Same-day business deliveries and retail orders",
    features: [
      "4-hour delivery window",
      "Live tracking updates",
      "Dedicated support",
      "Basic insurance",
      "Route optimization",
      "Proof of delivery",
      "Email notifications",
      "Flexible rescheduling"
    ],
    coverage: ["All major cities"]
  },
  {
    icon: Clock,
    name: "Standard",
    time: "Same day",
    price: "₹69",
    color: "cyan",
    description: "Reliable same-day delivery",
    bestFor: "Regular business deliveries and e-commerce",
    features: [
      "Same-day delivery",
      "Regular updates",
      "Customer support",
      "Package protection",
      "Scheduled delivery",
      "Digital POD",
      "SMS updates",
      "Multiple attempts"
    ],
    coverage: ["Pan India"]
  }
];

export default function Choose() {
  const navigate = useNavigate();

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-gray-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Choose Your Service</h1>
            <p className="text-xl text-gray-600">
              Select the perfect delivery speed for your needs
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {serviceTiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div key={tier.name} className="material-card p-8 rounded-xl bg-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-br from-teal-50 to-emerald-50">
                    <Icon className="h-8 w-8 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                    <p className="text-teal-600 font-medium">Delivers in {tier.time}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {tier.price}
                    <span className="text-base font-normal text-gray-500">/delivery</span>
                  </div>
                  <p className="text-gray-600">{tier.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 text-gray-900 font-medium mb-2">
                    <Shield className="h-5 w-5 text-teal-600" />
                    Best For
                  </div>
                  <p className="text-gray-600">{tier.bestFor}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 text-gray-900 font-medium mb-2">
                    <MapPin className="h-5 w-5 text-teal-600" />
                    Coverage
                  </div>
                  <p className="text-gray-600">{tier.coverage.join(", ")}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-center gap-2 text-gray-900 font-medium mb-4">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    Features
                  </div>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <Zap className="h-4 w-4 text-teal-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => navigate('/ship')}
                  className="w-full material-button bg-gradient-to-r from-teal-600 to-emerald-600 text-white p-4 rounded-lg font-medium hover:opacity-90 flex items-center justify-center"
                >
                  Ship with {tier.name}
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-teal-50 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need Help Choosing?
              </h3>
              <p className="text-gray-600 mb-6">
                Our team can help you select the perfect delivery service based on your 
                specific requirements and business needs.
              </p>
              <button className="material-button bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700">
                Contact Support
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