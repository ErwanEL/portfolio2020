import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import Video from "../assets/video1.mp4"

import Layout from "../components/layout"
import QuoteComponent from "../components/quoteComponent"

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
                    <p>Bienvenue sur le Portfolio de ErwanEL></p>
                  </h1>
                  <p className="subtitle-mod">
                    Intégrateur, Développeur Front-End, Javascript, GatsbyJS
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
      <section className="has-text-centered hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns">
              <div className="column is-5" style={{ margin: "auto" }}>
                <QuoteComponent quote="A+ would work with again. Very responsive and great to work with! _ Kevin McCormick, LSI"></QuoteComponent>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
