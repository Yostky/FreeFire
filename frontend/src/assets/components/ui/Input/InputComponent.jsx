import React, { useState } from "react";
import "./InputComponent.css";
const InputComponent = ({ label, onChangeCallback, initialValue = "" }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChangeCallback(newValue);
  };

  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <div className="input-button-container">
        <input
          type="text"
          className="input-field"
          onChange={handleChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default InputComponent;
