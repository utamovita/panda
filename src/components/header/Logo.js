import React from "react"

const logo = `${process.env.PUBLIC_URL}/assets/images/icons/logo.svg`

const Logo = () => {
  return (
    <a href="https://pandagroup.co/">
      <img src={logo} alt="panda group logo" className="header__logo" />
    </a>
  )
}

export default Logo
