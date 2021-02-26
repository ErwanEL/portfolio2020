import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl"

import EspSvg from "../components/svg/espsvg"
import FrSvg from "../components/svg/frsvg"
// import { Link } from "gatsby"
import MaltSvg from "../components/svg/maltsvg"
import React from "react"
import UsaSvg from "../components/svg/usasvg"
import { globalHistory } from "@reach/router"

const Navbar = ({ navbar, intl }) => {
  const path = globalHistory.location.pathname

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
        to="/learning/"
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
      {/* <Link
        // style={{ cursor: "not-allowed" }}
        className={`test navbar-item`}
        activeClassName="is-active"
      > */}
      <a
        href="https://blog.erwanel.com"
        style={{ margin: "auto 10px" }}
        className="test  navbar-item button is-light ml-5-desktop "
      >
        <strong>Blog</strong>
      </a>
      {/* </Link> */}

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
        <MaltSvg></MaltSvg>
      </a>
      <a
        className="navbar-item githubLink"
        href="https://t.me/ErwanEL"
        target="_blank"
      >
        <i style={{ color: "#1e96c8" }} class="fab fa-2x fa-telegram"></i>
      </a>

      <div
        style={{
          borderLeft: "1px solid grey",
          height: "50%",
          margin: "auto 5px",
        }}
      ></div>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          <FrSvg width={20} height={20} />
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item pr-0" href={`https://erwanel.com${path}`}>
            <UsaSvg width={20} height={20} />
          </a>
          <a class="navbar-item pr-0" href={`https://es.erwanel.com${path}`}>
            <EspSvg width={20} height={20} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default injectIntl(Navbar)
