import React from 'react';
import { Newspaper, Award, Download } from 'lucide-react';

const pressReleases = [
  {
    title: "goSonic Expands to 10 New Cities",
    date: "Mar 15, 2024",
    excerpt: "Leading same-day delivery platform announces major expansion across India"
  },
  {
    title: "Partnership with Major Retailers",
    date: "Mar 1, 2024",
    excerpt: "Strategic partnerships to revolutionize retail delivery experience"
  },
  {
    title: "Launch of Sustainable Delivery Initiative",
    date: "Feb 15, 2024",
    excerpt: "Commitment to reduce carbon footprint in last-mile delivery"
  }
];

export default function Press() {
  return (
    <div className="pt-16">
      <div className="bg-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Press Room</h1>
            <p className="mt-4 text-xl text-teal-100">Latest news and media resources</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="material-card p-6 rounded-xl text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-teal-400/10">
                <Newspaper className="h-8 w-8 text-teal-400" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-teal-600 mb-2">Press Releases</h3>
            <p className="text-gray-600">Latest announcements and updates</p>
          </div>
          <div className="material-card p-6 rounded-xl text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-teal-400/10">
                <Award className="h-8 w-8 text-teal-400" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-teal-600 mb-2">Awards</h3>
            <p className="text-gray-600">Recognition and achievements</p>
          </div>
          <div className="material-card p-6 rounded-xl text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-teal-400/10">
                <Download className="h-8 w-8 text-teal-400" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-teal-600 mb-2">Media Kit</h3>
            <p className="text-gray-600">Download brand assets and guidelines</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-teal-600 mb-8">Recent Press Releases</h2>
        <div className="space-y-6">
          {pressReleases.map((release) => (
            <div key={release.title} className="material-card p-6 rounded-xl">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium text-teal-600">{release.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{release.date}</p>
                  <p className="text-gray-600 mt-2">{release.excerpt}</p>
                </div>
                <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:opacity-90">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}