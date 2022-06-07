import React, { useState, useEffect, useCallback } from "react";
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
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

function App(props) {
  const [currentPage, setCurrentPage] = useState();

  const [showCacheCompleteToast, setShowCacheCompleteToast] = useState(false);
  const [showUpdateToast, setShowUpdateToast] = useState(true);

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
      case "speeds":
        setCurrentPage(<Speeds />);
        break;
      default:
        setCurrentPage("home");
        break;
    }
  }, []);

  useEffect(() => {
    loadPage("home");
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://cra.link/PWA
    serviceWorkerRegistration.register({
      onSuccess: () => {
        console.warn("!!!!!!!!!!!!!!!ON SUCCESS");
        setShowCacheCompleteToast(true);
      },
      onUpdate: () => {
        console.warn("!!!!!!!!!!!!!!!ON UPDATE");
        setShowUpdateToast(true);
      },
    });
    // serviceWorkerRegistration.unregister();
  }, [loadPage]);

  const doSkipWaiting = () => {
    console.error("CALLED");
    navigator.serviceWorker.controller.postMessage({
      type: "SKIP_WAITING",
    });
  };

  return (
    <div className="App">
      <div className="content">{currentPage}</div>
      <Nav onClick={loadPage} />
      {showCacheCompleteToast ? <CacheToast /> : null}
      {showUpdateToast ? <UpdateToast action={doSkipWaiting} /> : null}
    </div>
  );
}

export default App;
