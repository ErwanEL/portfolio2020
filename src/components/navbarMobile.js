import React, { useState } from "react"
import { Link } from "gatsby"
import MaltSvg from "../components/svg/maltsvg"
import LogoSvg from "../components/svg/logosvg"

const NavbarMobile = ({ navbar }) => {
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => setMenu(!menu)
  return (
    <>
      <div>
        <div className="navbar-item">
          <Link to="/">
            <LogoSvg className="logo"></LogoSvg>
          </Link>
        </div>
        <a
          role="button"
          onClick={toggleMenu}
          className={`navbar-burger burger ${menu && "is-active"}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${menu && "is-active"}`}>
        <div className="navbar-start is-hidden-desktop">
          <Link className={`navbar-item link`} to="/">
            {navbar.home}
          </Link>
          <Link className={`navbar-item link`} to="/freelance/">
            {navbar.freelance}
          </Link>

          <Link className={`navbar-item link`} to="/learning/">
            {navbar.ressources}
          </Link>
          <Link className={`navbar-item link`} to="/skills/">
            {navbar.skills}
          </Link>
          <Link className={`navbar-item link`} to="/projects/">
            {navbar.projects}
          </Link>
          <Link className={`navbar-item link`} to="/contact/">
            {navbar.contact}
          </Link>
          <a
            href="https://github.com/ErwanEL/"
            target="_blank"
            className="navbar-item githubLink "
          >
            <i className="fab fa-2x fa-github"></i>
          </a>
          <a className="navbar-item githubLink ">
            <MaltSvg></MaltSvg>
          </a>
          <a
            className="navbar-item githubLink"
            href="https://t.me/ErwanEL"
            target="_blank"
          >
            <i style={{ color: "#1e96c8" }} class="fab fa-2x fa-telegram"></i>
          </a>
        </div>
      </div>
    </>
  )
}

export default NavbarMobile
