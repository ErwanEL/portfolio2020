import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import ProfilePic from "../components/profilePic"
import QuoteSlider from "../components/quoteSlider"
import React from "react"
import SEO from "../components/seo"
import UpworkSvg from "../components/svg/upworksvg"
import Video from "../assets/comp_3.mp4"

const IndexPage = ({ intl }) => {
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
      <hr></hr>
      <section className="hero is-small">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns">
              <div className="column is-7" style={{ margin: "auto" }}>
                <QuoteSlider />
                <UpworkSvg className="mt-5" height={30}></UpworkSvg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default injectIntl(IndexPage)
