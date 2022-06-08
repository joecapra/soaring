import React from "react";
import "./styles.scss";

export default function RangeRings(props) {
  const routeData = props.payload;
  const ringData = routeData.rings;

  const getRangeRings = (type) => {
    return ringData.map((item) => {
      if (item.type === type) {
        return (
          <div
            className="rangerings__btn"
            key={item.name}
            onClick={() => {
              props.onClick("ring", {
                routeData: routeData,
                ringData: item,
              });
            }}
          >
            {item.name}
          </div>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div className="rangerings">
      <div className="rangerings__header">ROUTE</div>
      {getRangeRings("route")}
      <div className="rangerings__divider" />
      <div className="rangerings__header">LEGS</div>
      {getRangeRings("leg")}
      <div className="rangerings__divider" />
      <div className="rangerings__header">LANDOUTS</div>
      {getRangeRings("landout")}
    </div>
  );
}
