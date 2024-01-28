import React, { useEffect, useState } from "react";
import styles from "./SongsSection.module.css";
import { ReactComponent as BackButton } from "../assets/back.svg";
import Chip from "@mui/material/Chip";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import LibraryMusic from "@mui/icons-material/LibraryMusicOutlined";
import { useSearchParams } from "react-router-dom";
import { useNavigate, useOutletContext } from "react-router";

function SongsSection() {
  const [album, setAlbum] = useState([]);
  const [duration, setDuration] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const albumId = searchParams.get("albumId");
  const { data } = useOutletContext();
  const { topAlbums, newAlbums, songs } = data;
  const history = useNavigate();

  const handleBack = () => {
    history("/");
  };
  const getAlbumDetail = () => {
    const res = [...topAlbums, ...newAlbums].filter(
      (album) => album.id === albumId
    );
    return res[0];
  };
  const getSongsDuration = (album) => {
    try {
      let totalTime = 0;
      album.songs.forEach((song) => (totalTime += song.durationInMs));
      const totalHours = Math.floor(totalTime / 3600000);
      const totalMinutes = Math.floor((totalTime % 3600000) / 60000);
      return `${totalHours} hr ${totalMinutes} min`;
    } catch {
      console.log("error");
    }
  };
  useEffect(() => {
    const albumDetail = getAlbumDetail();
    const totalDuration = getSongsDuration(albumDetail);
    setAlbum(albumDetail);
    setDuration(totalDuration);
  }, []);
  return (
    <div>
      <div className={styles.heroSection}>
        <BackButton className={styles.back} onClick={handleBack} />
        <div className={styles.wrapper}>
          <div className={styles.wrapper__img}>
            <img src={album?.image} alt="album" />
          </div>
          <div className={styles.wrapper__body}>
            <h2 className={styles.bodyh2}>{album?.title}</h2>
            <p className={styles.bodyp1}>{album?.description}</p>
            <p className={styles.bodyp2}>
              {album?.songs?.length} songs &#x2022; {duration} &#x2022;{" "}
              {album?.follows} Follows
            </p>
            <div className={styles.wrapper__buttons}>
              <Chip
                className={styles.shuffle}
                avatar={<ShuffleIcon className={styles.icon1} />}
                label="Shuffle"
              />

              <Chip
                className={styles.addToLibrary}
                avatar={<LibraryMusic className={styles.icon2} />}
                label="Add to library"
                variant="outlined"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.songs__wrapper}>
        <div className={styles.pages}>1. 2. 3.</div>
        <div className={styles.songsList}>
          <div className={styles.headers}>
            <p className={styles.text}>Title</p>
            <p className={styles.textArtist}>Artist</p>
            <p className={styles.text}>Duration</p>
          </div>
          <div className={styles.song}>
            <div className={styles.song__song}>
              <img
                className={styles.song__img}
                src="https://images.pexels.com/photos/1122626/pexels-photo-1122626.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                alt="cover"
              />
              <p className={styles.textsong}>Song name</p>
            </div>
            <p className={styles.textsong}>Artist name</p>
            <p className={styles.textsong}>1:59</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongsSection;
