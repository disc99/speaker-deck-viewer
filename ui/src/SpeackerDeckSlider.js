import React, { Component } from "react";
import Slider from "react-slick";
import axios from 'axios'

axios.defaults.baseURL = 'https://6nmkgbb8xj.execute-api.ap-northeast-1.amazonaws.com';

export default class SpeackerDeckSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { slides: [] };
  }

  handleChange(e) {
    const url = e.target.value
    console.log(url);
    let _this = this
    axios.get('/dev/slides', {
      params: {
        url: url
      }
    }).then(function (response) {
      console.log(response)
      _this.setState(prevState => ({
        slides: response.data.slides.map(slide => slide.original)
      }));
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <div>
          <input type="text" onChange={this.handleChange.bind(this)}></input>
        </div>
        <Slider {...settings}>
          {this.state.slides.map(slide => {
            return <div>
              <img src={slide} />
            </div>
          })}
        </Slider>
      </div>
    );
  }
}