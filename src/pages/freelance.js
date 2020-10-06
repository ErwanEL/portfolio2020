import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import UpworkSvg from "../components/svg/upworksvg"

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
                    <span className="mate">♾️</span>
                    <p>My Freelance Experience</p>
                  </h1>
                  <hr style={{ background: "#3d1ca6" }} className="mini" />
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
              <div className="column is-half">
                <Img
                  className="free image"
                  fluid={data.etmg.childImageSharp.fluid}
                  alt="Etmg World"
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
                  fluid={data.upwork.childImageSharp.fluid}
                  alt="Upwork contracts"
                />
              </div>

              <div className="column is-half">
                <div className="content">
                  <h1 className="title">
                    <p>
                      <UpworkSvg></UpworkSvg>
                    </p>
                  </h1>
                  <p className="subtitle-mod">
                    I used to work on the Upwork plateform. Here are some gigs
                    that I completed. See more at{" "}
                    <a
                      className="upwork-link"
                      href="https://www.upwork.com/o/profiles/users/_~01b8a43c80d62b95bb"
                      target="_blank"
                    >
                      My Upwork profile.
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
