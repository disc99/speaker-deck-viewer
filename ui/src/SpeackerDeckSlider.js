import React, { Component } from "react";
import Slider from "react-slick";
import axios from 'axios'

axios.defaults.baseURL = 'https://6nmkgbb8xj.execute-api.ap-northeast-1.amazonaws.com';

export default class SpeackerDeckSlider extends Component {
  handleChange(e) {
    const url = e.target.value
    console.log(url);
    axios.get('/dev/slides', {
      params: {
        url: url
      }
    }).then(function (response) {
      console.log(response);
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
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}