import React, { useState } from "react"

import EspSvg from "../components/svg/espsvg"
import { Link } from "gatsby"
import MaltSvg from "../components/svg/maltsvg"
import UsaSvg from "../components/svg/usasvg"
import { globalHistory } from "@reach/router"

const NavbarMobile = ({ navbar }) => {
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => setMenu(!menu)
  const path = globalHistory.location.pathname

  return (
    <div>
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
            href="https://blog.erwanel.com"
            className="navbar-item is-light ml-5-desktop "
          >
            <strong>Blog</strong>
          </a>
          <a
            href="https://github.com/ErwanEL/"
            target="_blank"
            className="navbar-item githubLink "
          >
            <i className="fab fa-2x fa-github"></i>
          </a>
          <a
            className="navbar-item githubLink"
            href="https://www.malt.fr/profile/erwanleblois"
            target="_blank"
          >
            <MaltSvg></MaltSvg>
          </a>
          <a
            className="navbar-item githubLink"
            href="https://t.me/ErwanEL"
            target="_blank"
          >
            <i style={{ color: "#1e96c8" }} class="fab fa-2x fa-telegram"></i>
          </a>
          <a className="navbar-item" href={`https://es.erwanel.com${path}`}>
            <EspSvg />
          </a>
          <a className="navbar-item" href={`https://erwanel.com${path}`}>
            <UsaSvg />
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavbarMobile
