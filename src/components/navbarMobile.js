import React, { useState } from "react"

import EspSvg from "../components/svg/espsvg"
import { Link } from "gatsby"
// import { a } from "gatsby"
import MaltSvg from "../components/svg/maltsvg"
import UsaSvg from "../components/svg/usasvg"
import { globalHistory } from "@reach/router"

const NavbarMobile = ({ navbar }) => {
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => setMenu(!menu)
  const path = globalHistory.location.pathname

  const domain = "https://erwanel.com"

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
          <a className={`navbar-item link`} href={`${domain}`}>
            {navbar.home}
          </a>
          <a className={`navbar-item link`} href={`${domain}/freelance/`}>
            {navbar.freelance}
          </a>

          <a className={`navbar-item link`} href={`${domain}/resources/`}>
            {navbar.ressources}
          </a>
          <a className={`navbar-item link`} href={`${domain}/skills/`}>
            {navbar.skills}
          </a>
          <a className={`navbar-item link`} href={`${domain}/projects/`}>
            {navbar.projects}
          </a>
          <a className={`navbar-item link`} href={`${domain}/contact/`}>
            {navbar.contact}
          </a>
          <Link
            style={{
              background: "#ff7b00",
              color: "white",
            }}
            className="navbar-item is-light ml-5-desktop"
            to="/"
          >
            <strong>Blog</strong>
          </Link>
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
          <a className="navbar-item" href={`${domain}/es/`}>
            <EspSvg />
          </a>
          <a className="navbar-item" href={`${domain}/en/`}>
            <UsaSvg />
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavbarMobile
