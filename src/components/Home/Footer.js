import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <div className="footer-1">
          <p className="logo">Lokah</p>
          <div className="list-container">
            <p className="subject">Lokah</p>
            <ul className="list">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Press & Media</a>
              </li>
              <li>
                <a href="#">Couriers</a>
              </li>
            </ul>
          </div>
          <div className="list-container">
            <p className="subject">Merchants</p>
            <ul className="list">
              <li>
                <a href="#">Sell on Lokah</a>
              </li>
              <li>
                <a href="#">Home Businesses</a>
              </li>
            </ul>
            <p className="subject">Support</p>
            <ul className="list">
              <li>
                <a href="#">Customer Help</a>
              </li>
              <li>
                <a href="#">Merchant Help</a>
              </li>
            </ul>
          </div>
          <div className="list-container">
            <p className="subject">Follow Us</p>
            <ul className="list">
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">TikTok</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="line" />
        <div className="footer-2">
          <div className="list-container">
            <p className="subject">Our Cities</p>
            <ul className="list">
              <li>
                <a href="#">Jakarta</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="line footer-line" />
      </footer>
    );
  }
}

export default Footer;
