import React, { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { StoreContext } from "../StoreContext";
import "./styles.scss";

export default function List(props) {
  const store = useContext(StoreContext);

  const listName = props.listName;
  const foundList = store.checklists.find((list) => list.name === listName);
  const [list, setList] = useState(foundList);

  // Whenever the current list changes (items selected) store it back in the store
  // - Clone current store checklists arr
  // - Map through it to find the checklist that matches the name of the current one
  // - When it finds it, then update the object to the list thats in state
  useEffect(() => {
    const currentStore = [...store.checklists];

    const newStore = currentStore.map((item) => {
      if (item.name === listName) {
        item = list;
        const checked = item.items.filter((task) => task.complete === true);
        if (checked.length === item.items.length) {
          console.error("LIST COMPLETE");
          item.complete = true;
        }
      }
      return item;
    });
    console.warn("STORED TO STORE=", newStore);
    store.setChecklists(newStore);
  }, [list]);

  const checkIfListCompleted = () => {
    const checked = list.items.filter((item) => item.complete === true);
    if (checked.length === list.items.length) {
      console.error("LIST COMPLETE");
    }
  };
  // Toggle checkbox
  const toggleCheck = (id) => {
    const updatedList = { ...list };
    const mappedItems = updatedList.items.map((item) => {
      return item.id === Number(id)
        ? { ...item, complete: !item.complete }
        : { ...item };
    });
    updatedList.items = mappedItems;
    setList(updatedList);
    // store.setChecklists(updatedList);
  };

  const reset = () => {
    const updatedList = { ...list };
    const mapped = updatedList.items.map((item) => {
      return { ...item, complete: false };
    });
    updatedList.items = mapped;
    updatedList.complete = false;
    setList(updatedList);
  };

  return (
    <div className="list" key={uuidv4()}>
      {list.items.map((item, idx) => {
        item.id = idx;
        return (
          <div className="list__itemwrapper" key={uuidv4()}>
            <div
              className={`list__item list__item${
                item.complete === true ? "--disabled" : "--enabled"
              }`}
              onClick={() => {
                toggleCheck(item.id);
              }}
            >
              <div
                className={`list__checkbox ${
                  item.complete === true
                    ? "list__checkbox--checked list__checkbox--disabled"
                    : ""
                }`}
              />
              {item.task}
            </div>
          </div>
        );
      })}
      <div className="list__btnwrapper">
        <div
          className="list__btn"
          onClick={() => {
            props.onClick("checklists");
          }}
        >
          BACK
        </div>
        <div className="list__btn list__btn-clear" onClick={reset}>
          CLEAR CHECKLIST
        </div>
      </div>
    </div>
  );
}
