import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import Video from "../assets/video1.mp4"

import Layout from "../components/layout"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "gif.gif" }) {
        childImageSharp {
          fixed(width: 600, height: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <div className="content">
                  <h1 className="title">
                    <span className="mate">🧉</span>
                    <p>Bienvenue sur le Portfolio de ErwanEL</p>
                  </h1>
                  <p className="subtitle-mod">
                    Intégrateur, Développeur Front-End, Javascript, GatsbyJS
                  </p>
                  <p className="subtitle">
                    Find me on{" "}
                    <a
                      className="github-link"
                      href="https://github.com/ErwanEL/"
                      target="_blank"
                    >
                      Github
                    </a>
                  </p>
                </div>
              </div>
              <div className="column is-half">
                <video autoPlay loop>
                  <source src={Video} type="video/mp4" />
                </video>
                {/* <figure className="image is-256x256">
                  <img src="gif.gif" alt="" />
                </figure> */}
                {/* <Img
                  fixed={data.file.childImageSharp.fixed}
                  alt="Gatsby Docs are awesome"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="has-text-centered">
        <div className="container has-text-centered">
          <div className="columns">
            <div className="column is-5" style={{ margin: "auto" }}>
              <div className="box">
                <p className="quote subtitle-mod">
                  <i>
                    A+ would work with again. Very responsive and great to work
                    with!
                  </i>
                </p>{" "}
                <p className="mt-2"> Kevin McCormick, LSI</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 102.4 30"
                width="106"
                height="30"
                role="img"
                aria-hidden="true"
              >
                <path
                  fill="#494949"
                  d="M65.4 6.9c-4.5 0-8.1 3.6-8.1 8.1s3.6 8.1 8.1 8.1 8.1-3.6 8.1-8.1-3.6-8.1-8.1-8.1zm0 12.9c-2.6 0-4.8-2.1-4.8-4.8s2.1-4.8 4.8-4.8c2.6 0 4.8 2.1 4.8 4.7 0 2.7-2.1 4.9-4.8 4.9zM83.4 10.8c-2.3 0-4.2 1.9-4.2 4.2v7.7h-3.5V7.4h3.5v2.4c1-1.5 2.7-2.4 4.5-2.4h1.1v3.4h-1.4zM48.2 7.4L50.8 18l2.9-10.6h3.4l-4.4 15.3h-3.5L46.5 12l-2.7 10.7h-3.5L35.9 7.4h3.4L42.2 18l2.7-10.6zM95 14.4c2.6-1.4 4.1-4.1 4.1-7.1h-3.4c0 2.6-2.1 4.6-4.6 4.6h-.5V0h-3.5v22.7h3.5v-7.2h.4c.4 0 .8.2 1 .5l4.9 6.7h4.2L95 14.4z"
                ></path>{" "}
                <path
                  fill="#6fda44"
                  d="M27.6 6.9c-3.8 0-6.7 2.5-7.9 6.5-1.8-2.7-3.1-5.7-4-8.8h-4.1v10.6c0 2.1-1.7 3.8-3.8 3.8S4 17.3 4 15.2V4.7H0v10.6c0 4.3 3.5 7.9 7.9 7.9s7.9-3.5 7.9-7.9v-1.8c.8 1.7 1.8 3.3 2.9 4.8L16.2 30h4.2l1.8-8.5c1.6 1.1 3.5 1.7 5.5 1.7 4.5 0 8.1-3.6 8.1-8.1-.1-4.5-3.7-8.2-8.2-8.2zm0 12.2c-1.7-.1-3.3-.7-4.6-1.8l.3-1.6v-.1c.3-1.7 1.3-4.6 4.2-4.6 2.2-.1 4 1.7 4.1 3.9.1 2.2-1.7 4-3.9 4.1l-.1.1z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
