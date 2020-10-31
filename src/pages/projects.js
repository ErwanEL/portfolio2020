import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Cascade from "../components/cascade"
import CascadeOld from "../components/cascadeOld"
import Project from "../components/project"

const ProjectsPage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.seo} />
      <section id="projects" className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <div className="content">
                  <h1 className="title">
                    <span className="mate">🗀</span>
                    {frontmatter.seo}.
                  </h1>
                  <hr className="mini" />
                  <p className="subtitle-mod">{frontmatter.title}</p>
                </div>
                <nav
                  className="breadcrumb is-medium has-bullet-separator"
                  aria-label="breadcrumbs"
                >
                  <ul>
                    <li>
                      <a href="#hc">GatsbyJs</a>
                    </li>
                    <li>
                      <a href="#olderworks">{frontmatter.olderWorks}</a>
                    </li>
                    <li>
                      <a href="https://github.com/ErwanEL/" target="_blank">
                        Github
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="column is-half">
                <Cascade
                  arrayOfImages={[
                    data.cv.childImageSharp.fluid,
                    data.etna.childImageSharp.fluid,
                    data.hc.childImageSharp.fluid,
                    data.lemot.childImageSharp.fluid,
                  ]}
                ></Cascade>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <Project
        id="hc"
        title="HauteCulture"
        color="#7a1014"
        content={frontmatter.hauteculture}
        link="https://www.hauteculture.com/"
        optionLink={true}
        contentLink={frontmatter.hautecultureLink}
        img={data.hc.childImageSharp.fluid}
      ></Project>
      <hr />
      <Project
        id="lemot"
        title="Lemot"
        color="#2a4f7f"
        content={frontmatter.lemot}
        link="https://lemot.app/"
        contentLink={frontmatter.lemotLink}
        img={data.lemot.childImageSharp.fluid}
      ></Project>
      <hr />
      <Project
        id="etna"
        title="Etna Joyas"
        color="#A87868"
        content={frontmatter.etna}
        link="https://etnajoyas.netlify.app/"
        contentLink={frontmatter.etnaLink}
        img={data.etna.childImageSharp.fluid}
      ></Project>
      <hr />
      <section id="olderworks" className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div
                className="column is-half is-hidden-desktop "
                data-sal="slide-right"
                data-sal-delay="500"
                data-sal-easing="ease"
              >
                <div>
                  <div className="parent">
                    <div className="child1">
                      <Img
                        className="project-img image"
                        fluid={data.cv.childImageSharp.fluid}
                        alt="Cv"
                      />
                    </div>
                    <div className="child1 child2">
                      <Img
                        className="project-img image"
                        fluid={data.oldportfolio.childImageSharp.fluid}
                        alt="Old Portfolio"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="column is-half has-text-right is-hidden-desktop  "
                // data-sal="slide-left"
                // data-sal-delay="500"
                // data-sal-easing="ease"
              >
                <div className="content has-text-centered mt-3">
                  <h1 className="title">
                    <p>🖿 {frontmatter.olderWorks}. </p>
                  </h1>
                  <p className="subtitle-mod">{frontmatter.olderContent}</p>
                </div>
              </div>
              <div
                className="column is-half"
                data-sal="slide-right"
                data-sal-delay="500"
                data-sal-easing="ease"
              >
                <CascadeOld
                  arrayOfImages={[
                    data.cv.childImageSharp.fluid,
                    data.oldportfolio.childImageSharp.fluid,
                    data.vgcharts.childImageSharp.fluid,
                    data.flickr.childImageSharp.fluid,
                  ]}
                ></CascadeOld>
              </div>
              <div
                className="column is-half has-text-right is-hidden-mobile is-hidden-touch"
                data-sal="slide-left"
                data-sal-delay="500"
                data-sal-easing="ease"
              >
                <div className="content">
                  <h1 className="title">
                    <p>🖿 {frontmatter.olderWorks}.</p>
                  </h1>
                  <p className="subtitle-mod">{frontmatter.olderContent}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ProjectsPage

export const query = graphql`
  {
    markdownRemark(frontmatter: { slug: { eq: "/projects" } }) {
      html
      frontmatter {
        slug
        seo
        title
        olderWorks
        hauteculture
        hautecultureLink
        lemot
        lemotLink
        etna
        etnaLink
        olderContent
      }
    }
    cv: file(relativePath: { eq: "images/projects/cv.PNG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    etna: file(relativePath: { eq: "images/projects/etna.PNG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hc: file(relativePath: { eq: "images/projects/hc.PNG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lemot: file(relativePath: { eq: "images/projects/lemot.PNG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vgcharts: file(relativePath: { eq: "images/projects/older/vgcharts.PNG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    oldportfolio: file(
      relativePath: { eq: "images/projects/older/oldportfolio.PNG" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    flickr: file(relativePath: { eq: "images/projects/older/flickr.PNG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
