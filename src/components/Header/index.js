import React from "react";
import NavBar from "../NavBar";
import "./style.css";

function Header(){
    const headerStyle = {
        border: "1px solid black",
        position: "relative"
    }
    return (
        <header style={headerStyle}>
            <h1> Adam Gonzalez </h1>
            <NavBar />
        </header>
    )
}

export default Header;