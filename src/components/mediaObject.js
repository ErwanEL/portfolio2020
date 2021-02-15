import Img from "gatsby-image"
// import { Link } from "gatsby"
import React from "react"
import { useStaticQuery } from "gatsby"

const MediaObject = ({ title }) => {
  const picture = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/mini-Juan.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const profilePic = picture.file.childImageSharp.fluid

  return (
    <article class="media center">
      <figure class="media-left">
        <figure class="image is-64x64">
          {/* <img src="assets/logo.png" /> */}
          <Img
            objectPosition="100%"
            objectFit="content"
            style={{
              borderRadius: "150px",
              width: "70px",
              height: "70px",
              border: "3px solid #ff7b00",
            }}
            fluid={profilePic}
          />
        </figure>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>ErwanEL</strong>
            <a>@username</a>
            <span class="has-text-grey">
              Self taught <br />
              <time datetime="2019-05-17">Apr 20</time> · 20min read
            </span>
          </p>
        </div>
      </div>
    </article>
  )
}

export default MediaObject
