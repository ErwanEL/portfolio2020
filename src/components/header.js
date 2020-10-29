import React, { useState } from "react"
import { Link } from "gatsby"
import { globalHistory } from "@reach/router"
import MaltSvg from "../components/svg/maltsvg"
import LogoSvg from "../components/svg/logosvg"

const Header = ({ navbar }) => {
  const path = globalHistory.location.pathname
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => setMenu(!menu)
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div>
        {/* <Link className="navbar-item logo has-text-weight-bold" to="/">
          EL.
        </Link> */}
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

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${menu && "is-active"}`}
      >
        <div className="navbar-start is-hidden-desktop">
          <Link className="navbar-item link link-is-active" to="/">
            {navbar.home}
          </Link>
          <Link
            className={`navbar-item link ${
              path === "/freelance/" && "link-is-active"
            }`}
            to="/freelance/"
          >
            {navbar.freelance}
          </Link>

          <Link
            className={`navbar-item link ${
              path === "/learning/" && "link-is-active"
            }`}
            to="/learning/"
          >
            {navbar.ressources}
          </Link>
          <Link
            className={`navbar-item link ${
              path === "/skills/" && "link-is-active"
            }`}
            to="/skills/"
          >
            {navbar.skills}
          </Link>
          <Link
            className={`navbar-item link ${
              path === "/projects/" && "link-is-active"
            }`}
            to="/projects/"
          >
            {navbar.projects}
          </Link>
          <Link
            className={`navbar-item link ${
              path === "/contact/" && "link-is-active"
            }`}
            to="/contact/"
          >
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
      <div className="navbar-end is-hidden-touch">
        <Link
          className={`navbar-item link ${path === "/" && "link-is-active"}`}
          to="/"
        >
          {navbar.home}
        </Link>
        <Link
          className={`navbar-item link ${
            path === "/freelance/" && "link-is-active"
          }`}
          to="/freelance/"
        >
          {navbar.freelance}
        </Link>
        <Link
          className={`navbar-item link ${
            path === "/learning/" && "link-is-active"
          }`}
          to="/learning/"
        >
          {navbar.ressources}
        </Link>
        <Link
          className={`navbar-item link ${
            path === "/skills/" && "link-is-active"
          }`}
          to="/skills/"
        >
          {navbar.skills}
        </Link>
        <Link
          className={`navbar-item link ${
            path === "/projects/" && "link-is-active"
          }`}
          to="/projects/"
        >
          {navbar.projects}
        </Link>
        <Link
          className={`navbar-item link ${
            path === "/contact/" && "link-is-active"
          }`}
          to="/contact/"
        >
          {navbar.contact}
        </Link>
        <a
          href="https://github.com/ErwanEL/"
          target="_blank"
          className="navbar-item githubLink ml-5-desktop "
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
    </nav>
  )
}

export default Header
