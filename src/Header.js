import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div class="App-header">
        <div className="nav-bar">
          <a className="logo">Lokah</a>
          <nav className="nav-link">
            <li>
              <a href="#" className="link">
                Our Food
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="link">
                About Us
              </a>
            </li>
            <li>
              <a href="partner-page.html" className="link">
                Become a Partner
              </a>
            </li>
            <li>
              <a href="log-in.html" className="log-in">
                Log In
              </a>
            </li>
            <li>
              <a href="sign-up.html" className="sign-up">
                Sign Up
              </a>
            </li>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
