import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, Clock, Shield, ArrowRight } from 'lucide-react';

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Zap,
      name: "SonicX",
      description: "Ultra-fast 10-minute delivery powered by AI and dark stores",
      features: [
        "10-minute delivery guarantee",
        "Real-time tracking",
        "Priority support",
        "Insurance included"
      ],
      stats: [
        { value: "10min", label: "Delivery Time" },
        { value: "99.9%", label: "Success Rate" },
        { value: "24/7", label: "Support" }
      ],
      cta: "Learn About SonicX",
      path: "/services/sonicx",
      gradient: "from-teal-500 to-emerald-500"
    },
    {
      icon: Clock,
      name: "Same Day Delivery",
      description: "Reliable nationwide delivery within 24 hours",
      features: [
        "Same-day delivery guarantee",
        "Live tracking updates",
        "Proof of delivery",
        "Package protection"
      ],
      stats: [
        { value: "24hrs", label: "Delivery Time" },
        { value: "98%", label: "On-Time Rate" },
        { value: "100%", label: "Coverage" }
      ],
      cta: "Explore Same Day",
      path: "/services/same-day",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Delivery Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect delivery speed for your business
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.name}
                className="material-card overflow-hidden rounded-xl bg-white group hover:shadow-xl transition-shadow"
              >
                <div className={`p-8 bg-gradient-to-br ${service.gradient}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-white/10">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                  </div>
                  <p className="text-lg text-white/90 mb-6">{service.description}</p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {service.stats.map((stat) => (
                      <div key={stat.label} className="text-center p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                        <div className="text-xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-white/80">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-teal-600" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => navigate(service.path)}
                    className="w-full material-button bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-3 rounded-lg hover:opacity-90 flex items-center justify-center group"
                  >
                    {service.cta}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => navigate('/solutions')}
            className="material-button inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-xl hover:opacity-90"
          >
            View All Solutions
            <ArrowRight className="h-5 w-5" />
          </button>
          <p className="mt-4 text-sm text-gray-500">
            Explore our complete range of delivery solutions
          </p>
        </div>
      </div>
    </section>
  );
}