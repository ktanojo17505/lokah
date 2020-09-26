import React, { Component } from "react";
import "./HomeFood.css";
import foodimg1 from "../../images/food-image-1.jpg";
import foodimg2 from "../../images/food-image-3.jpg";

class HomeFood extends Component {
  state = {};
  render() {
    return (
      <div className="home-cooked-food">
        <div className="image-text">
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
        <div className="image-grid">
          <div className="image-grid-one">
            <img src={foodimg1} className="image-one" alt="" />
            <img src={foodimg2} className="image-two" alt="" />
          </div>
          <div className="image-grid-two">
            <img src={foodimg2} className="image-two" alt="" />
            <img src={foodimg1} className="image-one" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeFood;
