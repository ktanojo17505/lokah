import React, { Component } from "react";
import CheckBox from "./Checkbox";
import "./CheckBoxContainer.css"

class CheckBoxContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  submit = e => {
    e.preventDefault();
    this.props.handleSubmit();
  }

  render() {
    const { handleCheck, formType, handleSubmit, step } = this.props;
    const formName = "selling";
    return (
      <form style = {{backgroundColor: "#383e56", color: "white", padding: 25 + 'px', width: 50 + '%', marginLeft: 22 + '%', borderRadius: 10 + 'px'}}>
        {formType.map((item, index) => (
          <CheckBox
            key={index}
            option={item}
            handleCheck={handleCheck}
            formNumber={step - 3}
          />
        ))}
          <button onClick={this.back} style = {{marginTop: 10 + 'px', marginRight: 10 + 'px', backgroundColor: "#f69e7b", color: "white", paddingLeft:30 + 'px', paddingRight: 30 + 'px', paddingBottom: 15 + 'px', paddingTop: 15 + 'px', textAlign: "center", fontSize: 16 + 'px', border: 0 + 'px', borderRadius: 10 + 'px'}}><b>Back</b></button>
          <button onClick={this.submit} style = {{marginTop: 10 + 'px', backgroundColor: "#f69e7b", color: "white", paddingLeft:30 + 'px', paddingRight: 30 + 'px', paddingBottom: 15 + 'px', paddingTop: 15 + 'px', textAlign: "center", fontSize: 16 + 'px', border: 0 + 'px', borderRadius: 10 + 'px'}}><b>Submit</b></button>
      </form>
    );
  }
}

export default CheckBoxContainer;
