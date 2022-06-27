import React from "react";
import "./styles/style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PlugWallet from "./PlugWallet";
import Account from "./Account";
class Navbar extends React.Component {
  ;

  render() {
    return (
      <nav className="pageNavbar">
        <div className="container">
          <a className="navbarLink"> <PlugWallet></PlugWallet></a>
        </div>
      </nav>
    );
  }
}
export default Navbar;
