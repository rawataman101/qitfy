import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import Button from "../Button/Button";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="/">
        <Logo />
      </a>
      <Searchbar placeholder={"Search a album of your choice"} />
      <Button children={"Give Feedback"} />
    </nav>
  );
}

export default Navbar;
