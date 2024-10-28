import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, CheckCircle, XCircle, ArrowRight } from 'lucide-react';

// Mock pincode data - in production this would come from an API
const validPincodes = {
  "400001": { city: "Mumbai", services: ["SonicX", "Priority", "Standard"] },
  "400002": { city: "Mumbai", services: ["Priority", "Standard"] },
  "110001": { city: "Delhi", services: ["SonicX", "Priority", "Standard"] },
  "110002": { city: "Delhi", services: ["Priority", "Standard"] },
  "560001": { city: "Bangalore", services: ["SonicX", "Priority", "Standard"] },
  "560002": { city: "Bangalore", services: ["Priority", "Standard"] }
};

export default function Coverage() {
  const navigate = useNavigate();
  const [pickupPincode, setPickupPincode] = useState('');
  const [deliveryPincode, setDeliveryPincode] = useState('');
  const [result, setResult] = useState<{
    isAvailable: boolean;
    pickupCity?: string;
    deliveryCity?: string;
    availableServices?: string[];
    message?: string;
  } | null>(null);

  const features = [
    "Same-day delivery across all major cities",
    "2-hour delivery in select zones",
    "Real-time tracking and notifications",
    "Dedicated delivery partners",
    "24/7 customer support",
    "Secure package handling"
  ];

  const validatePincodes = () => {
    const pickup = validPincodes[pickupPincode];
    const delivery = validPincodes[deliveryPincode];

    if (!pickup && !delivery) {
      setResult({
        isAvailable: false,
        message: "Service not available in these areas yet"
      });
      return;
    }

    if (!pickup) {
      setResult({
        isAvailable: false,
        message: "Pickup location not serviceable yet"
      });
      return;
    }

    if (!delivery) {
      setResult({
        isAvailable: false,
        message: "Delivery location not serviceable yet"
      });
      return;
    }

    // Find common services between pickup and delivery locations
    const commonServices = pickup.services.filter(service => 
      delivery.services.includes(service)
    );

    setResult({
      isAvailable: commonServices.length > 0,
      pickupCity: pickup.city,
      deliveryCity: delivery.city,
      availableServices: commonServices,
      message: commonServices.length > 0 
        ? "Service available!" 
        : "No common services available between these locations"
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validatePincodes();
  };

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">Coverage Area</h1>
            <p className="mt-4 text-xl text-teal-50">Check if we deliver to your area</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Service Features</h2>
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-400" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="material-card p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Check Serviceability</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pickup Pincode
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={pickupPincode}
                    onChange={(e) => setPickupPincode(e.target.value)}
                    className="pl-10 w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                    placeholder="Enter 6-digit pincode"
                    maxLength={6}
                    pattern="\d{6}"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Pincode
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={deliveryPincode}
                    onChange={(e) => setDeliveryPincode(e.target.value)}
                    className="pl-10 w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                    placeholder="Enter 6-digit pincode"
                    maxLength={6}
                    pattern="\d{6}"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full material-button bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 flex items-center justify-center"
              >
                Check Availability
              </button>
            </form>

            {result && (
              <div className="mt-6">
                <div className={`p-4 rounded-lg ${
                  result.isAvailable ? 'bg-teal-50' : 'bg-red-50'
                }`}>
                  <div className="flex items-start gap-3">
                    {result.isAvailable ? (
                      <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className={`font-medium ${
                        result.isAvailable ? 'text-teal-800' : 'text-red-800'
                      }`}>
                        {result.message}
                      </p>
                      {result.isAvailable && result.availableServices && (
                        <div className="mt-3">
                          <p className="text-sm text-teal-600 mb-2">Available Services:</p>
                          <div className="flex flex-wrap gap-2">
                            {result.availableServices.map(service => (
                              <span 
                                key={service}
                                className="px-3 py-1 bg-white rounded-full text-sm text-teal-600 border border-teal-200"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                          <button
                            onClick={() => navigate('/services/choose')}
                            className="mt-4 text-teal-600 font-medium flex items-center hover:text-teal-700"
                          >
                            Choose Service <ArrowRight className="ml-1 h-4 w-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}