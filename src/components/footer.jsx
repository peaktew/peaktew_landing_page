import React from "react";
import { Link } from "react-router-dom";
import linkedin from "../assets/linkedin.webp";
import insta from "../assets/insta.webp";
import tiktok from "../assets/tiktok.webp";
import youtube from "../assets/youtube.webp"
import discord from "../assets/discord.webp";
import logo from "../assets/logo.png";
import faberLogo from "../assets/faber-logo.webp";
import mcnairLogo from "../assets/mcnair-logo.webp";
import "./footer.css";

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/peaktew/", icon: linkedin },
  { name: "Instagram", href: "https://www.instagram.com/peaktew/", icon: insta },
  { name: "TikTok", href: "https://www.tiktok.com/@peaktew", icon: tiktok },
  { name: "YouTube", href: "https://www.youtube.com/@peaktew", icon: youtube },
  { name: "Discord", href: "https://discord.com/invite/9Z7yjjNFbM", icon: discord },
];

export default function Footer() {
  const handleSupporterClick = (event) => {
    if (!event.currentTarget.getAttribute("href")) event.preventDefault();
  };
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-invitation">
          <div>
            <p className="footer-eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
            <h2>Ready to discover<br /><span>what’s possible?</span></h2>
          </div>
          <Link className="footer-cta"to="/download"  onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "instant" })}>
            Discover PeakTew <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <section className="footer-supporters" aria-labelledby="footer-supporters-title">
          <h3 id="footer-supporters-title">Our proud supporters</h3>
          <div className="footer-supporter-grid">
            <a className="footer-supporter-card" href="https://sc.edu/study/colleges_schools/moore/research_and_centers/centers/faber_entrepreneurship_center/" onClick={handleSupporterClick} target="_blank" rel="noopener noreferrer">
              <img src={faberLogo} alt="Faber Center for Entrepreneurship logo" width="200" height="200" />
              <span className="footer-supporter-copy">
                <strong>Faber Center</strong>
                <strong>for Entrepreneurship</strong>
                <span className="footer-supporter-visit">Visit website <span aria-hidden="true">↗</span></span>
              </span>
            </a>
            <a className="footer-supporter-card" href="https://sc.edu/about/centers_institutes/mcnair_institute/" onClick={handleSupporterClick} target="_blank" rel="noopener noreferrer">
              <img src={mcnairLogo} alt="McNair Institute logo" width="200" height="200" />
              <span className="footer-supporter-copy">
                <strong>McNair Institute</strong>
                <span className="footer-supporter-visit">Visit website <span aria-hidden="true">↗</span></span>
              </span>
            </a>
          </div>
        </section>
        <div className="footer-details">
          <div className="footer-brand">
            <Link to="/" target="_blank" rel="noopener noreferrer" className="footer-wordmark" aria-label="PeakTew home">
              <img src={logo} alt="" width="40" height="40" />
              <span>PeakTew</span>
            </Link>
            <p>“Together, Unique In Our Own Way”</p>
            <span className="footer-muted">PeakTew, 2023</span>
          </div>
          <nav aria-label="Footer legal links">
            <h3>Legal</h3>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </nav>

          <div className="footer-connect">
            <h3>Stay connected</h3>
            <div className="footer-socials">
              {socialLinks.map(({ name, href, icon }) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${name} (opens in a new tab)`}>
                  <img src={icon} alt="" width="20" height="20" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} PeakTew. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
