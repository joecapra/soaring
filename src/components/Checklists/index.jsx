import React, { useContext } from "react";
import "./styles.scss";
import { StoreContext } from "../StoreContext";

export default function Checklists(props) {
  const store = useContext(StoreContext);
  const checklists = store.checklists;

  const clearAllChecklists = () => {
    const currentLists = [...store.checklists];
    const clearedLists = currentLists.map((item) => {
      item.complete = false;
      item.items.map((i) => {
        i.complete = false;
        return i;
      });
      return item;
    });
    store.setChecklists(clearedLists);
  };

  return (
    <div className="checklists">
      {checklists.map((list) => {
        return (
          <div
            key={list.name}
            onClick={() => {
              props.onClick("list", list.name);
            }}
            className={`checklists__btn ${
              list.complete ? "checklists__btn--complete" : ""
            }`}
          >
            {list.name}
          </div>
        );
      })}
      <div className="checklists__resetbtn" onClick={clearAllChecklists}>
        CLEAR ALL
      </div>
    </div>
  );
}
