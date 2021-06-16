import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/exp">
            <Experience />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          {/* <Route path="/resume">
            <Project />
          </Route> */}
        </Switch>
    </Router>
  );
}
