import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter Page</h1>

      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)} style={{ marginRight: "10px" }}>
        +
      </button>

      <button onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
}
