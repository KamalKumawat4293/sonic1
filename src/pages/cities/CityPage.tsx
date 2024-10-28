import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Package, Users, Building2, ArrowRight } from 'lucide-react';

interface CityData {
  name: string;
  image: string;
  coverage: string;
  services: {
    name: string;
    time: string;
    price: string;
    features: string[];
  }[];
  hubs: number;
  partners: number;
  deliveries: string;
}

const cityData: Record<string, CityData> = {
  mumbai: {
    name: "Mumbai",
    image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1200&q=80",
    coverage: "98%",
    services: [
      {
        name: "SonicX",
        time: "10 minutes",
        price: "₹139",
        features: ["Ultra-fast delivery", "Live tracking", "Priority support"]
      },
      {
        name: "Priority",
        time: "4 hours",
        price: "₹89",
        features: ["Express delivery", "Real-time updates", "Insurance included"]
      },
      {
        name: "Standard",
        time: "Same day",
        price: "₹69",
        features: ["Scheduled delivery", "Package protection", "Standard support"]
      }
    ],
    hubs: 8,
    partners: 5000,
    deliveries: "20K+"
  },
  delhi: {
    name: "Delhi",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
    coverage: "95%",
    services: [
      {
        name: "SonicX",
        time: "10 minutes",
        price: "₹139",
        features: ["Ultra-fast delivery", "Live tracking", "Priority support"]
      },
      {
        name: "Priority",
        time: "4 hours",
        price: "₹89",
        features: ["Express delivery", "Real-time updates", "Insurance included"]
      },
      {
        name: "Standard",
        time: "Same day",
        price: "₹69",
        features: ["Scheduled delivery", "Package protection", "Standard support"]
      }
    ],
    hubs: 7,
    partners: 4500,
    deliveries: "18K+"
  },
  bangalore: {
    name: "Bangalore",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    coverage: "96%",
    services: [
      {
        name: "SonicX",
        time: "10 minutes",
        price: "₹139",
        features: ["Ultra-fast delivery", "Live tracking", "Priority support"]
      },
      {
        name: "Priority",
        time: "4 hours",
        price: "₹89",
        features: ["Express delivery", "Real-time updates", "Insurance included"]
      },
      {
        name: "Standard",
        time: "Same day",
        price: "₹69",
        features: ["Scheduled delivery", "Package protection", "Standard support"]
      }
    ],
    hubs: 6,
    partners: 4000,
    deliveries: "15K+"
  },
  hyderabad: {
    name: "Hyderabad",
    image: "https://images.unsplash.com/photo-1626014303757-6366ef55c4ab?auto=format&fit=crop&w=1200&q=80",
    coverage: "92%",
    services: [
      {
        name: "Priority",
        time: "4 hours",
        price: "₹89",
        features: ["Express delivery", "Real-time updates", "Insurance included"]
      },
      {
        name: "Standard",
        time: "Same day",
        price: "₹69",
        features: ["Scheduled delivery", "Package protection", "Standard support"]
      }
    ],
    hubs: 6,
    partners: 3500,
    deliveries: "12K+"
  },
  chennai: {
    name: "Chennai",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    coverage: "90%",
    services: [
      {
        name: "Priority",
        time: "4 hours",
        price: "₹89",
        features: ["Express delivery", "Real-time updates", "Insurance included"]
      },
      {
        name: "Standard",
        time: "Same day",
        price: "₹69",
        features: ["Scheduled delivery", "Package protection", "Standard support"]
      }
    ],
    hubs: 5,
    partners: 3000,
    deliveries: "10K+"
  },
  kolkata: {
    name: "Kolkata",
    image: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80",
    coverage: "88%",
    services: [
      {
        name: "Priority",
        time: "4 hours",
        price: "₹89",
        features: ["Express delivery", "Real-time updates", "Insurance included"]
      },
      {
        name: "Standard",
        time: "Same day",
        price: "₹69",
        features: ["Scheduled delivery", "Package protection", "Standard support"]
      }
    ],
    hubs: 4,
    partners: 2500,
    deliveries: "8K+"
  }
};

interface CityPageProps {
  cityId: string;
}

export default function CityPage({ cityId }: CityPageProps) {
  const navigate = useNavigate();
  const city = cityData[cityId];

  if (!city) {
    return <div>City not found</div>;
  }

  return (
    <div className="pt-16">
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img 
            src={city.image} 
            alt={city.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-16">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">{city.name}</h1>
            <p className="text-xl text-teal-300">{city.coverage} area coverage</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="material-card p-6 rounded-xl text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-teal-50">
                <Building2 className="h-6 w-6 text-teal-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">{city.hubs}</div>
            <div className="text-gray-600">Delivery Hubs</div>
          </div>
          
          <div className="material-card p-6 rounded-xl text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-teal-50">
                <Users className="h-6 w-6 text-teal-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">{city.partners}</div>
            <div className="text-gray-600">Delivery Partners</div>
          </div>
          
          <div className="material-card p-6 rounded-xl text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-teal-50">
                <Package className="h-6 w-6 text-teal-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">{city.deliveries}</div>
            <div className="text-gray-600">Daily Deliveries</div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-8">Available Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {city.services.map((service) => (
            <div key={service.name} className="material-card p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
              <div className="text-teal-600 font-medium mb-4">Delivers in {service.time}</div>
              <div className="text-2xl font-bold text-gray-900 mb-4">
                {service.price}
                <span className="text-base font-normal text-gray-500">/delivery</span>
              </div>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 text-teal-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => navigate('/services/choose')}
                className="w-full material-button bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 flex items-center justify-center"
              >
                Choose {service.name} <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-teal-50 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                Experience the fastest delivery service in {city.name}. Sign up now 
                and transform your logistics operations.
              </p>
              <button 
                onClick={() => navigate('/get-started')}
                className="material-button bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700"
              >
                Get Started
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-xl blur-xl opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                alt="Delivery Hub"
                className="relative rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}