import React from "react";
import { useParams } from "react-router-dom";
import "./styles.scss";

export default function Ring() {
  let params = useParams();
  return (
    <div className="ring">
      RING={params.name}
      <img
        src={process.env.PUBLIC_URL + "/images/Crystal-Bishop-30-1.jpg"}
        alt="zdfg"
      />
    </div>
  );
}
