import React from "react";
import { Link, Outlet } from "react-router-dom";

function Projects() {
  return (
    <div className="Projects">
      <div>
        <Link to="">All Projects</Link>
        <Link to="school-projects">School Project</Link>
        <Link to="freelance-projects">Freelance</Link>
        <h1>Projects</h1>
      </div>
      <br />
      <div className="fucking outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default Projects;
