import React, { useEffect, useState } from "react";
import "./styles.scss";
import axios from "axios";

export default function RangeRingsNav(props) {
  const [route, setRoute] = useState([]);

  useEffect(() => {
    const jsonUrl = process.env.PUBLIC_URL + "/static/jsondata/rings.json";
    axios.get(jsonUrl).then((res) => {
      setRoute(res.data);
    });
  }, []);

  return (
    <div className="rangerings">
      {route.map((item) => {
        return (
          <button
            key={item.name}
            onClick={() => {
              props.onClick("rings", item);
            }}
            className="rangerings__link"
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
}
