import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import JamstackSvg from "../components/svg/jamstacksvg"
import TreehouseSvg from "../components/svg/treehousesvg"
import FccSvg from "../components/svg/fccsvg"

const LearningPage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.seo} />
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <h1 className="title">
                  <span className="mate">📘</span>
                  {frontmatter.seo}.
                </h1>
                <div className="content">
                  <hr style={{ background: "#F0047F" }} className="mini" />
                  <div className="svg">
                    <JamstackSvg
                      height={45}
                      className="skillsSvg"
                    ></JamstackSvg>
                  </div>
                  <p className="subtitle-mod">{frontmatter.jamstack}</p>
                  <p className="subtitle">
                    <a
                      className="jamstack-link"
                      href="https://www.hauteculture.com/"
                      target="_blank"
                    >
                      {frontmatter.jamstackLink}
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
      <section
        id="workflow"
        className="hero is-medium"
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
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
                    <p>{frontmatter.title2}</p>
                  </h1>
                  <div className="svg">
                    <TreehouseSvg className="skillsSvg mr-2"></TreehouseSvg>
                    <FccSvg className="skillsSvg"></FccSvg>
                    <p className="subtitle-mod">
                      {" "}
                      {frontmatter.otherRessources}{" "}
                      <a
                        className="treehouse-link"
                        href="https://teamtreehouse.com/erwanel"
                        target="_blank"
                      >
                        {frontmatter.treehouseLink}
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
    markdownRemark(frontmatter: { slug: { eq: "/learning" } }) {
      frontmatter {
        slug
        seo
        jamstack
        jamstackLink
        title2
        otherRessources
        treehouseLink
      }
    }
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
