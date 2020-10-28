import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SuccessPage = ({ data }) => {
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
                <div className="content">
                  <h1 className="title">
                    <span className="mate">✉️</span>
                    {frontmatter.title}
                  </h1>
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>
              </div>
              <div className="column is-half">
                <div className="notification has-text-centered has-text-white">
                  {frontmatter.success} <i class="fas fa-check-square"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SuccessPage

export const query = graphql`
  {
    markdownRemark(frontmatter: { slug: { eq: "/contact" } }) {
      html
      frontmatter {
        title
        slug
        seo
        success
      }
    }
  }
`
