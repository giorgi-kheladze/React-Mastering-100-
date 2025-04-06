import React from "react";

// const fruits = [
//     { name: "apple", price: "12.99$", emoji: "🍎"},
//     { name: "banana", price: "5.99$", emoji: "🍌"},
//     { name: "mango", price: "20.99$", emoji: "🥭"},
//     { name: "srowberry", price: "34.99$", emoji: "🍓"},
// ];

const ArrayOfObject = () => {
  const fruits = [
    { name: "apple", price: "12.99$", emoji: "🍎" },
    { name: "banana", price: "5.99$", emoji: "🍌" },
    { name: "mango", price: "20.99$", emoji: "🥭" },
    { name: "srowberry", price: "34.99$", emoji: "🍓" },
  ];
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

export default ArrayOfObject;
