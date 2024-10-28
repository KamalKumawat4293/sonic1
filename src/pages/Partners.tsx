import React from 'react';
import { HandshakeIcon, TruckIcon, BarChart3Icon } from 'lucide-react';

export default function Partners() {
  return (
    <div className="pt-16">
      <div className="bg-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Partner With Us</h1>
            <p className="mt-4 text-xl text-teal-100">Join our growing network of delivery partners</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="material-card p-6 rounded-xl text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-teal-400/10">
                <HandshakeIcon className="h-8 w-8 text-teal-400" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-teal-600 mb-2">Flexible Partnership</h3>
            <p className="text-gray-600">Choose your working hours and delivery areas</p>
          </div>
          <div className="material-card p-6 rounded-xl text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-teal-400/10">
                <TruckIcon className="h-8 w-8 text-teal-400" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-teal-600 mb-2">Regular Income</h3>
            <p className="text-gray-600">Competitive rates and incentives</p>
          </div>
          <div className="material-card p-6 rounded-xl text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-teal-400/10">
                <BarChart3Icon className="h-8 w-8 text-teal-400" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-teal-600 mb-2">Growth Support</h3>
            <p className="text-gray-600">Training and performance analytics</p>
          </div>
        </div>

        <div className="material-card p-8 rounded-xl">
          <h2 className="text-2xl font-semibold text-teal-600 mb-6">Become a Partner</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
                <select className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500">
                  <option>Two Wheeler</option>
                  <option>Three Wheeler</option>
                  <option>Four Wheeler</option>
                </select>
              </div>
            </div>
            <button className="w-full md:w-auto px-8 py-3 bg-teal-600 text-white rounded-lg hover:opacity-90">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}