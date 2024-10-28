import React from 'react';
import { PackageSearch, Truck, MapPin, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: PackageSearch,
      title: "Book a Delivery",
      description: "Enter pickup and delivery details through our platform"
    },
    {
      icon: Truck,
      title: "Pickup",
      description: "Our delivery partner collects the package from your location"
    },
    {
      icon: MapPin,
      title: "Track",
      description: "Monitor your delivery in real-time through our platform"
    },
    {
      icon: CheckCircle,
      title: "Delivery",
      description: "Package is delivered safely to the destination"
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">How It Works</h1>
            <p className="mt-4 text-xl text-teal-50">Simple, fast, and efficient delivery process</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className="material-card p-6 rounded-xl text-center">
              <div className="flex justify-center">
                <div className="p-3 rounded-full bg-teal-50 w-fit">
                  <Icon className="h-6 w-6 text-teal-600" />
                </div>
              </div>
              <div className="mt-4 text-xl font-medium text-gray-900">
                <span className="text-teal-600">{index + 1}. </span>
                {title}
              </div>
              <p className="mt-2 text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}