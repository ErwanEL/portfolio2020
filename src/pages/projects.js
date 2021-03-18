import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Cascade from "../components/cascade"
import CascadeOld from "../components/cascadeOld"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Project from "../components/project"
import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const ProjectsPage = ({ data, intl }) => {
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "projects.section.title" })}
      />
      <section id="projects" className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <div className="content">
                  <h1 className="title">
                    <span className="mate">🗀</span>
                    <FormattedMessage id="projects.section.title" />
                  </h1>
                  <hr className="mini" />
                  <p className="subtitle-mod">
                    <FormattedMessage id="projects.section.description" />
                  </p>
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
                      <a href="#olderworks">
                        <FormattedMessage id="projects.section.menu" />
                      </a>
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
                    data.hc.childImageSharp.fluid,
                    data.etna.childImageSharp.fluid,
                    data.fds.childImageSharp.fluid,
                    data.lemot.childImageSharp.fluid,
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <Project
        id="fds"
        title={intl.formatMessage({ id: "projects.project_4.title" })}
        color="#0D1528"
        content={intl.formatMessage({ id: "projects.project_4.description" })}
        link="https://blog.erwanel.com/focus-data-science"
        contentLink={intl.formatMessage({
          id: "projects.project_4.link",
        })}
        img={data.fds.childImageSharp.fluid}
      />
      <hr />

      <Project
        id="hc"
        title={intl.formatMessage({ id: "projects.project_1.title" })}
        color="#7a1014"
        content={intl.formatMessage({ id: "projects.project_1.description" })}
        link="https://blog.erwanel.com/hauteculture"
        optionLink={true}
        contentLink={intl.formatMessage({
          id: "projects.project_1.link",
        })}
        img={data.hc.childImageSharp.fluid}
      />
      <hr />
      <Project
        id="lemot"
        title={intl.formatMessage({ id: "projects.project_2.title" })}
        color="#2a4f7f"
        content={intl.formatMessage({ id: "projects.project_2.description" })}
        link="https://blog.erwanel.com/lemot"
        contentLink={intl.formatMessage({ id: "projects.project_2.link" })}
        img={data.lemot.childImageSharp.fluid}
      />
      <hr />
      <Project
        id="etna"
        title={intl.formatMessage({ id: "projects.project_3.title" })}
        color="#A87868"
        content={intl.formatMessage({ id: "projects.project_3.description" })}
        link="https://blog.erwanel.com/etna-joyas"
        contentLink={intl.formatMessage({ id: "projects.project_3.link" })}
        img={data.etna.childImageSharp.fluid}
      />
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
              <div className="column is-half has-text-right is-hidden-desktop">
                <div className="content has-text-centered mt-3">
                  <h1 className="title">
                    <p>
                      {intl.formatMessage({ id: "projects.section_1.title" })}
                    </p>
                  </h1>
                  <p className="subtitle-mod">
                    {intl.formatMessage({
                      id: "projects.section_1.description",
                    })}
                  </p>
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
                    <p>
                      🖿 {intl.formatMessage({ id: "projects.section_1.title" })}
                    </p>
                  </h1>
                  <p className="subtitle-mod">
                    {intl.formatMessage({
                      id: "projects.section_1.description",
                    })}
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

export default injectIntl(ProjectsPage)

export const query = graphql`
  {
    cv: file(relativePath: { eq: "images/projects/older/cv.PNG" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    etna: file(relativePath: { eq: "images/projects/etna.PNG" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    hc: file(relativePath: { eq: "images/projects/hc.PNG" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    lemot: file(relativePath: { eq: "images/projects/lemot.PNG" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    fds: file(relativePath: { eq: "images/projects/fds.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    vgcharts: file(relativePath: { eq: "images/projects/older/vgcharts.PNG" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oldportfolio: file(
      relativePath: { eq: "images/projects/older/oldportfolio.PNG" }
    ) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    flickr: file(relativePath: { eq: "images/projects/older/flickr.PNG" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
