import React from "react";

const SkillCard = props => {
  return (
    <div className="SkillContainer">
      <h3>{props.title}</h3>
      {props.icon}
    </div>
  );
};

export default SkillCard;
