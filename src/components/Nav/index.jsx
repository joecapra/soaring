import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
export default function Nav() {
  return (
    <div className="nav">
      <Link to="/rangerings">RINGS</Link> | <Link to="/">HOME</Link>
    </div>
  );
}
