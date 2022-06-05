import React, { useState, useEffect } from "react";
import "./styles.scss";

export default function List(props) {
  const [list, setList] = useState(props.listData.items);

  // Toggle checkbox
  const toggleCheck = (id) => {
    const mapped = list.map((item) => {
      return item.id === Number(id)
        ? { ...item, complete: !item.complete }
        : { ...item };
    });
    setList(mapped);
  };

  const reset = () => {
    const mapped = list.map((item) => {
      return { ...item, complete: false };
    });
    setList(mapped);
  };

  return (
    <div className="list">
      {list.map((item, idx) => {
        return (
          <>
            <div
              key={item.id}
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
            <div className="list__divider"></div>
            {idx === list.length - 1 ? (
              <div className="list__resetbtn" onClick={reset}>
                RESET
              </div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
}
