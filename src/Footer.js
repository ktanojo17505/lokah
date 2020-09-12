import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <div class="footer-1">
          <p class="logo">Lokah</p>
          <div class="list-container">
            <p class="subject">Lokah</p>
            <ul class="list">
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
          <div class="list-container">
            <p class="subject">Merchants</p>
            <ul class="list">
              <li>
                <a href="#">Sell on Lokah</a>
              </li>
              <li>
                <a href="#">Home Businesses</a>
              </li>
            </ul>
            <p class="subject">Support</p>
            <ul class="list">
              <li>
                <a href="#">Customer Help</a>
              </li>
              <li>
                <a href="#">Merchant Help</a>
              </li>
            </ul>
          </div>
          <div class="list-container">
            <p class="subject">Follow Us</p>
            <ul class="list">
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
        <hr class="line" />
        <div class="footer-2">
          <div class="list-container">
            <p class="subject">Our Cities</p>
            <ul class="list">
              <li>
                <a href="#">Jakarta</a>
              </li>
            </ul>
          </div>
        </div>
        <hr class="line footer-line" />
      </footer>
    );
  }
}

export default Footer;
