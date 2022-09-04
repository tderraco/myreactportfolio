import React from "react";
import { Link, Outlet } from "react-router-dom";

function Experience() {
  return (
    <div className="Experience">
      <div>
        <Link to="experience">Resume</Link>
        <Link to="github">Git Hub</Link>
        <Link to="linked In">Linked In</Link>
      </div>
      <br />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default Experience;
