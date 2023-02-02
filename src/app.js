import React, { useState } from "react";

const App = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  if (typeof window === "undefined") return <>x</>;
  return (
    <>
      <div className="App">
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <div style={{ margin: "20px" }}>{count}</div>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </>
  );
};

export default App;
