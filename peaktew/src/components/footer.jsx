import React from "react";
import linkedin from '../assets/linkedin.png';
import insta from '../assets/insta.png';
import { Link } from 'react-router-dom';
import tiktok from '../assets/tiktok.png';
import logo from '../assets/logo.png';


export default function Footer() {
  return (
    <footer className="bg-white text-[#220239] px-4 sm:px-6 md:px-10 lg:px-24 xl:px-36 2xl:px-48 py-10 z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-metro-600 leading-snug">
            Ready to discover<br />what’s possible?
          </h2>
        </div>

        <hr className="my-6 border-gray-300" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col">
            <img className="w-[30px] h-[30px] mb-4" src={logo} alt="logo" />
            <div>
              <p className="text-base sm:text-lg font-metro-600">“Together, Unique In Our Own Way”</p>
              <p className="text-sm font-metro-300 text-gray-500">PeakTew, 2023</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-10 text-sm sm:text-base">
            <div>
              <p className="font-metro-600 mb-2">Website</p>
              <ul className="space-y-1 text-gray-600 font-metro-300">
                <li><Link to={'/web-terms-conditions'}><p className="hover:text-purple-700 transition-colors duration-300">Terms & Conditions</p></Link></li>
                <li><Link to={'/web-privacy-policy'}><p className="hover:text-purple-700 transition-colors duration-300">Private Policy</p></Link></li>
              </ul>
            </div>
            <div>
              <p className="font-metro-600 mb-2">App</p>
              <ul className="space-y-1 text-gray-600 font-metro-300">
                <li><Link to={'/app-terms-conditions'}><p className="hover:text-purple-700 transition-colors duration-300">Terms & Condition</p></Link></li>
                <li><Link to={'/app-privacy-policy'}><p className="hover:text-purple-700 transition-colors duration-300">Privacy Policy</p></Link></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm sm:text-base text-gray-500 font-metro-300">
          <p>© COPYRIGHT ALL RIGHTS RESERVED</p>
          <div className="flex flex-wrap gap-4 text-xl">
            <a href="https://www.linkedin.com/company/peaktew/"><img className="w-[19px] h-[22px]" src={linkedin} alt="linkedin" /></a>
            <a href="https://www.instagram.com/peaktew/"><img className="w-[19px] h-[22px]" src={insta} alt="instagram" /></a>
            <a href="https://www.tiktok.com/@peaktew"><img className="w-[21px] h-[21px]" src={tiktok} alt="youtube" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
