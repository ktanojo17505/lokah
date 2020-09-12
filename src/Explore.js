import React, { Component } from "react";
import "./Explore.css";
import foodGrid from "./images/food-grid-img.png";
import eggTart from "./images/egg-tart-1.png";

class Explore extends Component {
  state = {};
  render() {
    return (
      <div class="explore-foods">
        <h3>Explore our Foods</h3>
        <div class="food-grid">
          <div class="food-item">
            <img src={foodGrid} alt="" />
            <p class="food-name">Scroll bar categories</p>
            <p class="food-description">
              A chicken sandwich is a sandwich that typically consists of
              boneless, skinless chicken breast.
            </p>
            <a class="buy-button" href="#">
              Buy Now
            </a>
            <p class="ratings">5 Ratings</p>
          </div>
          <div class="food-item">
            <img src={foodGrid} alt="" />
            <p class="food-name">Soto Betawi</p>
            <p class="food-description">
              Soto Betawi is a hearty beef soup consisting of chunks of meat and
              offal that are slowly simmered in a coconut milk broth.
            </p>
            <a class="buy-button" href="#">
              Buy Now
            </a>
            <p class="ratings">5 Ratings</p>
          </div>
          <div class="food-item">
            <img src={foodGrid} alt="" />
            <p class="food-name">Soto Betawi</p>
            <p class="food-description">
              Soto Betawi is a hearty beef soup consisting of chunks of meat and
              offal that are slowly simmered in a coconut milk broth.
            </p>
            <a class="buy-button" href="#">
              Buy Now
            </a>
            <p class="ratings">5 Ratings</p>
          </div>
          <div class="food-item">
            <img src={eggTart} alt="" />
            <p class="food-name">Egg Tarts</p>
            <p class="food-description">
              SIt is golden, with a flaky exterior, and a warm, sweet, custardy
              interior. The egg tart. The egg tart is bliss; it is perfection in
              a dessert.
            </p>
            <a class="buy-button" href="#">
              Buy Now
            </a>
            <p class="ratings">5 Ratings</p>
          </div>
          <div class="food-item">
            <img src={foodGrid} alt="" />
            <p class="food-name">Soto Betawi</p>
            <p class="food-description">
              Soto Betawi is a hearty beef soup consisting of chunks of meat and
              offal that are slowly simmered in a coconut milk broth.
            </p>
            <a class="buy-button" href="#">
              Buy Now
            </a>
            <p class="ratings">5 Ratings</p>
          </div>
          <div class="food-item">
            <img src={foodGrid} alt="" />
            <p class="food-name">Soto Betawi</p>
            <p class="food-description">
              Soto Betawi is a hearty beef soup consisting of chunks of meat and
              offal that are slowly simmered in a coconut milk broth.
            </p>
            <a class="buy-button" href="#">
              Buy Now
            </a>
            <p class="ratings">5 Ratings</p>
          </div>
        </div>
        <a class="see-more-button">See More</a>
      </div>
    );
  }
}

export default Explore;
