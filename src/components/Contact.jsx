import React from "react";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactLeft}>
        <div className={styles.contactTextWrap}>
          <h2 className={styles.contactHeading}>Reach Out</h2>
          <div className={styles.contactBlock}>
            <div className={styles.contactSubhead}>Conference Secretariat</div>
            <div className={styles.contactBody}>163 Woodlands Place<br />Algies Bay, Rodney 0920</div>
            <div className={styles.contactDetail}>123-456-7890</div>
            <div className={styles.contactDetail}>
              <a href="mailto:hello@reallygreatsite.com" className={styles.contactLink}>hello@reallygreatsite.com</a>
            </div>
            <div className={styles.contactDetail}>
              <a href="#" className={styles.contactLink}>@reallygreatsite</a>
            </div>
          </div>
          <div className={styles.contactButtonWrap}>
            <button className={styles.ctaButton}>RESERVE YOUR SEAT</button>
          </div>
        </div>
      </div>
      <div className={styles.contactRight}>
        {/* Replace this Unsplash image with your office event photo if needed */}
        <img
          src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80"
          alt="Office meeting room"
          className={styles.contactImage}
        />
      </div>
    </section>
  );
}
