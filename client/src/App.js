import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Teachers from "./pages/Teachers/Teachers.js";
import Signup from "./pages/Signup/Signup.js";
import Login from "./pages/Login/Login.js";
import Contact from "./pages/Contact/Contact.js";
import Nav from "./components/Nav/Nav.js";
import "./components/Nav/Nav.css";
import Footer from "./components/Footer/Footer.js";
import Auth from "./components/Auth.js";
import LogoutFunction from "./components/LogoutFunction.js";
// import logo from "./teacherly.ico";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Component {...props} {...rest} />
    ) : (
        <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }} />
      )
  )} />
)

const LoggedOutRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }} />
    ) : (
        <Component {...props} {...rest} />
      )
  )} />
)

const PropsRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Component {...props} {...rest} />
  )} />
)


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      user: []
    }
  };

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus()
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  toggleUser = (user) => {
    console.log("toggleUser running");
    console.log(user);
    this.setState({
      user: user
    });
    console.log(this.state);
  };


  render() {
    return (

      <Router>
        <main role="main">
          {/* Nav bar for now. */}
          {/* {this.state.authenticated ? (
            <nav className="navbar navbar-top navbar-expand-md navbar-dark fixed-top bg-dark">
              <a className="navbar-brand" href="/">
                <img src={logo} className="App-logo" alt="logo" />
              </a>
              <span className="text-white mt-2"><h3>Teacherly</h3></span>
              <div className="ml-auto mt-2 mt-md-0 my-2 my-sm-0">
                <a className="btn btn-sm btn-outline-info text-white" href="/login" role="button">Log In</a>
                <a className="btn btn-sm btn-outline-info ml-3 text-white" href="/signup" role="button">Sign Up</a>
              </div>
            </nav>
          ) : (
              <nav className="navbar navbar-top navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="/">
                  <img src={logo} className="App-logo" alt="logo" />
                </a>
                <span className="text-white mt-2"><h3>Teacherly</h3></span>
                <div className="ml-auto mt-2 mt-md-0 my-2 my-sm-0">
                  <a className="btn btn-sm btn-outline-info text-white" href="/logout" role="button">Log Out</a>
                </div>
              </nav>
            )} */}

          <Nav isAuth={this.state.authenticated} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} toggleUser={this.toggleUser} user={this.state.user} />
          <Route exact path="/" component={Home} />

          <Switch>
            {/* Main route */}
            <PropsRoute exact path="/" component={Home} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <PrivateRoute path="/teachers/:id" component={Teachers} />
            <LoggedOutRoute path="/login" component={Login} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <LoggedOutRoute path="/signup" component={Signup}/>
            <Route path="/logout" component={LogoutFunction}/>

            {/* Other Routes */}
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>

          <Footer />
        </main>

      </Router >
    )
  }
}

export default App;