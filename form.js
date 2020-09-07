"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PersonalDetails from "./personal_details";

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.nextStep = function () {
      var step = _this.state.step;

      _this.setState({
        step: step + 1
      });
    };

    _this.prevStep = function () {
      var step = _this.state.step;

      _this.setState({
        step: step - 1
      });
    };

    _this.handleChange = function (input) {
      return function (event) {
        _this.setState(_defineProperty({}, input, event.target.value));
      };
    };

    _this.state = {
      step: 1, // keep track of which form to show
      firstName: "", // these values will be passed down as props
      lastName: "",
      email: "",
      mobile: ""
    };
    return _this;
  }

  // increment step


  // handle all field changes


  _createClass(Form, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h1",
        null,
        " This renders "
      );
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
  }]);

  return Form;
}(React.Component);

//let domContainer = document.querySelector("#form_container");


var element = React.createElement(
  "h1",
  null,
  "ARTHURZHANG!"
);
ReactDOM.render(element, document.getElementById("form_container"));
//ReactDOM.render(<Form />, domContainer);