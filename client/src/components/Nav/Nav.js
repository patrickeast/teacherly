import React from "react";
import { link } from "react-router-dom";
import axios from "axios";
import Auth from "../Auth.js";
import "./Nav.css";
import logo from '../../teacherly.ico';

export class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      user: [],
      errors: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);

    axios.post('/signin', {
      email: this.state.email,
      password: this.state.password
    }).then(response => {

      console.log("Response: ");
      console.log(response);

      if (response.data.user.message) {
        this.setState({ errors: response.data.user.message });
      } else {
        Auth.authenticateUser(response.token);
        this.props.toggleAuthenticateStatus();
        console.log(response.data.user);
        this.props.toggleUser(response.data.user);
        this.setState({ user: response.data.user });
      }
    }).catch(error => {
      console.log("Whoops. Something went wrong with the server.");
      console.log(error);
    })
  }

  handleSignOut(event) {
    event.preventDefault();
    console.log("Submitted");
    Auth.deauthenticateUser();
    this.props.toggleAuthenticateStatus();
  }

  handleSignup(event) {
    event.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);

    axios.post("/signup", {
      email: this.state.email,
      password: this.state.password
    }).then(response => {
      console.log(response);
      if (response.data.user.message) {
        console.log("Successful sign up");
        Auth.authenticateUser(response.token);
        this.props.toggleAuthenticateStatus(response.data.user);
        this.setState({ user: response.data.user });
      } else {
        console.log("Whoops. Something went wrong with signing you in.");
      }
    }).catch(error => {
      console.log("Sign in server error");
      console.log(error);
    })
  }

  render() {
    return (
      <nav className="navbar navbar-top navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link className="navbar-brand" href="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <span className="text-white mt-2"><h3>Teacherly</h3></span>
        {this.props.isAuth ? (
          <div>
            <p>Hello {this.state.user.firstname} {this.state.user.lastname}</p>
            <Link className="btn btn-sm btn-outline-info text-white" type="submit" value="submit" onClick={this.handleSignOut}>Log In</Link>
          </div>
        ) : (
            <div className="ml-auto mt-2 mt-md-0 my-2 my-sm-0">
              <Link className="btn btn-sm btn-outline-info text-white" href="/login" role="button">Log In</Link>
              <Link className="btn btn-sm btn-outline-info ml-3 text-white" href="/signup" role="button">Sign Up</Link>
            </div>
          )}
      </nav>
    )
  }
}