import React from "react"
import { Helmet } from "react-helmet"
import "../styles/index.scss"
import Header from "./header"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
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
        <Header></Header>
        {children}
        <Footer></Footer>
      </div>
    </section>
  )
}
