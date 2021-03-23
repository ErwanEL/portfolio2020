import React from "react"

const CustomLink = ({ url, content, color }) => {
  return (
    <a
      css={{
        color,
        boxShadow: `0 1px 0 0 ${color}, inset 0 -0.1em ${color}`,
        "&:hover": { color },
      }}
      href={url}
    >
      {content}
    </a>
  )
}

export default CustomLink
