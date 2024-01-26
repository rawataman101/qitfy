import React from "react";
import styles from "./HeroSection.module.css";
import HeroImage from "../../assets/hero_image.png";
function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroSection__section}>
        <div className={styles.heroSection__sectionText}>
          <div className={styles.heroSection__sectionText1}>
            100 Thousand Songs, ad-free
          </div>
          <div className={styles.heroSection__sectionText2}>
            Over thousands podcast episodes
          </div>
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
