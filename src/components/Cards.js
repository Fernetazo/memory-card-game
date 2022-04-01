import React from "react";

const Cards = (props) => {
  const { cards, checkSelection } = props;
  return (
    <div>
      {cards.map((e, index) => {
        return (
          <button onClick={checkSelection} id={e.id} key={e.id} name={e.name}>
            {e.name}
          </button>
        );
      })}
    </div>
  );
};

export default Cards;
