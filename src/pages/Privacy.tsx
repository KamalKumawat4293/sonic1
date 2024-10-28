import React from 'react';
import { Shield, Lock, Eye } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="pt-16">
      <div className="bg-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="mt-4 text-xl text-teal-100">Your privacy is our priority</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-teal-400/10">
                <Shield className="h-6 w-6 text-teal-400" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-teal-600 mb-2">Data Protection</h3>
            <p className="text-gray-600">Your data is encrypted and stored securely</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-teal-400/10">
                <Lock className="h-6 w-6 text-teal-400" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-teal-600 mb-2">Secure Transactions</h3>
            <p className="text-gray-600">All transactions are processed securely</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-teal-400/10">
                <Eye className="h-6 w-6 text-teal-400" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-teal-600 mb-2">Transparency</h3>
            <p className="text-gray-600">Clear information about data usage</p>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Privacy Policy Overview</h2>
          <p className="text-gray-600 mb-4">
            At goSonic, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.
          </p>
          
          <h3 className="text-xl font-medium text-teal-600 mb-3">Information We Collect</h3>
          <p className="text-gray-600 mb-4">
            We collect information that you provide directly to us, including name, contact information, and delivery details.
            We also collect technical data about your device and how you interact with our services.
          </p>

          <h3 className="text-xl font-medium text-teal-600 mb-3">How We Use Your Information</h3>
          <p className="text-gray-600 mb-4">
            We use your information to provide and improve our services, process your transactions, 
            and communicate with you about your deliveries and account.
          </p>

          <h3 className="text-xl font-medium text-teal-600 mb-3">Data Security</h3>
          <p className="text-gray-600">
            We implement appropriate technical and organizational measures to protect your personal information
            against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </div>
      </div>
    </div>
  );
}