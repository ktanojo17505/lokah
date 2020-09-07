var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PersonalDetails = function (_React$Component) {
  _inherits(PersonalDetails, _React$Component);

  function PersonalDetails(props) {
    _classCallCheck(this, PersonalDetails);

    var _this = _possibleConstructorReturn(this, (PersonalDetails.__proto__ || Object.getPrototypeOf(PersonalDetails)).call(this, props));

    _this.state = {
      // firstName: "",
      // lastName: "",
      // email: "",
      // mobile: ""
    };
    return _this;
  }

  _createClass(PersonalDetails, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          formOne = _props.formOne,
          handleChange = _props.handleChange;

      return React.createElement(
        "form",
        null,
        React.createElement(
          "div",
          { "class": "name" },
          React.createElement(
            "label",
            null,
            "First Name"
          ),
          React.createElement("input", {
            type: "text",
            value: formOne.firstName,
            onChange: handleChange("firstName")
          }),
          React.createElement(
            "label",
            null,
            "Last Name"
          ),
          React.createElement("input", {
            type: "text",
            value: formOne.lastName,
            onChange: handleChange("lastName")
          })
        ),
        React.createElement(
          "div",
          { "class": "contact-info" },
          React.createElement(
            "label",
            null,
            "Email"
          ),
          React.createElement("input", {
            type: "text",
            value: formOne.email,
            onChange: handleChange("email")
          }),
          React.createElement(
            "label",
            null,
            "Mobile Number"
          ),
          React.createElement("input", {
            type: "text",
            value: formOne.mobile,
            onChange: handleChange("mobile")
          })
        ),
        React.createElement(
          "button",
          null,
          "Next"
        )
      );
    }
  }]);

  return PersonalDetails;
}(React.Component);

export default PersonalDetails;