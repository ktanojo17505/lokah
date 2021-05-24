import React, { Component } from "react";
// import "./CheckBox.css";

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { option, handleCheck, formNumber } = this.props;
    return (
      <li style={{listStyleType: 'none'}}>
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
