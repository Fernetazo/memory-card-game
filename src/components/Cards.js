import React from "react";

const Cards = (props) => {
  const { cards, checkSelection } = props;
  return (
    <div>
      {cards.map((e, index) => {
        return (
          <button onClick={checkSelection} id={e.id} key={e.id} name={e.name}>
            <img
              style={{ pointerEvents: "none" }} //Prevents img events thus, not firing checkSelection
              src={"/cardsImages/" + e.name + ".png"}
              alt={e.name}
            ></img>
          </button>
        );
      })}
    </div>
  );
};

export default Cards;
