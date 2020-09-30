import React, { useState } from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

const QuoteComponent = ({ quote }) => {
  const quotes = [
    "A+ would work with again. Very responsive and great to work with! _ Kevin McCormick, LSI",
    "Wow, great job! The freelancer did EXACTLY what I needed. He even went above and beyond after he noticed some problems with my cart and fixed those! Thank you, I will hire you again next time :) _ Jesse Locke, Okwrite",
    "Provided what I needed very quickly! _ Dan Burgess, Jackpot Music Game",
    "Thank you for your help! You did a very good job. _ Ahmet Ozisik, Swiftmade",
    "Great coder _ Emanuel Steiner",
  ]
  const [index, setIndex] = useState(0)
  //   const loopQuote = () => {
  //     for (let i = 0; i < quotes.length; i++) {
  //       console.log(quotes[i])
  //     }
  //   }
  //   quotes.length - 1
  console.log(index)
  return (
    <div>
      <div className="content">
        <p className="quote subtitle-mod is-fluid">{quote}</p>
      </div>
      <a
        href="https://www.upwork.com/o/profiles/users/~01b8a43c80d62b95bb/?viewMode=1"
        target="_blank"
      >
        <button className="button is-success">Voir le profil Upwork</button>
      </a>
      <div>
        <button
          className="button"
          onClick={index > 0 ? () => setIndex(index - 1) : null}
        >
          {" "}
          gauche{" "}
        </button>
        <button
          className="button"
          onClick={index < quotes.length - 1 ? () => setIndex(index + 1) : null}
        >
          {" "}
          droite{" "}
        </button>
      </div>
    </div>
  )
}

export default QuoteComponent
