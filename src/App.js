import React from "react";
import logo from "./logo.svg";
// import './App.css';
import Header from "./Header";
import Form from "./Form";
import Landing from "./Landing";
import Steps from "./Steps";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Steps />
      <Form />
    </div>
  );
}

export default App;
