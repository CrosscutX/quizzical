import React from "react";

export default function Game(props) {
  console.log(props.questions[0].question);

  const questionList = props.questions.map((question) => {
    //This replaces the weird syntax with the proper quotes.
    let newString = question.question
      .replaceAll("&quot;", '"')
      .replaceAll("&#039;", "'")
      .replaceAll("&eacute;", "é");
    return <h2>{newString}</h2>;
  });
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
      {questionList}
    </div>
  );
}
