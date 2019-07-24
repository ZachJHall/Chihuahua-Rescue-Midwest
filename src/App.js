import React from "react";
import "./CSS/App.css";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Body />
        </Router>
        <Footer />
      </div>
    );
  }
}
