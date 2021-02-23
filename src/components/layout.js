import "../styles/index.scss"

import Footer from "./footer"
import Header from "./header"
import HeaderData from "../../site/content/header.yml"
import { Helmet } from "react-helmet"
import React from "react"

export default function Layout({ children }) {
  return (
    <>
      <div className="is-hidden-desktop">
        <Header navbar={HeaderData}></Header>
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
            <Header navbar={HeaderData}></Header>
          </div>
          {/* <div class="section mt-6 is-paddingless-horizontal">
            <div class="container grid"> */}
          {children}
          {/* </div>
          </div> */}
          <Footer></Footer>
        </div>
      </section>
    </>
  )
}
