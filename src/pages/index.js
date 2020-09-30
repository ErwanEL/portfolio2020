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
      <section className="has-text-centered">
        <div className="container has-text-centered">
          <div className="columns">
            <div className="column is-half" style={{ margin: "auto" }}>
              <div className="content">
                <p className="quote subtitle-mod">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  harum minima voluptatem veritatis exercitationem saepe
                  incidunt. Sit quis earum ipsam!
                </p>
              </div>
              <button className="button is-success">
                Voir le profil Upwork
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
