import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Teachers from "./pages/Teachers/Teachers.js";
import Signup from "./pages/Signup/Signup.js";
import Login from "./pages/Login/Login.js";
import Contact from "./pages/Contact/Contact.js";
import Nav from "./components/Nav/Nav.js";
import Footer from "./components/Footer/Footer.js";

const App = () => (
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
);

export default App;