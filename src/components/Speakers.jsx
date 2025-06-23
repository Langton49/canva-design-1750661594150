import React from "react";
import styles from "../styles/Speakers.module.css";

// Array of speaker details for easy future modification
const speakers = [
  {
    name: "Leslie Boatwright",
    title: "Head of Marketing",
    company: "The Hobbibox",
    date: "September 16",
    // Replace this Unsplash with your own preferred image as needed
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&q=80&facepad=2.5"
  },
  {
    name: "Nicholas Newark",
    title: "Director of Design",
    company: "Studio Ralla",
    date: "September 17",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&q=80&facepad=2.5"
  },
  {
    name: "Kin Gyun",
    title: "Founder and CEO",
    company: "The Treasurebox Online",
    date: "September 18",
    image:
      "https://images.unsplash.com/photo-1519340333755-c35ae8ff9e8c?auto=format&fit=facearea&w=400&q=80&facepad=2.5"
  }
];

export default function Speakers() {
  return (
    <section className={styles.speakersSection}>
      <h2 className={styles.speakersHeading}>Our 2025 Keynote Speakers</h2>
      <div className={styles.speakerCardsWrap}>
        {speakers.map((speaker) => (
          <div className={styles.speakerCard} key={speaker.name}>
            {/* Replace the photo URL with your speaker's real image as needed */}
            <img
              src={speaker.image}
              alt={speaker.name}
              className={styles.speakerPhoto}
            />
            <h3 className={styles.speakerName}>{speaker.name}</h3>
            <div className={styles.speakerInfo}>{speaker.title}</div>
            <div className={styles.speakerInfo}>{speaker.company}</div>
            <div className={styles.speakerDate}>{speaker.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
