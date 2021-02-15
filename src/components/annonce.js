import Img from "gatsby-image"
import React from "react"

const Annonce = () => {
  return (
    <section class="section">
      <div class="">
        <div class=" is-10 is-offset-1">
          <div class="container has-text-centered is-fluid">
            <div class="hero is-light">
              <div style={{ background: "whitesmoke" }} class="hero-body box">
                <h1 class="title is-4 has-text-right">
                  Vous travaillez sur un projet en Jamstack,
                  <br /> besoin d'une solution statique?{" "}
                </h1>
                <p class="has-text-right">Me contacter par email. 📨</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Annonce
