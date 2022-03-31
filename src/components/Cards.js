import React from "react";

const Cards = (props) => {
  const { cards, shuffleCards } = props;
  return (
    <div>
      {cards.map((e, index) => {
        return (
          <button onClick={shuffleCards} key={e.id}>
            {e.name}
          </button>
        );
      })}
    </div>
  );
};

export default Cards;
