import React from "react";
import "./PokemonCard.css";

const PokemonCard = props => (
  <div className="card" key={props.id} onClick={() => props.handleClick(props.id, props.clicked)}>
    <div className="img-container">
      <img id={props.name} alt={props.name} src={props.image} />
    </div>
  </div>
);

export default PokemonCard;
