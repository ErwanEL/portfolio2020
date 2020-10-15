import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import UpworkSvg from "../components/svg/upworksvg"
import YAMLDataEn from "../content/en-content.yaml"

const FreelancePage = ({ data }) => {
  return (
    <Layout>
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <div className="content">
                  <h1 className="title">
                    {/* <span className="mate">♾</span> */}
                    <span className="mate">🥬</span>
                    {YAMLDataEn.freelance.title}
                  </h1>
                  <hr style={{ background: "#6FDA44" }} className="mini" />
                  <UpworkSvg height={40}></UpworkSvg>
                  <p className="subtitle-mod">
                    {YAMLDataEn.freelance.upworkSection.upworkContent}{" "}
                    <a
                      className="upwork-link"
                      href="https://www.upwork.com/o/profiles/users/_~01b8a43c80d62b95bb"
                      target="_blank"
                    >
                      {YAMLDataEn.freelance.upworkSection.upworkProfileLink}
                    </a>
                  </p>
                </div>
              </div>
              <div className="column is-half">
                <Img
                  className="free image"
                  fluid={data.upwork.childImageSharp.fluid}
                  alt="Upwork contracts"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="hero is-medium">
        <div
          className="hero-body"
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <Img
                  className="free image"
                  fluid={data.etmg.childImageSharp.fluid}
                  alt="Etmg"
                />
              </div>
              <div className="column is-half">
                <div className="content">
                  <h1 className="title">
                    Etmg
                    <p>{/* <UpworkSvg></UpworkSvg> */}</p>
                  </h1>
                  <p className="subtitle-mod">
                    {YAMLDataEn.freelance.etmgSection.etmgContent}{" "}
                    <a
                      className="etmg-link"
                      href="http://etmg-world.com"
                      target="_blank"
                    >
                      Etmg-World
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    etmg: file(relativePath: { eq: "images/freelance/etmg.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    upwork: file(relativePath: { eq: "images/freelance/upwork.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default FreelancePage
