import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HtmlSvg from "../components/svg/htmlsvg"
import CssSvg from "../components/svg/csssvg"
import SassSvg from "../components/svg/sasssvg"
import JsSvg from "../components/svg/jssvg"
import GatsbySvg from "../components/svg/gatsbysvg"
import ReactSvg from "../components/svg/reactsvg"
import AtlassianSvg from "../components/svg/atlassiansvg"

const SkillsPage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.seo} />
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <div className="content">
                  <h1 className="title">
                    <span className="mate">🔧</span>
                    {frontmatter.seo}.
                  </h1>
                  <hr style={{ background: "#4eb236" }} className="mini" />
                  <p className="subtitle-mod">{frontmatter.title}</p>
                </div>
                <nav
                  className="breadcrumb is-medium has-bullet-separator"
                  aria-label="breadcrumbs"
                >
                  <ul>
                    <li>
                      <a href="#htmlcss">Html/Css</a>
                    </li>
                    <li>
                      <a href="#javascript">Javascript</a>
                    </li>
                    <li>
                      <a href="#gatsbyjs">GatsbyJs</a>
                    </li>
                    <li>
                      <a href="#workflow">Workflow</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="column is-half">
                <Img
                  className="free image"
                  fluid={data.cmd.childImageSharp.fluid}
                  alt="Upwork contracts"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section
        id="htmlcss"
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
                    <p>HTML & CSS</p>
                  </h1>
                  <hr className="mini" />
                  <div className="svg">
                    <HtmlSvg className="skillsSvg mr-2"></HtmlSvg>
                    <CssSvg className="skillsSvg mr-2"></CssSvg>
                    <SassSvg className="skillsSvg"></SassSvg>
                    <p className="subtitle-mod">{frontmatter.html}</p>
                  </div>
                </div>
              </div>
              <div className="column is-half">
                <Img
                  className="free image"
                  fluid={data.htmlcss.childImageSharp.fluid}
                  alt="Vscode"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section
        id="javascript"
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
                    <p>Javascript</p>
                  </h1>
                  <hr style={{ background: "#F7DF1E" }} className="mini" />
                  <div className="svg">
                    <JsSvg className="skillsSvg"></JsSvg>
                    <p className="subtitle-mod">{frontmatter.javascript}</p>
                  </div>
                </div>
              </div>
              <div className="column is-half">
                <Img
                  className="free image"
                  fluid={data.vscode.childImageSharp.fluid}
                  alt="Vscode"
                />
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
                    <p>GatsbyJs</p>
                  </h1>
                  <hr style={{ background: "#663399" }} className="mini" />
                  <div className="svg">
                    {/* <GatsbySvg className="skillsSvmr-2g"></GatsbySvg> */}
                    <ReactSvg className="skillsSvg mr-2"></ReactSvg>
                    <GatsbySvg className="skillsSvg"></GatsbySvg>

                    <p className="subtitle-mod">
                      {frontmatter.gatsbyjs}{" "}
                      <a
                        className="react-link"
                        href="https://en.reactjs.org/"
                        target="_blank"
                      >
                        {" "}
                        ReactJs
                      </a>
                      .{" "}
                      <a
                        className="gatsby-link"
                        href="https://www.gatsbyjs.com/"
                        target="_blank"
                      >
                        {frontmatter.gatsbyjsLink}
                      </a>
                    </p>
                    <p className="subtitle-mod">
                      {frontmatter.netlify}{" "}
                      <a
                        className="netlify-link"
                        href="https://www.netlify.com/"
                        target="_blank"
                      >
                        {frontmatter.netlifyLink}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="column is-half">
                <div className="parent">
                  <div className="child1">
                    <Img
                      className="free image"
                      fluid={data.react.childImageSharp.fluid}
                      alt="React"
                    />
                  </div>
                  <div className="child1 child2">
                    <Img
                      className="free image"
                      fluid={data.gatsbyjs.childImageSharp.fluid}
                      alt="Gatsbyjs"
                    />
                  </div>
                </div>
                {/* <Img
                  className="free image"
                  fluid={data.vscode.childImageSharp.fluid}
                  alt="Vscode"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section
        id="workflow"
        className="hero is-medium is-hidden-mobile is-hidden-touch"
      >
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div
                className="column is-half"
                data-sal="slide-right"
                data-sal-delay="500"
                data-sal-easing="ease"
              >
                <div className="parent">
                  <div className="child1">
                    <Img
                      className="free image"
                      fluid={data.trello.childImageSharp.fluid}
                      alt="Trello"
                    />
                  </div>
                  <div className="child1 child2">
                    <Img
                      className="free image"
                      fluid={data.bitbucket.childImageSharp.fluid}
                      alt="Bitbucket"
                    />
                  </div>
                </div>
              </div>
              <div
                className="column is-half"
                data-sal="slide-left"
                data-sal-delay="500"
                data-sal-easing="ease"
              >
                <div className="content has-text-right">
                  <h1 className="title">
                    <p>Workflow</p>
                  </h1>
                  {/* <hr className="mini" /> */}
                  <div className="svg">
                    <AtlassianSvg className="skillsSvg"></AtlassianSvg>
                    <div dangerouslySetInnerHTML={{ __html: html }} />

                    {/* <p className="subtitle-mod">
                      {" "}
                      I like to use the{" "}
                      <a
                        className="atlassian-link"
                        href="https://www.atlassian.com/"
                        target="_blank"
                      >
                        Atlassian services
                      </a>{" "}
                      like Bitbucket and trello to organize my projects.{" "}
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="workflow" className="hero is-medium is-hidden-desktop">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div
                className="column is-half"
                data-sal="slide-right"
                data-sal-delay="500"
                data-sal-easing="ease"
              >
                <div className="parent">
                  <div className="child1">
                    <Img
                      className="free image"
                      fluid={data.trello.childImageSharp.fluid}
                      alt="Trello"
                    />
                  </div>
                  <div className="child1 child2">
                    <Img
                      className="free image"
                      fluid={data.bitbucket.childImageSharp.fluid}
                      alt="Bitbucket"
                    />
                  </div>
                </div>
              </div>
              <div
                className="column is-half"
                // data-sal="slide-left"
                // data-sal-delay="500"
                // data-sal-easing="ease"
              >
                <div className="content has-text-right">
                  <h1 className="title">
                    <p>Workflow</p>
                  </h1>
                  {/* <hr className="mini" /> */}
                  <div className="svg">
                    <AtlassianSvg className="skillsSvg"></AtlassianSvg>
                    <p className="subtitle-mod">
                      {" "}
                      I like to use the{" "}
                      <a
                        className="atlassian-link"
                        href="https://www.atlassian.com/"
                        target="_blank"
                      >
                        Atlassian services
                      </a>{" "}
                      like Bitubucket and trello to work on my projects.{" "}
                    </p>
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

export default SkillsPage

export const query = graphql`
  {
    markdownRemark(frontmatter: { slug: { eq: "/skills" } }) {
      html
      frontmatter {
        slug
        seo
        title
        html
        javascript
        gatsbyjs
        gatsbyjsLink
        netlify
        netlifyLink
      }
    }
    vscode: file(relativePath: { eq: "images/skills/vscode.PNG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    cmd: file(relativePath: { eq: "images/skills/cmd.PNG" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    htmlcss: file(relativePath: { eq: "images/skills/htmlcss.PNG" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    gatsbyjs: file(relativePath: { eq: "images/skills/gatsbyjs.PNG" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    react: file(relativePath: { eq: "images/skills/react.PNG" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    trello: file(relativePath: { eq: "images/skills/trello.PNG" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bitbucket: file(relativePath: { eq: "images/skills/bitbucket.PNG" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
