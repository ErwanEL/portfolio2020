import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

const Header = () => {
  //   const data = useStaticQuery(graphql`
  //     {
  //       logo: file(relativePath: { eq: "logo.png" }) {
  //         childImageSharp {
  //           fixed(width: 90) {
  //             ...GatsbyImageSharpFixed
  //           }
  //         }
  //       }
  //     }
  //   `)

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start"></div>
      </div>

      <div className="navbar-end">
        <a className="navbar-item link link-is-active"> Home </a>

        <a className="navbar-item link"> Freelance </a>

        <a className="navbar-item link"> Apprentissage </a>
        <a className="navbar-item link"> Compétences </a>
        <a className="navbar-item link"> Projets </a>
        <a className="navbar-item link"> Contact </a>
        <a className="navbar-item githubLink ml-5">
          <i className="fab fa-2x fa-github"></i>
        </a>
      </div>
    </nav>
  )
}

export default Header
