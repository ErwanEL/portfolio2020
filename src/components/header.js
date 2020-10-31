import React from "react"
import NavbarMobile from "./navbarMobile"
import Navbar from "./navbar"

const Header = ({ navbar }) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <NavbarMobile navbar={navbar} />
      <Navbar navbar={navbar} />
    </nav>
  )
}

export default Header
