import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import RoiCalculator from './pages/RoiCalculator';
import GetStarted from './pages/GetStarted';
import Coverage from './pages/Coverage';
import Benefits from './pages/Benefits';
import HowItWorks from './pages/HowItWorks';
import Industries from './pages/Industries';
import About from './pages/About';
import Help from './pages/Help';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Partners from './pages/Partners';
import Press from './pages/Press';
import Track from './pages/Track';
import Ship from './pages/Ship';
import Solutions from './pages/Solutions';
import Choose from './pages/services/Choose';
import SmartSupplyChain from './pages/services/SmartSupplyChain';
import MultiSpeedDelivery from './pages/services/MultiSpeedDelivery';
import MicroFulfillment from './pages/services/MicroFulfillment';
import EnterpriseSolutions from './pages/services/EnterpriseSolutions';
import PredictiveAnalytics from './pages/services/PredictiveAnalytics';
import SecureOperations from './pages/services/SecureOperations';
import SameDay from './pages/services/SameDay';
import SonicX from './pages/services/SonicX';
import ApiIntegration from './pages/services/ApiIntegration';
import Mumbai from './pages/cities/Mumbai';
import Delhi from './pages/cities/Delhi';
import Bangalore from './pages/cities/Bangalore';
import Hyderabad from './pages/cities/Hyderabad';
import Chennai from './pages/cities/Chennai';
import Kolkata from './pages/cities/Kolkata';
import D2c from './pages/industries/D2c';
import Fmcg from './pages/industries/Fmcg';
import Ecommerce from './pages/industries/Ecommerce';
import Retail from './pages/industries/Retail';
import Healthcare from './pages/industries/Healthcare';
import Calculators from './pages/Calculators';

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roi-calculator" element={<RoiCalculator />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/coverage" element={<Coverage />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/press" element={<Press />} />
            <Route path="/track" element={<Track />} />
            <Route path="/ship" element={<Ship />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/services/choose" element={<Choose />} />
            <Route path="/services/smart-supply-chain" element={<SmartSupplyChain />} />
            <Route path="/services/multi-speed-delivery" element={<MultiSpeedDelivery />} />
            <Route path="/services/micro-fulfillment" element={<MicroFulfillment />} />
            <Route path="/services/enterprise-solutions" element={<EnterpriseSolutions />} />
            <Route path="/services/predictive-analytics" element={<PredictiveAnalytics />} />
            <Route path="/services/secure-operations" element={<SecureOperations />} />
            <Route path="/services/same-day" element={<SameDay />} />
            <Route path="/services/sonicx" element={<SonicX />} />
            <Route path="/services/api" element={<ApiIntegration />} />
            <Route path="/cities/mumbai" element={<Mumbai />} />
            <Route path="/cities/delhi" element={<Delhi />} />
            <Route path="/cities/bangalore" element={<Bangalore />} />
            <Route path="/cities/hyderabad" element={<Hyderabad />} />
            <Route path="/cities/chennai" element={<Chennai />} />
            <Route path="/cities/kolkata" element={<Kolkata />} />
            <Route path="/industries/d2c" element={<D2c />} />
            <Route path="/industries/fmcg" element={<Fmcg />} />
            <Route path="/industries/ecommerce" element={<Ecommerce />} />
            <Route path="/industries/retail" element={<Retail />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}