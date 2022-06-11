import React from "react";
import "./styles.scss";

export default function CacheToast(props) {
  return (
    <div id="cachetoast" className="cachetoast">
      App has been cached for offline use!
      <div className="cachetoast__btn" onClick={props.action}>
        CLOSE
      </div>
    </div>
  );
}
