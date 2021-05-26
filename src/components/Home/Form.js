import React, { Component } from "react";
import PersonalDetails from "./PersonalDetails";
import Location from "./Location";
import CheckBoxContainer from "./CheckBoxContainer";
import { db } from "../../firebase";

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
          isChecked: false
        },
        {
          id: 2,
          value: "toiletries",
          text: "Toiletries(Homemade Soap, Shampoo, Cleaning Products)",
          isChecked: false
        },
        {
          id: 3,
          value: "urban-garden",
          text: "Urban Garden Produce",
          isChecked: false
        },
        {
          id: 4,
          value: "personal",
          text:
            "Repair Services (Home, Car, Electronics, Air-con, Refrigerator, etc)",
          isChecked: false
        },
        {
          id: 5,
          value: "labor",
          text: "Personal Items, Effects, Jewelries, and Clothing",
          isChecked: false
        },
        {
          id: 6,
          value: "second-hand",
          text:
            "Labor(cleaning services, assistance with urban gardening, etc)",
          isChecked: false
        },
        {
          id: 7,
          value: "short-delivery",
          text: "Short-Distance Delivery(w/in 2km)",
          isChecked: false
        },
        {
          id: 8,
          value: "long-delivery",
          text: "Long-Distance Delivery(beyond 2km)",
          isChecked: false
        },
        {
          id: 9,
          value: "raw-material",
          text:
            "Raw Material and Ingredients(Eggs, Flour, Meat, Vegetables, Oil, \
          Spices, etc)",
          isChecked: false
        }
      ],
      errors: {}
    };
  }

  handleValidation = () => {
    let errors = {}
    let isValid = true; 

    if (!this.state.firstName){
      isValid = false; 
      errors["firstName"] = "Please enter your first name";
    }

    if (!this.state.lastName){
      isValid = false; 
      errors["lastName"] = "Please enter your last name";
    }

    if (!this.state.email){
      isValid = false; 
      errors["email"] = "Please enter your email";
    }

    if (typeof this.state.email !== "undefined"){
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(this.state.email)) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }
    this.setState({errors: errors});
    return isValid; 
  }

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
    // console.log(event.target.value)
    // return event.target.value;
  };

  handleCheck = input => event => {
    let index = input.formNumber;
    let arr = this.state.checkBoxForm;
    arr.forEach(item => {
      if (item.value === event.target.value)
        item.isChecked = event.target.checked;
    });
    this.setState({ input: arr });
  };

  handleSubmit = () => {
    console.log("submitted form");
    db.collection('contacts').doc(this.state.email).set({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      mobile: this.state.mobile,
      province: this.state.province,
      city: this.state.city,
      barangay: this.state.barangay,
      area: this.state.area,
      checkBoxForm: this.state.checkBoxForm
    })
  }

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
      checkBoxForm,
      errors
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
          errors={errors}
          handleValidation={this.handleValidation}
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
          handleSubmit={this.handleSubmit}
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
