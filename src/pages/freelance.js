import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Img from "gatsby-image"
import Layout from "../components/layout"
import Malt from "../components/svg/malt"
import React from "react"
import SEO from "../components/seo"
import UpworkSvg from "../components/svg/upworksvg"
import { graphql } from "gatsby"

const FreelancePage = ({ data, intl }) => {
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "freelance.title" })}
      />
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <h1 className="title">
                  {/* <span className="mate">📛</span> */}
                  {/* <FormattedMessage id="freelance.section.title" /> */}
                  <Malt height={40} />
                </h1>
                <div className="content">
                  <hr style={{ background: "#FC5656" }} className="mini" />
                  <p className="subtitle-mod">
                    <FormattedMessage id="freelance.section.description" />{" "}
                    <a
                      className="malt-link"
                      href="https://www.malt.com/profile/erwanleblois"
                    >
                      <FormattedMessage id="freelance.section.link" />
                    </a>
                  </p>
                </div>
              </div>
              <div className="column is-half">
                <Img
                  className="free image"
                  fluid={data.malt.childImageSharp.fluid}
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
                  className="Upwork"
                  fluid={data.upwork.childImageSharp.fluid}
                  alt="upwork"
                />
              </div>

              <div className="column is-half has-text-left">
                <div className="content">
                  <h1 className="title">
                    {" "}
                    {/* <FormattedMessage id="freelance.section_1.title" /> */}
                    <UpworkSvg height={40} />
                  </h1>
                  <hr style={{ background: "#6FDA44" }} className="mini" />

                  <p className="subtitle-mod">
                    <FormattedMessage id="freelance.section_1.description" />{" "}
                    <a
                      className="upwork-link"
                      href="http://etmg-world.com"
                      target="_blank"
                    >
                      <FormattedMessage id="freelance.section_1.link" />
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
    malt: file(relativePath: { eq: "images/freelance/malt.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    upwork: file(relativePath: { eq: "images/freelance/upwork.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default injectIntl(FreelancePage)
