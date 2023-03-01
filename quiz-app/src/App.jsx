import { useState } from "react";
import blob1 from "./assets/blob1.png";
import blob2 from "./assets/blob2.png";

export default function App() {
  return (
    <div className="app">
      <img src={blob1} alt="blob1" className="blob1" />
      <div className="main-center">
        <h1>Quzzical</h1>
        <p>A short 5 question quiz</p>
        <button>Start quiz</button>
      </div>
      <img src={blob2} alt="blob2" className="blob2" />
    </div>
  );
}
