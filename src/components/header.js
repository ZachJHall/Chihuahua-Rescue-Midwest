import Home from "./home";
import Contact from "./contact";
import List from "./list";
import Notfound from "./notfound";
import logo from "../dog.png";
import Adopt from "./adopt";
import Volunteer from "./volunteer";
import React from "react";
import "../CSS/header.css";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <input type="checkbox" id="nav-toggle" class="nav-toggle" />
          <nav>
            <img src={logo} className="logo" />

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/list">Dogs</Link>
              </li>

              <li>
                <Link to="/adopt">Adoption</Link>
              </li>
              <li>
                <Link to="/volunteer">Volunteer</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <label for="nav-toggle" class="nav-toggle-label">
            <span />
          </label>
        </div>
      </header>
    );
  }
}
