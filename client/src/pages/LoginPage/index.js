import React, { Component } from "react";
import "./Login.css";

import Heading from "../../components/Heading";
import Form from "../../components/Form";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "login"
    };
  }
  render() {
    return (
      <div className="login-wrapper">
        <div className="login-container">
          <Heading />
          <Form view={this.state.view} />
        </div>
      </div>
    );
  }
}
