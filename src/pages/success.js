import React from "react"
import Layout from "../components/layout"

const SuccessPage = () => {
  return (
    <Layout>
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <div className="content">
                  <h1 className="title">
                    <span className="mate">✉️</span>
                    <p>Contact me.</p>
                  </h1>
                  <hr className="mini" />
                  <p className="subtitle-mod">Any project.</p>
                  <p className="subtitle-mod">Any Job proposition.</p>
                  <p className="subtitle-mod">Feel free to contact me.</p>
                </div>
              </div>
              <div className="column is-half">
                <div className="notification has-text-centered has-text-white">
                  Your message has been sent with success!{" "}
                  <i class="fas fa-check-square"></i>
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
