import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Mission from "./Mission";
import Contact from "./Contact";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <header className="homeHeader">
          <h1 className="vrOneWorldTitle">VR One World.</h1>
          <a href="index.html">
            <img className="figure" src="https://s3.amazonaws.com/vrone.world/logo.png" alt="logo"/>
          </a>
          </header>
          <ul className="header">
            <li><NavLink exact to="/">Seekers</NavLink></li>
            <li><NavLink to="/mission">Mission</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/mission" component={Mission}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
