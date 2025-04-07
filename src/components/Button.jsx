import React from "react";

const Button = ({ text, message, color, background }) => {
  return (
    <div className="button">
      <button
        onClick={() => alert(message)}
        style={{ backgroundColor: background, color: color }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
