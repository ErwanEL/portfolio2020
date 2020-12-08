import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Resume from "../assets/resume.pdf"
import SEO from "../components/seo"
import Form from "../components/form"

const ContactPage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.seo} />
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                {/* {html} */}
                <h1 className="title">
                  <span className="mate">✉️</span>
                  {frontmatter.title}
                </h1>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </div>

              <div
                className="column is-half message"
                style={{ boxShadow: "10px 5px 5px #8080807d" }}
              >
                <div className="column">
                  <Form></Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="hero is-small">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-half mt-5">
                <iframe
                  src={`${Resume}#toolbar=0&navpanes=0`}
                  width="100%"
                  height="750px"
                ></iframe>
              </div>
              <div className="column is-half">
                <a target="_blank" href={Resume}>
                  <h1 className="title">
                    <u>
                      {" "}
                      resume.pdf <i class="fas fa-external-link-alt"></i>
                    </u>
                  </h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage

export const query = graphql`
  {
    markdownRemark(frontmatter: { slug: { eq: "/contact" } }) {
      html
      frontmatter {
        title
        slug
        seo
      }
    }
  }
`
