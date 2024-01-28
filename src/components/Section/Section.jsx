import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import CircularProgress from "@mui/material/CircularProgress";
import Carousel from "../Carousel/Carousel";

function Section({ title, data, type }) {
  const [corouselToggle, setCarouselToggle] = useState(true);
  const handleToggle = () => {
    setCarouselToggle((preState) => !preState);
  };

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!corouselToggle ? "Collapse" : "Show All"}
        </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!corouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((ele) => (
                <div key={ele.id}>
                  <Card data={ele} type={type} />
                </div>
              ))}
            </div>
          ) : (
            <Carousel
              data={data}
              renderComponent={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Section;
