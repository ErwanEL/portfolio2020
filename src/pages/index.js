import { Link, graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import Layout from "../components/layout"
import React from "react"

// import SEO from "../components/seo"
// import Form from "../components/form"

const BlogIndex = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  console.log(frontmatter)

  return (
    <Layout>
      {/* <SEO title={frontmatter.seo} /> */}

      <div class="section mt-6 is-paddingless-horizontal">
        <div class="container grid">
          {/* <section class="hero">
            <div class="hero-body">
              <div class="container is-max-desktop"> */}
          {/* <div class="columns">
              <div class="column is-8 is-offset-2">
                <figure class="image is-16by9">
                  <img src={"/blog.jpg"} alt="" />
                </figure>
              </div>
            </div> */}

          {/* <section class="section"> */}
          <div class="columns">
            <div style={{ margin: "auto" }} class="column is-8">
              <div class="content is-medium">
                <h1 class="title">👋</h1>
                {/* <h2 class="subtitle is-4">{frontmatter.date}</h2> */}
                {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
                <div class="content is-medium">
                  Ici un blog sur le développement web, plus particulièrement
                  sur la Jamstack et GatsbyJs.
                </div>
              </div>
            </div>
            <div style={{ margin: "auto" }} class="column is-3">
              {/* <Img
                objectPosition="100%"
                objectFit="content"
                style={{
                  borderRadius: "150px",
                  width: "150px",
                  height: "150px",
                  border: "3px solid #ff7b00",
                }}
                fluid={data.profilePic.childImageSharp.fluid}
              /> */}
            </div>
          </div>
          {/* </section> */}
          {/* </div>
            </div>
          </section> */}

          {/* SUGGESTIONS */}

          <div className="suggestion mt-6">
            <h1 className="title is-4">Derniers articles</h1>
            <div className="columns is-centered">
              <div className="column">
                <Link to={"/blog-page"}>
                  <div class="card">
                    <div class="card-image">
                      <figure class="image">
                        <Img fluid={data.squareGat.childImageSharp.fluid} />
                      </figure>
                    </div>
                    <div class="card-content">
                      <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                        <br />
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="column">
                <Link to={"/blog-page"}>
                  <div class="card">
                    <div class="card-image">
                      <figure class="image">
                        <Img fluid={data.blogImage.childImageSharp.fluid} />
                      </figure>
                    </div>
                    <div class="card-content">
                      <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                        <br />
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="suggestion mt-6">
            <div className="columns is-centered">
              <div className="column">
                <Link to={"/blog-page"}>
                  <div class="card">
                    <div class="card-image">
                      <figure class="image">
                        <Img fluid={data.squareGat.childImageSharp.fluid} />
                      </figure>
                    </div>
                    <div class="card-content">
                      <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                        <br />
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="column">
                <Link to={"/blog-page"}>
                  <div class="card">
                    <div class="card-image">
                      <figure class="image">
                        <Img fluid={data.blogImage.childImageSharp.fluid} />
                      </figure>
                    </div>
                    <div class="card-content">
                      <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                        <br />
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* PUB */}

          <section class="section">
            <div class="">
              <div class=" is-10 is-offset-1">
                <div class="container has-text-centered is-fluid">
                  <div class="hero is-light">
                    <div
                      style={{ background: "whitesmoke" }}
                      class="hero-body box"
                    >
                      <h1 class="title is-4 has-text-right">
                        Vous travaillez sur un projet en Jamstack, besoin d'une
                        solution statique?{" "}
                      </h1>
                      <p class="has-text-right">Me contacter par email. 📨</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
    markdownRemark(frontmatter: { path: { eq: "test" } }) {
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
  }
`
