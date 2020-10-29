import React from "react"
import Img from "gatsby-image"

const Cascade = ({ arrayOfImages }) => {
  return (
    <div className="cascade is-hidden-mobile is-hidden-touch ">
      <div className="cascade-child child1">
        <div className="sub">
          <a href="#olderworks">
            <Img
              className="project-img image"
              fluid={arrayOfImages[0]}
              alt="Cv"
            />
          </a>
        </div>
      </div>
      <div className="cascade-child child2">
        <div className="sub">
          <a href="#etna">
            <Img
              className="project-img image"
              fluid={arrayOfImages[1]}
              alt="Etna joyas"
            />
          </a>
        </div>
      </div>
      <div className="cascade-child child3">
        <div className="sub">
          <a href="#hc">
            <Img
              className="project-img image"
              fluid={arrayOfImages[2]}
              alt="Haute Culture"
            />
          </a>
        </div>
      </div>
      <div className="cascade-child child4">
        <div className="sub">
          <a href="#lemot">
            <Img
              className="project-img image"
              fluid={arrayOfImages[3]}
              alt="Lemot"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Cascade
