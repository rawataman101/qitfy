import React from "react";
import styles from "./HeroSection.module.css";
import HeroImage from "../../assets/hero_image.png";
function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <img className={styles.heroSection__img} src={HeroImage} alt="" />
    </div>
  );
}

export default HeroSection;
