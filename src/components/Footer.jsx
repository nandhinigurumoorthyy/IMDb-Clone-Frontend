import React from "react";
import { PiYoutubeLogo, PiInstagramLogo, PiFacebookLogo, PiTwitterLogo } from "react-icons/pi";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">

        {/* Left Side */}
        <div className="footer-left">
          <div className="footer-logo">
          <img src={logo} className="logo-icon" />
          </div>

          <h3 className="footer-tagline">Lights, Camera, Action! 🎬</h3>

          <p className="footer-description">
            Your go-to place for the latest movies, classic hits, and everything in between. 
            Experience cinema like never before.
          </p>

          <div className="footer-contact">
            <p className="footer-contact-text">Need help?</p>
            <h4 className="footer-contact-heading">Contact Support</h4>
            <p className="footer-contact-email">support@moviemania.com</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="footer-right">
          <div className="footer-section">
            <h4 className="footer-section-title">Movies</h4>
            <ul className="footer-links">
              <li>Now Showing</li>
              <li>Coming Soon</li>
              <li>Top Rated</li>
              <li>Genres</li>
              <li>Trending</li>
              <li>Box Office</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Explore</h4>
            <ul className="footer-links">
              <li>Reviews</li>
              <li>News</li>
              <li>Celebrity Interviews</li>
              <li>Trailers</li>
              <li>Behind The Scenes</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Legal</h4>
            <ul className="footer-links">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Cookie Policy</li>
              <li>Report a Problem</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Available In</h4>
            <ul className="footer-links">
              <li>USA</li>
              <li>UK</li>
              <li>India</li>
              <li>Canada</li>
              <li>Australia</li>
              <li>Worldwide Streaming</li>
            </ul>
          </div>

          <div className="footer-socials">
            <h4 className="footer-socials-title">Follow Us</h4>
            <div className="footer-social-icons">
              <PiYoutubeLogo />
              <PiInstagramLogo />
              <PiFacebookLogo />
              <PiTwitterLogo />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
