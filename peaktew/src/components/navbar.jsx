import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import arrow from '../assets/dropdown.png'

const Navbar = () => {
  return (
    <header className="w-full z-50">
      <div className="max-w-[1280px] mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-[#220239] font-bold text-xl no-underline flex items-center">
            <span role="img" aria-label="logo" className="text-3xl mr-2"><img src={logo} className='h-[30px] w-[30px]' alt="PeakTew Logo" /></span> <span>PeakTew</span>
          </Link>

          <div className="flex space-x-[6rem] justify-end flex-1 mr-8 items-center text-black">

            {/* About - Hover Dropdown */}
            <div className="relative group">
              <span className="cursor-pointer flex items-center gap-1">
                About <span className="text-xs"><img src={arrow} className='h-[7.64px] w-[12.54px]' alt="Dropdown arrow" /></span>
              </span>

              <div className="absolute top-full left-0 mt-2 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md overflow-hidden w-40 animate-fade-in z-50">
                {['About Us', 'Our Team', 'Our Story'].map((label, i) => (
                  <Link
                    key={label}
                    to={`/${label.toLowerCase().replace(/\s/g, '-')}`}
                    className={`px-4 py-2 hover:bg-gray-100 transition-all duration-300 opacity-0 animate-fade-delay-${i + 1}`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/how-it-works" className="hover:text-purple-700">
              How it works
            </Link>
            <Link to="/guidelines" className="hover:text-purple-700">
              Community Guidelines
            </Link>
            <Link to="/contact" className="hover:text-purple-700">
              Contact Us
            </Link>
            <Link to="/download" className="bg-[#220239] text-white px-4 py-2 rounded-full hover:bg-purple-800">
              Download App
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
