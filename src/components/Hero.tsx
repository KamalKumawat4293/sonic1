import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, ArrowRight, Shield, Network, Package, MapPin } from 'lucide-react';

export default function Hero() {
  const navigate = useNavigate();
  const [currentTagline, setCurrentTagline] = useState(0);

  const taglines = [
    {
      main: "Same-Day",
      highlight: "Nationwide",
      description: "Guaranteed delivery across major cities"
    },
    {
      main: "Ultra-Fast",
      highlight: "10-Min Delivery",
      description: "Lightning-quick service in select zones"
    },
    {
      main: "Real-Time",
      highlight: "Tracking",
      description: "End-to-end visibility and package protection"
    },
    {
      main: "Future of",
      highlight: "Supply Chain",
      description: "AI-powered delivery infrastructure"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-white via-teal-50/30 to-teal-100/30 pt-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-[0.02] bg-cover bg-center"></div>
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-slow-spin">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-200/20 to-emerald-200/20 blur-3xl transform rotate-12"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative">
        <div className="text-center mb-8 md:mb-16 relative">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-50 to-emerald-50 backdrop-blur-sm mb-6 border border-teal-100">
            <Shield className="h-5 w-5 text-teal-600 mr-2" />
            <span className="text-sm text-teal-800 font-medium">India's Most Reliable Delivery Network</span>
          </div>
          
          <div className="min-h-[12rem] md:min-h-[10rem] mb-8 flex flex-col justify-center">
            <div className="transition-all duration-500 transform">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                {taglines[currentTagline].main}{' '}
                <div className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-teal-600 to-emerald-600 text-transparent bg-clip-text">
                    {taglines[currentTagline].highlight}
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-200/20 to-emerald-200/20 blur-lg"></div>
                </div>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                {taglines[currentTagline].description}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/track')}
              className="group relative px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-teal-200 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center justify-center">
                Track Package 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button 
              onClick={() => navigate('/ship')}
              className="group relative px-8 py-4 bg-white rounded-xl text-gray-800 font-medium hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-100"
            >
              Ship Now <Zap className="inline-block ml-2 h-5 w-5 text-teal-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}