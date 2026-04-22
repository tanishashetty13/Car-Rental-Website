import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h4>Car Rental</h4>
          <p style={{ marginBottom: 12 }}>
            Premium car rental services with transparent pricing and customer-first support.
          </p>
          <div className="socials">
            <a aria-label="facebook" href="#"><FaFacebookF /></a>
            <a aria-label="twitter" href="#"><FaTwitter /></a>
            <a aria-label="instagram" href="#"><FaInstagram /></a>
            <a aria-label="linkedin" href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/cars">Cars</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/about">About</Link>
        </div>

        <div>
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </div>

        <div>
          <h4>Contact</h4>
          <div style={{ marginBottom: 4 }}>Email: support@carrental.com</div>
          <div style={{ marginBottom: 4 }}>Phone: +1 234 567 890</div>
          <div>Address: 123 Main St, City</div>
        </div>
      </div>
      <div className="bottom">
        © {new Date().getFullYear()} Car Rental. All rights reserved.
      </div>
    </footer>
  );
}
