import React from 'react';
import { Users, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16">
      <div className="bg-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className="mt-4 text-xl text-teal-100">Building the future of delivery</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-teal-400/10">
                <Users className="h-8 w-8 text-teal-400" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-teal-600 mb-2">Our Team</h3>
            <p className="text-gray-600">A dedicated team of professionals working to revolutionize delivery services</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-teal-400/10">
                <Target className="h-8 w-8 text-teal-400" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-teal-600 mb-2">Our Mission</h3>
            <p className="text-gray-600">To make same-day delivery accessible and efficient for businesses of all sizes</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-teal-400/10">
                <Award className="h-8 w-8 text-teal-400" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-teal-600 mb-2">Our Values</h3>
            <p className="text-gray-600">Innovation, reliability, and customer satisfaction drive everything we do</p>
          </div>
        </div>

        <div className="mt-16">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2024, goSonic emerged from a simple vision: to transform the way businesses handle same-day deliveries. 
              What started as a small operation in Mumbai has now grown into a nationwide network serving thousands of businesses across India.
            </p>
            <p className="text-gray-600">
              Today, we're proud to be at the forefront of delivery innovation, combining cutting-edge technology with 
              reliable service to provide the fastest, most efficient delivery solutions in the industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}