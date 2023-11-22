import React from "react";
import "../Banner/banner.css";

function Card(props) {
  return (
    <div className="card">
      <h2 className="city">{props.heading}</h2>
      <img className="city-image" src={props.image}></img>
      <p className="temperature">Temeperature {props.temperature}</p>
      <p className="humidity">Humidity :{props.humidity}</p>
    </div>
  );
}

export default Card;
