import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle navigation and close menu
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="p-4 bg-gray-800 text-white relative z-50">
        <div className="container flex justify-between items-center h-16 mx-auto">
          {/* Logo - Always Visible */}
          <NavLink to="/" className="flex items-center" onClick={handleNavClick}>
            <img src={Logo} className="h-12 w-12 rounded-full object-contain" alt="logo_img" />
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-6">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Contact", path: "/contact" },
            ].map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className="text-lg font-medium hover:text-violet-400 transition"
                  onClick={handleNavClick}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex space-x-4">
            <NavLink to="/login">
              <button className="px-5 py-2 border border-gray-300 rounded-md hover:bg-gray-700 transition">
                Sign in
              </button>
            </NavLink>
            <NavLink to="/signup">
              <button className="px-5 py-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 transition">
                Sign up
              </button>
            </NavLink>
          </div>

          {/* Hamburger Icon - Mobile */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu - Fixed on top with z-50 */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white text-black z-50 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {/* Close Icon */}
            <button
              className="absolute top-5 right-5 text-3xl text-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              <FiX />
            </button>

            {/* Logo - Also Visible in Mobile Menu */}
            <img src={Logo} className="h-16 w-16 rounded-full object-contain" alt="logo_img" />

            {/* Menu Items */}
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Contact", path: "/contact" },
            ].map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className="text-lg font-medium"
                onClick={handleNavClick}
              >
                {item.name}
              </NavLink>
            ))}
            
            {/* Auth Buttons - Mobile */}
            <NavLink to="/login">
              <button
                className="px-5 py-2 border border-gray-800 rounded-md hover:bg-gray-200 transition"
                onClick={handleNavClick}
              >
                Sign in
              </button>
            </NavLink>
            <NavLink to="/signup">
              <button
                className="px-5 py-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90 transition"
                onClick={handleNavClick}
              >
                Sign up
              </button>
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
