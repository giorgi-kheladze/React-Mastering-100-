import React from "react";
import react from "../assets/react.svg";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={react} alt="react image" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <Button
        text="Click me"
        message="You clicked nav button"
        color="white"
        background="black"
      />
    </div>
  );
};

export default Navbar;
