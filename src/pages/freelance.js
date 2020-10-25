import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import UpworkSvg from "../components/svg/upworksvg"

const FreelancePage = ({ data }) => {
  return (
    <Layout>
      <SEO title="My freelance experience" />
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <div className="content">
                  <h1 className="title">
                    <span className="mate">🥬</span>
                    My Freelance Experience.
                  </h1>
                  <hr style={{ background: "#6FDA44" }} className="mini" />
                  <UpworkSvg height={40}></UpworkSvg>
                  <p className="subtitle-mod">
                    I am available on the Upwork platform. Here are some gigs
                    that I have completed. See more at{" "}
                    <a
                      className="upwork-link"
                      href="http://etmg-world.com"
                      target="_blank"
                    >
                      My Upwork profile.
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
                  <h1 className="title">Etmg</h1>
                  <p className="subtitle-mod">
                    Here is a wordpress project I worked on. See more at{" "}
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
