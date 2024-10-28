import React, { useState } from 'react';
import { Search, Package, MapPin, Clock, Truck } from 'lucide-react';

export default function Track() {
  const [trackingId, setTrackingId] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTracking(true);
  };

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-gray-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Track Your Package</h1>
            <form onSubmit={handleTrack} className="relative">
              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="Enter tracking number (e.g., GS-123456)"
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-0 text-lg pr-12"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {isTracking && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="material-card p-6 rounded-xl bg-white mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">GS-123456</h2>
                <p className="text-teal-600">SonicX Delivery</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Estimated Delivery</p>
                <p className="text-lg font-medium text-gray-900">Today, 2:30 PM</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              <div className="space-y-8">
                <div className="relative flex items-center gap-4">
                  <div className="z-10 w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center">
                    <Package className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Package Picked Up</p>
                    <p className="text-sm text-gray-500">Mumbai Central Hub</p>
                    <p className="text-sm text-gray-500">Today, 1:30 PM</p>
                  </div>
                </div>
                
                <div className="relative flex items-center gap-4">
                  <div className="z-10 w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center">
                    <Truck className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">In Transit</p>
                    <p className="text-sm text-gray-500">On vehicle for delivery</p>
                    <p className="text-sm text-gray-500">Today, 2:00 PM</p>
                  </div>
                </div>
                
                <div className="relative flex items-center gap-4">
                  <div className="z-10 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-gray-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-400">Out for Delivery</p>
                    <p className="text-sm text-gray-400">Andheri East, Mumbai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="material-card p-6 rounded-xl bg-white">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Delivery Details</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-teal-600" />
                  <div>
                    <p className="text-sm text-gray-500">Delivery Address</p>
                    <p className="text-gray-900">123 Business Park, Andheri East</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-teal-600" />
                  <div>
                    <p className="text-sm text-gray-500">Time Slot</p>
                    <p className="text-gray-900">2:00 PM - 3:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="material-card p-6 rounded-xl bg-white">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Package Information</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Weight</p>
                  <p className="text-gray-900">2.5 kg</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Dimensions</p>
                  <p className="text-gray-900">30 × 20 × 10 cm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}