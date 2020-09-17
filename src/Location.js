import React, { Component } from "react";
import "./Location.css";

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { formTwo, handleChange } = this.props;
    return (
      <form className="location-container">
        <div className="location-questionArea">
          <div className="location-question">
            <label>Province</label>
            <input
              className="location-input"
              type="text"
              value={formTwo.province}
              onChange={handleChange("province")}
            ></input>
          </div>
          <div className="location-question">
            <label>City/Municipality</label>
            <input
              className="location-input"
              type="text"
              value={formTwo.city}
              onChange={handleChange("city")}
            ></input>
          </div>
          <div className="location-question">
            <label>Barangay</label>
            <input
              className="location-input"
              type="text"
              value={formTwo.barangay}
              onChange={handleChange("barangay")}
            ></input>
          </div>
        </div>
        <div className=".location-questionArea">
          <div className="location-big-question">
            <label>Village / Subdivision / Area / Condominium Building</label>
            <input
              className="location-big-input"
              className="village"
              type="text"
              value={formTwo.area}
              onChange={handleChange("area")}
            ></input>
          </div>
        </div>
        <button onClick={this.back}>Back</button>
        <button onClick={this.saveAndContinue}>Next</button>
      </form>
    );
  }
}

export default Location;
