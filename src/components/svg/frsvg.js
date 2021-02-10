import * as React from "react"

function FrSvg(props) {
  return (
    <svg width={64} height={64} viewBox="0 0 256 256" {...props}>
      <defs>
        <linearGradient
          x1={87.397}
          y1={141.973}
          x2={240.947}
          y2={141.973}
          id="a"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-129.37 -94.568) scale(1.56769)"
        >
          <stop offset={0} stopColor="#fff" stopOpacity={0.667} />
          <stop offset={0.241} stopColor="#d7d7d7" stopOpacity={0.219} />
          <stop offset={0.459} stopColor="#4d4d4d" stopOpacity={0} />
          <stop offset={0.719} stopColor="#fff" stopOpacity={0.51} />
          <stop offset={0.874} stopColor="#f2f2f2" stopOpacity={0.4} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.624} />
        </linearGradient>
        <linearGradient
          x1={87.397}
          y1={141.973}
          x2={269.333}
          y2={141.973}
          id="c"
          xlinkHref="#a"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-129.371 -94.57) scale(1.56769)"
        />
        <linearGradient
          gradientTransform="matrix(-1.5677 0 0 -1.5677 385.37 350.53)"
          x1={89.16}
          y1={141.96}
          x2={269.194}
          y2={141.96}
          id="b"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#ed2939" />
          <stop offset={0.19} stopColor="#ed2939" />
          <stop offset={0.3} stopColor="#fff" />
          <stop offset={0.5} stopColor="#fff" />
          <stop offset={0.625} stopColor="#002395" />
          <stop offset={1} stopColor="#002395" />
        </linearGradient>
        <linearGradient
          xlinkHref="#a"
          id="e"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-129.371 -94.57) scale(1.56769)"
          x1={87.397}
          y1={141.973}
          x2={269.333}
          y2={141.973}
        />
        <linearGradient
          xlinkHref="#b"
          id="d"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-1.5677 0 0 -1.5677 385.37 350.53)"
          x1={89.16}
          y1={141.96}
          x2={269.194}
          y2={141.96}
        />
      </defs>
      <path
        d="M248.36 206.96c-80.24-42.452-160.48 51.377-240.72 8.925V48.631C87.982 90.163 169.345-2.03 248.36 40.115V206.96z"
        fill="url(#c)"
      />
      <path
        d="M248.36 32.474C167.273-10.428 86.185 85.85 5.096 40.006 2.281 38.42 0 39.214 0 42.031v171.941c0 2.81 2.281 6.575 5.095 8.162 81.937 46.323 163.874-52.463 245.81-6.14 2.814 1.586 5.095.795 5.095-2.022V42.032c0-2.812-2.281-6.58-5.095-8.166a103.08 103.08 0 00-2.544-1.392z"
        fill="#616161"
      />
      <path
        d="M7.64 218.393c0-1.853 14.891 10.205 37.309 11.055 22.416 2.352 52.355-6.506 82.452-15.427 30.097-8.899 60.348-17.89 83.388-15.56 23.04.854 38.868 13.028 40.116 12.4V38.92c-1.235.8-16.906-11.481-39.797-12.397-22.89-2.399-53 6.57-83.108 15.507-30.11 8.93-60.217 17.857-83.108 15.439-22.89-.933-38.562-13.211-39.797-12.41V217c1.274.723 2.544 1.393 2.544 1.392z"
        fill="url(#d)"
      />
      <path
        d="M248.36 206.962c-80.24-42.452-160.48 51.377-240.719 8.925V49.041c80.24 42.451 160.48-51.377 240.72-8.924v166.845z"
        fill="#fff"
      />
      <path
        d="M87.804 56.179c-26.721 6.023-53.442 7-80.163-7.138v166.846c26.721 14.137 53.442 13.16 80.163 7.138V56.179z"
        fill="#002395"
      />
      <path
        d="M168.2 199.825c26.72-6.025 53.44-7 80.16 7.137V40.117c-26.72-14.138-53.44-13.162-80.16-7.14v166.848z"
        fill="#ed2939"
      />
      <path fill="none" d="M0 256V0h256v256" />
      <path
        d="M248.36 206.96c-80.24-42.452-160.48 51.377-240.72 8.925V48.631C87.982 90.163 169.345-2.03 248.36 40.115V206.96z"
        fill="url(#e)"
      />
    </svg>
  )
}

export default FrSvg
