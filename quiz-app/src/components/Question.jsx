import React from "react";

export default function Question(props) {
  //This replaces the weird html entity syntax with the proper syntax.
  function filterText(text) {
    return text
      .replaceAll("&quot;", '"')
      .replaceAll("&#039;", "'")
      .replaceAll("&eacute;", "é")
      .replaceAll("&amp;", "&")
      .replaceAll("&rsquo;", "`");
  }

  const newQuestion = filterText(props.question.question);
  const correctAnswer = filterText(props.question.correct_answer);
  const incorrectAnswers = props.question.incorrect_answers.map((answer) => {
    return filterText(answer);
  });

  let allAnswers = [];
  allAnswers.push(correctAnswer);
  allAnswers.push(...incorrectAnswers);

  //Function that randomly splices the allAnswers array into a new random array
  //so that correct answers aren't predictably placed
  let mixedAnswersArr = [];
  function randomButtons() {
    while (allAnswers.length > 0) {
      let randomIndex = Math.floor(Math.random() * allAnswers.length);
      let splicedAnswer = allAnswers.splice(randomIndex, 1);
      mixedAnswersArr.push(...splicedAnswer);
    }
  }
  randomButtons();

  return (
    <div className="question-container">
      <h2>{newQuestion}</h2>
      <div className="button-container">
        <button type="button">{mixedAnswersArr[0]}</button>
        <button type="button">{mixedAnswersArr[1]}</button>
        <button type="button">{mixedAnswersArr[2]}</button>
        <button type="button">{mixedAnswersArr[3]}</button>
      </div>
    </div>
  );
}
