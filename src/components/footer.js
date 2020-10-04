import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import GatsbySvg from "../components/svg/gatsbysvg"
import ScrollTop from "../components/scrollTopButton"

const Footer = () => {
  return (
    <footer className="footer has-text-centered">
      <ScrollTop></ScrollTop>
      <nav
        class="breadcrumb has-bullet-separator is-centered has-text-weight-semibold"
        aria-label="breadcrumbs"
      >
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Github</a>
          </li>
          <li>
            <a href="#">Contact</a>
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
      </div>
    </footer>
  )
}

export default Footer
