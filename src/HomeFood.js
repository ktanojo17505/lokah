import React, { Component } from "react";
import "./HomeFood.css";
import foodimg1 from "./images/food-image-1.jpg";
import foodimg2 from "./images/food-image-3.jpg";

class HomeFood extends Component {
  state = {};
  render() {
    return (
      <div class="home-cooked-food">
        <div class="image-text">
          <h1>
            The best food will always be home cooked with
            <span>love</span>, <span>passion </span> and <span>dedication</span>
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
            consequatur natus nesciunt laborum impedit ullam. Quisquam
            consequuntur quam voluptates qui amet cumque nihil totam assumenda,
            voluptate beatae quidem dicta natus?
          </p>
          <button>Learn More</button>
        </div>
        <div class="image-grid">
          <div class="image-grid-one">
            <img src={foodimg1} class="image-one" alt="" />
            <img src={foodimg2} class="image-two" alt="" />
          </div>
          <div class="image-grid-two">
            <img src={foodimg2} class="image-two" alt="" />
            <img src={foodimg1} class="image-one" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeFood;
