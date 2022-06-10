import React, { useState, useEffect, useCallback, useContext } from "react";
import "./app.scss";
import Nav from "./components/Nav";
import Home from "./components/Home";
import RangeRings from "./components/RangeRings";
import RangeRingsNav from "./components/RangeRingsNav";
import Ring from "./components/Ring";
import Checklists from "./components/Checklists";
import List from "./components/List";
import Speeds from "./components/Speeds";
import CacheToast from "./components/CacheToast";
import UpdateToast from "./components/UpdateToast";
import { StoreContext } from "./components/StoreContext";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import axios from "axios";

function App(props) {
  const [currentPage, setCurrentPage] = useState();
  const store = useContext(StoreContext);

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
        setCurrentPage(<List onClick={loadPage} listName={payload} />);
        break;
      case "speeds":
        setCurrentPage(<Speeds />);
        break;
      default:
        setCurrentPage("home");
        break;
    }
  }, []);

  useEffect(() => {
    console.warn("!!!!!!!!!!!!!!!USE EFFECT APP JS []");

    const dataUrl = process.env.PUBLIC_URL + "/static/jsondata/checklists.json";
    axios.get(dataUrl).then((res) => {
      console.warn("GOT CHECKLISTS JSON =========", res.data);
      store.setChecklists(res.data);
    });
  }, []);

  useEffect(() => {
    console.warn("!!!!!!!!!!!!!!!USE EFFECT LOAD PAGE APP JS [loadpage]");
    loadPage("home");
  }, [loadPage]);

  return (
    <div className="App">
      <div id="thecontent" className="content">
        {currentPage}
      </div>
      <Nav onClick={loadPage} />
      <CacheToast />
      <UpdateToast
        action={() => {
          props.skipWaitingHandler();
        }}
      />
      app2
    </div>
  );
}

export default App;
