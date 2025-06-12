import React from "react";
import linkedin from '../assets/linkedin.png'
import insta from '../assets/insta.png'
import { Link } from 'react-router-dom';
import youtube from '../assets/youtube.png'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-white text-[#220239] px-6 py-10 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-[40px] font-metro-600">Ready to discover<br />what’s possible?</h2>
        </div>

        <hr className="my-6 border-gray-300" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0 flex-col space-x-3">
            <img className="w-[30px] h-[30px] mb-4" src={logo} alt="" />
            <div>
              <p className="text-lg font-metro-600">“Together, Unique In Our Own Way”</p>
              <p className="text-sm font-metro-300 text-gray-500">PeakTew, 2023</p>
            </div>
          </div>

          <div className="flex space-x-16 text-sm">
            <div>
              <p className="font-metro-600 mb-2">Website</p>
              <ul className="space-y-1 text-gray-600 font-metro-300">
                <li><Link to={'/web-terms-conditions'}><p>Terms & Conditions</p></Link></li>
                <li><Link to={'/web-privacy-policy'}><p>Private Policy</p></Link></li>
              </ul>
            </div>
            <div>
              <p className="font-metro-600 mb-2">App</p>
              <ul className="space-y-1 text-gray-600 font-metro-300">
                <li><Link to={'/app-terms-conditions'}><p>Terms & Condition</p></Link></li>
                <li><Link to={'/app-privacy-policy'}><p>Privacy Policy</p></Link></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        <div className="flex justify-between items-center text-sm text-gray-500 font-metro-300">
          <p>© COPYRIGHT ALL RIGHTS RESERVED</p>
          <div className="flex space-x-4 text-xl">
            <a href="https://www.linkedin.com/company/peaktew/"><img className="w-[19px] h-[22px]" src={linkedin} alt="" /></a>
            <a href="https://www.instagram.com/peaktew/"><img className="w-[19px] h-[22px]" src={insta} alt="" /></a>
            <a href="https://www.youtube.com/channel/UCk0xTmbVjvjyzPXl38fC6vQ"><img className="w-[21px] h-[21px]" src={youtube} alt="" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
