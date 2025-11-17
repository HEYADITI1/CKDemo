import React, { useState, useEffect } from "react";

export default function DigitalWatch() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Digital Watch</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
}
