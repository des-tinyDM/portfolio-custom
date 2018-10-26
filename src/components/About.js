import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="SectionContainer SectionContainer__About" id="about">
        <h1>About</h1>
        <section className="About__Container">
          <h3 className="SectionContainer__SubHeader">Bio</h3>
          <div className="About__DescriptionBox">
            <div className="About__DescriptionBox--Description">
              <p className="text">
                I'm a once campaign manager and Returned Peace Corps Volunteer.
                I spent a year living and working with the wonderful people of
                Tanzania, and am fluent in Kiswahili. Na ninapamisi mno
                Tanzania! My journey into web development began in the village
                while I was serving in Peace Corps. I turned on my solar-powered
                phone, opened SoloLearn and was hooked!
              </p>
              <div className="large">
                <i class="fas fa-bolt" />
              </div>
            </div>
            <div className="About__DescriptionBox--Description">
              <p className="text">
                I'm an extremely self-motivated individual who loves working
                cooperatively. I always strive for clean and efficient code. My
                non-traditional background will help me bring new, creative
                solutions and perspectives to your team.
              </p>
              <div className="large">
                <i class="fas fa-laptop-code" />
              </div>
            </div>
            <div className="About__DescriptionBox--Description">
              <p className="text">
                I'm fueled by coffee, and can't get enough of the taste. Let's
                have an intro talk and plan your next website at a local coffee
                shop.
              </p>
              <div className="large">
                <i class="fas fa-coffee" />
              </div>
            </div>
          </div>
        </section>
        <section className="About__Contact">
          <h3 className="SectionContainer__SubHeader">Contact Me</h3>
          <div className="Contact__Info">
            <i class="fas fa-mobile-alt" />
            <a href="tel:+1-234-303-8079">234-303-8079</a>
          </div>
          <div className="Contact__Info">
            <i class="fas fa-at" />
            <a href="mailto:destinyleaross@gmail.com">
              destinyleaross@gmail.com
            </a>
          </div>
          <div className="Contact__Info">
            <i class="fas fa-map-marker-alt" />
            <p>Dallas, Texas</p>
          </div>
          <div className="Contact__Info">
            <i class="fab fa-github" />
            <a href="https://github.com/des-tinyDM">/des-tinyDM</a>
          </div>
          <div className="Contact__Info">
            <i class="fas fa-globe" />
          </div>
        </section>
      </div>
    );
  }
}

export default About;
