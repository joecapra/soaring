import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ImagePanner from "../ImagePanner";

import "./styles.scss";

export default function Ring(props) {
  // State
  const [ringImage, setRingImage] = useState(30);
  const [activeBtn, setActiveBtn] = useState("30");

  // Data object for ring
  const routeData = props.payload.routeData;
  const ringData = props.payload.ringData;

  // Get ring image to display
  const getImage = (ratio) => {
    setRingImage(ringData.images[ratio]);
    setActiveBtn(ratio);
  };

  useEffect(() => {
    setRingImage(ringData.images["30"]);
  }, [ringData.images]);

  // Generate ratio buttons
  const getButtons = () => {
    const btns = Object.keys(ringData.images).reverse();
    return btns.map((ratio) => {
      return (
        <div
          key={uuidv4()}
          className={`ring__navbtn ${
            activeBtn === ratio ? "ring__navbtn--active" : ""
          }`}
          onClick={() => {
            getImage(ratio);
          }}
        >
          {`${ratio}:1`}
        </div>
      );
    });
  };

  return (
    <div className="ring">
      <ImagePanner>
        <img
          src={process.env.PUBLIC_URL + "/static/images/rings/" + ringImage}
          alt="zdfg"
        />
      </ImagePanner>
      <div className="ring__nav">
        <div
          className="ring__navbtn"
          onClick={() => {
            props.onClick("rings", routeData);
          }}
        >
          BACK
        </div>
        {getButtons()}
      </div>
      <div className="ring__label">
        {ringData.name} | {activeBtn + ":1"} | 2000' Arrival
      </div>
    </div>
  );
}
