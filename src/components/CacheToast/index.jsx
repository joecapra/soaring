import React from "react";
import "./styles.scss";

export default function CacheToast(props) {
  return (
    <div className={`cachetoast ${props.show ? "cachetoast--show" : ""}`}>
      All files downloaded for offline use!
    </div>
  );
}
