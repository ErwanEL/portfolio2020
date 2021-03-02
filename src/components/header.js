import { Link } from "gatsby"
import Navbar from "./navbar"
import NavbarMobile from "./navbarMobile"
import React from "react"

const Header = () => {
  return (
    <nav className="navbar " role="navigation" aria-label="main navigation">
      {/* <div className="navbar-brand "> */}
      <Link className="logo navbar-item" to="/">
        {/* <LogoSvg className="logo"></LogoSvg> */}ErwanEL
      </Link>
      {/* </div> */}
      <NavbarMobile />
      <Navbar />
    </nav>
  )
}

export default Header
