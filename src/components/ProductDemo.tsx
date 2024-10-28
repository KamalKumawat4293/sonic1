import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, Clock, MapPin, Package, User, Phone, BarChart3, Smartphone, Calendar } from 'lucide-react';

export default function ProductDemo() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Enterprise-Grade Delivery Platform</h2>
          <p className="mt-4 text-xl text-gray-600">
            Powering next-generation logistics for industry leaders
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-xl blur-xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                alt="Analytics Dashboard"
                className="relative rounded-xl shadow-lg"
              />
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Control Center</h3>
              <p className="text-gray-600 mb-6">
                Advanced analytics and machine learning algorithms optimize your entire supply chain.
                Get predictive insights, real-time fleet management, and automated decision-making.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-600">Predictive Analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-600">Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-600">Real-time Monitoring</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-xl blur-xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                alt="Supply Chain Analytics"
                className="relative rounded-xl shadow-lg"
              />
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Supply Chain Intelligence</h3>
              <p className="text-gray-600">
                End-to-end visibility with predictive analytics for inventory, demand forecasting,
                and supply chain optimization.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Premium Customer Experience</h2>
            <p className="mt-4 text-xl text-gray-600">
              Deliver exceptional service with real-time tracking and updates
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="material-card p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Estimated Arrival</div>
                  <div className="text-2xl font-bold text-gray-900">12 mins away</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 mb-1">Order ID</div>
                  <div className="text-lg font-medium text-teal-600">#GS-123456</div>
                </div>
              </div>

              <div className="relative mb-8">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <div className="space-y-8">
                  <div className="relative flex items-center gap-4">
                    <div className="z-10 w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center">
                      <Package className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Package Picked Up</div>
                      <div className="text-sm text-gray-500">11:30 AM • Mumbai Central Hub</div>
                    </div>
                  </div>

                  <div className="relative flex items-center gap-4">
                    <div className="z-10 w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">On the Way</div>
                      <div className="text-sm text-gray-500">11:45 AM • 3.2 km away</div>
                    </div>
                  </div>

                  <div className="relative flex items-center gap-4">
                    <div className="z-10 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <Package className="h-4 w-4 text-gray-500" />
                    </div>
                    <div className="text-gray-500">
                      <div className="font-medium">Arriving Soon</div>
                      <div className="text-sm">Expected by 12:00 PM • Andheri East</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center">
                    <User className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Rahul Kumar</div>
                    <div className="text-sm text-gray-500">Elite Delivery Partner • 4.9 ★</div>
                  </div>
                  <button className="ml-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-50 text-teal-600">
                    <Phone className="h-4 w-4" />
                    <span>Contact</span>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Enterprise Features</h3>
              <div className="space-y-6 text-gray-600">
                <p>
                  Premium delivery experience with enterprise-grade features:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-teal-600" />
                    <span>AI-powered ETA predictions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-teal-600" />
                    <span>Live GPS tracking with smart alerts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Smartphone className="h-5 w-5 text-teal-600" />
                    <span>White-labeled tracking experience</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-teal-600" />
                    <span>Enterprise-grade security protocols</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/get-started')}
            className="material-button inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-xl hover:opacity-90"
          >
            <Calendar className="h-5 w-5" />
            Schedule Enterprise Consultation
            <ArrowRight className="h-5 w-5" />
          </button>
          <p className="mt-4 text-sm text-gray-500">
            Book a call with our logistics experts to discuss your enterprise needs
          </p>
        </div>
      </div>
    </section>
  );
}