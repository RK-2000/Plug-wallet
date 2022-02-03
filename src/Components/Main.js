import React from "react";
import Navbar from "./Navbar";
import ICPverse from "./ICPverse";
import "./styles/style.css";

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar linkName="About" />
        <ICPverse />
      </React.Fragment>
    );
  }
}
export default Main;
