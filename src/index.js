import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StoreProvider } from "./components/StoreContext";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));
let waitingRegistration = null;

const handleSkipWaiting = () => {
  console.warn("DO CUSTOM SKIP WAITING");
  if (waitingRegistration) {
    waitingRegistration.waiting.postMessage({
      type: "SKIP_WAITING",
    });
  }
  waitingRegistration = null;
  const el = document.getElementById("updatetoast");
  el.classList.remove("updatetoast--visible");
};

root.render(
  // <React.StrictMode>
  <StoreProvider>
    <App skipWaitingHandler={handleSkipWaiting} />
  </StoreProvider>
  // </React.StrictMode>
);

serviceWorkerRegistration.register({
  onSuccess: () => {
    console.warn("!!!!!!!!!!!!!!!ON SUCCESS133");
    const el = document.getElementById("cachetoast");
    el.classList.add("cachetoast--visible");
    setTimeout(() => {
      el.classList.remove("cachetoast--visible");
    }, 5000);
  },
  onUpdate: (registration) => {
    waitingRegistration = registration;
    const el = document.getElementById("updatetoast");
    el.classList.add("updatetoast--visible");
    console.warn("!!!!!!!!!!!!!!!ON UPDATE 35");
    // setShowUpdateToast({ waitingRegistration: registration, show: true });
  },
});

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
// // serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
