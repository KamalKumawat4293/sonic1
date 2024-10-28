import React, { useState } from 'react';
import { Calculator, Clock, MapPin, TrendingUp } from 'lucide-react';
import ServiceabilityCalculator from '../components/calculators/ServiceabilityCalculator';
import TatCalculator from '../components/calculators/TatCalculator';
import RoiCalculatorWidget from '../components/calculators/RoiCalculatorWidget';

export default function Calculators() {
  const [activeTab, setActiveTab] = useState('serviceability');

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">Delivery Calculators</h1>
            <p className="mt-4 text-xl text-teal-50">
              Calculate delivery costs, time, and ROI
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            onClick={() => setActiveTab('serviceability')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'serviceability'
                ? 'bg-teal-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <MapPin className="h-5 w-5" />
            Check Serviceability
          </button>
          <button
            onClick={() => setActiveTab('tat')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'tat'
                ? 'bg-teal-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Clock className="h-5 w-5" />
            TAT Calculator
          </button>
          <button
            onClick={() => setActiveTab('roi')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'roi'
                ? 'bg-teal-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <TrendingUp className="h-5 w-5" />
            ROI Calculator
          </button>
        </div>

        <div className="material-card p-8 rounded-xl">
          {activeTab === 'serviceability' && <ServiceabilityCalculator />}
          {activeTab === 'tat' && <TatCalculator />}
          {activeTab === 'roi' && <RoiCalculatorWidget />}
        </div>
      </div>
    </div>
  );
}