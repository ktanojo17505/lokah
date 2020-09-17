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
      <form>
        <div className="questionArea">
          <div className="question">
            <label className="label">First Name</label>
            <input
              className="input"
              type="text"
              value={formOne.firstName}
              onChange={handleChange("firstName")}
            ></input>
          </div>
          <div className="question">
            <label className="label">Last Name</label>
            <input
              className="input"
              type="text"
              value={formOne.lastName}
              onChange={handleChange("lastName")}
            ></input>
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
          </div>
          <div className="question">
            <label className="label">Mobile Number</label>
            <input
              className="input"
              type="text"
              value={formOne.mobile}
              onChange={handleChange("mobile")}
            ></input>
            <button className="button" onClick={this.saveAndContinue}>
              Next
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default PersonalDetails;
