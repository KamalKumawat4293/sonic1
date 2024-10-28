import React from 'react';
import { BookOpen, Calendar, User } from 'lucide-react';

const posts = [
  {
    title: "Revolutionizing Last-Mile Delivery",
    excerpt: "How technology is transforming the delivery landscape in India",
    date: "Mar 15, 2024",
    author: "Team goSonic",
    category: "Industry Insights"
  },
  {
    title: "Sustainable Delivery Solutions",
    excerpt: "Our commitment to reducing carbon footprint in logistics",
    date: "Mar 10, 2024",
    author: "Team goSonic",
    category: "Sustainability"
  },
  {
    title: "The Future of Same-Day Delivery",
    excerpt: "Emerging trends and technologies in quick commerce",
    date: "Mar 5, 2024",
    author: "Team goSonic",
    category: "Technology"
  }
];

export default function Blog() {
  return (
    <div className="pt-16">
      <div className="bg-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Blog</h1>
            <p className="mt-4 text-xl text-teal-100">Latest insights and updates</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.title} className="material-card rounded-xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-teal-400/10"></div>
              <div className="p-6">
                <div className="text-sm text-teal-600 mb-2">{post.category}</div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}