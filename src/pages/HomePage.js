import React from "react";
import styles from "./HomePage.module.css";
import HeroSection from "../components/HeroSection/HeroSection";
import { useOutletContext } from "react-router";
import Section from "../components/Section/Section";

function HomePage() {
  const { data } = useOutletContext();
  const { topAlbums, newAlbums, songs } = data;
  return (
    <div>
      <HeroSection />
      <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
      </div>
    </div>
  );
}

export default HomePage;
