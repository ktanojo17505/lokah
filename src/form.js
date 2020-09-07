"use strict";

import PersonalDetails from "./personal_details";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1, // keep track of which form to show
      firstName: "", // these values will be passed down as props
      lastName: "",
      email: "",
      mobile: ""
    };
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
  };

  render() {
    return <h1> This renders </h1>;
    // const { step } = this.state;
    // const { firstName, lastName, email, mobile } = this.state;
    // const formOne = { firstName, lastName, email, mobile };

    // switch (step) {
    //   case 1:
    //     return (
    //       <PersonalDetails
    //         handleChange={this.handleChange} // attributes passed down are props
    //         nextStep={this.nextStep}
    //         formOne={formOne}
    //       />
    //     );
    //   case 2:
    //     return <h1>Location</h1>;
    //   case 3:
    //     return <h1>Selling</h1>;
    //   case 4:
    //     return <h1>Learning </h1>;
    //   case 5:
    //     return <h1>Buying</h1>;
    // }
  }
}

//let domContainer = document.querySelector("#form_container");
const element = <h1>ARTHURZHANG!</h1>;
ReactDOM.render(element, document.getElementById("form_container"));
//ReactDOM.render(<Form />, domContainer);
