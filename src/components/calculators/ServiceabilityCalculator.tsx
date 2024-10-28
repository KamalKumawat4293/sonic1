import React, { useState } from 'react';
import { MapPin, CheckCircle, XCircle } from 'lucide-react';

// Mock pincode data - in production this would come from an API
const validPincodes = {
  "400001": { city: "Mumbai", services: ["SonicX", "Priority", "Standard"] },
  "400002": { city: "Mumbai", services: ["Priority", "Standard"] },
  "110001": { city: "Delhi", services: ["SonicX", "Priority", "Standard"] },
  "110002": { city: "Delhi", services: ["Priority", "Standard"] },
  "560001": { city: "Bangalore", services: ["SonicX", "Priority", "Standard"] },
  "560002": { city: "Bangalore", services: ["Priority", "Standard"] }
};

export default function ServiceabilityCalculator() {
  const [pickupPincode, setPickupPincode] = useState('');
  const [deliveryPincode, setDeliveryPincode] = useState('');
  const [result, setResult] = useState<{
    isAvailable: boolean;
    pickupCity?: string;
    deliveryCity?: string;
    availableServices?: string[];
    message?: string;
  } | null>(null);

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

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Check Serviceability</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
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
      </div>

      <button
        onClick={validatePincodes}
        className="w-full material-button bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 mb-8"
      >
        Check Availability
      </button>

      {result && (
        <div className={`p-6 rounded-lg ${
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
                <div className="mt-4">
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
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}