import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import Cards from "./components/Cards";

const App = () => {
  const [score, setScore] = useState(0);

  const [hiScore, setHiScore] = useState(0);

  const [cards, setCards] = useState([
    { id: uniqid(), name: "club_2" },
    { id: uniqid(), name: "club_3" },
    { id: uniqid(), name: "club_4" },
    { id: uniqid(), name: "club_5" },
    { id: uniqid(), name: "club_6" },
    { id: uniqid(), name: "diamond_2" },
    { id: uniqid(), name: "diamond_3" },
    { id: uniqid(), name: "diamond_4" },
    { id: uniqid(), name: "diamond_5" },
    { id: uniqid(), name: "diamond_6" },
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
      alert("GAME OVER :(");
      resetScore();
      shuffleCards();
      resetSelectedCards();
    } else {
      setSelectedCards(selectedCards.concat(newObj));
      addScore();
      shuffleCards();
      checkWin();
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

  const checkWin = () => {
    if (score === cards.length - 1) {
      alert("YOU WIN! :D");
    }
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
