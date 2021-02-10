import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import JamstackSvg from "../components/svg/jamstacksvg"
import TreehouseSvg from "../components/svg/treehousesvg"
import FccSvg from "../components/svg/fccsvg"
import CustomLink from "../components/customLink"
import { cmsImageFinder } from "../components/utils"
import YAMLData from "../../site/content/pages/resources/resources-fr.yml"

const ResourcesProto = () => {
  const data = useStaticQuery(graphql`
    {
      folderImages: allFile(
        filter: {
          relativeDirectory: { glob: "content/pages/resources/images" }
        }
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

  return (
    <Layout>
      <SEO title={YAMLData.seo} />
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <h1 className="title">
                  <span className="mate">📘</span>
                  {YAMLData.seo}.
                </h1>
                <div className="content">
                  <hr
                    style={{ background: YAMLData.section0Color }}
                    className="mini"
                  />
                  <div className="svg">
                    <JamstackSvg
                      height={45}
                      className="skillsSvg"
                    ></JamstackSvg>
                  </div>
                  <p className="subtitle-mod">{YAMLData.section0Title}</p>
                  <p className="subtitle">
                    <CustomLink
                      url={YAMLData.section0Link}
                      content={YAMLData.section0LinkTitle}
                      color={YAMLData.section0Color}
                    ></CustomLink>
                  </p>
                </div>
              </div>
              <div className="column is-half">
                <Img
                  className="free image"
                  fluid={cmsImageFinder(images, "section0Image", YAMLData)}
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
                      fluid={cmsImageFinder(images, "section1Image0", YAMLData)}
                      alt="Codecademy"
                    />
                  </div>
                  <div className="child1 child2">
                    <Img
                      className="free image"
                      fluid={cmsImageFinder(images, "section1Image1", YAMLData)}
                      alt="Freecodecamp"
                    />
                  </div>
                </div>
              </div>
              <div className="column is-half has-text-right">
                <div className="content">
                  <h1 className="title">
                    <p>{YAMLData.section1Title}</p>
                  </h1>
                  <div className="svg">
                    <TreehouseSvg className="skillsSvg mr-2"></TreehouseSvg>
                    <FccSvg className="skillsSvg"></FccSvg>
                    <p className="subtitle-mod">
                      {" "}
                      {YAMLData.section1Content}{" "}
                      <CustomLink
                        url={YAMLData.section1Link}
                        content={YAMLData.section1LinkTitle}
                        color={YAMLData.section1Color}
                      ></CustomLink>
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

export default ResourcesProto
