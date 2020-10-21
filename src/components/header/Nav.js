/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

const Nav = () => {
  const [state, setState] = useState({
    open: false,
  });

  return (
    <nav className={`nav${state.open ? " opened" : ""}`}>
      <div className="hamburger__box">
        <div
          className="hamburger"
          onClick={() => setState({ open: !state.open })}
        >
          <span className="hamburger__bar"/>
          <span className="hamburger__bar"/>
          <span className="hamburger__bar"/>
          <span className="hamburger__bar"/>
        </div>
      </div>
      <ul className="menu">
        <li className="menu__item">
          <a href="#">Home</a>
        </li>
        <li className="menu__item">
          <a href="#">Products</a>
        </li>
        <li className="menu__item">
          <a href="#">My Account</a>
        </li>
        <li className="menu__item">
          <a href="#">Customer Service</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
