import { useState, useEffect } from "react";

export default function Question(props) {
  const [selectedBtn, setSelectedBtn] = useState("");
  const [buttonsValue, setButtonValue] = useState([]);
  const newQuestion = filterText(props.question.question);
  const correctAnswer = filterText(props.question.correct_answer);
  const incorrectAnswers = props.question.incorrect_answers.map((answer) => {
    return filterText(answer);
  });
  const mixedAnswersArr = [];
  let allAnswers = [];
  allAnswers.push(correctAnswer);
  allAnswers.push(...incorrectAnswers);

  function updateBtn(event) {
    setSelectedBtn(event.target.textContent);
  }

  //This replaces the weird html entity syntax with the proper syntax.
  function filterText(text) {
    return text
      .replaceAll("&quot;", '"')
      .replaceAll("&#039;", "'")
      .replaceAll("&eacute;", "é")
      .replaceAll("&amp;", "&")
      .replaceAll("&rsquo;", "`");
  }

  useEffect(() => {
    //Function that randomly splices the allAnswers array into a new random array
    //so that correct answers aren't predictably placed.
    //I put this function in useEffect because the buttons would randomly assign
    //when clicked otherwise.
    function randomButtons() {
      while (allAnswers.length > 0) {
        let randomIndex = Math.floor(Math.random() * allAnswers.length);
        let splicedAnswer = allAnswers.splice(randomIndex, 1);
        mixedAnswersArr.push(...splicedAnswer);
      }
      setButtonValue(mixedAnswersArr);
    }
    randomButtons();
  }, []);

  useEffect(() => {
    function checkifCorrect() {}
  }, [props.endgame]);

  return (
    <div className="question-container">
      <h2>{newQuestion}</h2>
      <div className="button-container">
        <button
          type="button"
          onClick={updateBtn}
          className={buttonsValue[0] === selectedBtn ? "selected-btn" : ""}
        >
          {buttonsValue[0]}
        </button>
        <button
          type="button"
          onClick={updateBtn}
          className={buttonsValue[1] === selectedBtn ? "selected-btn" : ""}
        >
          {buttonsValue[1]}
        </button>
        <button
          type="button"
          onClick={updateBtn}
          className={buttonsValue[2] === selectedBtn ? "selected-btn" : ""}
        >
          {buttonsValue[2]}
        </button>
        <button
          type="button"
          onClick={updateBtn}
          className={buttonsValue[3] === selectedBtn ? "selected-btn" : ""}
        >
          {buttonsValue[3]}
        </button>
      </div>
    </div>
  );
}
