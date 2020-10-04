import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

import TreehouseSvg from "../components/svg/treehousesvg"
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
                    <p>My learning journey.</p>
                  </h1>
                  <hr style={{ background: "#5FCF80" }} className="mini" />
                  <div className="svg">
                    <TreehouseSvg className="skillsSvg"></TreehouseSvg>
                  </div>
                  <p className="subtitle-mod">
                    I consider myself as a self-taught developer. Here are some
                    great ressources that I used at the beginning of my
                    learning.
                    <p>
                      {" "}
                      I started my introduction into web development with
                      Treehouse. See more at{" "}
                      <a
                        className="treehouse-link"
                        href="http://etmg-world.com"
                        target="_blank"
                      >
                        TreeHouse
                      </a>
                    </p>
                  </p>
                </div>
              </div>
              <div className="column is-half">
                <Img
                  className="free image"
                  fluid={data.treehouse.childImageSharp.fluid}
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
                      fluid={data.codecademy.childImageSharp.fluid}
                      alt="Codecademy"
                    />
                  </div>
                  <div className="child1 child2">
                    <Img
                      className="free image"
                      fluid={data.fcc.childImageSharp.fluid}
                      alt="Freecodecamp"
                    />
                  </div>
                </div>
                {/* <Img
                  className="free image"
                  fluid={data.vscode.childImageSharp.fluid}
                  alt="Vscode"
                /> */}
              </div>
              <div className="column is-half has-text-right">
                <div className="content">
                  <h1 className="title">
                    <p>Other ressources.</p>
                  </h1>
                  <div className="svg">
                    <CodecademySvg className="skillsSvg mr-2"></CodecademySvg>
                    <FccSvg className="skillsSvg"></FccSvg>
                    <p className="subtitle-mod">
                      {" "}
                      See more about CodeCademy and FreeCodeCamp{" "}
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
