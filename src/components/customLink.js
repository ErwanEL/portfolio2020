import { Link } from "gatsby"
import React from "react"

const CustomLink = ({ url, content, color }) => {
  return (
    <Link
      css={{
        color,
        boxShadow: `0 1px 0 0 ${color}, inset 0 -0.1em ${color}`,
        "&:hover": { color },
      }}
      to={url}
    >
      {content}
    </Link>
  )
}

export default CustomLink
