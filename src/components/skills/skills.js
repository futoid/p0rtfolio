import React from "react";
import "./skills.css";
function Skills() {
    const infinity = "∞"; 
  return (
    <div className="main-skills" id = "&">
      <h1 className="head-text" >Skills</h1>

      <div className="known-div">
        <h1 className="temp ex">Exploring</h1>
        <h1 className="temp jl">Just Learned</h1>
        <h1 className="temp sk">Skilled</h1>
      </div>
      <div className="all-skills">
        <span className="c a">C</span>
        <div>
          <span className="cpp a">C++ Programming</span>
        </div>
        <div>
            <span className="html a">HTML</span> <span className="css a">CSS</span> <span className="js a">JavaScript</span>
        </div>
        <div>
            <span className="reactjs a">ReactJS</span> <span className="nextjs a">NextJS</span>
        </div>
        <div>
            <span className="tcss a">Tailwind CSS</span> <span className="njs a">NodeJS</span>
        </div>
        <div>
            <span className="mdb a">MongoDB</span> <span className="ejs a">Express JS</span>
        </div>
        <div>
            <span className="dsa a">Data Str & Algo</span>
        </div>
        <span className="infinity">{infinity}</span>
      </div>
    </div>
  );
}

export default Skills;
