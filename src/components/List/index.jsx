import React, { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { StoreContext } from "../StoreContext";
import "./styles.scss";

export default function List(props) {
  const [list, setList] = useState(props.listData);

  const store = useContext(StoreContext);

  useEffect(() => {
    console.warn("LIST USEFFECT=", list);
    console.warn("STORELIST=", store.checklists);

    checkIfListCompleted();
    let updatedList = [...store.checklists];
    if (updatedList.length > 0) {
      updatedList.map((item) => {
        if (item.name === list.name) {
          item.items = list.items;
        }
        return item;
      });
      store.setChecklists(updatedList);
    } else {
      updatedList.push(list);
    }

    store.setChecklists(updatedList);
    // console.warn("UPDATED STORE CHECKLISTS=", store.checklists);
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
    const mapped = updatedList.items.map((item) => {
      return item.id === Number(id)
        ? { ...item, complete: !item.complete }
        : { ...item };
    });
    updatedList.items = mapped;
    setList(updatedList);
  };

  const reset = () => {
    const updatedList = { ...list };
    const mapped = updatedList.items.map((item) => {
      return { ...item, complete: false };
    });
    updatedList.items = mapped;
    setList(updatedList);
  };

  return (
    <div className="list" key={uuidv4()}>
      {list.items.map((item, idx) => {
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
              {item.id}
            </div>

            <div className="list__divider"></div>
            {idx === list.length - 1 ? (
              <div className="list__resetbtn" onClick={reset}>
                RESET
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}
