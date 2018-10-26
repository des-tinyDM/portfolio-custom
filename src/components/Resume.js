import React, { Component } from "react";
import JobCard from "./JobCard";
import resumePdf from "../assets/DRossWDDigital.pdf";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  downloadPdf = e => {
    e.preventDefault();
    window.open(resumePdf);
  };
  render() {
    return (
      <div className="SectionContainer SectionContainer__Resume" id="resume">
        <h1>Resume</h1>
        <div className="ResumeContainer">
          <section className="Resume__Download">
            <h3 className="SectionContainer__SubHeader">
              <button onClick={this.downloadPdf}>Download</button> my resume,
              with hyperlinks to my projects and social media accounts!
            </h3>
          </section>
          <section className="Resume__Section--Work Resume__Section">
            <h3>Work Experience</h3>
            <JobCard
              company="Centerbase, Inc"
              title="Junior Software Engineer"
              dates="Aug 2018 - Oct 2018"
              description="Designed and implemented novel full-stack features with ASP.NET MVC, jQuery, and SQL Server (T-SQL) stored procedures on the product’s Web API and client-interface that enhanced performance and led to a five percent decrease in support calls. 
Maintained code base by updating code to reflect api changes with integrated libraries, and used problem-solving skills to identify and resolve issues in code execution. 
Redesigned portions of the product's UI, including home page navigation and settings pages.
"
            />
            <JobCard
              company="Peace Corps"
              title="Public Health Specialist"
              dates="Feb 2017 - Feb 2018"
              description="Obtained language fluency during intensive, 3-month long cultural, language, and technical skills pre-service training
Designed and implemented targeted community health lessons, in native language Developed relationships with key influencers in the community, and collaborated with local counterparts and organizations within the community to accomplish goals set by the community government."
            />
            <JobCard
              company="NextGen Climate Action Committee"
              title="Deputy Regional Field Director"
              dates="Jun 2016 - Nov 2016"
              description="Oversaw 20 concurrent volunteers, 5 paid interns, and 2 full-time staff members Ensured data integrity and validity by creating and maintaining thorough data collection and management algorithms
Tracked volunteer and staff performance, and held one-on-ones to advise with technical improvements"
            />
          </section>
          <section className="Resume__Section--Education Resume__Section">
            <h3>Education</h3>
            <JobCard
              company="DevMountain"
              title="Intensive Web Development Bootcamp"
              dates="March 2018 - June 2018"
              description="Maintained accelerated pace required for student projects and completed daily software development tasks. Assisted other students with debugging and Javascript and React fundamentals on daily afternoon projects. Facilitated group study-and-review sessions. Completed all requirements for graduation and badging on time."
            />
            <JobCard
              company="University of Akron"
              title="BA in Anthropology"
              dates="Aug 2012 - May 2016"
              description="Graduated Magna Cum Laude"
            />
          </section>
        </div>
      </div>
    );
  }
}

export default Resume;
