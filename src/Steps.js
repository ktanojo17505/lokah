import React, { Component } from "react";
import "./Steps.css";
import bubble1 from "./images/bubble-1.png";
import bubble2 from "./images/bubble-2.png";
import bubble3 from "./images/bubble-3.png";

class Steps extends Component {
  state = {};
  render() {
    return (
      <div class="steps">
        <h1>Steps</h1>
        <div class="bubble-section">
          <div class="bubble">
            <img src={bubble1} alt="" />
            <p class="caption">Browse Home Businesses</p>
            <p class="description">
              Our verified home chefs offer authentic dishes they normally cook
              to family and friends. All food is made to order and send to you
              warm and ready to enjoy.
            </p>
          </div>
          <div class="bubble">
            <img src={bubble2} alt="" />
            <p class="caption">Order ahead or for today</p>
            <p class="description">
              With Lokah, food ordered will arrive at your doorstep. No need to
              leave the house, just wait and set the table while we take care of
              the rest.
            </p>
          </div>
          <div class="bubble">
            <img src={bubble3} alt="" />
            <p class="caption">Order ahead or for today</p>
            <p class="description">
              With Lokah, food ordered will arrive at your doorstep. No need to
              leave the house, just wait and set the table while we take care of
              the rest.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Steps;
