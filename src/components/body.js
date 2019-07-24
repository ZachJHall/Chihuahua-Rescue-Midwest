import React from "react";
import ReactDOM from "react-dom";
import "../CSS/body.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./home";
import Contact from "./contact";
import List from "./list";
import Notfound from "./notfound";

export default class Body extends React.Component {
  render() {
    return (
      <div>
        <div className="mainTop">
          <div className="logo1" />
          <div />
        </div>

        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
            <Route path="/contact" component={Contact} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </div>
    );
  }
}
