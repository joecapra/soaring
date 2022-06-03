import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export default function RangeRings() {
  return (
    <div className="rangerings">
      <Link to="/ring/bishop">BISHOP</Link> |{" "}
      <Link to="/ring/cinder">CINDER</Link>
    </div>
  );
}
