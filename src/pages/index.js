import { Link, graphql } from "gatsby"

import Annonce from "../components/annonce"
import BlogCard from "../components/blogCard"
import BlogIntro from "../components/blogIntro"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"

const BlogIndex = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        url={data.site.siteMetadata.url}
      />
      <div className="section mt-6 is-paddingless-horizontal">
        <div className="container grid">
          <BlogIntro />
          {/* SUGGESTIONS */}
          <div className="suggestion mt-6">
            <h1 className="title is-4">Derniers articles</h1>
            <div className="columns is-multiline">
              {data.allMds.edges.map(({ node }) => (
                <div className="column is-6">
                  <Link to={`/${node.frontmatter.path}`}>
                    <BlogCard
                      html={node.html}
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
          {/* PUB */}

          <Annonce />

          {/* END */}
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const query = graphql`
  {
    allMds: allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            title
            path
            date
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    site {
      id
      siteMetadata {
        title
        description
        titleTemplate
        url
        image
        twitterUsername
      }
    }
  }
`
