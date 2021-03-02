import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const SuccessPage = ({ intl }) => {
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "contact.section.title" })}
      />
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                {/* {html} */}
                <h1 className="title">
                  <span className="mate">✉️</span>
                  <FormattedMessage id="contact.section.title" />
                </h1>
                <div className="content">
                  <hr className="mini" />
                  <p className="subtitle-mod">
                    <FormattedMessage id="contact.section.description" />
                  </p>
                </div>
              </div>
              <div className="column is-half">
                <div className="notification has-text-centered has-text-white">
                  <FormattedMessage id="contact.success" />{" "}
                  <i className="fas fa-check-square"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default injectIntl(SuccessPage)
