import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "./styles.scss";

export default function Ring() {
  // State
  const [ringImage, setRingImage] = useState(30);

  // Get ring data object thats passed in from Link state
  const location = useLocation();
  const ringData = location.state;

  // Get ring image to display
  const getImage = (ratio) => {
    setRingImage(ringData.images[ratio]);
  };

  // Display initial 30:1 image
  useEffect(() => {
    setRingImage(ringData.images["30"]);
  }, [ringData.images]);

  // Generate ratio buttons
  const getButtons = () => {
    const btns = Object.keys(ringData.images).reverse();
    return btns.map((ratio) => {
      return (
        <button
          onClick={() => {
            getImage(ratio);
          }}
        >
          {`${ratio}:1`}
        </button>
      );
    });
  };

  return (
    <div className="ring">
      LOCATION={ringData.name}
      {getButtons()}
      <TransformWrapper initialScale={1}>
        <TransformComponent wrapperClass="ring__wrapper">
          <img src={process.env.PUBLIC_URL + ringImage} alt="zdfg" />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
