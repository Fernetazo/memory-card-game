import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import Cards from "./components/Cards";

const App = () => {
  const [score, setScore] = useState(0);

  const [hiScore, setHiScore] = useState(null);

  const [cards, setCards] = useState([
    { id: uniqid(), name: "a" },
    { id: uniqid(), name: "b" },
    { id: uniqid(), name: "c" },
    { id: uniqid(), name: "d" },
    { id: uniqid(), name: "e" },
  ]);

  const [selectedCards, setSelectedCards] = useState([]);

  const addScore = () => {};

  const checkForHiScore = () => {
    if (score > hiScore) {
      setHiScore(score);
    }
  };

  const shuffleCards = () => {
    console.log("lol");
  };

  const resetScore = () => {};

  return (
    <div>
      <div className="board">
        <div>SCORE: {score}</div>
        <div>HI-SCORE: {hiScore}</div>
      </div>
      <div className="cards">
        <Cards cards={cards} shuffleCards={shuffleCards}></Cards>
      </div>
    </div>
  );
};

export default App;
