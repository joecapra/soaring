import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import axios from "axios";

export default function RangeRings(props) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const dataUrl = process.env.PUBLIC_URL + "/static/jsondata/rings.json";
    axios.get(dataUrl).then((res) => {
      setLocations(res.data);
    });
  }, []);

  return (
    <div className="rangerings">
      {locations.map((location) => {
        return (
          <button
            onClick={() => {
              props.onClick("ring", location);
            }}
            className="rangerings__link"
          >
            {location.name}
          </button>
        );
      })}
    </div>
  );
}
