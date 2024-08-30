import React from 'react';
import Carousell from './Carousel';
import "./Testimonials.css";

const TestimonialsSection = () => {
  return (
    <div className="testi bg-gradient-to-br from-purple-700 to-indigo-900 py-16">
      <h2 className="font-['Moo_Lah_Lah'] text-center text-7xl text-white mb-8">Happy Adoptions</h2>
      <p className="intro nuni text-purple-300 flex justify-center items-center mb-12">Discover what our adopters have to say about their PawPatrol experiences!</p>
      <Carousell />
    </div>
  );
};

export default TestimonialsSection;