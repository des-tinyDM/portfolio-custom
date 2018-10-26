import React, { Component } from "react";
import Navigation from "./Navigation";
import About from "./About";
import Skills from "./Skills";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="MainContainer">
          <About />
          <Skills />
          <Resume />
          <Portfolio />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;
