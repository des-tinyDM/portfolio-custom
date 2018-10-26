import React, { Component } from "react";
import me from "../assets/me.jpg";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { withRouter } from "react-router-dom";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { scrollY: 0 };
  }
  componentDidMount = () => {
    window.addEventListener("scroll", this.logScroll);
  };
  logScroll = event => {
    console.log(window.scrollY);
    this.setState({ scrollY: window.scrollY });
  };
  render() {
    console.log(window.innerHeight);
    let { scrollY } = this.state;
    let browserHeight = window.innerHeight;
    return (
      <div className="Navigation">
        <div className="Navigation__ImgContainer">
          <img src={me} alt="Photograph of developer Destiny Ross." />
          <h2>Destiny Ross</h2>
          <h3>Web Developer</h3>
        </div>
        <div className="Navigation__ScrollLinkBox">
          <NavLink
            smooth
            to="/#about"
            className={
              this.props.location.hash === "#about" ? "Link active" : null
            }
          >
            <h3>About</h3>
          </NavLink>

          <NavLink
            smooth
            to="/#skills"
            className={
              this.props.location.hash === "#skills" ? "Link active" : null
            }
          >
            <h3>Skills</h3>
          </NavLink>
          <NavLink
            smooth
            to="/#resume"
            className={
              this.props.location.hash === "#resume" ? "Link active" : null
            }
          >
            <h3>Resume</h3>
          </NavLink>
          <NavLink
            smooth
            to="/#portfolio"
            className={
              this.props.location.hash === "#portfolio" ? "Link active" : null
            }
          >
            <h3>Portfolio</h3>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default withRouter(Navigation);
