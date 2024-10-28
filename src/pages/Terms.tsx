import React from 'react';
import { FileText, Shield, Scale } from 'lucide-react';

export default function Terms() {
  return (
    <div className="pt-16">
      <div className="bg-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Terms of Service</h1>
            <p className="mt-4 text-xl text-teal-100">Our commitment to fair and transparent service</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-teal-400/10">
                <FileText className="h-6 w-6 text-teal-400" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-teal-600 mb-2">Clear Terms</h3>
            <p className="text-gray-600">Simple and straightforward policies</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-teal-400/10">
                <Shield className="h-6 w-6 text-teal-400" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-teal-600 mb-2">User Protection</h3>
            <p className="text-gray-600">Safeguarding your rights and privacy</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-teal-400/10">
                <Scale className="h-6 w-6 text-teal-400" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-teal-600 mb-2">Fair Practices</h3>
            <p className="text-gray-600">Balanced rights and responsibilities</p>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Terms Overview</h2>
          <p className="text-gray-600 mb-4">
            These terms of service outline the rules and regulations for the use of goSonic's services.
          </p>
          
          <h3 className="text-xl font-medium text-teal-600 mb-3">Service Usage</h3>
          <p className="text-gray-600 mb-4">
            By accessing and using our services, you agree to be bound by these terms. Our services are available
            only to users who can form legally binding contracts under applicable law.
          </p>

          <h3 className="text-xl font-medium text-teal-600 mb-3">User Responsibilities</h3>
          <p className="text-gray-600 mb-4">
            Users are responsible for maintaining the confidentiality of their account information and
            for all activities that occur under their account.
          </p>

          <h3 className="text-xl font-medium text-teal-600 mb-3">Service Modifications</h3>
          <p className="text-gray-600">
            We reserve the right to modify or discontinue our services at any time, with or without notice.
            We shall not be liable to you or any third party for any modification, suspension, or discontinuance.
          </p>
        </div>
      </div>
    </div>
  );
}