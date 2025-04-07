import ArrayOfObject from "./components/ArrayOfObject";
import Props from "./components/Props";
import PropsArray from "./components/PropsArray";
import PropsArrayOfObjects from "./components/PropsArrayOfObjects";
import PropsDestructuring from "./components/PropsDestructuring";
import PropsObject from "./components/PropsObject";
import PropChildren from "./extra/PropChildren";
import Parent from "./propdrilling/Parent";

export default function App() {
  const numbers = [1, 2, 3, 4];
  const names = ["giorgi", "vika", "levan"];

  const person = {
    name: "giorgi",
    age: 19,
    message: "hello there",
    numbers: [1, 2, 3, 4],
    names: ["giorgi", "vika", "levan"],
  };

  const fruits = [
    { name: "apple", price: "12.99$", emoji: "🍎" },
    { name: "banana", price: "5.99$", emoji: "🍌" },
    { name: "mango", price: "20.99$", emoji: "🥭" },
    { name: "srowberry", price: "34.99$", emoji: "🍓" },
  ];

  const message = "hello giorgi";
  return (
    <div className="app">
      {/* <Props name="giorgi" age={19} message="Hi there" />
    //   <Props name="levan" age={19} message="Hi there" /> */}
      {/* destructuring props */}
      {/* <PropsDestructuring name="name" age={0} message="New message" />
    //   <PropsDestructuring /> */}
      {/* <PropsArray numbers={numbers} names={names} /> */}
      {/* <PropsObject person={person} /> */}
      {/* <ArrayOfObject /> */}
      {/* <PropsArrayOfObjects fruits={fruits} /> */}

      {/* <PropChildren>
        <h1>This is prop child main text</h1>
        <p>This is simple paragraph text</p>
      </PropChildren>
      <PropChildren>
        <h2>This is another prop child text</h2>
      </PropChildren> */}

      <Parent message={message} />
    </div>
  );
}
