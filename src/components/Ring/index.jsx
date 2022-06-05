import React, { useState, useEffect } from "react";
import ImagePanner from "../ImagePanner";
import "./styles.scss";

export default function Ring(props) {
  // State
  const [ringImage, setRingImage] = useState(30);

  // Data object for ring
  const locationData = props.locationData;

  // Get ring image to display
  const getImage = (ratio) => {
    setRingImage(locationData.images[ratio]);
  };

  // Display initial 30:1 image
  useEffect(() => {
    setRingImage(locationData.images["30"]);
  }, [locationData.images]);

  // Generate ratio buttons
  const getButtons = () => {
    const btns = Object.keys(locationData.images).reverse();
    return btns.map((ratio) => {
      return (
        <button
          className="ring__navbtn"
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
      <ImagePanner>
        <img
          src={process.env.PUBLIC_URL + "/static/images/rings/" + ringImage}
          alt="zdfg"
        />
      </ImagePanner>
      <div className="ring__nav">{getButtons()}</div>
      <div className="ring__label">{locationData.name} | 2000' Safety</div>
    </div>
  );
}
