import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Truck } from 'lucide-react';

interface CalculationResult {
  monthlySavings: number;
  yearlySavings: number;
  roi: number;
}

export default function RoiCalculator() {
  const [formData, setFormData] = useState({
    deliveriesPerDay: 100,
    averageDeliveryCost: 50,
    averageDistance: 5,
  });

  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculateROI = () => {
    const { deliveriesPerDay, averageDeliveryCost, averageDistance } = formData;
    const currentMonthlyCost = deliveriesPerDay * averageDeliveryCost * 30;
    const goSonicCost = deliveriesPerDay * (averageDeliveryCost * 0.7) * 30; // Assuming 30% cost reduction
    const monthlySavings = currentMonthlyCost - goSonicCost;
    const yearlySavings = monthlySavings * 12;
    const roi = ((yearlySavings - (goSonicCost * 12)) / (goSonicCost * 12)) * 100;

    setResult({
      monthlySavings,
      yearlySavings,
      roi,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  return (
    <div className="pt-16">
      <div className="bg-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">ROI Calculator</h1>
            <p className="mt-4 text-xl text-teal-100">Calculate your potential savings with goSonic</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="material-card p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-teal-600 mb-6">Enter Your Details</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average Deliveries Per Day
                </label>
                <div className="relative">
                  <Truck className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    name="deliveriesPerDay"
                    value={formData.deliveriesPerDay}
                    onChange={handleInputChange}
                    className="pl-10 w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Average Cost Per Delivery (₹)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    name="averageDeliveryCost"
                    value={formData.averageDeliveryCost}
                    onChange={handleInputChange}
                    className="pl-10 w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average Delivery Distance (km)
                </label>
                <div className="relative">
                  <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    name="averageDistance"
                    value={formData.averageDistance}
                    onChange={handleInputChange}
                    className="pl-10 w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
              </div>

              <button
                onClick={calculateROI}
                className="w-full material-button bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center"
              >
                <Calculator className="h-5 w-5 mr-2" />
                Calculate Savings
              </button>
            </div>
          </div>

          {result && (
            <div className="space-y-6">
              <div className="material-card p-6 rounded-xl bg-teal-50">
                <h3 className="text-lg font-medium text-teal-600 mb-2">Monthly Savings</h3>
                <p className="text-3xl font-bold text-teal-700">₹{result.monthlySavings.toLocaleString()}</p>
              </div>

              <div className="material-card p-6 rounded-xl bg-teal-50">
                <h3 className="text-lg font-medium text-teal-600 mb-2">Yearly Savings</h3>
                <p className="text-3xl font-bold text-teal-700">₹{result.yearlySavings.toLocaleString()}</p>
              </div>

              <div className="material-card p-6 rounded-xl bg-teal-50">
                <h3 className="text-lg font-medium text-teal-600 mb-2">Return on Investment</h3>
                <p className="text-3xl font-bold text-teal-700">{result.roi.toFixed(1)}%</p>
              </div>

              <div className="p-6 bg-teal-50 rounded-xl">
                <p className="text-sm text-teal-600">
                  * Calculations are estimates based on average industry data. Actual savings may vary depending on specific business conditions and requirements.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}