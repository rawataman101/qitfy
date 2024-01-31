import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import CircularProgress from "@mui/material/CircularProgress";
import Carousel from "../Carousel/Carousel";
import { useEffect } from "react";
import Filters from "../Filters/Filters";

function Section({ title, data, filterSource, type }) {
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  const [corouselToggle, setCarouselToggle] = useState(true);
  const handleToggle = () => {
    setCarouselToggle((preState) => !preState);
  };
  useEffect(() => {
    if (filterSource) {
      filterSource().then((response) => {
        const { data } = response;
        setFilters([...filters, ...data]);
      });
    }
  }, []);
  const showFilters = filters.length > 1;
  const cardsToRender = data.filter((card) =>
    showFilters && selectedFilterIndex !== 0
      ? card.genre.key === filters[selectedFilterIndex].key
      : card
  );
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        {!showFilters && (
          <h4 className={styles.toggleText} onClick={handleToggle}>
            {!corouselToggle ? "Collapse" : "Show All"}
          </h4>
        )}
      </div>
      {showFilters && (
        <div className={styles.filterWrapper}>
          <Filters
            filters={filters}
            selectedFilterIndex={selectedFilterIndex}
            setSelectedFilterIndex={setSelectedFilterIndex}
          />
        </div>
      )}
      {cardsToRender.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!corouselToggle ? (
            <div className={styles.wrapper}>
              {cardsToRender.map((ele) => (
                <div key={ele.id}>
                  <Card data={ele} type={type} />
                </div>
              ))}
            </div>
          ) : (
            <Carousel
              data={cardsToRender}
              renderComponent={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Section;
