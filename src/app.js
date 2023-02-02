import React, { useState } from "react";

const App = ({ initialValue = 1 }) => {
  const [count, setCount] = useState(initialValue);

  return (
    <>
      <div className="App">
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <div>{count}</div>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </>
  );
};

export default App;
