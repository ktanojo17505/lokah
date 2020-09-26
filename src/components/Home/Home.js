import React, { Component } from "react";
// import Header from "../Header";
import Landing from "./Landing";
import Steps from "./Steps";
import HomeFood from "./HomeFood";
import Explore from "./Explore";
import BigGuide from "./BigGuide";
import Footer from "./Footer";
import Form from "./Form";
import Partner from "./Partner";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        {/* <Header /> */}
        <Landing />
        <Steps />
        <HomeFood />
        <Explore />
        <BigGuide />
        <Partner />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default Home;
