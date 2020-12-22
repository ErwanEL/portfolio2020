import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import UpworkSvg from "../components/svg/upworksvg"
import YAMLData from "../../site/content/pages/test/test-fr.yml"

const FreelancePage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  const { folderImages } = data
  const images = folderImages.edges
  const getPath = path => {
    return path.substr(path.lastIndexOf("/") + 1)
  }
  console.log(YAMLData)
  const section0Image = images.filter(
    image =>
      getPath(image.node.relativePath) === getPath(YAMLData["section0-image"])
  )[0].node.childImageSharp.fluid

  const section1Image = images.filter(
    image =>
      getPath(image.node.relativePath) === getPath(YAMLData["section1-image"])
  )[0].node.childImageSharp.fluid

  return (
    <Layout>
      <SEO title={frontmatter.seo} />
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <h1 className="title">
                  <span className="mate">🥬</span>
                  {YAMLData.seo}.
                </h1>
                <div className="content">
                  <hr style={{ background: "#6FDA44" }} className="mini" />
                  <UpworkSvg height={40}></UpworkSvg>
                  <p className="subtitle-mod">
                    {frontmatter.title1}{" "}
                    <a
                      className="upwork-link"
                      href="http://etmg-world.com"
                      target="_blank"
                    >
                      {frontmatter.upwork}
                    </a>
                  </p>
                </div>
              </div>
              <div className="column is-half">
                <Img
                  className="free image"
                  fluid={section0Image}
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
                <Img className="free image" fluid={section1Image} alt="Etmg" />
              </div>

              <div className="column is-half has-text-left">
                <div className="content">
                  <h1 className="title">Etmg</h1>
                  <p className="subtitle-mod">
                    {frontmatter.title2}{" "}
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
    markdownRemark(frontmatter: { slug: { eq: "/freelance" } }) {
      html
      frontmatter {
        slug
        seo
        title1
        upwork
        title2
      }
    }
    folderImages: allFile(
      filter: { relativeDirectory: { glob: "content/pages/test/images" } }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default FreelancePage
