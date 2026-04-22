import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", to: "/" },
    { name: "Cars", to: "/cars" },
    { name: "Booking", to: "/booking" },
    { name: "About/Contact", to: "/about" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <div className="top-info">
        <div>🕒 Open Hours: Mon - Fri 8.00 am - 6.00 pm</div>
        <div className="social">
          On Social:
          <a aria-label="facebook" href="#" style={{ marginLeft: 8 }}>
            <FaFacebookF color="#fff" />
          </a>
          <a aria-label="twitter" href="#" style={{ marginLeft: 8 }}>
            <FaTwitter color="#fff" />
          </a>
          <a aria-label="linkedin" href="#" style={{ marginLeft: 8 }}>
            <FaLinkedinIn color="#fff" />
          </a>
        </div>
      </div>
      <nav className={`main-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner container">
          <Link to="/" className="logo">
            <span className="primary">Car</span>
            <span className="secondary">Rental</span>
          </Link>
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.to}>
                <Link className={location.pathname === l.to ? "active" : ""} to={l.to}>
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
          <button className="menu-toggle" onClick={() => setOpen((o) => !o)} aria-label="menu">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {open && (
          <div className="mobile-menu" style={{ background: "#fff", borderTop: "1px solid #e5e7eb" }}>
            {links.map((l) => (
              <div key={l.to} className="nav-item">
                <Link to={l.to} onClick={() => setOpen(false)}>
                  {l.name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </nav>
      <div style={{ height: "100px" }} /> {/* spacer so content isn’t hidden */}
    </div>
  );
}
