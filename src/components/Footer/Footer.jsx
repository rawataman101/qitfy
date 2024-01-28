import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as PlayButton } from "../../assets/play.svg";
import { ReactComponent as Player } from "../../assets/music__bar.svg";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <img
          className={styles.wrapper__img}
          src="https://pixelsao.com/wp-content/uploads/2020/05/behind-albumcover-template.jpg"
          alt="album"
        />
        <div className={styles.body}>
          <h4 className={styles.songName}>Song name</h4>
          <p className={styles.albumName}>Album cover</p>
        </div>
      </div>
      <div className={styles.playerWrapper}>
        <PlayButton className={styles.playButton} />
        <div className={styles.player}>
          <p className={styles.start}>0:00</p>
          <Player />
          <p className={styles.end}>0:00</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
