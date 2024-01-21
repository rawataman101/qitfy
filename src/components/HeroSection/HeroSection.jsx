import React from "react";
import styles from "./HeroSection.module.css";
import HeroImage from "../../assets/hero_image.png";
function HeroSection({ text1, text2 }) {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroSection__section}>
        <div className={styles.heroSection__sectionText}>
          <div className={styles.heroSection__sectionText1}>{text1}</div>
          <div className={styles.heroSection__sectionText2}>{text2}</div>
        </div>
        <img
          className={styles.heroSection__sectionImg}
          src={HeroImage}
          alt=""
        />
      </div>
    </div>
  );
}

export default HeroSection;
