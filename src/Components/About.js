import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar linkName={"Home"} />
        <Hero />
      </React.Fragment>
    );
  }
}
export default About;
