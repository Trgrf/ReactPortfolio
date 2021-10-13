import React from "react";

function PortfolioCard (props) {
    const projectCardStyle = {
        border:"1px solid black",
        width: "18em"
    }
    return (
        <div style={projectCardStyle} className="card">
            <div className="card-title">
            <h3>{props.project.Title}</h3>
            <a href={props.project.DeployedLink}>
            <img src={props.project.Image} alt={props.project.Title}/> 
            </a>
            <p>{props.project.Description}</p>
            </div>
        </div>
    )
}

export default PortfolioCard;