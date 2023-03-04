import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Question from "./Question";

export default function Game(props) {
  return (
    <div className="game">
      <Question question={props.questions[0]} />
      <Question question={props.questions[1]} />
      <Question question={props.questions[2]} />
      <Question question={props.questions[3]} />
      <Question question={props.questions[4]} />
      <button className="check-answer-btn">Check answers</button>
    </div>
  );
}
