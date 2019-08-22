import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/google-logo.png";

const axios = require("axios");

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      displayName: "",
      password: "",
      password2: "",
      errors: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const email = this.state.email;
    const displayName = this.state.displayName;
    const password = this.state.password;
    const password2 = this.state.password2;

    if (this.props.view === "signup") {
      this.setState({ errors: [] }, () => {
        let errors = [];

        // Check required fields
        if (!email || !displayName || !password || !password2)
          errors.push({ msg: "Please fill in all fields" });

        // Check password match
        if (password !== password2)
          errors.push({ msg: "Passwords do not match" });

        // Check password length
        if (password.length < 6)
          errors.push({ msg: "Password should be at least 6 characters" });

        if (errors.length) this.setState({ errors });
        else
          axios
            .post("/register", { email, displayName, password, password2 })
            .then(result => console.log(result.data))
            .catch(err => console.log(err));
      });
    }

    event.preventDefault();
  }

  render() {
    return (
      <div className="form-container">
        <form
          onSubmit={this.handleSubmit}
          className={this.props.view === "signup" ? "signup-form" : ""}
        >
          {this.props.view === "login" ? (
            <h1>Log In To Your Account</h1>
          ) : (
            <h1>Sign Up for an Account</h1>
          )}

          {this.state.errors.length ? (
            <ul>
              {this.state.errors.map((value, index) => {
                return (
                  <div
                    className="alert alert-warning alert-dismissible fade show"
                    role="alert"
                    key={index}
                  >
                    {value.msg}
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                      style={{ padding: 0, marginRight: "2%" }}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                );
              })}
            </ul>
          ) : (
            ""
          )}

          <div className="main">
            <div
              className={
                this.props.view === "login" ? "local-login" : "local-signup"
              }
            >
              <input
                type="email"
                placeholder="Email"
                onFocus={e => (e.target.placeholder = "")}
                onClick={e => (e.target.placeholder = "")}
                onBlur={e => (e.target.placeholder = "Email")}
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
              {this.props.view === "signup" ? (
                <input
                  type="text"
                  placeholder="Display Name"
                  onFocus={e => (e.target.placeholder = "")}
                  onClick={e => (e.target.placeholder = "")}
                  onBlur={e => (e.target.placeholder = "Display Name")}
                  name="displayName"
                  value={this.state.displayName}
                  onChange={this.handleInputChange}
                />
              ) : (
                ""
              )}
              <input
                type="password"
                placeholder="Password"
                onFocus={e => (e.target.placeholder = "")}
                onClick={e => (e.target.placeholder = "")}
                onBlur={e => (e.target.placeholder = "Password")}
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
              {this.props.view === "signup" ? (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  onFocus={e => (e.target.placeholder = "")}
                  onClick={e => (e.target.placeholder = "")}
                  onBlur={e => (e.target.placeholder = "Confirm Password")}
                  name="password2"
                  value={this.state.password2}
                  onChange={this.handleInputChange}
                />
              ) : (
                ""
              )}

              <button className="submit-button" type="submit">
                {this.props.view === "login" ? "Log In" : "Sign Up"}
              </button>
              {this.props.view === "login" ? (
                <div className="keep-logged-in">
                  <p>Need an account?</p>
                  <Link to="/signup">Sign Up</Link>
                </div>
              ) : (
                <div className="keep-logged-in">
                  <p>Already have an account?</p>
                  <Link to="/login">Log In</Link>
                </div>
              )}
            </div>

            {this.props.view === "login" ? (
              <div className="social-media">
                <a href="/auth/google">
                  <img src={logo} alt="Google Sign In" />
                </a>
              </div>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    );
  }
}
