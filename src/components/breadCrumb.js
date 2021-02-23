import Img from "gatsby-image"
import { Link } from "gatsby"
import React from "react"

const Breadcrumb = ({ title }) => {
  return (
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <Link to="/">
            <span class="icon is-small">
              <i class="fas fa-home" aria-hidden="true"></i>
            </span>
            <span>Index</span>
          </Link>
        </li>
        <li class="is-active">
          <a href="#" aria-current="page">
            {title}
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Breadcrumb
