import { useEffect, useRef, useState } from "react"

import Img from "gatsby-image"
import Layout from "../components/layout"
import React from "react"
import { graphql } from "gatsby"

// import SEO from "../components/seo"
// import Form from "../components/form"

const BlogPage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  let test = 1000

  function useScroll() {
    const [lastScrollTop, setLastScrollTop] = useState(0)
    const [bodyOffset, setBodyOffset] = useState(
      document.body.getBoundingClientRect()
    )
    const [scrollY, setScrollY] = useState(bodyOffset.top)
    const [scrollX, setScrollX] = useState(bodyOffset.left)
    const [scrollDirection, setScrollDirection] = useState()

    const listener = e => {
      setBodyOffset(document.body.getBoundingClientRect())
      setScrollY(-bodyOffset.top)
      //   setScrollX(bodyOffset.left)
      //   setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up")
      setLastScrollTop(-bodyOffset.top)
    }

    useEffect(() => {
      window.addEventListener("scroll", listener)
      return () => {
        window.removeEventListener("scroll", listener)
      }
    })

    return (test = scrollY)
  }

  useScroll()

  console.log(test)

  return (
    <Layout>
      {/* <SEO title={frontmatter.seo} /> */}

      {/* {useScroll() > 400 && <div style={{ position: "fixed" }}>hola</div>} */}
      <div class="section is-paddingless-horizontal">
        <div class="container grid">
          <div style={{ textAlign: "center" }}>
            <progress class="progress is-warning" value={test} max="7780">
              {/* 75% */}
            </progress>
          </div>
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <a href="./index.html">
                  <span class="icon is-small">
                    <i class="fas fa-home" aria-hidden="true"></i>
                  </span>
                  <span>Home</span>
                </a>
              </li>
              <li class="is-active">
                <a href="#" aria-current="page">
                  How to build a beautiful blog
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <section
        class="section is-paddingless-horizontal "
        style={{ paddingTop: "0" }}
      >
        <div class="container grid">
          <article class="media center">
            <figure class="media-left">
              <figure class="image is-64x64">
                {/* <img src="assets/logo.png" /> */}
                <Img
                  objectPosition="100%"
                  objectFit="content"
                  style={{
                    borderRadius: "150px",
                    width: "70px",
                    height: "70px",
                    border: "3px solid #ff7b00",
                  }}
                  fluid={data.profilePic.childImageSharp.fluid}
                />
              </figure>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>ErwanEL</strong>
                  <a>@username</a>
                  <span class="has-text-grey">
                    Self taught <br />
                    <time datetime="2019-05-17">Apr 20</time> · 20min read
                  </span>
                </p>
              </div>
            </div>
          </article>

          <div class="section is-paddingless-horizontal">
            <h1 class="title is-2">How to build a beautiful blog</h1>
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
          <Img fluid={data.blogImage.childImageSharp.fluid} />
          <figcaption class="center level">
            <small class="level-item has-text-grey">
              The blog we'll build. Click to continue on scrimba
            </small>
          </figcaption>

          <div class="content Site-content">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          <a>
            <div class="tags read has-addons">
              <span class="tag">
                <i class="fas fa-book-reader"></i>
              </span>
              <span class="tag ">Read more articles about this book </span>
            </div>
          </a>
          <div>
            <hr />
          </div>
          <div className="suggestion mt-6">
            <h1 className="title is-4">Derniers articles</h1>
            <div className="columns is-centered">
              <div className="column">
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
              </div>
              <div className="column">
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
              </div>
            </div>
          </div>
        </div>
      </section>
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
