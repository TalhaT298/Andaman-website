import React from "react";
import Card from "./Cards";
import "./styles.css";
function Lists({ list }) {
  return (
    <div className="cards-flex">
      {list.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  );
}

export default Lists;
