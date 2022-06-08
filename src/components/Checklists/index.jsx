import React, { useEffect, useState } from "react";
import "./styles.scss";
import axios from "axios";

export default function Checklists(props) {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const dataUrl = process.env.PUBLIC_URL + "/static/jsondata/checklists.json";
    axios.get(dataUrl).then((res) => {
      setLists(res.data);
    });
  }, []);

  return (
    <div className="checklists">
      {lists.map((list) => {
        return (
          <div
            key={list.name}
            onClick={() => {
              props.onClick("list", list);
            }}
            className="checklists__btn"
          >
            {list.name}
          </div>
        );
      })}
    </div>
  );
}
