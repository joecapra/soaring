import React from "react";
import "./styles.scss";

export default function CacheToast(props) {
  return (
    <div id="cachetoast" className="cachetoast">
      All files downloaded for offline use!
      <div className="updatetoast__btn" onClick={props.action}>
        CLOSE
      </div>
    </div>
  );
}
