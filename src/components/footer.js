// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import GatsbySvg from "../components/svg/gatsbysvg"
import { Link } from "gatsby"
import React from "react"
import ScrollTop from "../components/scrollTopButton"

const Footer = () => {
  return (
    <footer className="footer has-text-centered">
      <ScrollTop></ScrollTop>
      <nav
        className="breadcrumb has-bullet-separator is-centered has-text-weight-semibold"
        aria-label="breadcrumbs"
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="https://github.com/ErwanEL/" target="_blank">
              Github
            </a>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* <p>home • github • contact</p> */}
      <div className="has-text-centered">
        <img
          className="mr-5"
          src={"/made-with-bulma.png"}
          alt="Static image"
          width="128"
          height="24"
        />
        <GatsbySvg className="mr-3" width="106px" height="28px"></GatsbySvg>
        {/* <img
          className="mr-5"
          src={"/netlifycms.png"}
          alt="Static image"
          width="120"
          height="24"
        /> */}
      </div>
    </footer>
  )
}

export default Footer
