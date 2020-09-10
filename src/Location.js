import React, { Component } from "react";

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
      <form>
        <div className="location-info">
          <label>Province</label>
          <input
            type="text"
            value={formTwo.province}
            onChange={handleChange("province")}
          ></input>
          <label>City/Municipality</label>
          <input
            type="text"
            value={formTwo.city}
            onChange={handleChange("city")}
          ></input>
          <label>Barangay</label>
          <input
            type="text"
            value={formTwo.barangay}
            onChange={handleChange("barangay")}
          ></input>
        </div>
        <div className="address">
          <label>Village / Subdivision / Area / Condominium Building</label>
          <input
            type="text"
            value={formTwo.area}
            onChange={handleChange("area")}
          ></input>
        </div>
        <button onClick={this.back}>Back</button>
        <button onClick={this.saveAndContinue}>Next</button>
      </form>
    );
  }
}

export default Location;
