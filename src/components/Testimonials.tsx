import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "COO at TrendCart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      quote: "SonicX has transformed our delivery operations. The 10-minute delivery promise has given us a significant competitive advantage."
    },
    {
      name: "Rajesh Kumar",
      role: "Founder at QuickMart",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      quote: "The AI-powered routing and real-time tracking have reduced our delivery costs by 40% while improving customer satisfaction."
    },
    {
      name: "Anita Desai",
      role: "VP Operations at FreshDaily",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
      quote: "goSonic's enterprise solutions have helped us scale our operations across multiple cities without compromising on quality."
    }
  ];

  const clients = [
    "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1560472355-536de3962604?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1560472355-536de3962605?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1560472355-536de3962606?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1560472355-536de3962607?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1560472355-536de3962608?auto=format&fit=crop&w=200&q=80"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Trusted by Industry Leaders</h2>
          <p className="mt-4 text-xl text-gray-600">
            Powering deliveries for India's fastest-growing businesses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="material-card p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-medium text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-8">Trusted By</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {clients.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-8 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}