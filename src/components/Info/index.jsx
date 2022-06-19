import React from "react";
import "./styles.scss";

export default function Info() {
  return (
    <div className="info">
      <div className="info__header">RANGE</div>
      <div className="info__container">
        <div className="info__sectionheader">
          <b>Distance per 1000' altitude loss</b>
        </div>
        <ul>
          <li>
            <b>30:1 | 5nm</b>
          </li>
          <li>25:1 | 4nm</li>
          <li>35:1 | 5.8nm</li>
          <li>40:1 | 6.6nm</li>
        </ul>
      </div>
      <div className="info__container">
        <div className="info__sectionheader">
          <b>Altitude loss per 1nm</b>
        </div>

        <ul>
          <li>
            <b>
              30:1 | 300' <span className="info__dimfirst">(3000'/10nm)</span>
            </b>
          </li>
          <li>
            20:1 | 400' <span className="info__dim">(4000'/10nm)</span>
          </li>
          <li>
            40:1 | 200' <span className="info__dim">(2000'/10nm)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
