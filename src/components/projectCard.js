import Img from "gatsby-image"
import React from "react"
import { clearHtmlAndshrink } from "./utils"

const ProjectCard = ({ imageData, title, date }) => {
  return (
    <div className="card">
      <div className="container-over card-image">
        <figure className="image-over image">
          <Img style={{ maxHeight: "232px" }} fluid={imageData} />
        </figure>
        <div className="middle">
          <div className="text">{title}</div>
        </div>
      </div>
      {/* <div className="card-content">
        <h1 className="title is-5">{title}</h1>
      </div> */}
    </div>
  )
}

export default ProjectCard
