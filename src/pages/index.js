import React from "react"
import Video from "../assets/comp_3.mp4"

import Layout from "../components/layout"
import UpworkSvg from "../components/svg/upworksvg"

const IndexPage = () => {
  return (
    <Layout>
      <section className="hero is-medium">
        <div className="hero-body">
          <span class="tag navbar-item is-success is-medium ">
            I'm currently available for work.
          </span>
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <div className="content">
                  <h1 className="title">
                    {/* <span className="mate">🧉</span>  */}
                    Hi my name is Erwan, welcome on my portfolio website.
                  </h1>
                  <hr style={{ background: "#023859" }} className="mini" />
                  <p className="subtitle-mod">
                    Front-End developer, Javascript,{" "}
                    <span
                      style={{ color: "#643396" }}
                      className="has-text-weight-semibold"
                    >
                      GatsbyJS.
                    </span>
                  </p>
                  <p className="subtitle">
                    Find me on{" "}
                    <a
                      className="github-link"
                      href="https://github.com/ErwanEL/"
                      target="_blank"
                    >
                      Github.
                    </a>
                  </p>
                </div>
              </div>
              <div className="column is-half">
                <video autoPlay loop>
                  <source src={Video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero is-small">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns">
              <div className="column is-7" style={{ margin: "auto" }}>
                <div className="box">
                  <i className="fas fa-2x fa-quote-left"></i>
                  <p className="is-size-4 mt-4  is-italic has-text-weight-normal">
                    A+ would work with again. Very responsive and great to work
                    with!
                  </p>{" "}
                  <p className="mt-3 has-text-weight-semibold">
                    {" "}
                    Kevin McCormick, LSI
                  </p>
                </div>
                <UpworkSvg height={30}></UpworkSvg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
