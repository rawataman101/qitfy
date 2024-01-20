import React from "react";
import "./HeaderLogo.css";
function HeaderLogo() {
  const logoSrc =
    "https://l-square-q-tify-pearl.vercel.app/static/media/hero-image.668784662a5b69d067ee.png";
  return (
    <div className="headerLogo">
      <img src={logoSrc} alt="logo" />
    </div>
  );
}

export default HeaderLogo;
