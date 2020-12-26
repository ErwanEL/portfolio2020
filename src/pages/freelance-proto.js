import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import UpworkSvg from "../components/svg/upworksvg"
import { cmsImageFinder } from "../components/utils"
import YAMLData from "../../site/content/pages/test/test-fr.yml"

const FreelanceProto = () => {
  const data = useStaticQuery(graphql`
    {
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
  `)
  const { folderImages } = data
  const images = folderImages.edges

  console.log(YAMLData)

  return (
    <Layout>
      <SEO title={YAMLData.seo} />
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <h1 className="title">
                  <span className="mate">{YAMLData.emoji}</span>
                  {YAMLData.seo}.
                </h1>
                <div className="content">
                  <hr
                    style={{ background: YAMLData.section0Color }}
                    className="mini"
                  />
                  <UpworkSvg height={40}></UpworkSvg>
                  <p className="subtitle-mod">
                    {YAMLData.section0Content}{" "}
                    <a
                      className="upwork-link"
                      href={YAMLData.section0Link}
                      target="_blank"
                    >
                      {YAMLData.section0LinkTitle}
                    </a>
                  </p>
                </div>
              </div>
              <div className="column is-half">
                <Img
                  className="free image"
                  fluid={cmsImageFinder(images, "section0Image", YAMLData)}
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
                  fluid={cmsImageFinder(images, "section1Image", YAMLData)}
                  alt="Etmg"
                />
              </div>

              <div className="column is-half has-text-left">
                <div className="content">
                  <h1 className="title">{YAMLData.section1LinkTitle}</h1>
                  <p className="subtitle-mod">
                    {YAMLData.section1Content}{" "}
                    <a
                      className="etmg-link"
                      href={YAMLData.section1Link}
                      target="_blank"
                    >
                      {YAMLData.section1LinkTitle}
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

export default FreelanceProto
