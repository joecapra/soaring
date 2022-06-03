import React from "react";
import { useParams } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import "./styles.scss";

export default function Ring() {
  let params = useParams();
  return (
    <div className="ring">
      RING={params.name}
      <TransformWrapper>
        <TransformComponent>
          <img
            src={process.env.PUBLIC_URL + "/images/Crystal-Bishop-30-1.jpg"}
            alt="zdfg"
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
