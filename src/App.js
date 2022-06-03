import React, { useState, useEffect, useCallback } from "react";
import "./app.scss";
import Nav from "./components/Nav";
import Home from "./components/Home";
import RangeRings from "./components/RangeRings";
import Ring from "./components/Ring";

function App() {
  const [currentPage, setCurrentPage] = useState();

  const loadPage = useCallback((page, payload) => {
    switch (page) {
      case "home":
        setCurrentPage(<Home />);
        break;
      case "rings":
        setCurrentPage(<RangeRings onClick={loadPage} />);
        break;
      case "ring":
        setCurrentPage(<Ring locationData={payload} />);
        break;
      default:
        setCurrentPage("home");
        break;
    }
  }, []);

  useEffect(() => {
    loadPage("home");
  }, [loadPage]);

  return (
    <div className="App">
      <div className="content">{currentPage}</div>
      <Nav onClick={loadPage} />
    </div>
  );
}

export default App;
