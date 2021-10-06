import React from "react";
import { Link, BrowserRouter } from "react-browser-router";
import "./style.css";

const NavBar = () => {
    return (
    <nav>
        <BrowserRouter>
        <Link className="link-item" to="/" >Home</Link>
        <Link className="link-item" to="/about" >AboutMe</Link>
        <Link className="link-item" to="/portfolio">Portfolio</Link>
        <Link className="link-item" to="/contact">Contact</Link>
        <Link className="link-item" to="/resume">Resume</Link>
        </BrowserRouter>
    </nav>
    )
}

export default NavBar;