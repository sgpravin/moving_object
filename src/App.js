import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClick = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div className="myApp" style={{ width: "100vw", height: "100vh" }} onClick={handleClick}>
      <div
        style={{
          position: "absolute",
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          left: position.x + "px",
          top: position.y + "px",
          transitionDuration: "3s",
        }}
      />
    </div>
  );
};

export default App;
