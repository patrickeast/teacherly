import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.js";
import Nav from "./components/Nav/Nav.js";
import Footer from "./components/Footer/Footer.js";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/login" component={Login} /> */}
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;