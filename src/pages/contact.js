import React from "react"
import Layout from "../components/layout"
import Resume from "../assets/resume.pdf"
import SEO from "../components/seo"
import Form from "../components/form"
import YAMLData from "../../site/content/pages/en/contact.yml"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title={YAMLData.seo} />
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                {/* {html} */}
                <h1 className="title">
                  <span className="mate">✉️</span>
                  {YAMLData.title}
                </h1>
                <div dangerouslySetInnerHTML={{ __html: YAMLData.content }} />
              </div>

              <div
                className="column is-half message"
                style={{ boxShadow: "10px 5px 5px #8080807d" }}
              >
                <div className="column">
                  <Form></Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section id="resume" className="hero is-small">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-half mt-5">
                <iframe
                  className="is-hidden-mobile"
                  style={{ boxShadow: "10px 5px 5px #8080807d" }}
                  src={`${Resume}#toolbar=0&navpanes=0`}
                  width="100%"
                  height="750px"
                ></iframe>
              </div>
              <div
                className="p-1 is-hidden-desktop"
                style={{ boxShadow: "10px 5px 5px #8080807d" }}
              >
                <img src={"/resume.jpg"} alt="" />
              </div>
              <div className="column is-half">
                <h1 className="title">
                  <u>
                    {" "}
                    <a className="resume-link" target="_blank" href={Resume}>
                      resume.pdf <i class="fas fa-external-link-alt"></i>
                    </a>
                  </u>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
