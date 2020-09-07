class PersonalDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // firstName: "",
      // lastName: "",
      // email: "",
      // mobile: ""
    };
  }

  render() {
    const { formOne, handleChange } = this.props;
    return (
      <form>
        <div class="name">
          <label>First Name</label>
          <input
            type="text"
            value={formOne.firstName}
            onChange={handleChange("firstName")}
          ></input>
          <label>Last Name</label>
          <input
            type="text"
            value={formOne.lastName}
            onChange={handleChange("lastName")}
          ></input>
        </div>
        <div class="contact-info">
          <label>Email</label>
          <input
            type="text"
            value={formOne.email}
            onChange={handleChange("email")}
          ></input>
          <label>Mobile Number</label>
          <input
            type="text"
            value={formOne.mobile}
            onChange={handleChange("mobile")}
          ></input>
        </div>
        <button>Next</button>
      </form>
    );
  }
}

export default PersonalDetails;
