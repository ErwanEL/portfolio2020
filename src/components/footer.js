import GatsbySvg from "../components/svg/gatsbysvg"
import { Link } from "gatsby"
import React from "react"
import ScrollTop from "../components/scrollTopButton"

const Footer = () => {
  return (
    <footer className="footer has-text-centered">
      <ScrollTop />
      <nav
        class="breadcrumb has-bullet-separator is-centered has-text-weight-semibold"
        aria-label="breadcrumbs"
      >
        <ul>
          <li>
            <Link to="https://erwanel.com">Home</Link>
          </li>
          <li>
            <a href="https://github.com/ErwanEL/">Github</a>
          </li>
          <li>
            <Link to="https://erwanel.com/contact/">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* <p>home • github • contact</p> */}
      <div className="has-text-centered">
        <img
          className="mr-5"
          src={"/made-with-bulma.png"}
          alt="Static image"
          width="128"
          height="24"
        />
        <GatsbySvg className="mr-3" width="106px" height="28px" />
        {/* <img
          className="mr-5"
          src={"/netlifycms.png"}
          alt="Static image"
          width="120"
          height="24"
        /> */}
      </div>
    </footer>
  )
}

export default Footer
