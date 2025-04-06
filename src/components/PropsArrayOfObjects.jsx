import React from "react";

const PropsArrayOfObjects = (props) => {
  const fruits = props.fruits;
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.name}>
            {fruit.name} {fruit.price} {fruit.emoji}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropsArrayOfObjects;
