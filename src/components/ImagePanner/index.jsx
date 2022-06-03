import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import "./styles.scss";

export default function ImagePanner() {
  return (
    <TransformWrapper initialScale={1}>
      <TransformComponent wrapperClass="wrapper">
        <img
          src={process.env.PUBLIC_URL + "/images/Crystal-Bishop-30-1.jpg"}
          alt="zdfg"
        />
      </TransformComponent>
    </TransformWrapper>
  );
}
