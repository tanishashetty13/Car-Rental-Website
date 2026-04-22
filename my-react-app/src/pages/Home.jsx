import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import CarCard from "../components/CarCard";
import carList from "../data/cars";
import styles from "../style/About.module.css";

// Hero images
import bmw from "../assets/cars/bmw.png";
import audi from "../assets/cars/audi.jpg";
import mercedes from "../assets/cars/Mercedes.png";
import toyota from "../assets/cars/ToyotaCorolla.jpg";


const heroCars = [bmw, audi, mercedes, toyota];

const testimonials = [
  {
    id: 1,
    name: "Anuskha Mehta",
    role: "Traveler",
    text: "Smooth booking and great car quality. Highly recommended!",
    avatar: "/src/assets/sk.webp",
  },
  {
    id: 2,
    name: "Satish Kapoor",
    role: "Business Traveler",
    text: "Professional service, clean cars, easy to use interface.",
    avatar: "/src/assets/am.jpg",
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "Vacationer",
    text: "Loved the experience. The carousel and filters are so slick.",
    avatar: "/src/assets/sm.jpg",
  },
];

export default function Home({ onBook }) {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [form, setForm] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
  });

  const heroTimer = useRef();
  const testimonialTimer = useRef();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    heroTimer.current = setInterval(() => {
      setCurrentHeroIndex((i) => (i + 1) % heroCars.length);
    }, 5000);
    return () => clearInterval(heroTimer.current);
  }, []);

  useEffect(() => {
    testimonialTimer.current = setInterval(
      () => setCurrentTestimonial((t) => (t + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(testimonialTimer.current);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const dx = touchEndX.current - touchStartX.current;
    if (dx > 50) setCurrentTestimonial((t) => (t === 0 ? testimonials.length - 1 : t - 1));
    else if (dx < -50) setCurrentTestimonial((t) => (t + 1) % testimonials.length);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleFindCar = () => {
    // navigate to /cars with query params
    const params = new URLSearchParams();
    if (form.pickup) params.set("pickup", form.pickup);
    if (form.dropoff) params.set("dropoff", form.dropoff);
    if (form.date) params.set("date", form.date);
    if (form.time) params.set("time", form.time);
    navigate(`/cars?${params.toString()}`);
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            {/* Left text + form */}
            <div className="hero-text">
              <div className="badge">CAR RENTAL</div>
              <h1 className="hero-title">Find Affordable Dream Cars for Rental</h1>
              <p className="hero-sub">
                Fulfill your automotive fantasies without breaking the bank. Check our affordable car rentals for
                an opulent yet economical ride.
              </p>
              <div className="booking-form">
                <input
                  name="pickup"
                  placeholder="Pickup location"
                  value={form.pickup}
                  onChange={handleChange}
                />
                <input
                  name="dropoff"
                  placeholder="Dropoff location"
                  value={form.dropoff}
                  onChange={handleChange}
                />
                <input
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                />
                <input
                  name="time"
                  type="time"
                  value={form.time}
                  onChange={handleChange}
                />
                <button onClick={handleFindCar} className="btn-primary">
                  Find Car
                </button>
              </div>
            </div>

            {/* Right sliding car image */}
            <div className="hero-image-wrapper">
              {heroCars.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt="Hero car"
                  style={{
                    opacity: idx === currentHeroIndex ? 1 : 0,
                    transform: idx === currentHeroIndex ? "scale(1)" : "scale(0.97)",
                  }}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Us</h2>
            <p>Reliable cars, transparent pricing, and seamless booking tailored for modern travelers.</p>
          </div>
          <div className="features-grid">
            {[
              { title: "Verified Vehicles", desc: "Inspected thoroughly before each rental." },
              { title: "24/7 Support", desc: "Always available to assist you anytime." },
              { title: "Easy Booking", desc: "Fast form, instant confirmation." },
            ].map((f, i) => (
              <div key={i} className="feature-card">
                <div style={{ display: "flex", gap: 14, alignItems: "start" }}>
                  <FaCheckCircle size={28} color="#e11d48" />
                  <div className="feature-info">
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="section-small featured">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Featured Cars</h2>
              <p style={{ margin: 0, color: "#555" }}>Handpicked for you</p>
            </div>
          </div>
          <div className="cars-grid">
            {carList.slice(0, 6).map((car) => (
              <CarCard key={car.id} car={car} onBook={onBook} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
              <h2 className={styles.ctaTitle}>Ready to Ride?</h2>
              <p className={styles.ctaText}>
                Browse our collection of premium vehicles and start your journey today.
              </p>
              <a href="/cars" className={styles.ctaButton}>Explore Cars</a>
            </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="title-wrapper">
            <h2>What Our Customers Say</h2>
            <p>Real feedback from people who’ve taken the ride.</p>
          </div>
          <div className="testimonial-wrapper">
            <div
              className="testimonial-card"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="testimonial-avatar">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  loading="lazy"
                />
              </div>
              <div className="testimonial-content">
                <p>“{testimonials[currentTestimonial].text}”</p>
                <div style={{ fontWeight: 600 }}>{testimonials[currentTestimonial].name}</div>
                <div style={{ fontSize: 12, color: "#666" }}>{testimonials[currentTestimonial].role}</div>
              </div>
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, idx) => (
                <div
                  key={idx}
                  className={`dot ${idx === currentTestimonial ? "active" : ""}`}
                  onClick={() => setCurrentTestimonial(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
