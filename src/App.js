import React, { useState, useEffect, useCallback, useContext } from "react";
import "./app.scss";
// import Nav from "./components/Nav";
// import Home from "./components/Home";
// import RangeRings from "./components/RangeRings";
// import RangeRingsNav from "./components/RangeRingsNav";
// import Ring from "./components/Ring";
// import Checklists from "./components/Checklists";
// import List from "./components/List";
// import Speeds from "./components/Speeds";
// import CacheToast from "./components/CacheToast";
// import UpdateToast from "./components/UpdateToast";
// import { StoreContext } from "./components/StoreContext";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
// import axios from "axios";

function App(props) {
  // const [currentPage, setCurrentPage] = useState();
  // const store = useContext(StoreContext);

  // const [showCacheCompleteToast, setShowCacheCompleteToast] = useState(false);
  // const [showUpdateToast, setShowUpdateToast] = useState({
  //   waitingRegistration: null,
  //   show: false,
  // });

  // useEffect(() => {
  //   const dataUrl = process.env.PUBLIC_URL + "/static/jsondata/checklists.json";
  //   axios.get(dataUrl).then((res) => {
  //     console.warn("RES DATA=========", res.data);
  //     store.setChecklists(res.data);
  //   });
  // }, []);

  // const loadPage = useCallback((page, payload) => {
  //   switch (page) {
  //     case "home":
  //       setCurrentPage(<Home />);
  //       break;
  //     case "rings":
  //       setCurrentPage(<RangeRings onClick={loadPage} payload={payload} />);
  //       break;
  //     case "ringsnav":
  //       setCurrentPage(<RangeRingsNav onClick={loadPage} />);
  //       break;
  //     case "ring":
  //       setCurrentPage(<Ring onClick={loadPage} payload={payload} />);
  //       break;
  //     case "checklists":
  //       setCurrentPage(<Checklists onClick={loadPage} />);
  //       break;
  //     case "list":
  //       setCurrentPage(<List onClick={loadPage} listName={payload} />);
  //       break;
  //     case "speeds":
  //       setCurrentPage(<Speeds />);
  //       break;
  //     default:
  //       setCurrentPage("home");
  //       break;
  //   }
  // }, []);

  useEffect(() => {
    // loadPage("home");

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://cra.link/PWA

    serviceWorkerRegistration.register({
      onSuccess: () => {
        // console.warn("!!!!!!!!!!!!!!!ON SUCCESS");
        // setShowCacheCompleteToast(true);
        // setTimeout(() => {
        //   setShowCacheCompleteToast(false);
        // }, 5000);
      },
      onUpdate: (registration) => {
        // console.warn("!!!!!!!!!!!!!!!ON UPDATE");
        // setShowUpdateToast({ waitingRegistration: registration, show: true });
      },
    });

    // serviceWorkerRegistration.unregister();
    // }, [loadPage]);
  }, []);

  // const doSkipWaiting = () => {
  //   if (showUpdateToast.waitingRegistration) {
  //     showUpdateToast.waitingRegistration.waiting.postMessage({
  //       type: "SKIP_WAITING",
  //     });
  //     navigator.serviceWorker.controller.postMessage({
  //       type: "SKIP_WAITING",
  //     });
  //   }
  //   setShowUpdateToast({ waitingRegistration: null, show: false });
  // };

  return (
    <div className="App">
      APP3
      {/* <div className="content">{currentPage}</div>
      <Nav onClick={loadPage} />
      {showCacheCompleteToast ? <CacheToast /> : null}
      {showUpdateToast.show ? <UpdateToast action={doSkipWaiting} /> : null} */}
    </div>
  );
}

export default App;
