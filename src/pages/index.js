import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import Video from "../assets/video1.mp4"

import Layout from "../components/layout"
import UpworkSvg from "../components/svg/upworksvg"

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
                    <p>Bienvenue sur le Portfolio de ErwanEL.</p>
                  </h1>
                  <p className="subtitle-mod">
                    Intégrateur, Développeur Front-End, Javascript, GatsbyJS.
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
                    .
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
              <UpworkSvg></UpworkSvg>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
