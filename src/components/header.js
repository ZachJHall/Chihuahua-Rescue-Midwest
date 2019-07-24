import React from "react";
import "../CSS/header.css";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./home";
import Contact from "./contact";
import List from "./list";
import Notfound from "./notfound";
import logo from "../dog.png";

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
                <Link to="/list">Users</Link>
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
