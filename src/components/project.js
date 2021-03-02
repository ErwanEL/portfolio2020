import Img from "gatsby-image"
import React from "react"

const Project = ({
  id,
  title,
  color,
  content,
  link,
  optionLink,
  contentLink,
  img,
}) => {
  return (
    <section
      id={id}
      className="hero is-medium"
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-easing="ease"
    >
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-half">
              <div className="content">
                <h1 className="title">
                  <p>{title}</p>
                </h1>
                <hr style={{ background: `${color}` }} className="mini" />
                <p className="subtitle-mod">
                  {content}{" "}
                  {optionLink && (
                    <a className="strapi-link" href="https://strapi.io/">
                      Strapi.
                    </a>
                  )}
                </p>
                <p className="subtitle">
                  <a className={`${id}-link`} href={link}>
                    {contentLink}
                  </a>
                </p>
              </div>
            </div>
            <div className="column is-half">
              <Img className="project-img image" fluid={img} alt={title} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
