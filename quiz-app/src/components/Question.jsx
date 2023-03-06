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
  //Handles the buttons classes based on a bunch of different criteria
  function manageButtonClass(btnVal) {
    if (!props.endgame) {
      if (btnVal === selectedBtn) {
        return "selected-btn";
      }
    }

    if (props.endgame) {
      if (btnVal === correctAnswer) {
        return "correct-btn";
      }
      if (selectedBtn === btnVal && btnVal !== correctAnswer) {
        return "wrong-btn";
      }
      if (selectedBtn !== btnVal && btnVal !== correctAnswer) {
        return "neutral-btn";
      }
    }
    return "";
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
    //Adds 1 to the Game.jsx totalCorrectAnswers state
    function checkifCorrect() {
      if (selectedBtn === correctAnswer) {
        props.correct();
      }
    }
    checkifCorrect();
  }, [props.endgame]);

  return (
    <div className="question-container">
      <h2>{newQuestion}</h2>
      <div className="button-container">
        <button
          type="button"
          onClick={updateBtn}
          className={manageButtonClass(buttonsValue[0])}
        >
          {buttonsValue[0]}
        </button>
        <button
          type="button"
          onClick={updateBtn}
          className={manageButtonClass(buttonsValue[1])}
        >
          {buttonsValue[1]}
        </button>
        <button
          type="button"
          onClick={updateBtn}
          className={manageButtonClass(buttonsValue[2])}
        >
          {buttonsValue[2]}
        </button>
        <button
          type="button"
          onClick={updateBtn}
          className={manageButtonClass(buttonsValue[3])}
        >
          {buttonsValue[3]}
        </button>
      </div>
    </div>
  );
}
