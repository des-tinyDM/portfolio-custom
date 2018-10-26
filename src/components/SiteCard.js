import React from "react";

const TechPill = props => {
  return <div className="TechPill">{props.tech}</div>;
};

const SiteCard = props => {
  return (
    <div
      className={
        props.inDevelopment
          ? "SiteCard__Container ComingSoon"
          : "SiteCard__Container"
      }
    >
      {props.title && <h2 className="SiteCard__Header">{props.title}</h2>}
      <img src={props.img} />
      <p className="SiteCard__Description"> {props.description}</p>
      <div className="SiteCard__LinksContainer">
        {props.github && (
          <p className="SiteCard__Link--github">
            <a href={props.github}>Github</a>
          </p>
        )}
        {props.hosted && (
          <p className="SiteCard__Link--hosted">
            <a href={props.hosted}>To site -></a>
          </p>
        )}
      </div>

      <div className="SiteCard__TechContainer">
        {props.technology &&
          props.technology.map((tech, i) => {
            return <TechPill tech={tech} key={i} />;
          })}
      </div>

      {props.inDevelopment && (
        <div className="SiteCard__ComingSoon">
          <h3>In Development</h3>
        </div>
      )}
    </div>
  );
};

export default SiteCard;
