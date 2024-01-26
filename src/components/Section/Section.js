import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import CircularProgress from "@mui/material/CircularProgress";

function Section({ title, data, type }) {
  const [corouselToggle, setCarouselToggle] = useState(false);
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
            <div>Caraousel</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Section;
