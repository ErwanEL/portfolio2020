import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import React from "react"

const ProfilePic = () => {
  const data = useStaticQuery(graphql`
    {
      profilePic: file(relativePath: { eq: "images/mini-Juan.JPG" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="profilePic">
      <Img
        objectPosition="100%"
        objectFit="content"
        style={{
          borderRadius: "150px",
          width: "80px",
          height: "80px",
          border: "3px solid #ff7b00",
        }}
        fluid={data.profilePic.childImageSharp.fluid}
      />
    </div>
  )
}

export default ProfilePic
