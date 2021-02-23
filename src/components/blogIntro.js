import Img from "gatsby-image"
import React from "react"

const BlogIntro = () => {
  return (
    <div class="columns">
      <div style={{ margin: "auto" }} class="column is-8">
        <div class="content is-medium">
          <h1 class="title">👋</h1>
          {/* <h2 class="subtitle is-4">{frontmatter.date}</h2> */}
          {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
          <div class="content is-medium">
            Bienvenue. <br />
            Ici un blog sur le développement web,
            <br /> plus particulièrement sur la Jamstack et GatsbyJs.
          </div>
        </div>
      </div>
      <div style={{ margin: "auto" }} class="column is-3">
        {/* <Img
                objectPosition="100%"
                objectFit="content"
                style={{
                  borderRadius: "150px",
                  width: "150px",
                  height: "150px",
                  border: "3px solid #ff7b00",
                }}
                fluid={data.profilePic.childImageSharp.fluid}
              /> */}
      </div>
    </div>
  )
}

export default BlogIntro
