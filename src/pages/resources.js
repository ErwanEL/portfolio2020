import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl"

import FccSvg from "../components/svg/fccsvg"
import Img from "gatsby-image"
import JamstackSvg from "../components/svg/jamstacksvg"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import TreehouseSvg from "../components/svg/treehousesvg"
import { graphql } from "gatsby"

const ResourcesPage = ({ data, intl }) => {
  // const { markdownRemark } = data
  // const { frontmatter } = markdownRemark
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "resources.section.title" })}
      />
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <h1 className="title">
                  <span className="mate">📘</span>
                  <FormattedMessage id="resources.section.title" />
                </h1>
                <div className="content">
                  <hr style={{ background: "#F0047F" }} className="mini" />
                  <div className="svg">
                    <JamstackSvg
                      height={45}
                      className="skillsSvg"
                    ></JamstackSvg>
                  </div>
                  <p className="subtitle-mod">
                    {" "}
                    <FormattedMessage id="resources.section.description" />
                  </p>
                  <p className="subtitle">
                    <a
                      className="jamstack-link"
                      href="https://www.hauteculture.com/"
                      target="_blank"
                    >
                      <FormattedMessage id="resources.section.link" />
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
                    <p>
                      <FormattedMessage id="resources.section_1.title" />
                    </p>
                  </h1>
                  <div className="svg">
                    <TreehouseSvg className="skillsSvg mr-2"></TreehouseSvg>
                    <FccSvg className="skillsSvg"></FccSvg>
                    <p className="subtitle-mod">
                      {" "}
                      <FormattedMessage id="resources.section_1.description" />{" "}
                      <a
                        className="treehouse-link"
                        href="https://teamtreehouse.com/erwanel"
                        target="_blank"
                      >
                        <FormattedMessage id="resources.section_1.link" />
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

export default injectIntl(ResourcesPage)

export const query = graphql`
  {
    fcc: file(relativePath: { eq: "images/learning/fcc.PNG" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    jamstack: file(relativePath: { eq: "images/learning/jamstack.PNG" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    treehouse: file(relativePath: { eq: "images/learning/treehouse.PNG" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    codecademy: file(relativePath: { eq: "images/learning/codecademy.PNG" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
