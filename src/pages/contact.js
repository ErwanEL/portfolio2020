import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Form from "../components/form"
import Layout from "../components/layout"
import React from "react"
import Resume from "../assets/resume.pdf"
import SEO from "../components/seo"

const ContactPage = ({ intl }) => {
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

              <div
                className="column is-half message"
                style={{ boxShadow: "10px 5px 5px #8080807d" }}
              >
                <div className="column">
                  <Form
                    name={intl.formatMessage({ id: "contact.form.name" })}
                    namePlaceholder={intl.formatMessage({
                      id: "contact.form.namePlaceholder",
                    })}
                    email={intl.formatMessage({ id: "contact.form.email" })}
                    emailPlaceholder={intl.formatMessage({
                      id: "contact.form.emailPlaceholder",
                    })}
                    message={intl.formatMessage({ id: "contact.form.message" })}
                    messagePlaceholder={intl.formatMessage({
                      id: "contact.form.messagePlaceholder",
                    })}
                    send={intl.formatMessage({ id: "contact.form.send" })}
                  ></Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section id="resume" className="hero is-small">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-half mt-5">
                <iframe
                  className="is-hidden-mobile"
                  style={{ boxShadow: "10px 5px 5px #8080807d" }}
                  src={`${Resume}#toolbar=0&navpanes=0`}
                  width="100%"
                  height="750px"
                ></iframe>
              </div>
              <div
                className="p-1 is-hidden-desktop"
                style={{ boxShadow: "10px 5px 5px #8080807d" }}
              >
                <img src={"/resume.jpg"} alt="" />
              </div>
              <div className="column is-half">
                <h1 className="title">
                  <u>
                    {" "}
                    <a className="resume-link" target="_blank" href={Resume}>
                      resume.pdf <i className="fas fa-external-link-alt"></i>
                    </a>
                  </u>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default injectIntl(ContactPage)
