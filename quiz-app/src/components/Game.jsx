import React from "react";
import { nanoid } from "nanoid";
export default function Game(props) {
  function filterText(text) {
    return text
      .replaceAll("&quot;", '"')
      .replaceAll("&#039;", "'")
      .replaceAll("&eacute;", "é")
      .replaceAll("&amp;", "&")
      .replaceAll("&rsquo;", "`");
  }

  const questionList = props.questions.map((question) => {
    //This replaces the weird syntax with the proper quotes.
    const newQuestion = filterText(question.question);
    const correctAnswer = filterText(question.correct_answer);
    const incorrectAnswers = question.incorrect_answers.map((answer) => {
      return filterText(answer);
    });
    let allAnswers = [];
    allAnswers.push(correctAnswer);
    allAnswers.push(...incorrectAnswers);

    let mixedAnswersArr = [];
    function randomButtons() {
      while (allAnswers.length > 0) {
        let randomIndex = Math.floor(Math.random() * allAnswers.length);
        let splicedAnswer = allAnswers.splice(randomIndex, 1);
        mixedAnswersArr.push(...splicedAnswer);
      }
      console.log(mixedAnswersArr);
    }
    randomButtons();

    return (
      <div key={nanoid()} className={"question-container"}>
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
