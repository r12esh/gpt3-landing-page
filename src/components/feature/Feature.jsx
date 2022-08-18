import React from "react";
import "./feature.css";

const Feature = ({ title, text, css = {} }) => {
  return (
    <div className="gpt3__features-container__feature" style={css?.feature}>
      <div className="gpt3__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container_feature-text" style={css?.text}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
