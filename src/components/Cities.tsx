import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, MapPin } from 'lucide-react';

const cities = [
  {
    name: "Mumbai",
    services: ["SonicX", "Priority", "Standard"],
    coverage: "98%",
    image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=300&q=80",
    path: "/cities/mumbai"
  },
  {
    name: "Delhi",
    services: ["SonicX", "Priority", "Standard"],
    coverage: "95%",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=300&q=80",
    path: "/cities/delhi"
  },
  {
    name: "Bangalore",
    services: ["SonicX", "Priority", "Standard"],
    coverage: "96%",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=300&q=80",
    path: "/cities/bangalore"
  },
  {
    name: "Hyderabad",
    services: ["Priority", "Standard"],
    coverage: "92%",
    image: "https://images.unsplash.com/photo-1626014303757-6366ef55c4ab?auto=format&fit=crop&w=300&q=80",
    path: "/cities/hyderabad"
  },
  {
    name: "Chennai",
    services: ["Priority", "Standard"],
    coverage: "90%",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=300&q=80",
    path: "/cities/chennai"
  },
  {
    name: "Kolkata",
    services: ["Priority", "Standard"],
    coverage: "88%",
    image: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=300&q=80",
    path: "/cities/kolkata"
  }
];

export default function Cities() {
  const navigate = useNavigate();

  return (
    <section id="cities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Cities We Cover</h2>
          <p className="mt-4 text-xl text-gray-600">
            Expanding our intelligent delivery network across India
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city) => (
            <div 
              key={city.name} 
              onClick={() => navigate(city.path)}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <div className="absolute inset-0">
                <img 
                  src={city.image} 
                  alt={city.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
              </div>
              <div className="relative p-6 h-full flex flex-col justify-end text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5" />
                  <h3 className="text-2xl font-bold">{city.name}</h3>
                </div>
                <div className="flex items-center gap-2 text-teal-300 mb-2">
                  <Building2 className="h-4 w-4" />
                  <span>{city.coverage} area coverage</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {city.services.map((service) => (
                    <span 
                      key={service}
                      className={`px-3 py-1 rounded-full text-sm ${
                        service === 'SonicX' ? 'bg-teal-500' :
                        service === 'Priority' ? 'bg-emerald-500' :
                        'bg-cyan-500'
                      }`}
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}