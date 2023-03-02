import React from "react";
import { nanoid } from "nanoid";
export default function Game(props) {
  function filterText(text) {
    return text
      .replaceAll("&quot;", '"')
      .replaceAll("&#039;", "'")
      .replaceAll("&eacute;", "é")
      .replaceAll("&amp;", "&");
  }

  const questionList = props.questions.map((question) => {
    //This replaces the weird syntax with the proper quotes.
    let newQuestion = filterText(question.question);
    let correctAnswer = filterText(question.correct_answer);

    return (
      <div key={nanoid()} className="question-container">
        <h2>{newQuestion}</h2>
        <div className="button-container"></div>
      </div>
    );
  });

  return (
    <div className="game">
      {questionList}
      {/* <div className="question-container">
        <h2>How would one say goodbye in Spanish!</h2>
        <div className="button-container">
          <button>Adios</button>
          <button>Hola</button>
          <button>Cabbage Patch Kids</button>
          <button>Salir</button>
        </div>
      </div> */}
      <button className="check-answer-btn">Check answers</button>
    </div>
  );
}
