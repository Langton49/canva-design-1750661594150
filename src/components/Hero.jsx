import React from "react";
import styles from "../styles/Hero.module.css";

// Hero section splits horizontally: left text (dark green), right image
export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroLeft}>
        <div className={styles.heroTextWrap}>
          <h1 className={styles.heroTitle}>
            Selling online<br />
            is vital to<br />
            business growth.
          </h1>
          <div className={styles.heroSubtitle}>
            2025 Grow Your e-Commerce Conference
          </div>
          <div className={styles.eventDetails}>
            September 16-18, 2025<br />
            Paragon One Plaza and Sky Garden
          </div>
          <div className={styles.heroButtonWrap}>
            <button className={styles.ctaButton}>BOOK NOW FOR EARLY BIRD PRICES</button>
          </div>
        </div>
      </div>
      <div className={styles.heroRight}>
        {/* Replace the src below with your own photo if needed */}
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
          alt="Office meeting"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
}
