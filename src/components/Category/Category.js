import React, { Component } from "react";
import Partner from "../../components/Home/Partner";
import FoodCategory from "../Category/Food-Category";
import FoodGrid from "../Category/Food-Grid";
import "./Category.css";
import { isObjectTypeIndexer } from "@babel/types";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FoodType: [
        "Korean",
        "Chinese",
        "Japanese",
        "Indonesian",
        "Dessert",
        "Vietnamese",
        "Western",
        "Mexican",
        "Coffee",
        "Beverage"
      ],
      FoodItemAvailable: [
        {
          foodname: "Chicken Sandwich",
          rating: 5,
          description:
            "A chicken sandwich is a sandwich that typically consists of boneless, skinless chicken breast",
          image: "food-grid-img"
        },
        {
          foodname: "Egg Tart",
          rating: 5,
          description:
            "Golden, with a flaky exterior, and a warm, sweet, custardy interior, The egg tart. The egg tart is bliss; it is perfection in a dessert.",
          image: "egg-tart-1"
        }
      ],
      FoodItemPreOrder: [
        {
          foodname: "Chicken Sandwich",
          rating: 5,
          description:
            "A chicken sandwich is a sandwich that typically consists of boneless, skinless chicken breast",
          image: "food-grid-img"
        },
        {
          foodname: "Egg Tart",
          rating: 5,
          description:
            "Golden, with a flaky exterior, and a warm, sweet, custardy interior, The egg tart. The egg tart is bliss; it is perfection in a dessert.",
          image: "egg-tart-1"
        }
      ]
    };
  }
  render() {
    const { FoodType, FoodItemAvailable, FoodItemPreOrder } = this.state;
    const AvailableDisp = [];
    for (var i = 0; i < 6; ++i) {
      AvailableDisp.push(
        FoodItemAvailable[Math.floor(Math.random() * FoodItemAvailable.length)]
      );
    }
    const PreOrderDisp = [];
    for (var i = 0; i < 6; ++i) {
      PreOrderDisp.push(
        FoodItemPreOrder[Math.floor(Math.random() * FoodItemPreOrder.length)]
      );
    }
    return (
      <div>
        <div className="category-landing">
          <div className="category-text">
            <h1>
              Welcome <span>Home</span>.<br></br>
              <span>Craving</span> anything?
            </h1>
            <input type="category-text" placeholder="SEARCH"></input>
          </div>
        </div>
        <div className="category-browse-categories">
          <h2 className="category-title">Browse Food Categories</h2>
          <p>
            Fulfill your cravings with our complete network of foods. Fulfill
            your cravings <br></br>with our complete network of foods. Many
            more!
          </p>
          <div className="category-browse">
            {FoodType.map((item, index) => (
              <FoodCategory food={item} id={index} />
            ))}
          </div>
        </div>
        <div className="category-available-now">
          <h2>Available Now</h2>
          <div className="category-food-grid">
            {AvailableDisp.map((item, index) => (
              <FoodGrid
                id={index}
                foodname={item.foodname}
                image={item.image}
                description={item.description}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="category-preorder-this-week">
          <h2>Pre-Order for this Week</h2>
          <div className="category-food-grid">
            {PreOrderDisp.map((item, index) => (
              <FoodGrid
                id={index}
                foodname={item.foodname}
                image={item.image}
                description={item.description}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <Partner />
      </div>
    );
  }
}

export default Category;
