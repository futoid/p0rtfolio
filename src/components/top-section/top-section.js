import React from "react";
import "./top-section.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Top() {
  const noMean = "! \\ / ? <";
  const up = "\\^/";
  const mid = "~#~";
  const down = "/ \\";
  return (
    <div className="main">
      <h1 className="upper-text">Full Stack developer</h1>

      <p className="nomean-text">{noMean}</p>

      <div className="nosense-text">
        <p className="up">{up}</p>
        <p className="mid"> {mid}</p>
        <p className="down">{down}</p>
      </div>

      
      <div className="option-selection">
      <AnchorLink href="#&" style={{textDecoration: "none",}}><h1 className="option-text skills" >Skills</h1></AnchorLink>
      <AnchorLink href="#/>" style={{textDecoration: "none",}}><h1 className="option-text projects">Projects</h1></AnchorLink>
      <AnchorLink href="#^" style={{textDecoration: "none",}}><h1 className="option-text connect">Connect</h1></AnchorLink>
      
        
        
        
      </div>
    </div>
  );
}

export default Top;
