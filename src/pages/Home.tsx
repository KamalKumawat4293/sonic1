import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Cities from '../components/Cities';
import ProductDemo from '../components/ProductDemo';
import Innovation from '../components/Innovation';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div>
      {/* Hero section with main value proposition */}
      <Hero />

      {/* Services section showcasing SonicX and Same Day Delivery */}
      <Services />

      {/* Innovation section highlighting tech capabilities */}
      <Innovation />

      {/* Product demo showing platform capabilities */}
      <ProductDemo />

      {/* Cities coverage map */}
      <Cities />

      {/* Social proof and testimonials */}
      <Testimonials />
    </div>
  );
}