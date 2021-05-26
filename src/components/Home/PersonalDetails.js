import React, { Component } from "react";
import "./PersonalDetails.css";

class PersonalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
    };
  }

  saveAndContinue = e => {
    e.preventDefault();
    if (this.props.handleValidation()){
      this.props.nextStep();
    }
  };

  render() {
    const { formOne, handleChange, errors } = this.props;
    return (
      <form className="personalDetails">
        <div className="questionArea">
          <div className="question">
            <label className="label">First Name</label>
            <input
              className="input"
              type="text"
              value={formOne.firstName}
              onChange= {handleChange("firstName")}
            ></input>
            <div>{errors.firstName}</div>
          </div>
          <div className="question">
            <label className="label">Last Name</label>
            <input
              className="input"
              type="text"
              value={formOne.lastName}
              onChange={handleChange("lastName")}
            ></input>
            <div>{errors.lastName}</div>
          </div>
        </div>
        <div className="questionArea">
          <div className="question">
            <label className="label">Email</label>
            <input
              className="input"
              type="text"
              value={formOne.email}
              onChange={handleChange("email")}
            ></input>
            <div>{errors.email}</div>
          </div>
          <div className="question">
            <label className="label">Mobile Number</label>
            <input
              className="input"
              type="text"
              value={formOne.mobile}
              onChange={handleChange("mobile")}
            ></input>
          </div>
        </div>
        <button className="button" onClick={this.saveAndContinue}>
              Next
            </button>
      </form>
    );
  }
}

export default PersonalDetails;
