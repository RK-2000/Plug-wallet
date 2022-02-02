import React from "react";
import "./styles/style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Account from "./Account";
class Navbar extends React.Component {
  render() {
    return (
      <nav className="pageNavbar">
        <div className="container">
          <a className="navbarLink" href="/about">
            about
          </a>
          <a className="navbarLink" href="#">
            whitepaper
          </a>
          <a className="navbarLink">connect to wallet</a>
        </div>
      </nav>
    );
  }
}
export default Navbar;
