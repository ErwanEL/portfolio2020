import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const ProjectsPage = ({ data }) => {
  return (
    <Layout>
      <section id="projects" className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <div className="content">
                  <h1 className="title">
                    <span className="mate">🗀</span>
                    My projects
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
                      <a href="https://github.com/ErwanEL/" target="_blank">
                        Github
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="column is-half">
                <div className="cascade is-hidden-mobile is-hidden-touch ">
                  <div className="cascade-child child1">
                    <div className="sub">
                      <a href="#olderworks">
                        <Img
                          className="project-img image"
                          fluid={data.cv.childImageSharp.fluid}
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
                          fluid={data.etna.childImageSharp.fluid}
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
                          fluid={data.hc.childImageSharp.fluid}
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
                          fluid={data.lemot.childImageSharp.fluid}
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
      <section
        id="gatsbyjs"
        className="hero is-medium"
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <div className="content">
                  <h1 className="title">
                    <p>HauteCulture</p>
                  </h1>
                  <hr style={{ background: "#7a1014" }} className="mini" />
                  <p className="subtitle-mod">
                    A GatsbyJs project I've collaborated on. Include the{" "}
                    <a className="strapi-link" href="https://strapi.io/">
                      Strapi CMS.
                    </a>
                  </p>
                  <p className="subtitle">
                    <a
                      className="hc-link"
                      href="https://www.hauteculture.com/"
                      target="_blank"
                    >
                      See more about HauteCulture.
                    </a>
                  </p>
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
      <section
        id="lemot"
        className="hero is-medium"
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <div className="content">
                  <h1 className="title">
                    <p>Lemot</p>
                  </h1>
                  <hr style={{ background: "#2a4f7f" }} className="mini" />
                  <p className="subtitle-mod">
                    A GatsbyJs service to practice French for Spanish speaking
                    public. Use Mailgun. Netlify backend. MJML for mail
                    templating.
                  </p>
                  <p className="subtitle">
                    <a
                      className="lemot-link"
                      href="https://lemot.app/"
                      target="_blank"
                    >
                      See more about Lemot.
                    </a>
                  </p>
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
      <section
        id="etna"
        className="hero is-medium"
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <div className="content">
                  <h1 className="title">
                    <p>Etna-Joyas</p>
                  </h1>
                  <hr style={{ background: "#A87868" }} className="mini" />
                  <p className="subtitle-mod">
                    A GatsbyJs prototype for a jewelry showcase. Include DATO
                    Cms.
                  </p>
                  <p className="subtitle">
                    <a
                      className="etna-link"
                      href="https://etnajoyas.netlify.app/"
                      target="_blank"
                    >
                      See more about Etna-Joyas.
                    </a>
                  </p>
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
              <div
                className="column is-half is-hidden-desktop "
                data-sal="slide-right"
                data-sal-delay="500"
                data-sal-easing="ease"
              >
                <div>
                  <div className="parent">
                    <div className="child1">
                      <Img
                        className="project-img image"
                        fluid={data.cv.childImageSharp.fluid}
                        alt="Cv"
                      />
                    </div>
                    <div className="child1 child2">
                      <Img
                        className="project-img image"
                        fluid={data.oldportfolio.childImageSharp.fluid}
                        alt="Old Portfolio"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="column is-half has-text-right is-hidden-desktop  "
                // data-sal="slide-left"
                // data-sal-delay="500"
                // data-sal-easing="ease"
              >
                <div className="content has-text-centered mt-3">
                  <h1 className="title">
                    <p>🖿 Older works. </p>
                  </h1>
                  <p className="subtitle-mod">Some older projects.</p>
                </div>
              </div>
              <div
                className="column is-half"
                data-sal="slide-right"
                data-sal-delay="500"
                data-sal-easing="ease"
              >
                <div className="cascade is-hidden-mobile is-hidden-touch">
                  <div className="cascade-child child1">
                    <div className="sub">
                      <span className="tooltip is-hidden-touch">
                        Interactive Cv
                      </span>
                      <a href="https://erwanel-cv.netlify.app/" target="_blank">
                        <Img
                          className="project-img image"
                          fluid={data.cv.childImageSharp.fluid}
                          alt="Cv"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="cascade-child child2">
                    <div className="sub">
                      <span className="tooltip is-hidden-touch">
                        Old Portfolio
                      </span>
                      <a href="https://erwanel.github.io/" target="_blank">
                        <Img
                          className="project-img image"
                          fluid={data.oldportfolio.childImageSharp.fluid}
                          alt="Old Portfolio"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="cascade-child child3">
                    <div className="sub">
                      <span className="tooltip is-hidden-touch">Vg Charts</span>
                      <a
                        href="https://erwanel.github.io/vgCharts/"
                        target="_blank"
                      >
                        <Img
                          className="project-img image"
                          fluid={data.vgcharts.childImageSharp.fluid}
                          alt="Vgcharts"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="cascade-child child4">
                    <div className="sub">
                      <span className="tooltip is-hidden-touch">
                        Flickr Viewer
                      </span>
                      <a
                        href="https://erwanel.github.io/flickrSearch-th/"
                        target="_blank"
                      >
                        <Img
                          className="project-img image"
                          fluid={data.flickr.childImageSharp.fluid}
                          alt="Flickr Project"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="column is-half has-text-right is-hidden-mobile is-hidden-touch"
                data-sal="slide-left"
                data-sal-delay="500"
                data-sal-easing="ease"
              >
                <div className="content">
                  <h1 className="title">
                    <p>🖿 Older works. </p>
                  </h1>
                  <p className="subtitle-mod">Some older projects.</p>
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
        fluid {
          ...GatsbyImageSharpFluid
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
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    flickr: file(relativePath: { eq: "images/projects/older/flickr.PNG" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
