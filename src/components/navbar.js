import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl"

import LinkedInSvg from "../components/svg/linkedinsvg"
import LocaleToggle from "../components/localeToggle"
import MaltSvg from "../components/svg/maltsvg"
import React from "react"

const Navbar = () => {
  return (
    <div className="navbar-end is-hidden-touch">
      <Link
        className={`navbar-item link `}
        activeClassName="link-is-active"
        to="/"
      >
        <FormattedMessage id="header.home" />
      </Link>
      <Link
        className={`navbar-item link`}
        activeClassName="link-is-active"
        to="/freelance/"
      >
        <FormattedMessage id="header.freelance" />
      </Link>
      <Link
        className={`navbar-item link `}
        activeClassName="link-is-active"
        to="/resources/"
      >
        <FormattedMessage id="header.ressources" />
      </Link>
      <Link
        className={`navbar-item link`}
        activeClassName="link-is-active"
        to="/skills/"
      >
        <FormattedMessage id="header.skills" />
      </Link>
      <Link
        className={`navbar-item link`}
        activeClassName="link-is-active"
        to="/projects/"
      >
        <FormattedMessage id="header.projects" />
      </Link>
      <Link
        className={`navbar-item link`}
        activeClassName="link-is-active"
        to="/contact/"
      >
        <FormattedMessage id="header.contact" />
      </Link>

      <div
        style={{
          borderLeft: "1px solid grey",
          height: "50%",
          margin: "auto 5px",
        }}
      ></div>

      <a
        href="https://blog.erwanel.com"
        style={{ margin: "auto 10px" }}
        className="test  navbar-item button is-light ml-5-desktop "
      >
        <strong>Blog</strong>
      </a>

      <a
        href="https://github.com/ErwanEL/"
        target="_blank"
        className="navbar-item githubLink ml-5-desktop "
      >
        <i className="fab fa-2x fa-github"></i>
      </a>
      <a
        className="navbar-item githubLink"
        href="https://www.malt.fr/profile/erwanleblois"
        target="_blank"
      >
        <MaltSvg />
      </a>
      <a
        className="navbar-item githubLink"
        href="https://t.me/ErwanEL"
        target="_blank"
      >
        <i style={{ color: "#1e96c8" }} className="fab fa-2x fa-telegram"></i>
      </a>
      <a
        className="navbar-item githubLink"
        href="https://www.linkedin.com/in/erwan-leblois-9a1b80142/"
      >
        <LinkedInSvg />
      </a>
      <div
        style={{
          borderLeft: "1px solid grey",
          height: "50%",
          margin: "auto 5px",
        }}
      ></div>
      <LocaleToggle />
    </div>
  )
}

export default injectIntl(Navbar)
