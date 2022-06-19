import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StoreProvider } from "./components/StoreContext";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));
let waitingRegistration = null;

// const debug = true;
const debug = false;
const appVersion = "1.0.5";

const handleSkipWaiting = () => {
  console.warn("DO CUSTOM SKIP WAITING----");
  if (waitingRegistration) {
    waitingRegistration.waiting.postMessage({
      type: "SKIP_WAITING",
    });
  }
  waitingRegistration = null;
  const el = document.getElementById("updatetoast");
  el.classList.remove("updatetoast--visible");
};

const handleCacheComplete = () => {
  console.warn("handleCacheComplete");
  const el = document.getElementById("cachetoast");
  el.classList.remove("cachetoast--visible");
};

root.render(
  // <React.StrictMode>
  <StoreProvider>
    <App
      skipWaitingHandler={handleSkipWaiting}
      closeCacheToastHandler={handleCacheComplete}
      appVersion={appVersion}
    />
  </StoreProvider>
  // </React.StrictMode>
);

if (debug === true) {
  serviceWorkerRegistration.unregister();
} else {
  serviceWorkerRegistration.register({
    onSuccess: () => {
      console.warn("!!!!!!!!!!!!!!!ON SUCCESS133");
      const el = document.getElementById("cachetoast");
      el.classList.add("cachetoast--visible");

      const element = document.getElementById("downloadingtoast");
      element.classList.remove("downloadingtoast--visible");
    },
    onUpdate: (registration) => {
      waitingRegistration = registration;
      const el = document.getElementById("updatetoast");
      el.classList.add("updatetoast--visible");
      console.warn("!!!!!!!!!!!!!!!ON UPDATE 35 OKM");

      const element = document.getElementById("downloadingtoast");
      element.classList.remove("downloadingtoast--visible");
      // setShowUpdateToast({ waitingRegistration: registration, show: true });
    },
    onInstall: (registration) => {
      waitingRegistration = registration;
      const el = document.getElementById("downloadingtoast");
      el.classList.add("downloadingtoast--visible");
      console.warn("!!!!!!!!!!!!!!!ON downloadingtoast");
      // setShowUpdateToast({ waitingRegistration: registration, show: true });
    },
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register({
//   onSuccess: () => {
//     console.warn("!!!!!!!!!!!!!!!ON CACHE SUCCESS IN INDEX CALLED");
//     //cachedForOfflineComplete = true;
//   },
//   onUpdate: () => console.warn("!!!!!!!!!!!!!!!ON UPDATE IN INDEX CALLED"),
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// llllll or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
