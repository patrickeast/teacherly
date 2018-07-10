import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.js";
import Features from "./pages/Features/Features.js";
import Teachers from "./pages/Teachers/Teachers.js";
import Signup from "./pages/Signup/Signup.js";
import Login from "./pages/Login/Login.js";
import Nav from "./components/Nav/Nav.js";
import Footer from "./components/Footer/Footer.js";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/features" component={Features} />
        <Route exact path="/teachers" component={Teachers} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;