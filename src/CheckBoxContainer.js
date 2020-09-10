import React, { Component } from "react";
import CheckBox from "./Checkbox";

class CheckBoxContainer extends Component {
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
    const { handleCheck, formType, step } = this.props;
    const formName = "selling";
    return (
      <form>
        <label> {step}</label>
        {formType.map((item, index) => (
          <CheckBox
            key={index}
            option={item}
            handleCheck={handleCheck}
            formNumber={step - 3}
          />
        ))}
        <button onClick={this.back}>Back</button>
        <button onClick={this.saveAndContinue}>Next</button>
      </form>
    );
  }
}

export default CheckBoxContainer;
