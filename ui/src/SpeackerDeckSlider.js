import React, { Component } from "react";
import Slider from "react-slick";
import axios from 'axios'

axios.defaults.baseURL = 'https://6nmkgbb8xj.execute-api.ap-northeast-1.amazonaws.com';

const styles = {
  position: "relative",
  textAlign: "center",
  maxWidth:"100%",
  maxHeight:"100%"
};

const styles2 = {
  position: "absolute",
  top: -4,
  right: 0,
  left: 0,
  background: "#0002",
  maxWidth:"100%",
};

const styles3 = {
  marginLeft: 4,
  color: "#777",
  width:"100%",
  left: "30px",
  border: "none",
  borderBottom: "1px solid #3331",
  backgroundColor: "transparent"
};


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
      console.error(error);
    })
  }

  render() {
    const settings = {
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          {this.state.slides.map((slide, i) => {
            return <div key={i}>
              <img src={slide} alt="slide" style={styles} />
            </div>
          })}
        </Slider>
        <div style={styles2}>
          <input type="text" onChange={this.handleChange.bind(this)} style={styles3}></input>
        </div>
      </div>
    );
  }
}