import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Question from "./Question";

export default function Game(props) {
  const [checkAnswers, setCheckAnswers] = useState(false);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
  function toggleAnswers() {
    setCheckAnswers(true);
  }

  function addToTotal() {
    setTotalCorrectAnswers((prev) => ++prev);
  }

  console.log(totalCorrectAnswers);

  return (
    <div className="game">
      <Question
        question={props.questions[0]}
        endgame={checkAnswers}
        correct={addToTotal}
      />
      <Question
        question={props.questions[1]}
        endgame={checkAnswers}
        correct={addToTotal}
      />
      <Question
        question={props.questions[2]}
        endgame={checkAnswers}
        correct={addToTotal}
      />
      <Question
        question={props.questions[3]}
        endgame={checkAnswers}
        correct={addToTotal}
      />
      <Question
        question={props.questions[4]}
        endgame={checkAnswers}
        correct={addToTotal}
      />
      {checkAnswers === false ? (
        <button className="check-answer-btn" onClick={toggleAnswers}>
          Check answers
        </button>
      ) : (
        <div className="play-again-container">
          <span>{`You scored ${totalCorrectAnswers}/5 correct answers`}</span>
          <button
            className="play-again-btn"
            onClick={() => window.location.reload(false)}
          >
            Play again
          </button>
        </div>
      )}
    </div>
  );
}
