import Banniere from "../components/banniere"
import Breadcrumb from "../components/breadCrumb"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { Link } from "gatsby"
import MediaObject from "../components/mediaObject"
import ProjectCard from "../components/projectCard"
import React from "react"
import SEO from "../components/seo"

const ProjectPageTemplate = ({ pageContext }) => {
  const { node } = pageContext

  const { frontmatter, html } = node

  const suggestions = pageContext.suggestions.filter(
    el => el.node.id !== node.id
  )

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={pageContext.excerpt}
        image={frontmatter.featuredImage.childImageSharp.fluid.originalImg}
        url={`https://blog.erwanel/${frontmatter.path}/`}
      />

      <>
        <div className="section is-paddingless-horizontal">
          <div className="container grid">
            <Banniere title={frontmatter.title} date={frontmatter.date} />
            <Breadcrumb title={frontmatter.title} />
          </div>
        </div>

        <section
          className="section is-paddingless-horizontal "
          style={{ paddingTop: "0" }}
        >
          <div className="container grid">
            <MediaObject date={frontmatter.date} />

            <div className="section is-paddingless-horizontal">
              <h1 className="title is-2">{frontmatter.title}</h1>
              <h2 className="subtitle is-3">{frontmatter.subtitle}</h2>
            </div>

            <Img
              style={{ maxHeight: "500px" }}
              fluid={frontmatter.featuredImage.childImageSharp.fluid}
            />
            <figcaption className="center level">
              <small className="level-item has-text-grey">
                {frontmatter.title}
              </small>
            </figcaption>

            <div className="content Site-content mt-5">
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>

            <div>
              <hr />
            </div>
            {suggestions.length !== 0 && (
              <div className="suggestion mt-6">
                <h1 className="title is-4">Derniers projets</h1>
                <div className="columns is-multiline">
                  {suggestions.map(({ node }) => (
                    <div className="column is-6">
                      <Link to={`/${node.frontmatter.path}`}>
                        <ProjectCard
                          title={node.frontmatter.title}
                          imageData={
                            node.frontmatter.featuredImage.childImageSharp.fluid
                          }
                          date={node.frontmatter.date}
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </>
    </Layout>
  )
}

export default ProjectPageTemplate
