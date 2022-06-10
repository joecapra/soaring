import React from "react";
import "./styles.scss";

export default function UpdateToast(props) {
  return (
    <div id="updatetoast" className="updatetoast">
      A new app version is available!
      <div className="updatetoast__btn" onClick={props.action}>
        UPDATE
      </div>
    </div>
  );
}
