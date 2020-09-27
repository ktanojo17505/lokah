import React, { Component } from "react";
import Founder from "./Founder";
import chefImage from "../../images/chef_image.png";
import "./About-us.css";

class AboutUs extends Component {
  state = {
    employees: [
      {
        name: "Jack Harkin",
        role: "Founder & CEO",
        description:
          "At Lokah, we want to bring together a community of avid foodies with a network of homechefs which can help flourish the successful business of home grown food businesses",
        image: "jack"
      },
      {
        name: "Edward Hong",
        role: "Founder & CEO",
        description:
          "At Lokah, we want to bring together a community of avid foodies with a network of homechefs which can help flourish the successful business of home grown food businesses",
        image: "hong"
      },
      {
        name: "Marassi Joanne",
        role: "Founder & CEO",
        description:
          "At Lokah, we want to bring together a community of avid foodies with a network of homechefs which can help flourish the successful business of home grown food businesses",
        image: "joanne"
      },
      {
        name: "Rose Hsu",
        role: "Founder & CEO",
        description:
          "At Lokah, we want to bring together a community of avid foodies with a network of homechefs which can help flourish the successful business of home grown food businesses",
        image: "rose"
      },
      {
        name: "Kiara Tanojo",
        role: "Founder & CEO",
        description:
          "At Lokah, we want to bring together a community of avid foodies with a network of homechefs which can help flourish the successful business of home grown food businesses",
        image: "kiara"
      },
      {
        name: "Laksh Goyal",
        role: "Founder & CEO",
        description:
          "At Lokah, we want to bring together a community of avid foodies with a network of homechefs which can help flourish the successful business of home grown food businesses",
        image: "swap"
      }
    ]
  };
  render() {
    return (
      <div className="AboutUs">
        <h1>About Us</h1>
        <div className="AboutUs-story-section">
          <h5>Our Story</h5>
          <br></br>
          <div className="AboutUs-story">
            <p>
              Eight years ago, we set out to answer a simple question: "Why
              can't I have delivered what I really want?" At that time, there
              was no solution to that problem outside of local phone-order
              delivery options for a limited selection of restaurants. We knew
              that it was nearly impossible to get your favorite restaurants and
              local retailers delivered quickly. So we built a technology
              company. Instead of relying on centralized warehouses for
              distribution, local merchants became warehouses and the Postmates
              platform was born. Now we have more than 500,000 fleet members (we
              call them Postmates) 600,000 merchants (the most selection in the
              US) and serve 80% of US Households across all 50 states.
            </p>
          </div>
          <div className="AboutUs-mission">
            <img src={chefImage}></img>
            <h5>Our Mission</h5>
            <h3>
              Our Mission is to empower home chefs to share their culture and
              passion with a broader community.
            </h3>
            <p>
              Lokah is a community-based, two-sided online platform that
              facilitates the process of ordering homemade food from local
              cooks. Lokah supplies a holistic experience from support, search,
              optimized bundling and ranking.
              <br></br>
              <br></br>
              Customers can order for immediate delivery or schedule ahead on
              Lokah's website. Lokah provides customers with quick, reliable
              delivery service.
            </p>
          </div>
          <div className="AboutUs-vision">
            <h5>Our Vision</h5>
            <h3>
              Community. <br></br> Innovation. <br></br> Growth.
            </h3>
            <p>
              At Lokah, we want to bring together a <br></br>
              community of avid foodies with a <br></br>
              network of home-chefs which can <br></br>
              help flourish the success business of <br></br>
              home-grown food businesses. <br></br>
            </p>
          </div>
        </div>
        <div className="AboutUs-team">
          <h5>Our Team</h5>
          <h3>
            Lokah is built by a passionate team of engineers, designers,
            marketers, operations and growth specialists.
          </h3>
        </div>
      </div>
    );
  }
}

export default AboutUs;
