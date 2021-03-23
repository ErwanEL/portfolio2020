import {
  FormattedMessage,
  Link,
  changeLocale,
  injectIntl,
} from "gatsby-plugin-intl"
import React, { useState } from "react"

import EspSvg from "../components/svg/espsvg"
import FrSvg from "../components/svg/frsvg"
import LinkedInSvg from "../components/svg/linkedinsvg"
import MaltSvg from "../components/svg/maltsvg"
import UsaSvg from "../components/svg/usasvg"

const NavbarMobile = ({ intl }) => {
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => setMenu(!menu)

  const languages = [
    { language: "es", flag: <EspSvg /> },
    { language: "en", flag: <UsaSvg /> },
    { language: "fr", flag: <FrSvg /> },
  ]

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
            <FormattedMessage id="header.home" />
          </Link>
          <Link className={`navbar-item link`} to="/freelance/">
            <FormattedMessage id="header.freelance" />
          </Link>

          <Link className={`navbar-item link`} to="/resources/">
            <FormattedMessage id="header.ressources" />
          </Link>
          <Link className={`navbar-item link`} to="/skills/">
            <FormattedMessage id="header.skills" />
          </Link>
          <Link className={`navbar-item link`} to="/projects/">
            <FormattedMessage id="header.projects" />
          </Link>
          <Link className={`navbar-item link`} to="/contact/">
            <FormattedMessage id="header.contact" />
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
            <MaltSvg />
          </a>
          <a
            className="navbar-item githubLink"
            href="https://t.me/ErwanEL"
            target="_blank"
          >
            <i
              style={{ color: "#1e96c8" }}
              className="fab fa-2x fa-telegram"
            ></i>
          </a>
          <a
            className="navbar-item githubLink"
            href="https://www.malt.fr/profile/erwanleblois"
            target="_blank"
          >
            <LinkedInSvg />
          </a>
          {languages
            .filter(loc => loc.language !== intl.locale)
            .map((e, i) => {
              return (
                <a
                  key={i}
                  className="navbar-item"
                  onClick={() => changeLocale(e.language)}
                >
                  {e.flag}
                </a>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default injectIntl(NavbarMobile)
