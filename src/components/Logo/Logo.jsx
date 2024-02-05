import React from "react";
import LogoImage from "../../assets/qtify_logo.png";
import { useNavigate } from "react-router";

function Logo() {
  const history = useNavigate();
  const handleToLanding = () => {
    history("/");
  };

  return (
    <img src={LogoImage} alt="logo" width={67} onClick={handleToLanding} />
  );
}

export default Logo;
