import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from './DarkModeContext';
import logo from '../assets/logo.png';
import arrow from '../assets/dropdown.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="w-full z-50 bg-white  transition-colors duration-300">
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
            
            {/* Dark Mode Toggle in Mobile Menu */}
            <div className="flex items-center justify-between py-2 border-t border-gray-200 mt-4">
              <span className="text-sm font-medium">Dark Mode</span>
              <label className="relative inline-flex items-center cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  className="sr-only peer"
                  aria-label="Toggle dark mode"
                />
                <div className="w-12 h-6 bg-gray-200 dark:bg-slate-700 rounded-full peer-focus:ring-2 peer-focus:ring-purple-400 transition-colors duration-300 peer-checked:bg-purple-600 flex items-center px-1">
                  <span className={`transition-transform duration-300 w-4 h-4 rounded-full flex items-center justify-center bg-white dark:bg-slate-900 shadow-md transform ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}>
                    {!isDarkMode ? (
                      <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-3 h-3 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                      </svg>
                    )}
                  </span>
                </div>
              </label>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
