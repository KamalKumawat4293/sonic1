import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, Menu, X, Network, Globe } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Coverage", path: "/coverage" },
    { name: "Benefits", path: "/benefits" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Industries", path: "/industries" }
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full blur-sm opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center justify-center">
                  <Zap className="h-8 w-8 text-teal-600" strokeWidth={2.5} />
                  <Globe className="h-4 w-4 text-emerald-500 absolute -top-1 -right-1 animate-pulse" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">go<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Sonic</span></span>
                <span className="text-xs text-gray-500 block -mt-1">Supply Chain Intelligence</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => navigate('/track')}
              className="ml-4 px-6 py-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Track Package
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => {
                navigate('/track');
                setIsOpen(false);
              }}
              className="w-full mt-2 px-3 py-2 rounded-lg bg-gradient-to-r from-teal-600 to-emerald-600 text-white hover:opacity-90"
            >
              Track Package
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}