import React, { useState } from 'react';
import { Clock, MapPin, Package, Truck } from 'lucide-react';

interface ServiceTiming {
  name: string;
  time: string;
  price: string;
}

const cityZones = {
  "400001": { city: "Mumbai", zone: "A" },
  "400002": { city: "Mumbai", zone: "B" },
  "110001": { city: "Delhi", zone: "A" },
  "110002": { city: "Delhi", zone: "B" }
};

const serviceTimings: Record<string, ServiceTiming[]> = {
  "A-A": [
    { name: "SonicX", time: "10 minutes", price: "₹139" },
    { name: "Priority", time: "2 hours", price: "₹89" },
    { name: "Standard", time: "6 hours", price: "₹69" }
  ],
  "A-B": [
    { name: "Priority", time: "4 hours", price: "₹99" },
    { name: "Standard", time: "12 hours", price: "₹79" }
  ],
  "B-B": [
    { name: "Priority", time: "6 hours", price: "₹109" },
    { name: "Standard", time: "24 hours", price: "₹89" }
  ]
};

export default function TatCalculator() {
  const [pickupPincode, setPickupPincode] = useState('');
  const [deliveryPincode, setDeliveryPincode] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState<ServiceTiming[] | null>(null);

  const calculateTAT = () => {
    const pickup = cityZones[pickupPincode];
    const delivery = cityZones[deliveryPincode];

    if (!pickup || !delivery) {
      return;
    }

    const zoneKey = `${pickup.zone}-${delivery.zone}`;
    setResult(serviceTimings[zoneKey] || []);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">TAT Calculator</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
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
              placeholder="Enter pincode"
              maxLength={6}
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
              placeholder="Enter pincode"
              maxLength={6}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Package Weight (kg)
          </label>
          <div className="relative">
            <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="pl-10 w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
              placeholder="Enter weight"
            />
          </div>
        </div>
      </div>

      <button
        onClick={calculateTAT}
        className="w-full material-button bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 mb-8"
      >
        Calculate TAT
      </button>

      {result && (
        <div className="grid md:grid-cols-3 gap-6">
          {result.map((service) => (
            <div key={service.name} className="material-card p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white">
              <div className="flex items-center gap-3 mb-4">
                {service.name === 'SonicX' ? (
                  <Zap className="h-6 w-6 text-teal-600" />
                ) : service.name === 'Priority' ? (
                  <Clock className="h-6 w-6 text-teal-600" />
                ) : (
                  <Truck className="h-6 w-6 text-teal-600" />
                )}
                <h3 className="text-xl font-medium text-gray-900">{service.name}</h3>
              </div>
              <div className="space-y-2">
                <div>
                  <div className="text-sm text-gray-500">Delivery Time</div>
                  <div className="text-lg font-medium text-teal-600">{service.time}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Price</div>
                  <div className="text-lg font-medium text-gray-900">{service.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}