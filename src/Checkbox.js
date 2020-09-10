import React, { Component } from "react";

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { option, handleCheck, formNumber } = this.props;
    console.log("option ", option.id);
    return (
      <li>
        <label>{formNumber}</label>
        <input
          onChange={handleCheck({ formNumber })}
          type="checkbox"
          checked={option.isChecked[formNumber]}
          value={option.value}
          id={option.value}
        ></input>
        <label for={option.value}>{option.text}</label>
      </li>
    );
  } // end of switch
}

export default CheckBox;
