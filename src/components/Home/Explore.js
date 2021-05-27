import React, { Component } from "react";
import "./Explore.css";
import foodGrid from "../../images/food-grid-img.png";
import eggTart from "../../images/egg-tart-1.png";
import FoodGrid from "../../components/Category/Food-Grid";
import "../../components/Category/Food-Grid.css"

class Explore extends Component {
  state = {
    FoodItemAvailable: [
      {
        foodname: "Chicken Sandwich",
        rating: 5,
        description: "A chicken sandwich is a sandwich that typically consists of boneless, skinless chicken breast.",
        image: "food-grid-img"
      },
      {
        foodname: "Soto Betawi",
        rating: 5,
        description: "Soto Betawi is a hearty beef soup consisting of chunks of meat and offal that are slowly simmered in a coconut milk broth.",
        image: "food-grid-img"
      },
      {
        foodname: "Egg Tarts",
        rating: 5,
        description: "SIt is golden, with a flaky exterior, and a warm, sweet, custardy interior. The egg tart. The egg tart is bliss; it is perfection in a dessert.",
        image: "egg-tart-1"
      }
    ]
  };
  render() {
    const {FoodItemAvailable} = this.state; 
    const foodOptions = [];
    for (var i = 0; i < 6; ++i){
      foodOptions.push(FoodItemAvailable[Math.floor(Math.random() * FoodItemAvailable.length)])
    }
    return (
      <div className="explore-foods">
        <h3>Explore our Foods</h3>
        <div className="home-food-grid">
        {foodOptions.map((item, index) => (
          <FoodGrid 
            id={index}
            foodname={item.foodname}
            image={item.image}
            description={item.description}
            rating={item.rating}
          />
          ))}
        </div>
        {/* <div className="food-grid">
          <div className="food-item">
            <img src={foodGrid} alt="" />
            <p className="food-name">Scroll bar categories</p>
            <p className="food-description">
              A chicken sandwich is a sandwich that typically consists of
              boneless, skinless chicken breast.
            </p>
            <a className="buy-button" href="#">
              Buy Now
            </a>
            <p className="ratings">5 Ratings</p>
          </div>
          <div className="food-item">
            <img src={foodGrid} alt="" />
            <p className="food-name">Soto Betawi</p>
            <p className="food-description">
              Soto Betawi is a hearty beef soup consisting of chunks of meat and
              offal that are slowly simmered in a coconut milk broth.
            </p>
            <a className="buy-button" href="#">
              Buy Now
            </a>
            <p className="ratings">5 Ratings</p>
          </div>
          <div className="food-item">
            <img src={foodGrid} alt="" />
            <p className="food-name">Soto Betawi</p>
            <p className="food-description">
              Soto Betawi is a hearty beef soup consisting of chunks of meat and
              offal that are slowly simmered in a coconut milk broth.
            </p>
            <a className="buy-button" href="#">
              Buy Now
            </a>
            <p className="ratings">5 Ratings</p>
          </div>
          <div className="food-item">
            <img src={eggTart} alt="" />
            <p className="food-name">Egg Tarts</p>
            <p className="food-description">
              SIt is golden, with a flaky exterior, and a warm, sweet, custardy
              interior. The egg tart. The egg tart is bliss; it is perfection in
              a dessert.
            </p>
            <a className="buy-button" href="#">
              Buy Now
            </a>
            <p className="ratings">5 Ratings</p>
          </div>
          <div className="food-item">
            <img src={foodGrid} alt="" />
            <p className="food-name">Soto Betawi</p>
            <p className="food-description">
              Soto Betawi is a hearty beef soup consisting of chunks of meat and
              offal that are slowly simmered in a coconut milk broth.
            </p>
            <a className="buy-button" href="#">
              Buy Now
            </a>
            <p className="ratings">5 Ratings</p>
          </div>
          <div className="food-item">
            <img src={foodGrid} alt="" />
            <p className="food-name">Soto Betawi</p>
            <p className="food-description">
              Soto Betawi is a hearty beef soup consisting of chunks of meat and
              offal that are slowly simmered in a coconut milk broth.
            </p>
            <a className="buy-button" href="#">
              Buy Now
            </a>
            <p className="ratings">5 Ratings</p>
          </div>
        </div> */}
        <a className="see-more-button">See More</a>
      </div>
    );
  }
}

export default Explore;
