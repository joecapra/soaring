import React, { Children } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import "./styles.scss";

export default function ImagePanner(props) {
  return (
    <TransformWrapper initialScale={1} centerOnInit={true}>
      <TransformComponent wrapperClass="ring__wrapper">
        {props.children}
      </TransformComponent>
    </TransformWrapper>
  );
}
