import React from "react";

const PropsObject = ({ person }) => {
  //   const person = props.person;
  return (
    <div>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <p>{person.message}</p> <br />
      <div>
        {person.names.map((name) => (
          <h2 key={name}>{name}</h2>
        ))}
      </div>{" "}
      <br />
      <div>
        <ul>
          {person.numbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropsObject;
