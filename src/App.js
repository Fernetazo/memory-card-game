import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import Cards from "./components/Cards";

import club_2 from "./cardsImages/club_2.png";
import club_3 from "./cardsImages/club_3.png";
import club_4 from "./cardsImages/club_4.png";
import club_5 from "./cardsImages/club_5.png";
import club_6 from "./cardsImages/club_6.png";
import club_7 from "./cardsImages/club_7.png";
import club_8 from "./cardsImages/club_8.png";
import club_9 from "./cardsImages/club_9.png";
import club_10 from "./cardsImages/club_10.png";
import club_J from "./cardsImages/club_J.png";
import club_Q from "./cardsImages/club_Q.png";
import club_K from "./cardsImages/club_K.png";
import club_A from "./cardsImages/club_A.png";
import diamond_2 from "./cardsImages/diamond_2.png";
import diamond_3 from "./cardsImages/diamond_3.png";
import diamond_4 from "./cardsImages/diamond_4.png";
import diamond_5 from "./cardsImages/diamond_5.png";
import diamond_6 from "./cardsImages/diamond_6.png";
import diamond_7 from "./cardsImages/diamond_7.png";
import diamond_8 from "./cardsImages/diamond_8.png";
import diamond_9 from "./cardsImages/diamond_9.png";
import diamond_10 from "./cardsImages/diamond_10.png";
import diamond_J from "./cardsImages/diamond_J.png";
import diamond_Q from "./cardsImages/diamond_Q.png";
import diamond_K from "./cardsImages/diamond_K.png";
import diamond_A from "./cardsImages/diamond_A.png";

const App = () => {
  const [score, setScore] = useState(0);

  const [hiScore, setHiScore] = useState(0);

  const [cards, setCards] = useState([
    { id: uniqid(), name: club_2 },
    { id: uniqid(), name: club_3 },
    { id: uniqid(), name: club_4 },
    { id: uniqid(), name: club_5 },
    { id: uniqid(), name: club_6 },
    { id: uniqid(), name: club_7 },
    { id: uniqid(), name: club_8 },
    { id: uniqid(), name: club_9 },
    { id: uniqid(), name: club_10 },
    { id: uniqid(), name: club_J },
    { id: uniqid(), name: club_Q },
    { id: uniqid(), name: club_K },
    { id: uniqid(), name: club_A },
    { id: uniqid(), name: diamond_2 },
    { id: uniqid(), name: diamond_3 },
    { id: uniqid(), name: diamond_4 },
    { id: uniqid(), name: diamond_5 },
    { id: uniqid(), name: diamond_6 },
    { id: uniqid(), name: diamond_7 },
    { id: uniqid(), name: diamond_8 },
    { id: uniqid(), name: diamond_9 },
    { id: uniqid(), name: diamond_10 },
    { id: uniqid(), name: diamond_J },
    { id: uniqid(), name: diamond_Q },
    { id: uniqid(), name: diamond_K },
    { id: uniqid(), name: diamond_A },
  ]);

  const [selectedCards, setSelectedCards] = useState([]);

  const [isShuffled, setIsShuffled] = useState(false);

  const addScore = () => {
    setScore(score + 1);
    checkForHiScore();
  };

  const checkForHiScore = () => {
    if (score > hiScore) {
      setHiScore(score);
    }
  };

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

  useEffect(() => {
    console.log("Once");
    if (!isShuffled) {
      setIsShuffled(true);
      shuffleCards();
    }
  }, []); //Watchout! In strict mode, it will render twice

  useEffect(() => {
    checkForHiScore();
  }, [score]);

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
