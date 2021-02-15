import Img from "gatsby-image"
import React from "react"

const BlogCard = ({ imageData }) => {
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <Img fluid={imageData} />
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
          <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
