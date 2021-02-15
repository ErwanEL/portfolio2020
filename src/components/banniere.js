import { useEffect, useState } from "react"

import Img from "gatsby-image"
import React from "react"
import { useStaticQuery } from "gatsby"

const Banniere = ({ title }) => {
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

  let progressValue = 0
  let maxProgressValue

  function useScroll() {
    const [lastScrollTop, setLastScrollTop] = useState(0)
    const [bodyOffset, setBodyOffset] = useState(
      document.body.getBoundingClientRect()
    )
    const [scrollY, setScrollY] = useState(bodyOffset.top)
    const [scrollX, setScrollX] = useState(bodyOffset.left)
    const [scrollDirection, setScrollDirection] = useState()

    const listener = e => {
      setBodyOffset(document.body.getBoundingClientRect())
      setScrollY(-bodyOffset.top)
      //   setScrollX(bodyOffset.left)
      //   setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up")
      setLastScrollTop(-bodyOffset.top)
    }

    useEffect(() => {
      progressValue = 0
      window.addEventListener("scroll", listener)
      return () => {
        window.removeEventListener("scroll", listener)
      }
    })

    return (progressValue = scrollY)
  }

  const SetMaxProgressValue = () => {
    return (maxProgressValue = document.body.clientHeight - 1500)
  }

  if (typeof document !== `undefined`) {
    useScroll()
    SetMaxProgressValue()
  }

  const profilePic = picture.file.childImageSharp.fluid
  return (
    <div className={`banniere ${progressValue >= 350 && "is-active"}`}>
      <article
        style={{
          width: "724px",
          margin: "auto",
          position: "relative",
          top: "10px",
        }}
        class="media center"
      >
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
      <p
        style={{ margin: "auto", width: "724px" }}
        className="has-text-left pt-5"
      >
        {title}
      </p>
      <progress
        class="progress is-small"
        value={progressValue}
        max={maxProgressValue}
      >
        {/* 75% */}
      </progress>
    </div>
  )
}

export default Banniere
