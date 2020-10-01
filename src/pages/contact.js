import React from "react"
// import { graphql } from "gatsby"
// import Img from "gatsby-image"
import Layout from "../components/layout"

const ContactPage = () => {
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
                    <p>Contact me</p>
                  </h1>
                  <hr className="mini" />
                  <p className="subtitle-mod">Any project.</p>
                  <p className="subtitle-mod">Any Job proposition.</p>
                  <p className="subtitle-mod">Feel free to contact me.</p>
                </div>
              </div>
              <div className="column is-half">
                <form name="contact" method="POST" data-netlify="true">
                  <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                      <input
                        name="name"
                        class="input"
                        type="text"
                        placeholder="Text input"
                      />
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Email</label>
                    <div class="control has-icons-left has-icons-right">
                      <input
                        name="email"
                        class="input "
                        type="email"
                        placeholder="Email input"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                      </span>
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Message</label>
                    <div class="control">
                      <textarea
                        name="message"
                        class="textarea"
                        placeholder="Textarea"
                      ></textarea>
                    </div>
                  </div>

                  <div class="field is-grouped">
                    <div class="control">
                      <button type="submit" class="button is-link submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
