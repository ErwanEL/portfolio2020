import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const ProjectsPage = ({ data }) => {
  return (
    <Layout>
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div style={{ marginTop: "-90px" }} className="column is-half">
                <div className="content">
                  <h1 className="title">
                    <span className="mate">🗀</span>
                    <p>My projects</p>
                  </h1>
                  <hr className="mini" />
                  <p className="subtitle-mod">
                    Realisations and projects I've worked on.
                  </p>
                </div>
                <nav
                  className="breadcrumb is-medium has-bullet-separator"
                  aria-label="breadcrumbs"
                >
                  <ul>
                    <li>
                      <a href="#gatsbyjs">GatsbyJs</a>
                    </li>
                    <li>
                      <a href="#olderworks">Older works</a>
                    </li>
                    <li>
                      <a href="#">Github</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="column is-half">
                <div className="cascade">
                  <div className="cascade-child child1">
                    <div className="sub">
                      <a href="#olderworks">
                        <Img
                          className="project-img image"
                          fixed={data.cv.childImageSharp.fixed}
                          alt="Cv"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="cascade-child child2">
                    <div className="sub">
                      <a href="#etna">
                        <Img
                          className="project-img image"
                          fixed={data.etna.childImageSharp.fixed}
                          alt="Etna joyas"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="cascade-child child3">
                    <div className="sub">
                      <a href="#gatsbyjs">
                        <Img
                          className="project-img image"
                          fixed={data.hc.childImageSharp.fixed}
                          alt="Haute Culture"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="cascade-child child4">
                    <div className="sub">
                      <a href="#lemot">
                        <Img
                          className="project-img image"
                          fixed={data.lemot.childImageSharp.fixed}
                          alt="Lemot"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section id="gatsbyjs" className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <div className="content">
                  <h1 className="title">
                    <p>HauteCulture</p>
                  </h1>
                  <hr className="mini" />
                  <p className="subtitle-mod">
                    A Gatsby project I'v colaborated on. Include the Strapi CMS.
                  </p>
                  <p className="subtitle">See more about HauteCulture.</p>
                </div>
              </div>
              <div className="column is-half">
                <Img
                  className="project-img image"
                  fluid={data.hc.childImageSharp.fluid}
                  alt="Haute Culture"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section id="lemot" className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <div className="content">
                  <h1 className="title">
                    <p>Lemot</p>
                  </h1>
                  <hr className="mini" />
                  <p className="subtitle-mod">
                    A GatsbyJs service to practice French for Spanish speaking
                    public. Use Mailgun. Netlify backend. MJML for mail
                    templating.
                  </p>
                  <p className="subtitle">See more about Lemot.</p>
                </div>
              </div>
              <div className="column is-half">
                <Img
                  className="project-img image"
                  fluid={data.lemot.childImageSharp.fluid}
                  alt="Lemot"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section id="etna" className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <div className="content">
                  <h1 className="title">
                    <p>Etna-Joyas</p>
                  </h1>
                  <hr className="mini" />
                  <p className="subtitle-mod">
                    A GatsbyJs prototype for a jewelry showcase. Include DATO
                    Cms.
                  </p>
                  <p className="subtitle">See more about Etna-Joyas.</p>
                </div>
              </div>
              <div className="column is-half">
                <Img
                  className="project-img image"
                  fluid={data.etna.childImageSharp.fluid}
                  alt="Etna Joyas"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />
      <section id="olderworks" className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <div className="cascade">
                  <div className="cascade-child child1">
                    <div className="sub">
                      <Img
                        className="project-img image"
                        fixed={data.cv.childImageSharp.fixed}
                        alt="Cv"
                      />
                    </div>
                  </div>
                  <div className="cascade-child child2">
                    <div className="sub">
                      <Img
                        className="project-img image"
                        fixed={data.oldportfolio.childImageSharp.fixed}
                        alt="Old Portfolio"
                      />
                    </div>
                  </div>
                  <div className="cascade-child child3">
                    <div className="sub">
                      <Img
                        className="project-img image"
                        fixed={data.vgcharts.childImageSharp.fixed}
                        alt="Vgcharts"
                      />
                    </div>
                  </div>
                  <div className="cascade-child child4">
                    <div className="sub">
                      <Img
                        className="project-img image"
                        fixed={data.flickr.childImageSharp.fixed}
                        alt="Flickr Project"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-half has-text-right">
                <div className="content has-text-centered">
                  <h1 className="title">
                    <p>🖿 Older works. </p>
                  </h1>
                  <p className="subtitle-mod">Some older projects..</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ProjectsPage

export const query = graphql`
  {
    cv: file(relativePath: { eq: "images/projects/cv.PNG" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    etna: file(relativePath: { eq: "images/projects/etna.PNG" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hc: file(relativePath: { eq: "images/projects/hc.PNG" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lemot: file(relativePath: { eq: "images/projects/lemot.PNG" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vgcharts: file(relativePath: { eq: "images/projects/older/vgcharts.PNG" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    oldportfolio: file(
      relativePath: { eq: "images/projects/older/oldportfolio.PNG" }
    ) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    flickr: file(relativePath: { eq: "images/projects/older/flickr.PNG" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
