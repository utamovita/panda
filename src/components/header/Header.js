import React from "react"
import Minicart from "./Minicart"
import Nav from "./Nav"
import Logo from "./Logo"

const Header = () => {
  return (
    <header className="header">
      <Nav />
      <Logo />
      <Minicart />
    </header>
  )
}

export default Header
