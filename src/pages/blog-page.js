import { Link, graphql } from "gatsby"
import { useEffect, useState } from "react"

import Banniere from "../components/banniere"
import BlogCard from "../components/blogCard"
import Breadcrumb from "../components/breadCrumb"
import Img from "gatsby-image"
import Layout from "../components/layout"
import MediaObject from "../components/mediaObject"
import React from "react"

// import SEO from "../components/seo"
// import Form from "../components/form"

const BlogPage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  console.log(frontmatter)

  return (
    <Layout>
      {/* <SEO title={frontmatter.seo} /> */}
      <>
        <div class="section is-paddingless-horizontal">
          <div class="container grid">
            <Banniere title={frontmatter.title} />
            <Breadcrumb title={frontmatter.title} />
          </div>
        </div>

        <section
          class="section is-paddingless-horizontal "
          style={{ paddingTop: "0" }}
        >
          <div class="container grid">
            <MediaObject />

            <div class="section is-paddingless-horizontal">
              <h1 class="title is-2">{frontmatter.title}</h1>
              <h2 class="subtitle is-3">Learn from first principles</h2>
            </div>

            <figure class="columns is-mobile is-variable is-marginless is-0 grid-xl">
              <div class="column center">
                <div class="image is-256x256 card">
                  <a>
                    {/* <!-- <img src="https://bulma.io/images/placeholders/128x128.png"/> --> */}
                    {/* <img src="assets/test.jpg" /> */}
                    {/* <img src={"/blog.jpg"} alt="" /> */}
                  </a>
                </div>
              </div>
            </figure>
            <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
            <figcaption class="center level">
              <small class="level-item has-text-grey">
                The blog we'll build. Click to continue on scrimba
              </small>
            </figcaption>

            <div class="content Site-content">
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            {/* <a>
              <div class="tags read has-addons">
                <span class="tag">
                  <i class="fas fa-book-reader"></i>
                </span>
                <span class="tag ">Read more articles about this book </span>
              </div>
            </a> */}
            <div>
              <hr />
            </div>
            <div className="suggestion mt-6">
              <h1 className="title is-4">Derniers articles</h1>
              <div className="columns is-centered">
                <div className="column">
                  <BlogCard imageData={data.squareGat.childImageSharp.fluid} />
                </div>
                <div className="column">
                  <BlogCard imageData={data.blogImage.childImageSharp.fluid} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout>
  )
}

export default BlogPage

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
    markdownRemark(frontmatter: { path: { eq: "blog" } }) {
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
  }
`
