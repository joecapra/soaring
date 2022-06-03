import React from "react";
import "./app.scss";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Ring from "./components/Ring";
import RangeRings from "./components/RangeRings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="rangerings" element={<RangeRings />} />
          <Route path="ring/:name" element={<Ring />} />
        </Routes>
      </div>
      <Nav />
    </div>
  );
}

export default App;
