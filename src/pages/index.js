import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import ProfilePic from "../components/profilePic"
import ProjectCard from "../components/projectCard"
import QuoteSlider from "../components/quoteSlider"
import React from "react"
import SEO from "../components/seo"
import Video from "../assets/comp_3.mp4"
import { graphql } from "gatsby"

const IndexPage = ({ intl, data }) => {
  return (
    <Layout>
      <SEO lang={intl.locale} title={intl.formatMessage({ id: "home.seo" })} />
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <ProfilePic />
                <h1 className="title">
                  <FormattedMessage id="home.intro" />
                </h1>
                {/* <div dangerouslySetInnerHTML={{ __html: YAMLData.content }} /> */}
                <div className="content">
                  <hr style={{ background: "#023859" }} className="mini" />
                  <p className="subtitle-mod">
                    <FormattedMessage id="home.stacks" />
                    <span
                      // style={{ color: "#643396" }}
                      className="has-text-weight-semibold"
                    >
                      {" "}
                      <a className="gatsby" href="https://www.gatsbyjs.com/">
                        GatsbyJS.
                      </a>
                    </span>
                  </p>
                  <p className="subtitle">
                    <FormattedMessage id="home.github" />{" "}
                    <a
                      className="github-link"
                      href="https://github.com/ErwanEL/"
                      target="_blank"
                    >
                      Github.
                    </a>
                  </p>
                </div>
                <span className="dispo tag navbar-item is-success is-medium mt-5">
                  <a href="https://www.malt.com/profile/erwanleblois">
                    <FormattedMessage id="home.dispo" />
                  </a>
                </span>
              </div>
              <div className="column is-half">
                <video muted autoPlay loop>
                  <source src={Video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <hr></hr> */}
      <section className="hero is-small">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns">
              <div className="column is-7" style={{ margin: "auto" }}>
                <QuoteSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <hr /> */}
      <section className="hero ">
        <div className="hero-body">
          <div className="mt-6">
            <h1 className="title is-4">
              {" "}
              <FormattedMessage id="home.projects" />:
            </h1>
            <div className="columns is-multiline">
              <div className="column is-4">
                <ProjectCard
                  imageData={data.fds.childImageSharp.fluid}
                  title="Focus Data Science"
                  link="https://blog.erwanel.com/focus-data-science"
                />
              </div>
              <div className="column is-4">
                <ProjectCard
                  imageData={data.lemot.childImageSharp.fluid}
                  title="Lemot"
                  link="https://blog.erwanel.com/lemot"
                />
              </div>
              <div className="column is-4">
                <ProjectCard
                  imageData={data.etna.childImageSharp.fluid}
                  title="Etna Joyas"
                  link="https://blog.erwanel.com/etna-joyas"
                />
              </div>
              <div className="column is-4">
                <ProjectCard
                  imageData={data.hc.childImageSharp.fluid}
                  title="HauteCuture"
                  link="https://blog.erwanel.com/hauteculture"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default injectIntl(IndexPage)

export const query = graphql`
  {
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
  }
`
