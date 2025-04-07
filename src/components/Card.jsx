import React from "react";
import Button from "./Button";

const Card = (props) => {
  //   console.log(props);
  return (
    <div className="card">
      <img src={props.src} alt={props.name} />
      <h2>{props.name}</h2>
      <p>
        {props.describtion} {props.emoji}
      </p>

      <Button
        text="Buy"
        message={`You Buy ${props.emoji}`}
        color="white"
        background="black"
      />
    </div>
  );
};

export default Card;
