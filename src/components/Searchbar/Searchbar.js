import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Searchbar.module.css";
function Searchbar() {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="styles.wrapper" onSubmit={onSubmit}>
      <input placeholder={placeholder} required />
      <button type="submit">Search</button>
    </form>
  );
}

export default Searchbar;
