import React, { useEffect, useState } from "react";
import { ReactComponent as RightArrow } from "../../../assets/right.svg";
import styles from "./CarouselRightNavigation.module.css";
import { useSwiper } from "swiper/react";

function CarouselRightNavigation() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);
  useEffect(() => {
    console.log("right");
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  }, []);
  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
}

export default CarouselRightNavigation;