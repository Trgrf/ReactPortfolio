import './App.css';
import React from 'react';
import {BrowserRouter, Route} from "react-browser-router";
import AboutMe from "./pages/aboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Route path ="/"></Route>
      <Route path ="/about" component={AboutMe}></Route>
      <Route path ="/portfolio" component={Portfolio}></Route>
      <Route path ="/contact" component={Contact}></Route>
      <Route path ="/resume" component={Resume}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
