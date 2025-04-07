import React from "react";
import Button from "./Button";

const Card = (props) => {
  //   console.log(props);
  return (
    <div className="card">
      <img src={props.src} alt={props.name} />
      <p>{props.name}</p>
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
