import React from "react";
//styles
import {Wrap} from './index.styles';
import "./styles.css";
//images
import LogoMobile from "../assets/image/LogoMobile";
import BurgerIcon from "../assets/image/BurgerIcon";

function Header() {
  return (
    <Wrap>
      <header className="wrap-content">
        <div className="wrap-logo">
          <LogoMobile />
          <BurgerIcon />
        </div>
      </header>
    </Wrap>
    
  );
}

export default Header;
