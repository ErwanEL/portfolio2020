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
                    Contact me. 
                  </h1>
                  <hr className="mini" />
                  <p className="subtitle-mod">Any project.</p>
                  <p className="subtitle-mod">Any Job proposition.</p>
                  <p className="subtitle-mod">Feel free to contact me.</p>
                </div>
              </div>
              <div className="column is-half">
                <form
                  name="contact"
                  method="POST"
                  action="/success"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                      <input
                        name="name"
                        className="input"
                        type="text"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                      <input
                        name="email"
                        className="input "
                        type="email"
                        placeholder="Your Email"
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                      <textarea
                        name="message"
                        className="textarea"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                  </div>
                  {/* 
                  <div className="field">
                    <div data-netlify-recaptcha="true"></div>
                  </div> */}
                  {/* <div className="field">
                    <input
                      type="file"
                      name="myfile"
                      id="myfile"
                      placeholder="Upload File"
                    />
                  </div> */}

                  <div className="field is-grouped">
                    <div className="control">
                      <button type="submit" className="button is-link submit">
                        Send
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
