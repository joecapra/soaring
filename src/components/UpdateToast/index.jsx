import React from "react";
import "./styles.scss";

export default function UpdateToast(props) {
  return (
    <div className={`updatetoast ${props.show ? "updatetoast--show" : ""}`}>
      A new app version is available!
      <div className="updatetoast__btn" onClick={props.action}>
        UPDATE
      </div>
    </div>
  );
}
