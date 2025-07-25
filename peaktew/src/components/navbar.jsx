import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import arrow from '../assets/dropdown.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full z-50 bg-white border-b border-gray-200 transition-colors duration-300">
      <div className="px-4 sm:px-6 md:px-10 lg:px-24 xl:px-36 2xl:px-48">
        <nav className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="text-[#220239] font-bold text-lg sm:text-xl no-underline flex items-center transition-colors duration-300">
             <span role="img" aria-label="logo" className="text-3xl mr-2"><img src={logo} className='h-8 w-8 sm:h-[30px] sm:w-[30px] mr-2' alt="PeakTew Logo" /></span> <span>PeakTew</span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#220239] text-2xl focus:outline-none">
              ☰
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 lg:space-x-16 items-center text-base lg:text-lg">
            <div className="relative group">
              <span className="cursor-pointer flex items-center gap-1">
                About <img src={arrow} className="h-[7px] w-[12px]" alt="Dropdown arrow" />
              </span>

              <div className="absolute top-full left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col bg-white shadow-lg rounded-md overflow-hidden w-40 z-50 hover:opacity-100 hover:visible border border-gray-200">
                {['About Us', 'Our Team', 'Our Story'].map((label, i) => (
                  <Link
                    key={label}
                    to={`/${label.toLowerCase().replace(/\s/g, '-')}`}
                    className={`px-4 py-2 hover:bg-gray-100 transition-all duration-300`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            {/* Links */}

            <Link to="/how-it-works" className="hover:text-purple-700 transition-colors duration-300">
              How It Works
            </Link>
            <Link to="/community-guidelines" className="hover:text-purple-700 transition-colors duration-300">
              Community Guidelines
            </Link>
            <Link to="/contact-us" className="hover:text-purple-700 transition-colors duration-300">
              Contact Us
            </Link>
            
            <Link to="/download" className="bg-[#220239] text-white px-4 py-2 rounded-full hover:bg-purple-800 transition-colors duration-300">
              Download App
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 text-sm sm:text-base text-black">
            <div className="space-y-1">
              <p className="font-semibold">About</p>
              {['About Us', 'Our Team', 'Our Story'].map((label) => (
                <Link key={label} to={`/${label.toLowerCase().replace(/\s/g, '-')}`} className="block ml-4">
                  {label}
                </Link>
              ))}
            </div>
            <Link to="/how-it-works" className="block">How it works</Link>
            <Link to="/community-guidelines" className="block">Community Guidelines</Link>
            <Link to="/contact-us" className="block">Contact Us</Link>
            <Link to="/download" className="block bg-[#220239] text-white px-4 py-2 rounded-full w-fit">Download App</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
