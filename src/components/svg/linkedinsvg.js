import * as React from "react"

function LinkedInSvg(props) {
  return (
    <svg
      width={27}
      height={27}
      viewBox="0 0 34 34"
      className="global-nav__logo"
      {...props}
    >
      <path
        d="M34 2.5v29a2.5 2.5 0 01-2.5 2.5h-29A2.5 2.5 0 010 31.5v-29A2.5 2.5 0 012.5 0h29A2.5 2.5 0 0134 2.5zM10 13H5v16h5zm.45-5.5a2.88 2.88 0 00-2.86-2.9H7.5a2.9 2.9 0 000 5.8 2.88 2.88 0 002.95-2.81zM29 19.28c0-4.81-3.06-6.68-6.1-6.68a5.7 5.7 0 00-5.06 2.58h-.14V13H13v16h5v-8.51a3.32 3.32 0 013-3.58h.19c1.59 0 2.77 1 2.77 3.52V29h5z"
        fill="#0B66C2"
      />
    </svg>
  )
}

export default LinkedInSvg
