import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import "./styles.scss";

export default function RangeRingsNav(props) {
  const [route, setRoute] = useState([]);

  useEffect(() => {
    const jsonUrl = process.env.PUBLIC_URL + "/static/jsondata/rings.json";
    axios.get(jsonUrl).then((res) => {
      setRoute(res.data);
    });
  }, []);

  return (
    <div className="rangeringsnav">
      {route.map((item) => {
        return (
          <div
            key={uuidv4()}
            onClick={() => {
              props.onClick("rings", item);
            }}
            className="rangeringsnav__btn"
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}
