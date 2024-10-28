import React from 'react';
import { HelpCircle, Phone, Mail, MessageSquare } from 'lucide-react';

export default function Help() {
  const faqs = [
    {
      question: "How do I track my delivery?",
      answer: "You can track your delivery in real-time through our platform using the tracking ID provided when you book the delivery."
    },
    {
      question: "What are your delivery hours?",
      answer: "We operate 24/7 across all major cities. However, delivery timings may vary based on your location and the type of service selected."
    },
    {
      question: "How do I become a delivery partner?",
      answer: "Visit our Partners page to learn about the requirements and application process for becoming a delivery partner."
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Help Center</h1>
            <p className="mt-4 text-xl text-teal-100">We're here to help you</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="material-card p-6 rounded-xl text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-teal-400/10">
                <Phone className="h-6 w-6 text-teal-400" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-teal-600 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">24/7 Support Available</p>
            <a href="tel:1800-123-4567" className="text-teal-600 hover:text-teal-700">1800-123-4567</a>
          </div>
          
          <div className="material-card p-6 rounded-xl text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-teal-400/10">
                <Mail className="h-6 w-6 text-teal-400" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-teal-600 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">Get Response within 24 hrs</p>
            <a href="mailto:help@gosonic.in" className="text-teal-600 hover:text-teal-700">help@gosonic.in</a>
          </div>
          
          <div className="material-card p-6 rounded-xl text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-teal-400/10">
                <MessageSquare className="h-6 w-6 text-teal-400" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-teal-600 mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">Instant Support</p>
            <button className="text-teal-600 hover:text-teal-700">Start Chat</button>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="material-card p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-teal-400/10">
                    <HelpCircle className="h-5 w-5 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-teal-600 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}