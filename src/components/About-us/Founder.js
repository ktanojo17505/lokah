import React, { Component } from "react";

class Founder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { name, role, description, image } = this.props;
    return (
      <div>
        <img src={require(`../../images/founders/${image}.png`)}></img>
        <p className="Founder-name">{name}</p>
        <p className="Founder-role">{role}</p>
        <p className="Founder-description">{description}</p>
      </div>
    );
  }
}

export default Founder;
