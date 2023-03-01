import React from "react";

export default function Game(props) {
  return (
    <div className="game">
      <div className="question-container">
        <h2>How would one say goodbye in Spanish!</h2>
        <div className="button-container">
          <button>Adios</button>
          <button>Hola</button>
          <button>Cabbage Patch Kids</button>
          <button>Salir</button>
        </div>
      </div>
      <button className="check-answer-btn">Check answers</button>
    </div>
  );
}
