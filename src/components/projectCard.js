import Img from "gatsby-image"
import React from "react"

const ProjectCard = ({ imageData, title, link }) => {
  return (
    <div className="card">
      <a href={link}>
        <div className="container-over card-image">
          <figure className="image-over image">
            <Img style={{ maxHeight: "232px" }} fluid={imageData} />
          </figure>
          <div className="middle">
            <div className="text">{title}</div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default ProjectCard
