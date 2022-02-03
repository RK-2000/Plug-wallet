import React from "react";
import "./styles/style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Account from "./Account";
class Navbar extends React.Component {
  state = {
    linkName: "Home",
  };

  changeName = (props) => {
    this.setState({ linkName: props.linkName });
  };

  render() {
    const link = this.props.linkName;
    let content;
    if (link == "About") {
      content = (
        <a className="navbarLink" href="/about">
          about
        </a>
      );
    } else {
      content = (
        <a className="navbarLink" href="/">
          home
        </a>
      );
    }
    return (
      <nav className="pageNavbar">
        <div className="container">
          {content}
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
