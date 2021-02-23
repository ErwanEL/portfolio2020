import { Link } from "gatsby"
import LogoSvg from "../components/svg/logosvg"
import Navbar from "./navbar"
import NavbarMobile from "./navbarMobile"
import React from "react"

const Header = ({ navbar }) => {
  return (
    <nav className="navbar " role="navigation" aria-label="main navigation">
      {/* <div className="navbar-brand "> */}
      <Link className="logo navbar-item" to="/">
        {/* <LogoSvg className="logo"></LogoSvg> */}ErwanEL
      </Link>
      {/* </div> */}
      <NavbarMobile navbar={navbar} />
      <Navbar navbar={navbar} />
    </nav>
  )
}

export default Header
