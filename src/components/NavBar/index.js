import React from "react";
import { Link, BrowserRouter } from "react-browser-router";
import "./style.css";

const NavBar = () => {
    const navBarStyle = {
        border: "1px solid black",
        position: "absolute",
        right: "0"
    }
    const linkStyle = {
        color: "white"
    }
    return ( 
    <nav style={navBarStyle}>
        <BrowserRouter>
        <Link style={linkStyle} className="link-item" to="/" >Home</Link>
        <Link style={linkStyle} className="link-item" to="/about" >AboutMe</Link>
        <Link style={linkStyle} className="link-item" to="/portfolio">Portfolio</Link>
        <Link style={linkStyle} className="link-item" to="/contact">Contact</Link>
        <Link style={linkStyle} className="link-item" to="/resume">Resume</Link>
        </BrowserRouter>
    </nav>
    )
}

export default NavBar;