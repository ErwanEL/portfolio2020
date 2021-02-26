import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import ProfilePic from "../components/profilePic"
import QuoteSlider from "../components/quoteSlider"
import React from "react"
import SEO from "../components/seo"
import UpworkSvg from "../components/svg/upworksvg"
import Video from "../assets/comp_3.mp4"
import YAMLData from "../../site/content/pages/home/home-fr.yml"

const IndexPage = ({ intl }) => {
  return (
    <Layout>
      <SEO title={YAMLData.seo} />
      <section className="hero is-medium">
        <FormattedMessage id="hello_page2" />
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <ProfilePic />
                <h1 className="title">{YAMLData.intro}</h1>
                {/* <div dangerouslySetInnerHTML={{ __html: YAMLData.content }} /> */}
                <div class="content">
                  <hr style={{ background: "#023859" }} class="mini" />
                  <p class="subtitle-mod">
                    Développeur Front-End, Javascript,
                    <span
                      style={{ color: "#643396" }}
                      class="has-text-weight-semibold"
                    >
                      GatsbyJS.
                    </span>
                  </p>
                  <p class="subtitle">
                    Me trouver sur{" "}
                    <a
                      class="github-link"
                      href="https://github.com/ErwanEL/"
                      target="_blank"
                    >
                      Github.
                    </a>
                  </p>
                </div>
                <span className="dispo tag navbar-item is-success is-medium mt-5">
                  {YAMLData.dispo}
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
