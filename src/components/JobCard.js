import React from "react";

const JobCard = props => {
  return (
    <div className="JobCard__Container">
      <aside className="JobCard__Left">
        <h4>{props.title}</h4>
        <h5>{props.dates}</h5>
      </aside>
      <main className="JobCard__Right">
        <h4>{props.company}</h4>
        <p>{props.description}</p>
      </main>
    </div>
  );
};

export default JobCard;
