import React from "react"
import Img from "gatsby-image"

const CascadeOld = ({ arrayOfImages }) => {
  return (
    <div className="cascade is-hidden-mobile is-hidden-touch">
      <div className="cascade-child child1">
        <div className="sub">
          <span className="tooltip is-hidden-touch">Interactive Cv</span>
          <a href="https://erwanel-cv.netlify.app/" target="_blank">
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
          <span className="tooltip is-hidden-touch">Old Portfolio</span>
          <a href="https://erwanel.github.io/" target="_blank">
            <Img
              className="project-img image"
              fluid={arrayOfImages[1]}
              alt="Old Portfolio"
            />
          </a>
        </div>
      </div>
      <div className="cascade-child child3">
        <div className="sub">
          <span className="tooltip is-hidden-touch">Vg Charts</span>
          <a href="https://erwanel.github.io/vgCharts/" target="_blank">
            <Img
              className="project-img image"
              fluid={arrayOfImages[2]}
              alt="Vgcharts"
            />
          </a>
        </div>
      </div>
      <div className="cascade-child child4">
        <div className="sub">
          <span className="tooltip is-hidden-touch">Flickr Viewer</span>
          <a href="https://erwanel.github.io/flickrSearch-th/" target="_blank">
            <Img
              className="project-img image"
              fluid={arrayOfImages[3]}
              alt="Flickr Project"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default CascadeOld
