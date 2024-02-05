import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Logo />
      </Link>
      <Searchbar searchData={searchData} />
      <Button children={"Give Feedback"} />
    </nav>
  );
}

export default Navbar;
