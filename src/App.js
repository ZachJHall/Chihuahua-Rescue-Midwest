import React from "react";
import "./CSS/App.css";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

import { BrowserRouter as Router } from "react-router-dom";

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
