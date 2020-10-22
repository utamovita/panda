/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"

const Nav = () => {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "#xd" },
    { name: "Products", href: "#" },
    { name: "My Account", href: "#" },
    { name: "Customer Service", href: "#" },
  ]

  return (
    <nav className={`nav${open ? " opened" : ""}`}>
      <button
        type="button"
        className="hamburger"
        onClick={() => setOpen(!open)}
      >
        <span className="hamburger__bar" />
        <span className="hamburger__bar" />
        <span className="hamburger__bar" />
        <span className="hamburger__bar" />
      </button>
      <ul className="menu">
        {navLinks.map((link) => (
          <li className="menu__item" key={link.name}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
