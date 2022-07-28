import React from "react";
import data from "./data/data";

function Back(props) {
  const { setUserInd, userInd } = props;
  function backClick() {
    if (userInd > 0) {
      setUserInd(userInd - 1);
    } else {
      setUserInd(data.length - 1);
    }
  }
  return (
    <button className="flex-start" onClick={backClick}>
      {"< Previous"}
    </button>
  );
}

export default Back;
