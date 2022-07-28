import React from "react";
import data from "./data/data";

function ArrayLocator(props) {
  return (
    <h1 className="arrayH1">
      {props.userData.id}/{data.length}
    </h1>
  );
}
export default ArrayLocator;
