import React, { useState } from "react"
import { Link } from "gatsby"
import { globalHistory } from "@reach/router"
import MaltSvg from "../components/svg/maltsvg"
import LogoSvg from "../components/svg/logosvg"

const Header = () => {
  const path = globalHistory.location.pathname
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => setMenu(!menu)

  return (
    <nav className="navbar " role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        {/* <Link className="navbar-item logo has-text-weight-bold" to="/">
          EL.
        </Link> */}
        <LogoSvg className="logo"></LogoSvg>
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
            Home
          </Link>
          <Link
            className={`navbar-item link ${
              path === "/freelance/" && "link-is-active"
            }`}
            to="/freelance/"
          >
            Freelance
          </Link>

          <Link
            className={`navbar-item link ${
              path === "/learning/" && "link-is-active"
            }`}
            to="/learning/"
          >
            Ressources
          </Link>
          <Link
            className={`navbar-item link ${
              path === "/skills/" && "link-is-active"
            }`}
            to="/skills/"
          >
            Skills
          </Link>
          <Link
            className={`navbar-item link ${
              path === "/projects/" && "link-is-active"
            }`}
            to="/projects/"
          >
            Projects
          </Link>
          <Link
            className={`navbar-item link ${
              path === "/contact/" && "link-is-active"
            }`}
            to="/contact/"
          >
            Contact
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
        </div>
      </div>

      <div className="navbar-end is-hidden-touch">
        <Link
          className={`navbar-item link ${path === "/" && "link-is-active"}`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`navbar-item link ${
            path === "/freelance/" && "link-is-active"
          }`}
          to="/freelance/"
        >
          Freelance
        </Link>
        <Link
          className={`navbar-item link ${
            path === "/learning/" && "link-is-active"
          }`}
          to="/learning/"
        >
          Ressources
        </Link>
        <Link
          className={`navbar-item link ${
            path === "/skills/" && "link-is-active"
          }`}
          to="/skills/"
        >
          Skills
        </Link>
        <Link
          className={`navbar-item link ${
            path === "/projects/" && "link-is-active"
          }`}
          to="/projects/"
        >
          Projects
        </Link>
        <Link
          className={`navbar-item link ${
            path === "/contact/" && "link-is-active"
          }`}
          to="/contact/"
        >
          Contact
        </Link>
        <a
          href="https://github.com/ErwanEL/"
          target="_blank"
          className="navbar-item githubLink ml-5-desktop "
        >
          <i className="fab fa-2x fa-github"></i>
        </a>

        <a className="navbar-item githubLink ml-5-desktop ">
          <MaltSvg></MaltSvg>
        </a>
      </div>
    </nav>
  )
}

export default Header
