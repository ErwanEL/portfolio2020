import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import YAMLData from "../../site/content/pages/contact.yml"

const SuccessPage = () => {
  return (
    <Layout>
      <SEO title={YAMLData.seo} />
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <div className="content">
                  <h1 className="title">
                    <span className="mate">✉️</span>
                    {YAMLData.title}
                  </h1>
                  <div dangerouslySetInnerHTML={{ __html: YAMLData.content }} />
                </div>
              </div>
              <div className="column is-half">
                <div className="notification has-text-centered has-text-white">
                  {YAMLData.success} <i className="fas fa-check-square"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SuccessPage
