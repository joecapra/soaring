import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import axios from "axios";

export default function RangeRings() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const dataUrl = process.env.PUBLIC_URL + "/data/rings.json";
    axios.get(dataUrl).then((res) => {
      setLocations(res.data);
    });
  }, []);

  return (
    <div className="rangerings">
      {locations.map((location) => {
        return (
          <Link to={`/ring/${location.name}`} state={location}>
            {location.name}
          </Link>
        );
      })}
    </div>
  );
}
