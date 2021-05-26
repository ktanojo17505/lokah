import React, { Component } from "react";
import "./Food-Grid.css";

class FoodGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { foodname, rating, description, image } = this.props;
    return (
      <div className="FoodGrid-food-item">
        <img src={require(`../../images/${image}.png`)}></img>
        <p className="FoodGrid-food-name">{foodname}</p>
        <p className="FoodGrid-food-description">{description}</p>
        <a className="FoodGrid-buy-button" href="#">
          Buy Now
        </a>
        <p className="FoodGrid-ratings">{rating} Ratings</p>
      </div>
    );
  }
}

export default FoodGrid;
