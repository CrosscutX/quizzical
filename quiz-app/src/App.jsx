import { useState, useEffect } from "react";
import blob1 from "./assets/blob1.png";
import blob2 from "./assets/blob2.png";
import Game from "./components/Game";

export default function App() {
  const [gameStart, setGameStart] = useState(false);
  const [questions, setQuestions] = useState([]);

  function startGame() {
    setGameStart(true);
  }

  useEffect(() => {
    async function getQuestions() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&type=multiple"
      );
      const data = await res.json();
      console.log(data.results);
      setQuestions(data.results);
    }
    getQuestions();
  }, [gameStart]);

  return (
    <div className="app">
      <img src={blob1} alt="blob1" className="blob1" />
      {gameStart === false ? (
        <div className="main-center">
          <h1>Quzzical</h1>
          <p>A short 5 question quiz</p>
          <button onClick={startGame}>Start quiz</button>
        </div>
      ) : (
        <Game questions={null} answer={null} correctAnswers={null} />
      )}
      <img src={blob2} alt="blob2" className="blob2" />
    </div>
  );
}
