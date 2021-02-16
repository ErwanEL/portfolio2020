import { Link, graphql, useStaticQuery } from "gatsby"

import Annonce from "../components/annonce"
import BlogCard from "../components/blogCard"
import BlogIntro from "../components/blogIntro"
import Img from "gatsby-image"
import Layout from "../components/layout"
import React from "react"

// import SEO from "../components/seo"
// import Form from "../components/form"

const BlogIndex = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  console.log(data.allMds)

  return (
    <Layout>
      {/* <SEO title={frontmatter.seo} /> */}

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
    profilePic: file(relativePath: { eq: "images/mini-Juan.JPG" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: "gatsby" } }) {
      id
      html
      frontmatter {
        title
        path
        date
      }
    }
    blogImage: file(relativePath: { eq: "images/blog.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    gat: file(relativePath: { eq: "images/gat.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    squareGat: file(relativePath: { eq: "images/logo-gatsby-square.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

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
  }
`
