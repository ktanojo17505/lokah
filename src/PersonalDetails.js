import React, { Component } from "react";
import "./PersonalDetails.css";

class PersonalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { formOne, handleChange } = this.props;
    return (
      <form style = {{backgroundColor: "#383e56", color: "white", padding: 25 + 'px', width: 50 + '%', marginLeft: 22 + '%', borderRadius: 10 + 'px'}}>
        <div class = "details" style = {{textAlign: "center", fontFamily: "serif", fontSize: 20 + 'px'}}>
          <div className="name">
            <label style={{fontFamily: "serif", paddingRight: 10 + 'px'}}>First Name</label>
            <input
              type="text"
              value={formOne.firstName}
              onChange={handleChange("firstName")}
              style = {{
                borderRadius: 4 + 'px',
                padding: 4 + 'px',
                marginRight: 10 + 'px'
              }}
            ></input>
            <label style={{fontFamily: "serif", paddingRight: 10 + 'px'}}>Last Name</label>
            <input
              type="text"
              value={formOne.lastName}
              onChange={handleChange("lastName")}
              style = {{
                borderRadius: 4 + 'px',
                padding: 4 + 'px',
                marginRight: 10 + 'px'
              }}
            ></input>
          </div>
          <div className="contact-info" style = {{marginTop: 10 + 'px'}}>
            <label style={{fontFamily: "serif", paddingRight: 10 + 'px'}}>Email</label>
            <input
              type="text"
              value={formOne.email}
              onChange={handleChange("email")}
              style = {{
                borderRadius: 4 + 'px',
                padding: 4 + 'px',
                marginRight: 10 + 'px'
              }}
            ></input>
            <label style={{fontFamily: "serif", paddingRight: 10 + 'px'}}>Mobile Number</label>
            <input
              type="text"
              value={formOne.mobile}
              onChange={handleChange("mobile")}
              style = {{
                borderRadius: 4 + 'px',
                padding: 4 + 'px',
                marginRight: 10 + 'px'
              }}
            ></input>
          </div>
          <button onClick={this.saveAndContinue} style = {{marginTop: 10 + 'px', backgroundColor: "#f69e7b", color: "white", paddingLeft:30 + 'px', paddingRight: 30 + 'px', paddingBottom: 15 + 'px', paddingTop: 15 + 'px', textAlign: "center", fontSize: 16 + 'px', border: 0 + 'px', borderRadius: 10 + 'px'}}><b>Next</b></button>
        </div>
      </form>
    );
  }
}

export default PersonalDetails;
