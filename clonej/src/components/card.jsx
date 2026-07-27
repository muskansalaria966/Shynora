import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

function card(props){
  return(
    <div className="card">
      
      <h1>{props.Name}</h1>
      <h2>{props.Age}</h2>
      <h2>{props.Address}</h2>
    </div>
  );
}

export default card;