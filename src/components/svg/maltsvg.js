import * as React from "react"

function MaltSvg(props) {
  return (
    <svg width={31} height={32} viewBox="0 0 50 51" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.79 7.216c-3.775-3.774-7.806-1.331-10.33 1.191L20.544 20.325 8.625 32.243c-2.522 2.523-5.164 6.356-1.192 10.328 3.973 3.973 7.806 1.332 10.329-1.191L29.68 29.462l11.918-11.918c2.523-2.523 4.965-6.555 1.191-10.328zM20.015 6.239l5.048 5.047L30.2 6.148c.35-.35.702-.674 1.059-.98C30.72 2.454 29.172 0 25.06 0c-4.12 0-5.667 2.463-6.202 5.184.384.332.768.666 1.157 1.054z"
        fill="#FF5C57"
      />
      <mask
        id="a"
        maskUnits="userSpaceOnUse"
        x={18}
        y={38}
        width={14}
        height={13}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.877 38.594h12.376v11.407H18.876V38.594z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.199 43.728l-5.135-5.134-5.044 5.044c-.383.383-.764.733-1.143 1.062.578 2.767 2.215 5.302 6.185 5.302 3.982 0 5.616-2.548 6.191-5.324-.353-.304-.706-.602-1.054-.95z"
          fill="#FF5C57"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.366 29.984l11.51-11.51h-9.73C4.578 18.474 0 19.598 0 24.934c0 3.983 2.549 5.618 5.325 6.192.33-.38.658-.758 1.041-1.142zM44.818 18.733c-.308.358-.61.716-.963 1.07L32.262 31.394h9.592c3.568 0 8.146-.842 8.146-6.46 0-4.12-2.462-5.667-5.182-6.202zM8.147 15.28h12.918l1.738-1.74-5.044-5.043c-2.523-2.523-6.356-5.165-10.328-1.192-2.913 2.913-2.266 5.748-.721 8.05.47-.036.938-.075 1.437-.075zM41.854 34.588H29.062l-1.743 1.743 5.138 5.138c2.523 2.523 6.555 4.966 10.328 1.192 2.816-2.816 2.17-5.775.613-8.144-.5.036-1.001.071-1.544.071z"
        fill="#FF5C57"
      />
    </svg>
  )
}

export default MaltSvg