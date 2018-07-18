import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// DON'T FORGET TO PUT REDIRECT BACK IN ^^ ABOVE //
import "./App.css";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Teachers from "./pages/Teachers/Teachers.js";
import Signup from "./pages/Signup/Signup.js";
import Login from "./pages/Login/Login.js";
import Contact from "./pages/Contact/Contact.js";
import Nav from "./components/Nav/Nav.js";
import Footer from "./components/Footer/Footer.js";
// import Auth from "../../routes/auth.js";

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     Auth.isUserAuthenticated() ? (
//       <Component {...props} {...rest} />
//     ) : (
//         <Redirect to={{
//           pathname: '/',
//           state: { from: props.location }
//         }} />
//       )
//   )} />
// )

// const LoggedOutRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     Auth.isUserAuthenticated() ? (
//       <Redirect to={{
//         pathname: '/',
//         state: { from: props.location }
//       }} />
//     ) : (
//         <Component {...props} {...rest} />
//       )
//   )} />
// )

// const PropsRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     <Component {...props} {...rest} />
//   )} />
// )

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       authenticated: false
//     }
//   };

//   componentDidMount() {
//     // check if user is logged in on refresh
//     this.toggleAuthenticateStatus()
//   }

//   toggleAuthenticateStatus() {
//     // check authenticated status and toggle state based on that
//     this.setState({ authenticated: Auth.isUserAuthenticated() })
//   }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
  }
};

  render() {
    return (

      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/teachers" component={Teachers} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}



export default App;