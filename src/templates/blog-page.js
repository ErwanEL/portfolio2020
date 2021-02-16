import { Link, graphql } from "gatsby"
import { useEffect, useState } from "react"

import Banniere from "../components/banniere"
import BlogCard from "../components/blogCard"
import Breadcrumb from "../components/breadCrumb"
import Img from "gatsby-image"
import Layout from "../components/layout"
import MediaObject from "../components/mediaObject"
import React from "react"

const BlogPageTemplate = ({ pageContext }) => {
  // const { markdownRemark } = data
  // const { frontmatter, html } = pageContext
  const { node } = pageContext

  const { frontmatter, html } = node

  // console.log(frontmatter)

  console.log(frontmatter)

  return (
    <Layout>
      {/* <SEO title={frontmatter.seo} /> */}
      <>
        <div className="section is-paddingless-horizontal">
          <div className="container grid">
            <Banniere title={frontmatter.title} />
            <Breadcrumb title={frontmatter.title} />
          </div>
        </div>

        <section
          className="section is-paddingless-horizontal "
          style={{ paddingTop: "0" }}
        >
          <div className="container grid">
            <MediaObject />

            <div className="section is-paddingless-horizontal">
              <h1 className="title is-2">{frontmatter.title}</h1>
              <h2 className="subtitle is-3">Learn from first principles</h2>
            </div>

            <figure className="columns is-mobile is-variable is-marginless is-0 grid-xl">
              <div className="column center">
                <div className="image is-256x256 card">
                  <a>
                    {/* <!-- <img src="https://bulma.io/images/placeholders/128x128.png"/> --> */}
                    {/* <img src="assets/test.jpg" /> */}
                    {/* <img src={"/blog.jpg"} alt="" /> */}
                  </a>
                </div>
              </div>
            </figure>
            <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
            <figcaption className="center level">
              <small className="level-item has-text-grey">
                The blog we'll build. Click to continue on scrimba
              </small>
            </figcaption>

            <div className="content Site-content">
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            {/* <a>
                <div className="tags read has-addons">
                  <span className="tag">
                    <i className="fas fa-book-reader"></i>
                  </span>
                  <span className="tag ">Read more articles about this book </span>
                </div>
              </a> */}
            <div>
              <hr />
            </div>
            <div className="suggestion mt-6">
              <h1 className="title is-4">Derniers articles</h1>
              <div className="columns is-centered">
                <div className="column">
                  <BlogCard
                    title={frontmatter.title}
                    html={html}
                    imageData={frontmatter.featuredImage.childImageSharp.fluid}
                    date={frontmatter.date}
                  />
                </div>
                <div className="column">
                  <BlogCard
                    title={frontmatter.title}
                    html={html}
                    imageData={frontmatter.featuredImage.childImageSharp.fluid}
                    date={frontmatter.date}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout>
  )
}

export default BlogPageTemplate

// export const query = graphql`
//   {
//     markdownRemark(frontmatter: { path: { eq: "test" } }) {
//       id
//       html
//       frontmatter {
//         title
//         path
//         date
//       }
//     }
//   }
// `
