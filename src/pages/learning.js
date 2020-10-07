import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

import TreehouseSvg from "../components/svg/treehousesvg"
import JamstackSvg from "../components/svg/jamstacksvg"

import FccSvg from "../components/svg/fccsvg"
import CodecademySvg from "../components/svg/codecademysvg"

const LearningPage = ({ data }) => {
  return (
    <Layout>
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <div className="content">
                  <h1 className="title">
                    <span className="mate">📘</span>
                    The ressources I use.
                  </h1>
                  <hr style={{ background: "#F0047F" }} className="mini" />
                  <div className="svg">
                    <JamstackSvg className="skillsSvg"></JamstackSvg>
                  </div>
                  <p className="subtitle-mod">
                    I keep myself informed about the Jamstack.
                  </p>
                  <p className="subtitle">
                    <a
                      className="jamstack-link"
                      href="https://www.hauteculture.com/"
                      target="_blank"
                    >
                      See more about the Jamstack.
                    </a>
                  </p>
                </div>
              </div>
              <div className="column is-half">
                <Img
                  className="free image"
                  fluid={data.jamstack.childImageSharp.fluid}
                  alt="Treehouse"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section id="workflow" className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <div className="parent">
                  <div className="child1">
                    <Img
                      className="free image"
                      fluid={data.fcc.childImageSharp.fluid}
                      alt="Codecademy"
                    />
                  </div>
                  <div className="child1 child2">
                    <Img
                      className="free image"
                      fluid={data.treehouse.childImageSharp.fluid}
                      alt="Freecodecamp"
                    />
                  </div>
                </div>
              </div>
              <div className="column is-half has-text-right">
                <div className="content">
                  <h1 className="title">
                    <p>Other ressources.</p>
                  </h1>
                  <div className="svg">
                    <TreehouseSvg className="skillsSvg mr-2"></TreehouseSvg>
                    <FccSvg className="skillsSvg"></FccSvg>
                    <p className="subtitle-mod">
                      {" "}
                      I started my introduction into web development with
                      Treehouse. See more at{" "}
                      <a
                        className="treehouse-link"
                        href="https://teamtreehouse.com/erwanel"
                        target="_blank"
                      >
                        TreeHouse
                      </a>
                    </p>
                  </div>
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
    fcc: file(relativePath: { eq: "images/learning/fcc.PNG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jamstack: file(relativePath: { eq: "images/learning/jamstack.PNG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    treehouse: file(relativePath: { eq: "images/learning/treehouse.PNG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    codecademy: file(relativePath: { eq: "images/learning/codecademy.PNG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default LearningPage
