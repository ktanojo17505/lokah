import React, { Component } from "react";
import "./BigGuide.css";
import Pancakes from "../../images/pancakes.png";
import Guideimg from "../../images/the-big-guide-img.png";

class BigGuide extends Component {
  state = {};
  render() {
    return (
      <div className="food-guide">
        <div className="the-big-guide">
          <h4>The Big Guide</h4>
          <img src={Guideimg} alt="" />
        </div>
        <div className="articles">
          <div className="article-titles">
            <h4>
              Dinner and Change: <br />
              Meals that will <br />
              impress anyone. <br />
              Literally.
            </h4>
            <p>
              Explore our new series by transforming your home food into
              <br /> another level.
            </p>
            <a href="#">View complete guide</a>
          </div>
          <hr className="vertical-line" />
          <div className="article-links">
            <div className="article-box">
              <img src={Pancakes} alt="" />
              <p>
                An Affordable Pancake packed with Protein, Fruits, and natural
                sugar (That’s also for lunch or dinner)
              </p>
            </div>
            <div className="article-box">
              <img src={Pancakes} alt="" />
              <p>
                An Affordable Pancake packed with Protein, Fruits, and natural
                sugar (That’s also for lunch or dinner)
              </p>
            </div>
            <div className="article-box">
              <img src={Pancakes} alt="" />
              <p>
                An Affordable Pancake packed with Protein, Fruits, and natural
                sugar (That’s also for lunch or dinner)
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BigGuide;
