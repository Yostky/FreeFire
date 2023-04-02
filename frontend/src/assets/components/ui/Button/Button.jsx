import React from "react";
import "./Button.css";

const Button = ({
  danger,
  dangerEmpty,
  grey,
  text,
  small,
  medium,
  large,
  onClick,
}) => {
  const buttonClass = () => {
    let className = "button";
    if (danger) className += " danger";
    if (dangerEmpty) className += " dangerEmpty";
    if (grey) className += " grey";
    if (small) className += " small";
    if (medium) className += " medium";
    if (large) className += " large";
    return className;
  };

  return (
    <button className={buttonClass()} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
