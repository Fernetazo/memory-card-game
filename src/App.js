import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import Cards from "./components/Cards";

const App = () => {
  const [score, setScore] = useState(0);

  const [hiScore, setHiScore] = useState(0);

  const [cards, setCards] = useState([
    { id: uniqid(), name: "a" },
    { id: uniqid(), name: "b" },
    { id: uniqid(), name: "c" },
    { id: uniqid(), name: "d" },
    { id: uniqid(), name: "e" },
  ]);

  const [selectedCards, setSelectedCards] = useState([]);

  const addScore = () => {
    setScore(score + 1);
    checkForHiScore();
  };

  const checkForHiScore = () => {
    if (score > hiScore) {
      setHiScore(score);
    }
  };

  useEffect(() => {
    checkForHiScore();
  }, [score]);

  const checkSelection = (e) => {
    let id = e.target.id;
    let name = e.target.name;
    let newObj = { id: id, name: name };
    let hasIt = selectedCards.some((element) => element.id === id);

    if (hasIt) {
      console.log("GAME OVER");
      resetScore();
      shuffleCards();
      resetSelectedCards();
    } else {
      setSelectedCards(selectedCards.concat(newObj));
      addScore();
      shuffleCards();
    }
  };

  const shuffleCards = () => {
    let copyCards = cards;

    for (let i = copyCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copyCards[i], copyCards[j]] = [copyCards[j], copyCards[i]];
    }

    setCards(copyCards);
  };

  const resetScore = () => {
    setScore(0);
  };

  const resetSelectedCards = () => {
    setSelectedCards([]);
  };

  return (
    <div>
      <div className="board">
        <div>SCORE: {score}</div>
        <div>HI-SCORE: {hiScore}</div>
      </div>
      <div className="cards">
        <Cards cards={cards} checkSelection={checkSelection}></Cards>
      </div>
    </div>
  );
};

export default App;
