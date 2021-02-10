import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import "../styles/index.scss"
import Header from "./header"
import Footer from "./footer"

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { component: { eq: "header" } }) {
        frontmatter {
          component
          home
          freelance
          ressources
          skills
          projects
          contact
        }
      }
    }
  `)
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <>
      <div className="is-hidden-desktop">
        <Header navbar={frontmatter}></Header>
      </div>
      <section className="section">
        <div className="container">
          <Helmet>
            <meta charSet="utf-8" />
            <title>ErwanEL</title>
            <link rel="canonical" href="https://erwanel.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Voces&display=swap"
              rel="stylesheet"
            />
            <script
              src="https://kit.fontawesome.com/3ca10bedb4.js"
              crossorigin="anonymous"
            ></script>
          </Helmet>
          <div className="is-hidden-mobile is-hidden-touch">
            <Header navbar={frontmatter}></Header>
          </div>
          {children}
          <Footer></Footer>
        </div>
      </section>
    </>
  )
}
