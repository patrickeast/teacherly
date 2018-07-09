import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.js";
import Features from "./pages/Features/Features.js";
import Teachers from "./pages/Teachers/Teachers.js";
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
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;