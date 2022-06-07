import React from "react";
import "./styles.scss";

export default function UpdateToast(props) {
  return (
    <div className={`updatetoast ${props.show ? "updatetoast--show" : ""}`}>
      UPDATE AVAILABLE <button onClick={props.action}>UPDATE ME</button>
    </div>
  );
}
