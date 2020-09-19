import React, { Component } from "react";
import "./Location.css"

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
      <form style = {{backgroundColor: "#383e56", color: "white", padding: 25 + 'px', width: 50 + '%', marginLeft: 22 + '%', borderRadius: 10 + 'px'}}>
        <div class = "details" style = {{textAlign: "center", fontFamily: "serif", fontSize: 20 + 'px'}}>
          <div className="location-info">
            <label style={{fontFamily: "serif", paddingRight: 10 + 'px'}}>Province</label>
            <input
              type="text"
              value={formTwo.province}
              onChange={handleChange("province")}
              style = {{
                borderRadius: 4 + 'px',
                padding: 4 + 'px',
                marginRight: 10 + 'px'
              }}
            ></input>
            <label style={{fontFamily: "serif", paddingRight: 10 + 'px'}}>City/Municipality</label>
            <input
              type="text"
              value={formTwo.city}
              onChange={handleChange("city")}
              style = {{
                borderRadius: 4 + 'px',
                padding: 4 + 'px',
                marginRight: 10 + 'px'
              }}
            ></input>
            <label style={{fontFamily: "serif", paddingRight: 10 + 'px'}}>Barangay</label>
            <input
              type="text"
              value={formTwo.barangay}
              onChange={handleChange("barangay")}
              style = {{
                borderRadius: 4 + 'px',
                padding: 4 + 'px',
                marginRight: 10 + 'px'
              }}
            ></input>
          </div>
          <div className="address" style = {{marginTop: 10 + 'px'}}>
            <label style={{fontFamily: "serif", paddingRight: 10 + 'px'}}>Village / Subdivision / Area / Condominium Building</label>
            <input
              type="text"
              value={formTwo.area}
              onChange={handleChange("area")}
              style = {{
                borderRadius: 4 + 'px',
                padding: 4 + 'px',
                marginRight: 10 + 'px'
              }}
            ></input>
          </div>
          <button onClick={this.back} style = {{marginTop: 10 + 'px', marginRight: 10 + 'px', backgroundColor: "#f69e7b", color: "white", paddingLeft:30 + 'px', paddingRight: 30 + 'px', paddingBottom: 15 + 'px', paddingTop: 15 + 'px', textAlign: "center", fontSize: 16 + 'px', border: 0 + 'px', borderRadius: 10 + 'px'}}><b>Back</b></button>
          <button onClick={this.saveAndContinue} style = {{marginTop: 10 + 'px', backgroundColor: "#f69e7b", color: "white", paddingLeft:30 + 'px', paddingRight: 30 + 'px', paddingBottom: 15 + 'px', paddingTop: 15 + 'px', textAlign: "center", fontSize: 16 + 'px', border: 0 + 'px', borderRadius: 10 + 'px'}}><b>Next</b></button>
        </div>
      </form>
    );
  }
}

export default Location;
