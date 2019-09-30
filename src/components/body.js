import Home from "./home";
import Contact from "./contact";
import List from "./list";
import Notfound from "./notfound";
import Adopt from "./adopt";
import Volunteer from "./volunteer";
import React from "react";
import ReactDOM from "react-dom";
import "../CSS/body.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

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
            <Route path="/adopt" component={Adopt} />
            <Route path="/volunteer" component={Volunteer} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </div>
    );
  }
}
