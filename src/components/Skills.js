import React, { Component } from "react";
import SkillsCard from "./SkillsCard";
class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="SectionContainer SectionContainer__Skills" id="skills">
        <h1>Skills</h1>
        <section className="SkillsSummary">
          <h3 className="SectionContainer__SubHeader">
            I've gained a variety of skillsets that I can apply to my projects.
            Currently, I'm focused on React.js, but I have experience with other
            Javascript libraries and frameworks, and have also used .NET
            Framework with C# and Sql Server previously. I've built beautiful
            data visualizations with d3, and beautiful and intuitive UIs with
            SCSS.
          </h3>
        </section>
        <section className="SkillsContainer">
          <SkillsCard
            title="HTML5"
            icon={<i className="devicon-html5-plain colored" />}
          />
          <SkillsCard
            title="CSS3"
            icon={<i className="devicon-css3-plain colored" />}
          />
          <SkillsCard
            title="Javascript"
            icon={<i className="devicon-javascript-plain colored" />}
          />
          <SkillsCard
            title="React"
            icon={<i className="devicon-react-original colored" />}
          />
          <SkillsCard
            title="Vue"
            icon={<i className="devicon-vuejs-plain colored" />}
          />
          <SkillsCard
            title="Webpack"
            icon={<i className="devicon-webpack-plain colored" />}
          />
          <SkillsCard
            title="Node"
            icon={<i className="devicon-nodejs-plain colored" />}
          />
          <SkillsCard
            title="Express"
            icon={<i className="devicon-express-original colored" />}
          />

          <SkillsCard
            title="PostgreSQL"
            icon={<i className="devicon-postgresql-plain colored" />}
          />
          <SkillsCard
            title="d3"
            icon={<i className="devicon-d3js-plain colored" />}
          />
          <SkillsCard
            title="Sass/Scss"
            icon={<i className="devicon-sass-original colored" />}
          />
          <SkillsCard
            title="Git"
            icon={<i className="devicon-git-plain colored" />}
          />
          <SkillsCard
            title="Nginx"
            icon={<i className="devicon-nginx-plain colored" />}
          />
          <SkillsCard
            title="Heroku"
            icon={<i className="devicon-heroku-plain colored" />}
          />
          {/* <SkillsCard
            title="C#"
            icon={<i class="devicon-csharp-plain colored" />}
          />
          <SkillsCard
            title=".Net"
            icon={<i class="devicon-dot-net-plain-wordmark colored" />}
          />
          <SkillsCard
            title="Visual Studio"
            icon={<i class="devicon-visualstudio-plain colored" />}
          />
          <SkillsCard
            title="JQuery"
            icon={<i class="devicon-jquery-plain colored" />}
          /> */}
        </section>
      </div>
    );
  }
}

export default Skills;
