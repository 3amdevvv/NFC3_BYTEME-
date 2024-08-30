import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [isNGOWorker, setIsNGOWorker] = useState(false);
  const [isNGOAdmin, setIsNGOAdmin] = useState(false);

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      const user = decodedToken.user;
      setIsNGOWorker(user && (user.email.endsWith('@ngo.com') || user.role === 'ngo_worker'));
      setIsNGOAdmin(user && (user.email.endsWith('@ngoAdmin.com') || user.role === 'ngo_admin'));
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const NavLink = ({ to, children }) => (
    <motion.li
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={to} className="text-white hover:text-purple-300 transition-colors duration-300">
        {children}
      </Link>
    </motion.li>
  );

  const navLinks = isNGOWorker || isNGOAdmin
    ? [
        { to: "/homengo", text: "Dashboard" },
        { to: "/adoption-requests", text: "Adoption Requests" },
        ...(isNGOAdmin
          ? [
              { to: "/volunteer-requests", text: "Volunteer Requests" },
              { to: "/manage-workers", text: "Workers" },
            ]
          : [{ to: "/manage-pets", text: "Manage Pets" }]),
      ]
    : [
        { to: "/", text: "Home" },
        { to: "/about", text: "About" },
        { to: "/adopt", text: "Adopt" },
        { to: "/volunteer", text: "Volunteer" },
        { to: "/donate", text: "Donate" },
        { to: "/events", text: "Events" },
      ];

  return (
    <nav className="bg-transparent py-4 px-6 md:px-12">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">PawPatrol</Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to}>{link.text}</NavLink>
            ))}
          </ul>
          
          {!token ? (
            <div className="flex items-center space-x-4">
              <Link to="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border border-purple-300 text-purple-300 px-4 py-2 rounded-full hover:bg-purple-300 hover:text-purple-900 transition-colors duration-300 text-white"
                >
                  Sign Up
                </motion.button>
              </Link>
              <Link to="/login">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-purple-300 text-purple-900 px-4 py-2 rounded-full hover:bg-purple-400 transition-colors duration-300"
                >
                  Log In
                </motion.button>
              </Link>
            </div>
          ) : (
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDropdown}
                className="flex items-center space-x-2 text-white hover:text-purple-300 transition-colors duration-300"
              >
                <img src="/api/placeholder/40/40" alt="Profile" className="w-8 h-8 rounded-full" />
                <ChevronDown size={20} />
              </motion.button>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
                >
                  <Link to="/user-profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100">Your Profile</Link>
                  {!isNGOWorker && !isNGOAdmin && (
                    <Link to="/myReq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100">Your Requests</Link>
                  )}
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100">Log Out</button>
                </motion.div>
              )}
            </div>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden mt-4"
        >
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to}>{link.text}</NavLink>
            ))}
          </ul>
          {!token ? (
            <div className="mt-4 flex flex-col space-y-4">
              <Link to="/signup">
                <button className="w-full bg-transparent border border-purple-300 text-purple-300 px-4 py-2 rounded-full hover:bg-purple-300 hover:text-purple-900 transition-colors duration-300">
                  Sign Up
                </button>
              </Link>
              <Link to="/login">
                <button className="w-full bg-purple-300 text-purple-900 px-4 py-2 rounded-full hover:bg-purple-400 transition-colors duration-300">
                  Log In
                </button>
              </Link>
            </div>
          ) : (
            <div className="mt-4">
              <Link to="/user-profile" className="block py-2 text-white hover:text-purple-300">Your Profile</Link>
              {!isNGOWorker && !isNGOAdmin && (
                <Link to="/myReq" className="block py-2 text-white hover:text-purple-300">Your Requests</Link>
              )}
              <button onClick={handleLogout} className="block w-full text-left py-2 text-red-400 hover:text-red-300">Log Out</button>
            </div>
          )}
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;