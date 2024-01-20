import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
import HeaderButton from "./HeaderButton";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <HeaderLogo />
      </div>
      <div className="header__search">
        <HeaderSearch />
      </div>
      <div className="header__button">
        <HeaderButton />
      </div>
    </div>
  );
}

export default Header;
