import React, { Component } from "react";
// import "./CheckBox.css";

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
        <label style={{fontFamily: "serif", paddingRight: 10 + 'px'}}>{formNumber}</label>
        <input
          onChange={handleCheck({ formNumber })}
          type="checkbox"
          checked={option.isChecked[formNumber]}
          value={option.value}
          id={option.value}
          style = {{
            borderRadius: 4 + 'px',
            padding: 4 + 'px',
            marginRight: 10 + 'px'
          }}
        ></input>
        <label for={option.value}>{option.text}</label>
      </li>
    );
  } // end of switch
}

export default CheckBox;
