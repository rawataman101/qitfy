import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/search_icon.svg";
import styles from "./Searchbar.module.css";
function Searchbar({ placeholder }) {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className={styles.searchbar} onSubmit={onSubmit}>
      <input
        className={styles.searchbar__input}
        placeholder={placeholder}
        required
      />
      <button className={styles.searchbar__button} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}

export default Searchbar;
