import Img from "gatsby-image"
import React from "react"
import { clearHtmlAndshrink } from "./utils"
const BlogCard = ({ imageData, title, html, date }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <Img style={{ maxHeight: "232px" }} fluid={imageData} />
        </figure>
      </div>
      <div className="card-content">
        <h1 className="title is-5">{title}</h1>
        <div className="content">
          {clearHtmlAndshrink(html)}
          {/* <a>@bulmaio</a>.<a href="#">#css</a>{" "}
          <a href="#">#responsive</a> */}
          <br />
          <time className="tag" dateTime="2016-1-1">{date}</time>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
