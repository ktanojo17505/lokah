import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Header.css";
import Home from "../components/Home/Home";
import AboutUs from "../components/About-us/About-us";
import Category from "../components/Category/Category";
// import Product from "../components/Product/Product";
import BecomePartner from "../components/Become-Partner/Become-Partner";

class Header extends Component {
  render() {
    return (
      <Router>
        <div className="App-header">
          <div className="nav-bar">
            <Link to="/" className="logo">
              Lokah
            </Link>
            <nav className="nav-link">
              <li>
                <Link to="/">Our Food</Link>
              </li>
              <li>
                <Link to="/Category">Category</Link>
              </li>
              <li>
                <Link to="/About-us">About Us</Link>
              </li>
              <li>
                <Link to="/Partner">Become a Partner</Link>
              </li>
            </nav>
          </div>
        </div>
        <Switch>
          <Route path="/" exact component={Home}>
            {/* <Home /> */}
          </Route>
          <Route path="/Category" exact component={Category}>
            {/* <Category /> */}
          </Route>
          <Route path="/About-us" exact component={AboutUs}>
            {/* <AboutUs /> */}
          </Route>
          <Route path="/Partner" exact component={BecomePartner}>
            {/* <BecomePartner /> */}
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Header;
