import logo from "../dog.png";
import logo2 from "../dog.png";
import React from "react";
import "../CSS/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="" className="logo" />
      <div className="container">
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <nav>
          <img src={logo2} alt="" className="logoM" />
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/information">Information</Link>
              </li>
              <li>
                <Link to="/dog">Dogs</Link>
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
              <li>
                <Link to="/donation">Donate</Link>
              </li>
              <li>
                <Link to="/resources">Resources</Link>
              </li>
            </ul>
          </div>
        </nav>
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span />
        </label>
      </div>
    </header>
  );
};
export default Header;
