import React, { Component } from "react";
import "./Landing.css";

class Landing extends Component {
  state = {};
  render() {
    return (
      <div class="landing">
        <div class="text">
          <h1>
            Nothing beats
            <br />
            <span> Home Food</span>
          </h1>
          <p>
            Our verified home chefs offer authentic dishes they normally cook to
            family and friends. All food is made to order and send to you warm
            and ready to enjoy.
          </p>
          <button>Buy Now</button>
        </div>
      </div>
    );
  }
}

export default Landing;
