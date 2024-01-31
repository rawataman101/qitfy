import React from "react";
import styles from "./Card.module.css";
import { Tooltip, Chip } from "@mui/material";
import { Link } from "react-router-dom";

function Card({ data, type }) {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { id, title, follows, image, slug, songs } = data;
        return (
          <Tooltip title={`${songs?.length} songs`} arrow placement="top">
            <Link to={`/songs/?albumId=${id}`}>
              <div className={styles.wrapper}>
                <div className={styles.card}>
                  <img src={image} alt="song" loading="lazy" />
                  <div className={styles.banner}>
                    <Chip
                      label={`${follows} Follows`}
                      size="small"
                      className={styles.chip}
                    />
                  </div>
                </div>
                <div className={styles.titleWrapper}>
                  <p>{title}</p>
                </div>
              </div>
            </Link>
          </Tooltip>
        );
      }
      case "song": {
        const { id, title, artists, likes, image } = data;
        return (
          <Tooltip title={`${likes} songs`} arrow placement="top">
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={image} alt="song" loading="lazy" />
                <div className={styles.banner}>
                  <Chip
                    label={`${likes} Likes`}
                    size="small"
                    className={styles.chip}
                  />
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
}

export default Card;
