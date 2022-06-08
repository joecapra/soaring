import React, { useContext, useState } from "react";
import "./styles.scss";
import { StoreContext } from "../StoreContext";

export default function Checklists(props) {
  const [lists, setLists] = useState([]);
  const store = useContext(StoreContext);
  const checklists = store.checklists;

  return (
    <div className="checklists">
      {checklists.map((list) => {
        return (
          <div
            key={list.name}
            onClick={() => {
              props.onClick("list", list.name);
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
