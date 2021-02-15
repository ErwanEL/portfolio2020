import EspSvg from "../components/svg/espsvg"
import FrSvg from "../components/svg/frsvg"
import MaltSvg from "../components/svg/maltsvg"
import React from "react"
import UsaSvg from "../components/svg/usasvg"
import { globalHistory } from "@reach/router"

const Navbar = ({ navbar }) => {
  const path = globalHistory.location.pathname
  const domain = "https://fr.erwanel.com"
  return (
    <div className="navbar-end is-hidden-touch">
      <a
        className={`navbar-item link `}
        activeClassName="link-is-active"
        href={`${domain}`}
      >
        {navbar.home}
      </a>
      <a
        className={`navbar-item link`}
        activeClassName="link-is-active"
        href={`${domain}/freelance/`}
      >
        {navbar.freelance}
      </a>
      <a
        className={`navbar-item link `}
        activeClassName="link-is-active"
        href={`${domain}/learning/`}
      >
        {navbar.ressources}
      </a>
      <a
        className={`navbar-item link`}
        activeClassName="link-is-active"
        href={`${domain}/skills/`}
      >
        {navbar.skills}
      </a>
      <a
        className={`navbar-item link`}
        activeClassName="link-is-active"
        href={`${domain}/projects/`}
      >
        {navbar.projects}
      </a>
      <a
        className={`navbar-item link`}
        activeClassName="link-is-active"
        href={`${domain}/contact/`}
      >
        {navbar.contact}
      </a>

      <div
        style={{
          borderLeft: "1px solid grey",
          height: "50%",
          margin: "auto 5px",
        }}
      ></div>
      {/* <a
        // style={{ cursor: "not-allowed" }}
        className={`test navbar-item`}
        activeClassName="is-active"
      > */}
      <a
        style={{ cursor: "not-allowed", margin: "auto 10px" }}
        disabled
        className="test  navbar-item button is-light ml-5-desktop "
      >
        <strong>Blog</strong>
      </a>
      {/* </a> */}

      <a
        href="https://github.com/ErwanEL/"
        target="_blank"
        className="navbar-item githuba ml-5-desktop "
      >
        <i className="fab fa-2x fa-github"></i>
      </a>
      <a
        className="navbar-item githuba"
        href="https://www.malt.fr/profile/erwanleblois"
        target="_blank"
      >
        <MaltSvg></MaltSvg>
      </a>
      <a
        className="navbar-item githuba"
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

export default Navbar
