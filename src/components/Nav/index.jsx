import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
export default function Nav(props) {
  const basepath = process.env.PUBLIC_URL + "/static/images/icons/";

  return (
    <div className="nav">
      <div
        className="nav__btn"
        onClick={() => {
          props.onClick("ringsnav");
        }}
      >
        <img src={basepath + "rings.svg"} alt="" className="nav__btn-icon" />
      </div>
      <div className="nav__divider" />
      <div
        className="nav__btn"
        onClick={() => {
          props.onClick("speeds");
        }}
      >
        <img src={basepath + "speeds.svg"} alt="" className="nav__btn-icon" />
      </div>
      <div className="nav__divider" />
      <div
        className="nav__btn"
        onClick={() => {
          props.onClick("checklists");
        }}
      >
        <img
          src={basepath + "checklist.svg"}
          alt=""
          className="nav__btn-icon"
        />
      </div>
      <div className="nav__divider" />
      <div
        className="nav__btn"
        onClick={() => {
          props.onClick("home");
        }}
      >
        <img src={basepath + "home.svg"} alt="" className="nav__btn-icon" />
      </div>
    </div>
  );
}
