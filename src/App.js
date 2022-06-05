import React, { useState, useEffect, useCallback } from "react";
import "./app.scss";
import Nav from "./components/Nav";
import Home from "./components/Home";
import RangeRings from "./components/RangeRings";
import RangeRingsNav from "./components/RangeRingsNav";
import Ring from "./components/Ring";
import Checklists from "./components/Checklists";
import List from "./components/List";

function App() {
  const [currentPage, setCurrentPage] = useState();

  const loadPage = useCallback((page, payload) => {
    switch (page) {
      case "home":
        setCurrentPage(<Home />);
        break;
      case "rings":
        setCurrentPage(<RangeRings onClick={loadPage} payload={payload} />);
        break;
      case "ringsnav":
        setCurrentPage(<RangeRingsNav onClick={loadPage} />);
        break;
      case "ring":
        setCurrentPage(<Ring onClick={loadPage} payload={payload} />);
        break;
      case "checklists":
        setCurrentPage(<Checklists onClick={loadPage} />);
        break;
      case "list":
        setCurrentPage(<List listData={payload} />);
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
