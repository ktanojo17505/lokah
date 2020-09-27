import React, { Component } from "react";
import Partnerpng from "../../images/become-partner/become-partner.png";
import ConnectLokah from "../../images/become-partner/connect-lokah.png";
import DigitalPresence from "../../images/become-partner/digital-presence.png";
import InnovativeFeatures from "../../images/become-partner/innovative-features.png";
import "./Become-Partner.css";

class BecomePartner extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="become-partner-page">
          <div className="become-partner-text">
            <h1>
              Become a Lokah <span>Partner</span>.
            </h1>
            <p>
              Increase your takeout sales and feature your business on Lokah and
              reach new customers.
            </p>
            <a href="#" className="get-started-button">
              Get Started
            </a>
          </div>
          <div className="become-partner-img">
            <img src={Partnerpng} alt=""></img>
          </div>
        </div>
        <div className="why-lokah">
          <h1>Why Lokah?</h1>
          <p>
            We help businesses like yours <span>reach new customers</span> in{" "}
            <br></br>
            your community and grow to <span>local favorites.</span>
          </p>
        </div>
        <div className="join-lokah">
          <div className="left">
            <div className="image-left">
              <img src={ConnectLokah} alt=""></img>
            </div>
            <div className="text-right">
              <h2>Connect with new Lokah Customers.</h2>
              <p>
                Grow your sales and become a favorite in the community. They
                come to us, we introduce them to you.
              </p>
            </div>
          </div>
          <div className="right">
            <div className="text-left">
              <h2>Increase your digital presence.</h2>
              <p>
                Let your digital storefront make the first impression. From
                crisp photos to other ideas, we offer the tools and tips to
                create the look you want.
              </p>
            </div>
            <div className="image-right">
              <img src={DigitalPresence} alt=""></img>
            </div>
          </div>
          <div className="divider"></div>
          <div className="right">
            <div className="text-left">
              <h2>Dynamic Innovative features.</h2>
              <p>
                We consistently work to stay ahead by creating new ways to
                improve businesses. From events to promotions, you will be seen
                by customers who are ready to taste your food.
              </p>
            </div>
            <div className="image-right">
              <img src={InnovativeFeatures} alt=""></img>
            </div>
          </div>
        </div>
        <div className="be-part-lokah">
          <h1>
            Be part of <span>our Journey.</span> Be Lokah
          </h1>
          <a href="#" className="get-started-button">
            Get Started
          </a>
        </div>
      </div>
    );
  }
}

export default BecomePartner;
