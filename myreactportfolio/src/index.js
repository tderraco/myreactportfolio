import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" exact element={<Home />} />
        <Route home="home" element={<Home />} />
        <Route path="projects" element={<Projects />}>
          <Route path="school-projects" element={<Experience />} />
        </Route>
        <Route path="experience" element={<Experience />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
// Make sure to route the links. Nest them within the APPROPIATE ROUTE PATH
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
