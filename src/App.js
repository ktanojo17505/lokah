import React from "react";
import logo from "./logo.svg";
// import './App.css';
import Header from "./Header";
import Form from "./Form";
import Landing from "./Landing";
import Steps from "./Steps";
import HomeFood from "./HomeFood";
import Explore from "./Explore";
import BigGuide from "./BigGuide";
import Partner from "./Partner";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
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

export default App;
