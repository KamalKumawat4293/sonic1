import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, Clock, Shield, ArrowRight } from 'lucide-react';

export default function Solutions() {
  const navigate = useNavigate();

  const solutions = [
    {
      title: "SonicX",
      subtitle: "Darkstores & Hyperlocal",
      description: "Ultra-fast 10-minute delivery powered by AI and strategically placed dark stores",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      features: [
        "10-minute delivery guarantee",
        "AI-powered dark stores",
        "Real-time inventory optimization",
        "Hyperlocal fulfillment",
        "Premium delivery experience",
        "24/7 priority support"
      ],
      stats: [
        { value: "10min", label: "Delivery Time" },
        { value: "99.9%", label: "Success Rate" },
        { value: "24/7", label: "Availability" }
      ],
      cta: "Learn About SonicX",
      path: "/services/sonicx"
    },
    {
      title: "Same Day Delivery",
      subtitle: "Nationwide Coverage",
      description: "Reliable same-day delivery service across major cities with real-time tracking",
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=800&q=80",
      features: [
        "Same-day delivery guarantee",
        "Real-time tracking",
        "Automated dispatch",
        "Route optimization",
        "Proof of delivery",
        "Insurance coverage"
      ],
      stats: [
        { value: "24hrs", label: "Delivery Time" },
        { value: "98%", label: "On-Time Rate" },
        { value: "100%", label: "Coverage" }
      ],
      cta: "Explore Same Day",
      path: "/services/same-day"
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">Delivery Solutions</h1>
            <p className="mt-4 text-xl text-teal-50">
              Choose the perfect delivery solution for your business
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <div key={solution.title} className="material-card overflow-hidden rounded-xl bg-white group hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <div className="absolute inset-0">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-2xl font-bold">{solution.title}</h2>
                  <p className="text-white/90">{solution.subtitle}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-6">{solution.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {solution.stats.map((stat) => (
                    <div key={stat.label} className="text-center p-3 rounded-lg bg-gray-50">
                      <div className="text-xl font-bold text-teal-600">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="p-1 rounded-full bg-teal-50">
                        <Shield className="h-4 w-4 text-teal-600" />
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => navigate(solution.path)}
                  className="w-full material-button bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-3 rounded-lg hover:opacity-90 flex items-center justify-center group"
                >
                  {solution.cta}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-gray-50 via-white to-teal-50 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Not Sure Which Solution to Choose?
              </h3>
              <p className="text-gray-600 mb-6">
                Our logistics experts can help you select the perfect delivery solution 
                based on your specific business needs.
              </p>
              <button 
                onClick={() => navigate('/get-started')}
                className="material-button bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700"
              >
                Schedule Consultation
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">50K+</div>
                <div className="text-sm text-gray-600">Daily Deliveries</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">45%</div>
                <div className="text-sm text-gray-600">Cost Savings</div>
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