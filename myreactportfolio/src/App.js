import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Outlet,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import render from "react-dom";
import { Component } from "react";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
          <h1>HELLO</h1>
        </div>
        <br />
        <div className="fucking outlet">
          <Outlet />
        </div>
      </div>
    );
  }
}

export default App;
