import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Store, 
  Package, 
  ShoppingCart, 
  Zap, 
  Heart,
  Shield,
  CheckCircle,
  Truck,
  BarChart,
  Clock,
  ShoppingBag,
  Box
} from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface Solution {
  name: string;
  description: string;
  features: string[];
}

interface Stat {
  value: string;
  label: string;
}

interface IndustryData {
  name: string;
  icon: React.ElementType;
  description: string;
  image: string;
  benefits: string[];
  features: Feature[];
  stats: Stat[];
  solutions: Solution[];
}

interface IndustryPageProps {
  industryId: string;
}

const industryData: Record<string, IndustryData> = {
  d2c: {
    name: "D2C Brands",
    icon: ShoppingBag,
    description: "Elevate your direct-to-consumer experience with lightning-fast delivery",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Same-day delivery across major cities",
      "Real-time order tracking",
      "Seamless integration with your platform",
      "Automated dispatch system",
      "Custom branded experience",
      "Returns management"
    ],
    features: [
      {
        icon: Zap,
        title: "Quick Commerce",
        description: "4-hour and same-day delivery options"
      },
      {
        icon: Box,
        title: "Smart Packaging",
        description: "Brand-focused packaging solutions"
      },
      {
        icon: BarChart,
        title: "Analytics",
        description: "Detailed delivery performance insights"
      },
      {
        icon: Shield,
        title: "Secure Handling",
        description: "End-to-end package protection"
      }
    ],
    stats: [
      { value: "4hrs", label: "Express Delivery" },
      { value: "99.9%", label: "Success Rate" },
      { value: "45%", label: "Cost Savings" },
      { value: "24/7", label: "Support" }
    ],
    solutions: [
      {
        name: "D2C Express",
        description: "Premium same-day delivery solution",
        features: [
          "4-hour delivery option",
          "Live order tracking",
          "Branded tracking page",
          "Priority support"
        ]
      },
      {
        name: "D2C Standard",
        description: "Cost-effective delivery solution",
        features: [
          "Next-day delivery",
          "Real-time updates",
          "Returns handling",
          "Analytics dashboard"
        ]
      }
    ]
  },
  fmcg: {
    name: "FMCG",
    icon: Box,
    description: "Streamline your FMCG distribution with our advanced delivery network",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Nationwide distribution network",
      "Temperature-controlled delivery",
      "Batch tracking system",
      "Inventory management",
      "Last-mile optimization",
      "Real-time stock updates"
    ],
    features: [
      {
        icon: Truck,
        title: "Distribution",
        description: "Extensive delivery network coverage"
      },
      {
        icon: Clock,
        title: "Time Management",
        description: "Scheduled and on-demand delivery"
      },
      {
        icon: BarChart,
        title: "Analytics",
        description: "Supply chain optimization insights"
      },
      {
        icon: Shield,
        title: "Quality Control",
        description: "Temperature and condition monitoring"
      }
    ],
    stats: [
      { value: "98%", label: "On-Time Delivery" },
      { value: "40%", label: "Cost Reduction" },
      { value: "2hrs", label: "Response Time" },
      { value: "100%", label: "Coverage" }
    ],
    solutions: [
      {
        name: "FMCG Prime",
        description: "Enterprise distribution solution",
        features: [
          "Nationwide coverage",
          "Temperature monitoring",
          "Batch tracking",
          "Analytics dashboard"
        ]
      },
      {
        name: "Quick Commerce",
        description: "Urban quick delivery solution",
        features: [
          "2-hour delivery",
          "Real-time tracking",
          "Inventory sync",
          "Route optimization"
        ]
      }
    ]
  },
  ecommerce: {
    name: "E-commerce",
    icon: ShoppingCart,
    description: "Scale your e-commerce business with our integrated delivery solutions",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Same-day delivery options",
      "API integration",
      "Automated dispatch",
      "Real-time tracking",
      "Returns handling",
      "COD management"
    ],
    features: [
      {
        icon: Zap,
        title: "Fast Delivery",
        description: "Multiple delivery speed options"
      },
      {
        icon: Shield,
        title: "Secure Handling",
        description: "Package protection and insurance"
      },
      {
        icon: BarChart,
        title: "Analytics",
        description: "Performance and cost insights"
      },
      {
        icon: Box,
        title: "Returns",
        description: "Efficient returns management"
      }
    ],
    stats: [
      { value: "2hrs", label: "Fastest Delivery" },
      { value: "99%", label: "Success Rate" },
      { value: "35%", label: "Cost Savings" },
      { value: "24/7", label: "Support" }
    ],
    solutions: [
      {
        name: "E-com Express",
        description: "Premium delivery solution",
        features: [
          "Same-day delivery",
          "Live tracking",
          "API integration",
          "Priority support"
        ]
      },
      {
        name: "E-com Standard",
        description: "Standard delivery service",
        features: [
          "Next-day delivery",
          "Tracking updates",
          "COD handling",
          "Returns management"
        ]
      }
    ]
  }
};

const IndustryPage: React.FC<IndustryPageProps> = ({ industryId }) => {
  const industry = industryData[industryId];

  if (!industry) {
    return (
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Industry Not Found</h1>
          <p className="text-gray-600 mb-8">The industry you're looking for doesn't exist or hasn't been added yet.</p>
          <Link
            to="/industries"
            className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
          >
            View All Industries
          </Link>
        </div>
      </div>
    );
  }

  const Icon = industry.icon;

  return (
    <div className="pt-16">
      <div 
        className="bg-cover bg-center relative py-20"
        style={{ backgroundImage: `url(${industry.image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold">{industry.name}</h1>
            <p className="mt-4 text-xl text-gray-200">{industry.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {industry.stats.map((stat, index) => (
            <div key={index} className="material-card p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Benefits</h2>
            <div className="space-y-4">
              {industry.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Features</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {industry.features.map((feature, index) => {
                const FeatureIcon = feature.icon;
                return (
                  <div key={index} className="material-card p-4 rounded-xl">
                    <div className="p-2 rounded-full bg-teal-50 w-fit">
                      <FeatureIcon className="h-5 w-5 text-teal-600" />
                    </div>
                    <h3 className="mt-3 font-medium text-gray-900">{feature.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {industry.solutions.map((solution, index) => (
              <div key={index} className="material-card p-6 rounded-xl">
                <h3 className="text-xl font-medium text-gray-900 mb-2">{solution.name}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/get-started"
            className="material-button inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
          >
            Get Started
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustryPage;