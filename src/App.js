import React, { useState } from "react";

import "./App.css";

function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [result, setResult] = useState(value1 + value2);
  const bool = true;
  const handleClick = () => {
    setResult(value1 + value2);
  };

  return (
    <>
      <label>Enter First Number</label>
      <input
        type="number"
        value={value1}
        id="Text1"
        onChange={(e) => setValue1(+e.target.value)}
      />
      <label>Enter Second Number</label>
      <input
        type="number"
        value={value2}
        id="Text2"
        onChange={(e) => setValue2(+e.target.value)}
      />
      <div id="txtresult">Result:{result}</div>
      <button name="clickbtn" onClick={handleClick} disabled={!bool}>
        Display Result
      </button>
    </>
  );
}

export default App;
