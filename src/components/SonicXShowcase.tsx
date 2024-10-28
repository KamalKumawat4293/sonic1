import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, Clock, Shield, ArrowRight } from 'lucide-react';

export default function SonicXShowcase() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Zap className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white">SonicX</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ultra-Fast 10-Minute Delivery
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Experience lightning-fast delivery powered by AI and our network of dark stores.
              Available in select zones across major cities.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Clock className="h-6 w-6 text-white mb-2" />
                <div className="text-2xl font-bold text-white">10min</div>
                <div className="text-white/80">Delivery Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Shield className="h-6 w-6 text-white mb-2" />
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-white/80">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Zap className="h-6 w-6 text-white mb-2" />
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-white/80">Availability</div>
              </div>
            </div>
            <button
              onClick={() => navigate('/services/sonicx')}
              className="material-button inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-600 rounded-lg hover:bg-white/90"
            >
              Learn More <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-xl blur-xl opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1586528116493-da8b772f0c47?auto=format&fit=crop&w=800&q=80"
              alt="SonicX Delivery"
              className="relative rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}