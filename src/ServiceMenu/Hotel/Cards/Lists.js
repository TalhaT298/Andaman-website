import { lazy } from 'react';
import React from "react";
import Cards from "./Cards";
import "./styles.css";

function Lists({ list }) {
  return (
    <div className="cards-flex">
      {list.map((card, i) => (
        <Cards card={card} key={i} />
      ))}
    </div>
  );
}

export default Lists;
