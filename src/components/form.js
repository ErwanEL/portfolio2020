import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Form = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { component: { eq: "form" } }) {
        frontmatter {
          component
          name
          namePlaceholder
          email
          emailPlaceholder
          message
          messagePlaceholder
          send
        }
      }
    }
  `)
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <form
      name="contact"
      method="POST"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      // data-netlify-recaptcha="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="field">
        <label className="label">{frontmatter.name}</label>
        <div className="control">
          <input
            name="name"
            className="input"
            type="text"
            placeholder={frontmatter.namePlaceholder}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">{frontmatter.email}</label>
        <div className="control has-icons-left has-icons-right">
          <input
            name="email"
            className="input "
            type="email"
            placeholder={frontmatter.emailPlaceholder}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label">{frontmatter.message}</label>
        <div className="control">
          <textarea
            name="message"
            className="textarea"
            placeholder={frontmatter.messagePlaceholder}
          ></textarea>
        </div>
      </div>

      <div className="field">
        <div data-netlify-recaptcha="true"></div>
      </div>
      <div className="field">
        <input
          type="file"
          name="myfile"
          id="myfile"
          placeholder="Upload File"
        />
      </div>

      {/* <div data-netlify-recaptcha="true"></div> */}
      <div className="field is-grouped">
        <div className="control">
          <button type="submit" className="button is-link submit">
            {frontmatter.send}
          </button>
        </div>
      </div>
    </form>
  )
}

export default Form
