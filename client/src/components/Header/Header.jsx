import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import './Header.css';
import { motion } from 'framer-motion';
import hero from '../../assets/hero.png'

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-700 to-indigo-900 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left md:w-1/2"
        >
          <h1 className="font-['Moo_Lah_Lah'] text-8xl md:text-9xl text-white mb-4">
            Adopt,
          </h1>
          <h2 className="font-['Moo_Lah_Lah'] text-5xl md:text-6xl text-purple-300 mb-8">
            Don't Shop.
          </h2>
          <Link to="/adopt">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-700 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-purple-100 transition duration-300"
            >
              Adopt Now
            </motion.button>
          </Link>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-12 md:mt-0 md:w-1/2"
        >
          <img 
            src={hero}
            alt="Happy adopted pet" 
            className="rounded-full shadow-2xl border-4 border-white"
          />
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default Header;