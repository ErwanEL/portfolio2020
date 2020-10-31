import React, { useState } from "react"
import { Link } from "gatsby"
import MaltSvg from "../components/svg/maltsvg"

const Navbar = ({ navbar }) => {
  return (
    <div className="navbar-end is-hidden-touch">
      <Link
        className={`navbar-item link `}
        activeClassName="link-is-active"
        to="/"
      >
        {navbar.home}
      </Link>
      <Link
        className={`navbar-item link`}
        activeClassName="link-is-active"
        to="/freelance/"
      >
        {navbar.freelance}
      </Link>
      <Link
        className={`navbar-item link `}
        activeClassName="link-is-active"
        to="/learning/"
      >
        {navbar.ressources}
      </Link>
      <Link
        className={`navbar-item link`}
        activeClassName="link-is-active"
        to="/skills/"
      >
        {navbar.skills}
      </Link>
      <Link
        className={`navbar-item link`}
        activeClassName="link-is-active"
        to="/projects/"
      >
        {navbar.projects}
      </Link>
      <Link
        className={`navbar-item link`}
        activeClassName="link-is-active"
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
  )
}

export default Navbar
