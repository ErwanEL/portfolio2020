import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import AtlassianSvg from "../components/svg/atlassiansvg"
import CssSvg from "../components/svg/csssvg"
import CustomLink from "../components/customLink"
import GatsbySvg from "../components/svg/gatsbysvg"
import HtmlSvg from "../components/svg/htmlsvg"
import Img from "gatsby-image"
import JsSvg from "../components/svg/jssvg"
import Layout from "../components/layout"
import React from "react"
import ReactSvg from "../components/svg/reactsvg"
import SEO from "../components/seo"
import SassSvg from "../components/svg/sasssvg"
import { graphql } from "gatsby"

const SkillsPage = ({ data, intl }) => {
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "skills.section.title" })}
      />
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <div className="content">
                  <h1 className="title">
                    <span className="mate">🔧</span>
                    <FormattedMessage id="skills.section.title" />
                  </h1>
                  <hr style={{ background: "#4eb236" }} className="mini" />
                  <p className="subtitle-mod">
                    <FormattedMessage id="skills.section.description" />
                  </p>
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
                    <p>
                      <FormattedMessage id="skills.section_1.title" />
                    </p>
                  </h1>
                  <hr className="mini" />
                  <div className="svg">
                    <HtmlSvg className="skillsSvg mr-2"></HtmlSvg>
                    <CssSvg className="skillsSvg mr-2"></CssSvg>
                    <SassSvg className="skillsSvg"></SassSvg>
                    <p className="subtitle-mod">
                      <FormattedMessage id="skills.section_1.description" />
                    </p>
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
                    <p>
                      <FormattedMessage id="skills.section_2.title" />
                    </p>
                  </h1>
                  <hr style={{ background: "#F7DF1E" }} className="mini" />
                  <div className="svg">
                    <JsSvg className="skillsSvg"></JsSvg>
                    <p className="subtitle-mod">
                      <FormattedMessage id="skills.section_2.description" />
                    </p>
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
                    <p>
                      {" "}
                      <FormattedMessage id="skills.section_3.title" />
                    </p>
                  </h1>
                  <hr style={{ background: "#663399" }} className="mini" />
                  <div className="svg">
                    {/* <GatsbySvg className="skillsSvmr-2g"></GatsbySvg> */}
                    <ReactSvg className="skillsSvg mr-2"></ReactSvg>
                    <GatsbySvg className="skillsSvg"></GatsbySvg>

                    <p className="subtitle-mod">
                      <FormattedMessage id="skills.section_3.description" />{" "}
                      <CustomLink
                        content="ReactJs"
                        color="#61dafb"
                        url="https://en.reactjs.org/"
                      />
                      . <FormattedMessage id="skills.section_3.link" />{" "}
                      <CustomLink
                        content="GatsbyJs"
                        color="#663399"
                        url="https://www.gatsbyjs.com/"
                      />
                    </p>

                    <p className="subtitle-mod">
                      <FormattedMessage id="skills.section_3.description_1" />.{" "}
                      <FormattedMessage id="skills.section_3.link" />{" "}
                      <CustomLink
                        content="Netlify"
                        color="#30928b"
                        url="https://www.gatsbyjs.com/"
                      />
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
                    <p>
                      <FormattedMessage id="skills.section_4.title" />
                    </p>
                  </h1>
                  {/* <hr className="mini" /> */}
                  <div className="svg">
                    <AtlassianSvg className="skillsSvg"></AtlassianSvg>
                    <p className="subtitle-mod">
                      <FormattedMessage id="skills.section_4.description" />{" "}
                      <CustomLink
                        className="atlassian-link"
                        content="Atlassian"
                        color="#0052cc"
                        url="https://www.atlassian.com/"
                      />{" "}
                      <FormattedMessage id="skills.section_4.description_1" />{" "}
                    </p>

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

export default injectIntl(SkillsPage)

export const query = graphql`
  {
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
