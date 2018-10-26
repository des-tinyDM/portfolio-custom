import React, { Component } from "react";
import SiteCard from "./SiteCard";
import grassrts from "../assets/grassrts.png";
import qode from "../assets/qode.png";
import dogletics from "../assets/dogletics.png";
import ui from "../assets/ui.png";
import ui2 from "../assets/ui2.png";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="SectionContainer" id="portfolio">
        <h1>Portfolio</h1>
        <section className="PortfolioSummary">
          <h3 className="SectionContainer__SubHeader">
            My interests have led me to a range of projects. From bootcamp group
            projects, to freelance websites, check out some of my work below!
          </h3>
        </section>
        <section className="PortfolioContainer">
          <SiteCard
            title="Grassroots Volunteer Management"
            img={grassrts}
            technology={[
              "React",
              "Redux",
              "Node",
              "d3",
              "PostgreSQL",
              "Moment",
              "Auth0",
              "SCSS",
              "Responsive Web Design"
            ]}
            description="I worked as a Regional Field Director for a National political campaign during the 2016 presidential election. Before that, I was a local community organizer working on a range of issues spanning from community beautification to health equity to racial equality and restorative justice. During my time spent organizing people, I realized that the tools that enabled us to do so were hard on the eye and confusing to use. Grassroots was born."
            github="https://github.com/des-tinyDM/grassrts-redo-revamp"
            hosted="http://grassroots-app-demo.com"
          />
          <SiteCard
            title="Dogletics Web App"
            technology={[
              "React",
              "Redux",
              "Node",
              "Auth0",
              "PostgreSQL",
              "Styled Components",
              "Stripe"
            ]}
            description="Active dog owners and their furry companions can find equipment to popular dog sports in this web shop demo that uses Stripe integration to handle payments. Users can learn more about each dog sport or search for equipent based on the selected sport."
            img={dogletics}
            github="https://github.com/des-tinyDM/dogletics-2"
            hosted="http://shopdogletics.destinylross-apps.com"
          />
          <SiteCard
            title="Qode"
            technology={[
              "React",
              "Redux",
              "Node",
              "Express",
              "Express Router",
              "bCrypt",
              "PostgreSQL"
            ]}
            img={qode}
            description={`Qode was built for DevMountain's group capstone project. It was developed to be a crash-course introduction for beginners to code, who aren't satisified with other free options. Qode was developed using React; most of the app takes advantage of React's component-based architecure and uses extremely reusable higher-order components to render content to the screen. The backend is run using Express and connects to a PostgreSQL database.`}
            github="https://github.com/DevOcean-DM13/qode"
            hosted="http://qode.club/"
          />
          {/* <SiteCard
            title="Bookly Review"
            description="Bookly was written as my first full CRUD .NET application, once I landed an initial interview with a .NET SaaS company. I studied for about a week, and got the job! Check out the source code below!"
            technology={[
              "Visual Studio",
              "C#",
              "ASP.NET",
              "jQuery",
              "Data Tables"
            ]}
          /> */}
          {/* <SiteCard
            title="Tab Tracker"
            inDevelopment
            technology={["Vue", "Node", "SCSS"]}
          /> */}
          <SiteCard
            title="UI/UX"
            img={ui}
            description="I've leveled up my design and UI skills by investing in and completing Jonas Schmedtmann's Advanced CSS and Sass: Flexbox, Grid, Animations, and More course."
            technology={["HTML5", "CSS3", "SCSS", "CSS Grid"]}
          />
          <SiteCard
            title="UI/UX"
            img={ui2}
            description="Bright colors and natural animations enhance the user's experience."
            technology={["HTML5", "CSS3", "SCSS", "Flexbox"]}
          />
        </section>
      </div>
    );
  }
}

export default Portfolio;
