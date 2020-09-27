import React, { Component } from "react";
import Landing from "./Landing";
import Steps from "./Steps";
import HomeFood from "./HomeFood";
import Explore from "./Explore";
import BigGuide from "./BigGuide";
import Form from "./Form";
import Partner from "./Partner";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Landing />
        <Steps />
        <HomeFood />
        <Explore />
        <BigGuide />
        <Partner />
        <Form />
      </div>
    );
  }
}

export default Home;
