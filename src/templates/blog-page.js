import Banniere from "../components/banniere"
import BlogCard from "../components/blogCard"
import Breadcrumb from "../components/breadCrumb"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { Link } from "gatsby"
import MediaObject from "../components/mediaObject"
import React from "react"
import SEO from "../components/seo"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

const BlogPageTemplate = ({ pageContext }) => {
  deckDeckGoHighlightElement()
  const { node } = pageContext

  const { frontmatter, html } = node

  const suggestions = pageContext.suggestions.filter(
    el => el.node.id !== node.id
  )
  console.log(frontmatter.date)

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={pageContext.excerpt}
        image={frontmatter.featuredImage.childImageSharp.fluid.originalImg}
        date={frontmatter.date}
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
            {/* <a>
                <div className="tags read has-addons">
                  <span className="tag">
                    <i className="fas fa-book-reader"></i>
                  </span>
                  <span className="tag ">Read more articles about this book </span>
                </div>
              </a> */}
            <div className="suggestion mt-6">
              <h1 className="title is-4">Derniers articles</h1>
              <div className="columns is-multiline">
                {suggestions.map(({ node }) => (
                  <div className="column is-6">
                    <Link to={`/${node.frontmatter.path}`}>
                      <BlogCard
                        title={node.frontmatter.title}
                        html={node.html}
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
          </div>
        </section>
      </>
    </Layout>
  )
}

export default BlogPageTemplate
