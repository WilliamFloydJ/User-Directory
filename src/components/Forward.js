import React from "react";
import data from "./data/data";

function Forward(props) {
  const { setUserInd, userInd } = props;
  function forwardClick() {
    if (userInd < data.length - 1) {
      setUserInd(userInd + 1);
    } else {
      setUserInd(0);
    }
  }
  return (
    <button className="flex-end" onClick={forwardClick}>
      {"Next >"}
    </button>
  );
}

export default Forward;
