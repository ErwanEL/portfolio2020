import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default class QuoteSlider extends Component {
  constructor(props) {
    super(props)
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
  }
  play() {
    this.slider.slickPlay()
  }
  pause() {
    this.slider.slickPause()
  }
  render() {
    const settings = {
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
    }
    return (
      <div>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div className="quote">
            <i className="fas fa-2x fa-quote-left"></i>
            <p className="is-size-4 mt-4  is-italic has-text-weight-normal">
              A+ would work with again. Very responsive and great to work with!
            </p>{" "}
            <p className="mt-3 has-text-weight-semibold">
              {" "}
              Kevin McCormick, LSI
            </p>
          </div>
          <div className="quote">
            <i className="fas fa-2x fa-quote-left"></i>
            <p className="is-size-4 mt-4  is-italic has-text-weight-normal">
              Thank you for your help! You did a very good job.
            </p>{" "}
            <p className="mt-3 has-text-weight-semibold">
              {" "}
              Ahmet Ozisik, Swiftmade
            </p>
          </div>
          <div className="quote">
            <i className="fas fa-2x fa-quote-left"></i>
            <p className="is-size-4 mt-4  is-italic has-text-weight-normal">
              Provided what I needed very quickly!
            </p>{" "}
            <p className="mt-3 has-text-weight-semibold">
              {" "}
              Dan Burgess, Jackpot Music Game
            </p>
          </div>
        </Slider>
      </div>
    )
  }
}
