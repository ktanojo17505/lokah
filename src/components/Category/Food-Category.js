import React, { Component } from "react";
import "./Food-Category.css";

class FoodCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { food } = this.props;
    return (
      <div className="Food-Category">
        <img src={require(`../../images/category/${food.toLowerCase()}.png`)}></img>
        <p>{food}</p>
      </div>
    );
  }
}

export default FoodCategory;
