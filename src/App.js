import React, { useState } from "react";
import Header from "./components/Header.js";
import UserDisplay from "./components/UserDisplay.js";
import Forward from "./components/Forward.js";
import Back from "./components/Back.js";

import "./index.css";

function App(props) {
  const [userInd, setUserInd] = useState(0);
  return (
    <div>
      <Header />
      <UserDisplay userInd={userInd} />
      <nav>
        <Back setUserInd={setUserInd} userInd={userInd} />
        <Forward setUserInd={setUserInd} userInd={userInd} />
      </nav>
    </div>
  );
}

export default App;
