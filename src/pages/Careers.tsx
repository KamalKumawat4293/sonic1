import React from 'react';
import { Briefcase, MapPin, Users } from 'lucide-react';

const jobs = [
  {
    title: "Senior Software Engineer",
    location: "Mumbai",
    type: "Full-time",
    department: "Engineering"
  },
  {
    title: "Operations Manager",
    location: "Delhi",
    type: "Full-time",
    department: "Operations"
  },
  {
    title: "Customer Success Manager",
    location: "Bangalore",
    type: "Full-time",
    department: "Customer Support"
  }
];

export default function Careers() {
  return (
    <div className="pt-16">
      <div className="bg-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Join Our Team</h1>
            <p className="mt-4 text-xl text-teal-100">Build the future of delivery with us</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-teal-400/10">
                <Users className="h-8 w-8 text-teal-400" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-teal-600 mb-2">Great Culture</h3>
            <p className="text-gray-600">Work with passionate people who share your vision</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-teal-400/10">
                <Briefcase className="h-8 w-8 text-teal-400" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-teal-600 mb-2">Growth Opportunities</h3>
            <p className="text-gray-600">Accelerate your career with continuous learning</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-teal-400/10">
                <MapPin className="h-8 w-8 text-teal-400" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-teal-600 mb-2">Multiple Locations</h3>
            <p className="text-gray-600">Work from our offices across major cities</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-teal-600 mb-8">Open Positions</h2>
        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={job.title} className="material-card p-6 rounded-xl">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium text-teal-600">{job.title}</h3>
                  <div className="mt-2 flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="mr-4">{job.location}</span>
                    <Briefcase className="h-4 w-4 mr-1" />
                    <span>{job.department}</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:opacity-90">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}