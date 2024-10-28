import React, { useState } from 'react';
import { MapPin, Package, Truck, ArrowRight } from 'lucide-react';

export default function Ship() {
  const [step, setStep] = useState(1);

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-gray-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Ship Now</h1>
            <p className="text-xl text-gray-600">Fast, reliable delivery at your fingertips</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between mb-8">
          {[
            { icon: MapPin, label: "Addresses" },
            { icon: Package, label: "Package Details" },
            { icon: Truck, label: "Service Selection" }
          ].map((item, index) => {
            const Icon = item.icon;
            const stepNumber = index + 1;
            return (
              <div key={item.label} className="flex items-center">
                <div className={`flex items-center ${index !== 0 ? 'flex-1' : ''}`}>
                  {index !== 0 && (
                    <div className={`flex-1 h-0.5 ${step > index ? 'bg-teal-600' : 'bg-gray-200'}`}></div>
                  )}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step > stepNumber ? 'bg-teal-600 text-white' :
                    step === stepNumber ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  {index !== 2 && (
                    <div className={`flex-1 h-0.5 ${step > stepNumber ? 'bg-teal-600' : 'bg-gray-200'}`}></div>
                  )}
                </div>
                <span className={`ml-3 ${step === stepNumber ? 'text-teal-600 font-medium' : 'text-gray-500'}`}>
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="material-card p-8 rounded-xl bg-white">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Pickup Address</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="rounded-lg border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="rounded-lg border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                  <input
                    type="text"
                    placeholder="Address Line 1"
                    className="rounded-lg border-gray-200 focus:border-teal-500 focus:ring-teal-500 md:col-span-2"
                  />
                  <input
                    type="text"
                    placeholder="Pincode"
                    className="rounded-lg border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="rounded-lg border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Delivery Address</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Recipient's Name"
                    className="rounded-lg border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                  <input
                    type="tel"
                    placeholder="Recipient's Phone"
                    className="rounded-lg border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                  <input
                    type="text"
                    placeholder="Address Line 1"
                    className="rounded-lg border-gray-200 focus:border-teal-500 focus:ring-teal-500 md:col-span-2"
                  />
                  <input
                    type="text"
                    placeholder="Pincode"
                    className="rounded-lg border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="rounded-lg border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-end">
            <button
              onClick={() => setStep(step + 1)}
              className="material-button bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 flex items-center"
            >
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}