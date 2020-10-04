import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import GatsbySvg from "../components/svg/gatsbysvg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>home • github • contact</p>
        <img
          className="madeWith"
          src={"/made-with-bulma.png"}
          alt="Static image"
          width="128"
          height="24"
        />
        <GatsbySvg width="106px" height="28px"></GatsbySvg>
      </div>
    </footer>
  )
}

export default Footer
