import React, { Component } from "react";

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
        <div className="name">
          <label>First Name</label>
          <input
            type="text"
            value={formOne.firstName}
            onChange={handleChange("firstName")}
          ></input>
          <label>Last Name</label>
          <input
            type="text"
            value={formOne.lastName}
            onChange={handleChange("lastName")}
          ></input>
        </div>
        <div className="contact-info">
          <label>Email</label>
          <input
            type="text"
            value={formOne.email}
            onChange={handleChange("email")}
          ></input>
          <label>Mobile Number</label>
          <input
            type="text"
            value={formOne.mobile}
            onChange={handleChange("mobile")}
          ></input>
        </div>
        <button onClick={this.saveAndContinue}>Next</button>
      </form>
    );
  }
}

export default PersonalDetails;
