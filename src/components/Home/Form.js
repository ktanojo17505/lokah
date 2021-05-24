import React, { Component } from "react";
import PersonalDetails from "./PersonalDetails";
import Location from "./Location";
import CheckBoxContainer from "./CheckBoxContainer";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1, // keep track of which form to show
      firstName: "", // these values will be passed down as props
      lastName: "",
      email: "",
      mobile: "",
      province: "",
      city: "",
      barangay: "",
      area: "",
      checkBoxForm: [
        {
          id: 1,
          value: "food-drink",
          text: "Food, Drinks, and Edibles",
          isChecked: [false, false, false]
        },
        {
          id: 2,
          value: "toiletries",
          text: "Toiletries(Homemade Soap, Shampoo, Cleaning Products)",
          isChecked: [false, false, false]
        },
        {
          id: 3,
          value: "urban-garden",
          text: "Urban Garden Produce",
          isChecked: [false, false, false]
        },
        {
          id: 4,
          value: "personal",
          text:
            "Repair Services (Home, Car, Electronics, Air-con, Refrigerator, etc)",
          isChecked: [false, false, false]
        },
        {
          id: 5,
          value: "labor",
          text: "Personal Items, Effects, Jewelries, and Clothing",
          isChecked: [false, false, false]
        },
        {
          id: 6,
          value: "second-hand",
          text:
            "Labor(cleaning services, assistance with urban gardening, etc)",
          isChecked: [false, false, false]
        },
        {
          id: 7,
          value: "short-delivery",
          text: "Short-Distance Delivery(w/in 2km)",
          isChecked: [false, false, false]
        },
        {
          id: 8,
          value: "long-delivery",
          text: "Long-Distance Delivery(beyond 2km)",
          isChecked: [false, false, false]
        },
        {
          id: 9,
          value: "raw-material",
          text:
            "Raw Material and Ingredients(Eggs, Flour, Meat, Vegetables, Oil, \
          Spices, etc)",
          isChecked: [false, false, false]
        }
      ]
    };
  }

  // make function for question (input is step size )

  // increment step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // handle all field changes
  handleChange = input => event => {
    this.setState({
      [input]: event.target.value
    });
  };

  handleCheck = input => event => {
    let index = input.formNumber;
    let arr = this.state.checkBoxForm;
    arr.forEach(item => {
      if (item.value === event.target.value)
        item.isChecked[index] = event.target.checked;
    });
    this.setState({ input: arr });
  };

  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      email,
      mobile,
      province,
      city,
      barangay,
      area,
      checkBoxForm
    } = this.state;
    const formOne = { firstName, lastName, email, mobile };
    const formTwo = { province, city, barangay, area };
    //switch (step) {
    if (step == 1) {
      return (
        <PersonalDetails
          handleChange={this.handleChange} // attributes passed down are props
          nextStep={this.nextStep}
          formOne={formOne}
        />
      );
    } else if (step == 2) {
      return (
        <Location
          handleChange={this.handleChange}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          formTwo={formTwo}
        />
      );
    } else {
      return (
        <CheckBoxContainer
          handleCheck={this.handleCheck}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          formType={checkBoxForm}
          step={step}
        />
      );
    }
  }
}

export default Form;
