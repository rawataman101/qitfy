import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import HeroSection from "../components/HeroSection/HeroSection";
import { useOutletContext } from "react-router";
import Section from "../components/Section/Section";
import FaqSection from "../components/FaqSection/FaqSection";
import { fetchFaq } from "../api/api";

function HomePage() {
  const { data } = useOutletContext();
  const { topAlbums, newAlbums, songs } = data;
  const [faq, setFaq] = useState([]);
  useEffect(() => {
    async function onLoad() {
      const res = await fetchFaq();
      setFaq(res.data);
    }
    onLoad();
  }, []);
  return (
    <div>
      <HeroSection />
      <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        <FaqSection data={faq} />
      </div>
    </div>
  );
}

export default HomePage;
