import React from "react";
import Minicart from "./Minicart";
import Nav from "./Nav";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <Nav />
        <Logo />
        <Minicart />
      </div>
      <div className="header__bottom">
        <h1 className="header__title">Panda Collection</h1>
      </div>
    </header>
  );
};

export default Header;
