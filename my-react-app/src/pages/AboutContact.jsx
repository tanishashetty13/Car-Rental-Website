import React from "react";
import Lottie from "lottie-react";
import teamAnimation from "../assets/Carbg.json";
import styles from "../style/About.module.css";

import team1 from "../assets/priya.png";
import team2 from "../assets/rishi.jpg";
import team3 from "../assets/aditi.jpg";

export default function About() {
  return (
    <div>
      <section className={styles.heroSection}>
        <div className={styles.heroAnimation}>
          <Lottie animationData={teamAnimation} loop={true} />
        </div>
        <h1 className={styles.heroTitle}>About CarRental</h1>
        <p className={styles.heroSubtitle}>
          Your trusted partner for premium car rentals across the country.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Who We Are</h2>
        <p className={styles.sectionText}>
          CarRental is a next-generation car rental platform designed to offer flexible, fast, and affordable transportation solutions for everyone. With a focus on innovation and customer satisfaction, we aim to revolutionize how people experience mobility.
        </p>
      </section>

      <section className={styles.section} style={{ backgroundColor: "#f9fafb" }}>
        <h2 className={styles.sectionTitle}>Our Core Values</h2>
        <div className={styles.cardGrid}>
          <ValueCard
            emoji="🚗"
            title="Reliability"
            desc="Every vehicle is serviced and maintained to the highest standards, ensuring a safe and smooth ride."
          />
          <ValueCard
            emoji="💡"
            title="Innovation"
            desc="Modern booking system, smart recommendations, and user-friendly interface tailored for you."
          />
          <ValueCard
            emoji="🤝"
            title="Customer First"
            desc="Our dedicated team is here to support you at every mile of your journey."
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Meet Our Team</h2>
        <div className={styles.cardGrid}>
          <TeamCard
            img={team1}
            name="Simone Rai"
            role="Founder & CEO"
            bio="Visionary leader with a mission to redefine urban mobility through technology."
          />
          <TeamCard
            img={team2}
            name="Rishi Mehra"
            role="Operations Head"
            bio="Handles fleet management and ensures seamless customer experiences."
          />
          <TeamCard
            img={team3}
            name="Aditi Kapoor"
            role="Lead Developer"
            bio="Tech architect behind the scenes building scalable rental solutions."
          />
        </div>
      </section>

      <section className={styles.section} style={{ backgroundColor: "#f0f4ff" }}>
        <h2 className={styles.sectionTitle}>Our Journey</h2>
        <ul className={styles.timeline}>
          <JourneyItem year="2020" text="Founded CarRental with 5 vehicles and a bold vision." />
          <JourneyItem year="2022" text="Expanded to 5 cities with 500+ happy customers." />
          <JourneyItem year="2024" text="Launched smart filtering and real-time vehicle tracking." />
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Why Choose CarRental?</h2>
        <div className={styles.cardGrid}>
          <FeatureBox
            emoji="✅"
            title="Transparent Pricing"
            desc="No hidden charges. What you see is what you pay."
          />
          <FeatureBox
            emoji="🕒"
            title="24x7 Support"
            desc="We’re here for you anytime, anywhere."
          />
          <FeatureBox
            emoji="⚡"
            title="Instant Booking"
            desc="Reserve your car in just a few taps, no delays."
          />
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Ready to Ride?</h2>
        <p className={styles.ctaText}>
          Browse our collection of premium vehicles and start your journey today.
        </p>
        <a href="/cars" className={styles.ctaButton}>Explore Cars</a>
      </section>
    </div>
  );
}

// COMPONENTS

function ValueCard({ emoji, title, desc }) {
  return (
    <div className={styles.valueCard}>
      <span className={styles.valueEmoji}>{emoji}</span>
      <h4 className={styles.cardTitle}>{title}</h4>
      <p className={styles.cardText}>{desc}</p>
    </div>
  );
}

function TeamCard({ img, name, role, bio }) {
  return (
    <div className={styles.teamCard}>
      <img src={img} alt={name} className={styles.teamImage} />
      <div className={styles.teamInfo}>
        <h3 className={styles.teamName}>{name}</h3>
        <p className={styles.teamRole}>{role}</p>
        <p className={styles.teamBio}>{bio}</p>
      </div>
    </div>
  );
}

function JourneyItem({ year, text }) {
  return (
    <li className={styles.timelineItem} data-year={year}>
      <p className={styles.timelineText}>{text}</p>
    </li>
  );
}

function FeatureBox({ emoji, title, desc }) {
  return (
    <div className={styles.featureCard}>
      <span className={styles.featureEmoji}>{emoji}</span>
      <h4 className={styles.cardTitle}>{title}</h4>
      <p className={styles.cardText}>{desc}</p>
    </div>
  );
}
