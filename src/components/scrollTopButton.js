import React, { useState } from "react"

const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState(false)

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (typeof window !== `undefined`) {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false)
      }
    }

    window.addEventListener("scroll", checkScrollTop)
  }

  return (
    <div>
      <button
        style={{ display: showScroll ? "flex" : "none" }}
        onClick={scrollTop}
        className="button scroll-top is-hidden-touch"
      >
        <i className="fas fa-angle-up"></i>
      </button>
    </div>
  )
}

export default ScrollTop
