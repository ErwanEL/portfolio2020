import { graphql, useStaticQuery } from "gatsby"

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

      <section class="hero">
        <div class="hero-body">
          <div class="container is-max-desktop">
            {/* <div class="columns">
              <div class="column is-8 is-offset-2">
                <figure class="image is-16by9">
                  <img src={"/blog.jpg"} alt="" />
                </figure>
              </div>
            </div> */}

            <section class="section">
              <div class="columns">
                <div style={{ margin: "auto" }} class="column is-6">
                  <div class="content is-medium">
                    <h1 class="title">Salut</h1>
                    {/* <h2 class="subtitle is-4">{frontmatter.date}</h2> */}
                    {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
                    <div class="content is-medium">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Facere, nam maiores. Fugiat nemo incidunt dolores vitae
                      laborum assumenda voluptatibus ad quos ut, facilis dolorum
                      a aut laboriosam provident ex debitis aliquam quasi.
                      Consequuntur nam aliquam, maiores itaque laboriosam
                      aspernatur libero!
                    </div>
                  </div>
                </div>
                <div style={{ margin: "auto" }} class="column is-3">
                  <Img
                    objectPosition="100%"
                    objectFit="content"
                    style={{
                      borderRadius: "150px",
                      width: "180px",
                      height: "180px",
                      border: "3px solid #ff7b00",
                    }}
                    fluid={data.profilePic.childImageSharp.fluid}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="columns">
          <div class="column is-10 is-offset-1">
            <div class="container has-text-centered is-fluid">
              <div class="hero is-light">
                <div style={{ background: "whitesmoke" }} class="hero-body box">
                  <h1 class="title is-3 has-text-right">Me contacter</h1>
                  <p class="has-text-right">Me contacter par email.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="hero ">
        <div class="hero-body">
          <div class="container ">
            <section class="section">
              <div class="columns is-centered is-8">
                <div class="column is-4 ">
                  {/* <div class="content is-medium">
                    <h2 class="subtitle is-5 has-text-grey">
                      December 23, 2018
                    </h2>
                    <h1 class="title has-text-black is-3">Custom 404 Pages</h1>
                    <p class="has-text-dark">
                      This starter template includes a custom 404 Not Found
                      error page, located at /source/404.blade.php. To preview
                      the 404 page, you can visit /404 in your browser.
                      Depending...
                    </p>
                  </div> */}
                  <div class="card">
                    <div class="card-image">
                      <figure class="image is-4by3">
                        <img src={"/blog.jpg"} alt="" />
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
                <div class="column is-4">
                  <div class="card">
                    <div class="card-image">
                      <figure class="image is-4by3">
                        <img src={"/blog.jpg"} alt="" />
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
            </section>

            <section class="section">
              <div class="columns is-variable is-8">
                <div class="column is-5 is-offset-1">
                  <div class="card">
                    <div class="card-image">
                      <figure class="image is-4by3">
                        <img src={"/blog.jpg"} alt="" />
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
                <div class="column is-5">
                  <div class="card">
                    <div class="card-image">
                      <figure class="image is-4by3">
                        <img src={"/blog.jpg"} alt="" />
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
            </section>
          </div>
        </div>
      </section>
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
  }
`
