import React from "react"
import { Link } from "gatsby"
import LogoSvg from "../components/svg/logosvg"
import NavbarMobile from "./navbarMobile"
import Navbar from "./navbar"

const Header = ({ navbar }) => {
  return (
    <nav className="navbar " role="navigation" aria-label="main navigation">
      <div className="navbar-item">
        <Link to="/">
          <LogoSvg className="logo"></LogoSvg>
        </Link>
      </div>
      <NavbarMobile navbar={navbar} />
      <Navbar navbar={navbar} />
    </nav>
  )
}

export default Header
