import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
export default function Nav(props) {
  return (
    <div className="nav">
      <button
        onClick={() => {
          props.onClick("rings");
        }}
      >
        RINGS
      </button>
      <button
        onClick={() => {
          props.onClick("home");
        }}
      >
        home
      </button>
    </div>
  );
}
