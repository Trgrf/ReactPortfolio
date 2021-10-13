import React, {Component} from "react";
import projects from "../projects.json";
import PortfolioCard from "../components/ProjectCard";

class Portfolio extends Component {
  state = {
    projects: projects
  }
  render() {
    return (
      <div style={{display:"flex"}}>
      {projects.map(project => (

      <PortfolioCard project={project} />
      ))}
      </div>
    )
  }
}


export default Portfolio;